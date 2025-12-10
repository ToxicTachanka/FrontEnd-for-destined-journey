import { stringify as yamlStringify } from 'yaml';
import { BASE_STAT, getLevelTierName, getTierAttributeBonus } from '../data/base-info';
import { RARITY_MAP } from '../data/constants';
import type { Background, CharacterConfig, DestinedOne, Equipment, Item, Skill } from '../types';

/**
 * 解析货币描述，提取金币、银币、铜币数量
 */
function parseCurrency(description: string): { gold: number; silver: number; copper: number } {
  const result = { gold: 0, silver: 0, copper: 0 };

  // 匹配金币
  const goldMatch = description.match(/(\d+)金币/);
  if (goldMatch) result.gold = parseInt(goldMatch[1]);

  // 匹配银币
  const silverMatch = description.match(/(\d+)银币/);
  if (silverMatch) result.silver = parseInt(silverMatch[1]);

  // 匹配铜币
  const copperMatch = description.match(/(\d+)铜币/);
  if (copperMatch) result.copper = parseInt(copperMatch[1]);

  return result;
}

/**
 * 将角色数据写入到 MVU 变量中
 */
export async function writeCharacterToMvu(
  character: CharacterConfig,
  items: Item[],
  skills: Skill[],
  destinedOnes: DestinedOne[],
): Promise<void> {
  await waitGlobalInitialized('Mvu');

  const presetSkills = skills.filter(skill => !skill.isCustom);
  const presetItems = items.filter(item => !item.isCustom);
  const presetDestinedOnes = destinedOnes.filter(one => !one.isCustom);

  const messageMvuData = Mvu.getMvuData({ type: 'message', message_id: 'latest' });
  const mvuCommands: string[] = [];

  // 命运点数
  mvuCommands.push(`_.set('命定系统.命运点数', ${character.destinyPoints}); // 初始化命运点数`);

  // 技能列表
  const existingSkills = Mvu.getMvuVariable(messageMvuData, '角色.技能列表', { default_value: {} });
  for (const skillName of Object.keys(existingSkills).filter(k => k !== '$meta')) {
    mvuCommands.push(`_.delete('角色.技能列表', '${skillName}'); // 删除旧技能：${skillName}`);
  }
  for (const skill of presetSkills) {
    const skillData = {
      品质: RARITY_MAP[skill.rarity] || '普通',
      类型: skill.type,
      消耗: skill.consume || '',
      标签: skill.tag,
      效果: skill.effect,
      描述: skill.description,
    };
    mvuCommands.push(
      `_.insert('角色.技能列表', '${skill.name}', ${JSON.stringify(skillData)}); // 添加技能：${skill.name}`,
    );
  }

  // 货币
  mvuCommands.push(`_.set('货币.金币', 0); // 初始化金币`);
  mvuCommands.push(`_.set('货币.银币', 0); // 初始化银币`);
  mvuCommands.push(`_.set('货币.铜币', 0); // 初始化铜币`);

  // 背包
  const existingItems = Mvu.getMvuVariable(messageMvuData, '背包', { default_value: {} });
  for (const itemName of Object.keys(existingItems).filter(k => k !== '$meta')) {
    mvuCommands.push(`_.delete('背包', '${itemName}'); // 删除旧道具：${itemName}`);
  }
  for (const item of presetItems) {
    if (item.type === '货币') {
      const currency = parseCurrency(item.description);
      if (currency.gold > 0) mvuCommands.push(`_.add('货币.金币', ${currency.gold}); // 添加金币`);
      if (currency.silver > 0)
        mvuCommands.push(`_.add('货币.银币', ${currency.silver}); // 添加银币`);
      if (currency.copper > 0)
        mvuCommands.push(`_.add('货币.铜币', ${currency.copper}); // 添加铜币`);
    } else {
      const itemData = {
        品质: RARITY_MAP[item.rarity] || '普通',
        数量: item.quantity || 1,
        类型: item.type,
        标签: item.tag,
        效果: item.effect,
        描述: item.description,
      };
      mvuCommands.push(
        `_.insert('背包', '${item.name}', ${JSON.stringify(itemData)}); // 添加道具：${item.name}`,
      );
    }
  }

  // 命定之人
  const existingDestinedOnes = Mvu.getMvuVariable(messageMvuData, '命定系统.命定之人', {
    default_value: {},
  });
  for (const oneName of Object.keys(existingDestinedOnes).filter(k => k !== '$meta')) {
    mvuCommands.push(`_.delete('命定系统.命定之人', '${oneName}'); // 删除旧命定之人：${oneName}`);
  }
  for (const one of presetDestinedOnes) {
    const oneData: Record<string, any> = {
      是否在场: '是',
      生命层级: one.lifeLevel,
      等级: one.level,
      种族: one.race,
      身份: [...one.identity],
      职业: [...one.career],
      性格: one.personality,
      喜爱: one.like,
      外貌特质: one.app,
      衣物装饰: one.cloth,
      属性: {
        力量: one.attributes.strength,
        敏捷: one.attributes.dexterity,
        体质: one.attributes.constitution,
        智力: one.attributes.intelligence,
        精神: one.attributes.mind,
      },
      登神长阶: {
        是否开启: one.stairway.isOpen ? '是' : '否',
      },
      是否缔结契约: one.isContract,
      好感度: one.affinity,
      评价: one.comment || '',
      背景故事: one.backgroundInfo || '',
      装备: {},
      技能: {},
    };

    for (const eq of one.equip) {
      if (eq.name) {
        oneData.装备[eq.name] = {
          品质: eq.rarity ? RARITY_MAP[eq.rarity] || '普通' : '普通',
          类型: eq.type || '',
          标签: eq.tag || '',
          效果: eq.effect || '',
          描述: eq.description || '',
        };
      }
    }

    for (const skill of one.skills) {
      oneData.技能[skill.name] = {
        品质: RARITY_MAP[skill.rarity] || '普通',
        类型: skill.type,
        消耗: skill.consume || '',
        标签: skill.tag,
        效果: skill.effect,
        描述: skill.description,
      };
    }

    mvuCommands.push(
      `_.insert('命定系统.命定之人', '${one.name}', ${JSON.stringify(oneData)}); // 添加命定之人：${one.name}`,
    );
  }

  const commandMessage = mvuCommands.join('\n');
  const updatedMessageData = await Mvu.parseMessage(commandMessage, messageMvuData);

  if (updatedMessageData) {
    await Mvu.replaceMvuData(updatedMessageData, { type: 'message', message_id: 'latest' });
    console.log('✅ 预设数据已成功写入消息楼层变量');
  } else {
    console.warn('⚠️ MVU 命令解析失败，数据未写入');
  }
}

/**
 * 生成发送给 AI 的提示词数据（YAML 格式）
 */
export function generateAIPrompt(
  character: CharacterConfig,
  equipments: Equipment[],
  destinedOnes: DestinedOne[],
  background: Background | null,
  items: Item[],
  skills: Skill[],
): string {
  const displayGender = character.gender === '自定义' ? character.customGender : character.gender;
  const displayRace = character.race === '自定义' ? character.customRace : character.race;
  const displayIdentity =
    character.identity === '自定义' ? character.customIdentity : character.identity;
  const displayLocation =
    character.startLocation === '自定义' ? character.customStartLocation : character.startLocation;

  const tierBonus = getTierAttributeBonus(character.level);
  const formatAttr = (extra: number) => {
    const total = BASE_STAT + tierBonus + extra;
    return `${BASE_STAT} (基础) + ${tierBonus} (层级) + ${extra} (额外) = ${total}`;
  };
  const finalAttrs = {
    力量: formatAttr(character.attributePoints.力量),
    敏捷: formatAttr(character.attributePoints.敏捷),
    体质: formatAttr(character.attributePoints.体质),
    智力: formatAttr(character.attributePoints.智力),
    精神: formatAttr(character.attributePoints.精神),
  };

  const data: Record<string, any> = {
    角色信息: {
      基本信息: {
        姓名: character.name,
        性别: displayGender,
        年龄: `${character.age} 岁`,
        种族: displayRace,
        身份: displayIdentity,
        出生地: displayLocation,
        生命层级: getLevelTierName(character.level),
        等级: `Lv.${character.level}`,
      },
      角色属性: finalAttrs,
    },
  };

  if (equipments.length > 0) {
    data.角色信息.装备列表 = equipments.map(eq => ({
      名称: eq.name,
      类型: eq.type,
      品质: RARITY_MAP[eq.rarity] || eq.rarity,
      ...(eq.tag && { 标签: eq.tag }),
      效果: eq.effect,
      ...(eq.description && { 描述: eq.description }),
    }));
  }

  // 自定义道具列表（全部发送给 AI）
  const customItems = items.filter(item => item.isCustom);
  if (customItems.length > 0) {
    data.角色信息.自定义道具列表 = customItems.map(item => ({
      名称: item.name || '未命名',
      ...(item.type && { 类型: item.type }),
      ...(item.rarity && { 品质: RARITY_MAP[item.rarity] || item.rarity }),
      ...(item.quantity && { 数量: item.quantity }),
      ...(item.tag && { 标签: item.tag }),
      ...(item.effect && { 效果: item.effect }),
      ...(item.description && { 描述: item.description }),
    }));
  }

  // 自定义技能列表（全部发送给 AI）
  const customSkills = skills.filter(skill => skill.isCustom);
  if (customSkills.length > 0) {
    data.角色信息.自定义技能列表 = customSkills.map(skill => ({
      名称: skill.name || '未命名',
      ...(skill.type && { 类型: skill.type }),
      ...(skill.rarity && { 品质: RARITY_MAP[skill.rarity] || skill.rarity }),
      ...(skill.tag && { 标签: skill.tag }),
      ...(skill.consume && { 消耗: skill.consume }),
      ...(skill.effect && { 效果: skill.effect }),
      ...(skill.description && { 描述: skill.description }),
    }));
  }

  const customOnes = destinedOnes.filter(one => one.isCustom);
  if (customOnes.length > 0) {
    data.角色信息.命定之人 = customOnes.map(one => {
      const oneData: Record<string, any> = {
        名称: one.name,
        种族: one.race,
        身份: one.identity.join('、'),
        ...(one.career.length > 0 && { 职业: one.career.join('、') }),
        生命层级: one.lifeLevel,
        等级: one.level,
        性格: one.personality,
        喜爱: one.like,
        外貌: one.app,
        衣着: one.cloth,
        属性: {
          力量: one.attributes.strength,
          敏捷: one.attributes.dexterity,
          体质: one.attributes.constitution,
          智力: one.attributes.intelligence,
          精神: one.attributes.mind,
        },
        是否缔结契约: one.isContract,
        好感度: one.affinity,
      };
      if (one.equip.length > 0) {
        oneData.装备 = one.equip
          .filter(eq => eq.name)
          .map(eq => ({ 名称: eq.name, ...(eq.description && { 描述: eq.description }) }));
      }
      if (one.stairway.isOpen) {
        oneData.登神长阶 = { 状态: '已开启' };
        if (one.stairway.elements?.描述) oneData.登神长阶.描述 = one.stairway.elements.描述;
      }
      if (one.comment) oneData.评价 = one.comment;
      if (one.backgroundInfo) oneData.背景 = one.backgroundInfo;
      if (one.skills.length > 0) {
        oneData.技能 = one.skills.map(sk => ({ 名称: sk.name, 效果: sk.effect }));
      }
      return oneData;
    });
  }

  if (background) {
    data.初始开局剧情 = {
      名称: background.name,
      ...(background.requiredRace && { 种族限制: background.requiredRace }),
      ...(background.requiredLocation && { 地点限制: background.requiredLocation }),
      描述: background.description,
    };
  }

  const yamlContent = yamlStringify(data);

  const instructions = [
    '---',
    '根据<status_current_variables>和以上内容，生成一个符合描述和情景的初始剧情！',
    '（注意：生成初始剧情时，先检查上述内容是否完整，如不完整，必须参考相关设定进行完善，然后再根据内容，在<UpdateVariable>内更新数据。除非有特殊要求，更新的数据不要有任何修改和省略。）',
    '（IMPORTANT: 已在<status_current_variables>内的数据，不得修改和删除）',
  ].join('\n');

  return `\`\`\`yaml\n${yamlContent}\`\`\`\n\n${instructions}`;
}
