/**
 * MVU 变量框架 composable
 * 用于封装 MVU 变量的读写操作
 */

import { toBoolean } from '../utils/data-adapter';

/**
 * 获取当前消息楼层的 MVU 数据
 */
export function getMvuData() {
  return Mvu.getMvuData({
    type: 'message',
    message_id: getCurrentMessageId(),
  });
}

/**
 * 更新命定之人的"是否在场"状态
 * @param characterName 角色名称
 * @param isPresent 是否在场
 */
export async function setDestinyCharacterPresence(characterName: string, isPresent: boolean) {
  const mvuData = getMvuData();
  const path = `命定系统.命定之人.${characterName}.是否在场`;

  // 使用 MVU 的 setMvuVariable 来更新变量
  const success = await Mvu.setMvuVariable(mvuData, path, isPresent);

  if (success) {
    // 将更新后的数据写回消息楼层
    await Mvu.replaceMvuData(mvuData, {
      type: 'message',
      message_id: getCurrentMessageId(),
    });
  }

  return success;
}

/**
 * 切换命定之人的"是否在场"状态
 * @param characterName 角色名称
 * @param currentState 当前状态 (兼容 boolean 和 "是"/"否" 字符串)
 */
export async function toggleDestinyCharacterPresence(
  characterName: string,
  currentState: boolean | string,
) {
  // 兼容字符串和布尔值
  const currentBool = toBoolean(currentState, true);
  return await setDestinyCharacterPresence(characterName, !currentBool);
}
