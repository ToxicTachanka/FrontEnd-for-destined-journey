/**
 * 预设主题配置
 * 包含所有预设主题的颜色定义
 */
import type { Theme, ThemePresetId } from '../core/types/theme';

/**
 * 西幻羊皮纸主题（默认）
 * 古旧卷轴、皮革质感
 */
const ParchmentTheme: Theme = {
  id: 'parchment',
  name: '羊皮纸',
  colors: {
    // 窗口容器
    windowBg: '#1a1410',
    windowBorder: '#5a3f2b',

    // 标题栏
    titleBarBg: '#2b2018',
    titleBarText: '#e7d4b5',
    titleBarIcon: '#c7a37a',
    titleBarBtnHover: 'rgba(199, 163, 122, 0.16)',

    // Tab 栏
    tabBarBg: '#221811',
    tabText: '#c3aa86',
    tabActiveText: '#f6e7cf',
    tabIndicator: '#b8905b',
    tabHoverBg: 'rgba(184, 144, 91, 0.14)',

    // 内容区域
    contentBg: '#231a14',
    cardBg: '#2a2018',
    cardBorder: '#4d392a',

    // 文本颜色
    textPrimary: '#f1e1c6',
    textSecondary: '#cfb38c',
    textMuted: '#9b8366',

    // 资源条
    resourceHp: '#b83a2c',
    resourceMp: '#2a6bb6',
    resourceSp: '#3a8b4f',
    resourceExp: '#c08b2f',

    // 品质颜色
    qualityUnique: '#d38b3d',
    qualityMythic: '#c33d5b',
    qualityLegendary: '#d7b25c',
    qualityEpic: '#8e4fb3',
    qualityRare: '#3f7fc4',
    qualityUncommon: '#4d8b5a',

    // 交互状态
    primaryBg: '#8b5a2b',
    primaryText: '#f7e9d2',
    success: '#4e9a62',
    warning: '#d9a441',
    error: '#c4493d',

    // 命定系统
    affection: '#b54a5f',
    affectionBg: 'rgba(181, 74, 95, 0.25)',
    affectionText: '#d58d9d',
    tagPresent: 'rgba(76, 175, 80, 0.18)',
    tagPresentText: '#7ac28c',
    tagContract: 'rgba(233, 30, 99, 0.18)',
    tagContractText: '#e08aa6',

    // 登神长阶
    ascensionElement: 'rgba(33, 150, 243, 0.12)',
    ascensionPower: 'rgba(255, 152, 0, 0.12)',
    ascensionLaw: 'rgba(156, 39, 176, 0.12)',

    // 货币
    currencyGold: '#ffd700',
    currencySilver: '#c0c0c0',
    currencyCopper: '#b87333',
  },
};

/**
 * 暗酒红主题
 * 深沉、神秘、黑暗世界氛围
 */
const CrimsonTheme: Theme = {
  id: 'crimson',
  name: '暗酒红',
  colors: {
    // 窗口容器
    windowBg: '#1a0f0f',
    windowBorder: '#5a2a2a',

    // 标题栏
    titleBarBg: '#2b1515',
    titleBarText: '#e5c5c5',
    titleBarIcon: '#c47a7a',
    titleBarBtnHover: 'rgba(196, 122, 122, 0.16)',

    // Tab 栏
    tabBarBg: '#221111',
    tabText: '#c39090',
    tabActiveText: '#f6d5d5',
    tabIndicator: '#a85050',
    tabHoverBg: 'rgba(168, 80, 80, 0.14)',

    // 内容区域
    contentBg: '#1e1212',
    cardBg: '#2a1818',
    cardBorder: '#4d2a2a',

    // 文本颜色
    textPrimary: '#f1d8d8',
    textSecondary: '#cfaaaa',
    textMuted: '#9b7070',

    // 资源条
    resourceHp: '#c43030',
    resourceMp: '#4a5090',
    resourceSp: '#408050',
    resourceExp: '#c08040',

    // 品质颜色
    qualityUnique: '#d38b3d',
    qualityMythic: '#c33d5b',
    qualityLegendary: '#d7b25c',
    qualityEpic: '#8e4fb3',
    qualityRare: '#3f7fc4',
    qualityUncommon: '#4d8b5a',

    // 交互状态
    primaryBg: '#8b3030',
    primaryText: '#f7e5e5',
    success: '#4e9a62',
    warning: '#d9a441',
    error: '#dc3545',

    // 命定系统
    affection: '#c04050',
    affectionBg: 'rgba(192, 64, 80, 0.25)',
    affectionText: '#e08090',
    tagPresent: 'rgba(76, 175, 80, 0.18)',
    tagPresentText: '#7ac28c',
    tagContract: 'rgba(220, 53, 69, 0.18)',
    tagContractText: '#e08080',

    // 登神长阶
    ascensionElement: 'rgba(100, 150, 200, 0.12)',
    ascensionPower: 'rgba(255, 140, 0, 0.12)',
    ascensionLaw: 'rgba(180, 60, 100, 0.12)',

    // 货币
    currencyGold: '#ffd700',
    currencySilver: '#c0c0c0',
    currencyCopper: '#b87333',
  },
};

/**
 * 深靛蓝主题
 * 深邃、神秘、魔法氛围
 */
const IndigoTheme: Theme = {
  id: 'indigo',
  name: '深靛蓝',
  colors: {
    // 窗口容器
    windowBg: '#0f1420',
    windowBorder: '#2a3a5a',

    // 标题栏
    titleBarBg: '#151d30',
    titleBarText: '#c5d0e5',
    titleBarIcon: '#7a9ac4',
    titleBarBtnHover: 'rgba(122, 154, 196, 0.16)',

    // Tab 栏
    tabBarBg: '#111828',
    tabText: '#90a0c3',
    tabActiveText: '#d5e0f6',
    tabIndicator: '#5070a8',
    tabHoverBg: 'rgba(80, 112, 168, 0.14)',

    // 内容区域
    contentBg: '#121825',
    cardBg: '#182030',
    cardBorder: '#2a3a50',

    // 文本颜色
    textPrimary: '#d8e2f1',
    textSecondary: '#aab8cf',
    textMuted: '#70809b',

    // 资源条
    resourceHp: '#c04040',
    resourceMp: '#3060b0',
    resourceSp: '#408060',
    resourceExp: '#c09030',

    // 品质颜色
    qualityUnique: '#d38b3d',
    qualityMythic: '#c33d5b',
    qualityLegendary: '#d7b25c',
    qualityEpic: '#8e4fb3',
    qualityRare: '#3f7fc4',
    qualityUncommon: '#4d8b5a',

    // 交互状态
    primaryBg: '#3050a0',
    primaryText: '#e5f0ff',
    success: '#4e9a62',
    warning: '#d9a441',
    error: '#c4493d',

    // 命定系统
    affection: '#7050b0',
    affectionBg: 'rgba(112, 80, 176, 0.25)',
    affectionText: '#a090d0',
    tagPresent: 'rgba(80, 180, 120, 0.18)',
    tagPresentText: '#70c090',
    tagContract: 'rgba(200, 100, 180, 0.18)',
    tagContractText: '#d090c0',

    // 登神长阶
    ascensionElement: 'rgba(50, 150, 250, 0.15)',
    ascensionPower: 'rgba(255, 180, 50, 0.12)',
    ascensionLaw: 'rgba(150, 50, 200, 0.15)',

    // 货币
    currencyGold: '#ffd54f',
    currencySilver: '#b0bec5',
    currencyCopper: '#c08050',
  },
};

/**
 * 古铜金主题
 * 华丽、皇室、金属质感
 */
const BronzeTheme: Theme = {
  id: 'bronze',
  name: '古铜金',
  colors: {
    // 窗口容器
    windowBg: '#181510',
    windowBorder: '#6a5530',

    // 标题栏
    titleBarBg: '#282010',
    titleBarText: '#e8d8b0',
    titleBarIcon: '#c4a050',
    titleBarBtnHover: 'rgba(196, 160, 80, 0.16)',

    // Tab 栏
    tabBarBg: '#201a10',
    tabText: '#c0a870',
    tabActiveText: '#f6e8c0',
    tabIndicator: '#b89030',
    tabHoverBg: 'rgba(184, 144, 48, 0.14)',

    // 内容区域
    contentBg: '#1e1810',
    cardBg: '#282010',
    cardBorder: '#504020',

    // 文本颜色
    textPrimary: '#f0e0c0',
    textSecondary: '#d0b880',
    textMuted: '#a08850',

    // 资源条
    resourceHp: '#c04030',
    resourceMp: '#4060a0',
    resourceSp: '#408050',
    resourceExp: '#c0a030',

    // 品质颜色
    qualityUnique: '#e09030',
    qualityMythic: '#c33d5b',
    qualityLegendary: '#e0c040',
    qualityEpic: '#9050b0',
    qualityRare: '#4080c0',
    qualityUncommon: '#509060',

    // 交互状态
    primaryBg: '#a07020',
    primaryText: '#fff8e8',
    success: '#50a060',
    warning: '#e0a030',
    error: '#c44030',

    // 命定系统
    affection: '#b06040',
    affectionBg: 'rgba(176, 96, 64, 0.25)',
    affectionText: '#d0a080',
    tagPresent: 'rgba(80, 160, 80, 0.18)',
    tagPresentText: '#80c080',
    tagContract: 'rgba(200, 80, 80, 0.18)',
    tagContractText: '#d09080',

    // 登神长阶
    ascensionElement: 'rgba(50, 150, 220, 0.12)',
    ascensionPower: 'rgba(255, 180, 0, 0.15)',
    ascensionLaw: 'rgba(160, 50, 180, 0.12)',

    // 货币
    currencyGold: '#ffc800',
    currencySilver: '#c8c8c8',
    currencyCopper: '#c08040',
  },
};

/**
 * 粉紫色主题
 * 梦幻、浪漫、可爱风格
 */
const SakuraTheme: Theme = {
  id: 'sakura',
  name: '樱花粉紫',
  colors: {
    // 窗口容器
    windowBg: '#1a1018',
    windowBorder: '#5a3050',

    // 标题栏
    titleBarBg: '#281828',
    titleBarText: '#e8d0e0',
    titleBarIcon: '#c480a0',
    titleBarBtnHover: 'rgba(196, 128, 160, 0.16)',

    // Tab 栏
    tabBarBg: '#201520',
    tabText: '#c090a8',
    tabActiveText: '#f6d8e8',
    tabIndicator: '#b06090',
    tabHoverBg: 'rgba(176, 96, 144, 0.14)',

    // 内容区域
    contentBg: '#1c1420',
    cardBg: '#281828',
    cardBorder: '#483048',

    // 文本颜色
    textPrimary: '#f0e0e8',
    textSecondary: '#d0b0c0',
    textMuted: '#a07888',

    // 资源条
    resourceHp: '#c05070',
    resourceMp: '#6070c0',
    resourceSp: '#50a070',
    resourceExp: '#c09050',

    // 品质颜色
    qualityUnique: '#d08050',
    qualityMythic: '#d04080',
    qualityLegendary: '#d0a050',
    qualityEpic: '#a050c0',
    qualityRare: '#5080d0',
    qualityUncommon: '#50a070',

    // 交互状态
    primaryBg: '#a05080',
    primaryText: '#fff0f8',
    success: '#50a068',
    warning: '#d0a040',
    error: '#d04060',

    // 命定系统
    affection: '#c06090',
    affectionBg: 'rgba(192, 96, 144, 0.25)',
    affectionText: '#e0a0c0',
    tagPresent: 'rgba(100, 180, 120, 0.18)',
    tagPresentText: '#80c0a0',
    tagContract: 'rgba(220, 80, 140, 0.18)',
    tagContractText: '#e090b0',

    // 登神长阶
    ascensionElement: 'rgba(100, 150, 230, 0.12)',
    ascensionPower: 'rgba(255, 160, 80, 0.12)',
    ascensionLaw: 'rgba(180, 80, 200, 0.15)',

    // 货币
    currencyGold: '#ffc850',
    currencySilver: '#c0c0d0',
    currencyCopper: '#c08060',
  },
};

/**
 * 墨黑主题
 * 极简、现代、高对比度
 */
const ObsidianTheme: Theme = {
  id: 'obsidian',
  name: '墨黑',
  colors: {
    // 窗口容器
    windowBg: '#0a0a0c',
    windowBorder: '#2a2a30',

    // 标题栏
    titleBarBg: '#101015',
    titleBarText: '#e0e0e8',
    titleBarIcon: '#909098',
    titleBarBtnHover: 'rgba(144, 144, 152, 0.16)',

    // Tab 栏
    tabBarBg: '#0c0c10',
    tabText: '#909098',
    tabActiveText: '#f0f0f8',
    tabIndicator: '#606068',
    tabHoverBg: 'rgba(96, 96, 104, 0.14)',

    // 内容区域
    contentBg: '#0e0e12',
    cardBg: '#141418',
    cardBorder: '#28282e',

    // 文本颜色
    textPrimary: '#e8e8f0',
    textSecondary: '#b0b0b8',
    textMuted: '#686870',

    // 资源条
    resourceHp: '#c04040',
    resourceMp: '#4070c0',
    resourceSp: '#40a060',
    resourceExp: '#c0a040',

    // 品质颜色
    qualityUnique: '#d08040',
    qualityMythic: '#c04060',
    qualityLegendary: '#d0a040',
    qualityEpic: '#9050b0',
    qualityRare: '#4080c0',
    qualityUncommon: '#50a060',

    // 交互状态
    primaryBg: '#404050',
    primaryText: '#f0f0f8',
    success: '#40a060',
    warning: '#d0a040',
    error: '#d04040',

    // 命定系统
    affection: '#a04060',
    affectionBg: 'rgba(160, 64, 96, 0.25)',
    affectionText: '#c08090',
    tagPresent: 'rgba(64, 160, 96, 0.18)',
    tagPresentText: '#60c080',
    tagContract: 'rgba(200, 64, 96, 0.18)',
    tagContractText: '#d08090',

    // 登神长阶
    ascensionElement: 'rgba(64, 120, 200, 0.15)',
    ascensionPower: 'rgba(200, 140, 40, 0.15)',
    ascensionLaw: 'rgba(140, 64, 180, 0.15)',

    // 货币
    currencyGold: '#e0c040',
    currencySilver: '#a0a0a8',
    currencyCopper: '#b08050',
  },
};

/**
 * 羊皮纸米黄主题（浅色）
 * 明亮、古典、复古纸张质感
 */
const IvoryTheme: Theme = {
  id: 'ivory',
  name: '米黄羊皮纸',
  colors: {
    // 窗口容器
    windowBg: '#f5efe5',
    windowBorder: '#c5a880',

    // 标题栏
    titleBarBg: '#e8dcc8',
    titleBarText: '#4a3820',
    titleBarIcon: '#806040',
    titleBarBtnHover: 'rgba(128, 96, 64, 0.12)',

    // Tab 栏
    tabBarBg: '#ebe0d0',
    tabText: '#806850',
    tabActiveText: '#3a2810',
    tabIndicator: '#a08050',
    tabHoverBg: 'rgba(160, 128, 80, 0.12)',

    // 内容区域
    contentBg: '#f0e8dc',
    cardBg: '#faf5ed',
    cardBorder: '#d0c0a0',

    // 文本颜色
    textPrimary: '#2a2010',
    textSecondary: '#605040',
    textMuted: '#908070',

    // 资源条
    resourceHp: '#c04030',
    resourceMp: '#3060a0',
    resourceSp: '#308050',
    resourceExp: '#b08020',

    // 品质颜色
    qualityUnique: '#c07020',
    qualityMythic: '#b03050',
    qualityLegendary: '#b09020',
    qualityEpic: '#7040a0',
    qualityRare: '#2060a0',
    qualityUncommon: '#307040',

    // 交互状态
    primaryBg: '#a08050',
    primaryText: '#ffffff',
    success: '#308050',
    warning: '#c09030',
    error: '#c04030',

    // 命定系统
    affection: '#b05060',
    affectionBg: 'rgba(176, 80, 96, 0.15)',
    affectionText: '#903040',
    tagPresent: 'rgba(48, 128, 80, 0.15)',
    tagPresentText: '#206040',
    tagContract: 'rgba(176, 48, 80, 0.15)',
    tagContractText: '#a03050',

    // 登神长阶
    ascensionElement: 'rgba(32, 96, 160, 0.12)',
    ascensionPower: 'rgba(200, 120, 32, 0.12)',
    ascensionLaw: 'rgba(112, 64, 160, 0.12)',

    // 货币
    currencyGold: '#c0a020',
    currencySilver: '#808080',
    currencyCopper: '#a06030',
  },
};

/** 所有预设主题 */
export const ThemePresets: Record<ThemePresetId, Theme> = {
  parchment: ParchmentTheme,
  crimson: CrimsonTheme,
  indigo: IndigoTheme,
  bronze: BronzeTheme,
  sakura: SakuraTheme,
  obsidian: ObsidianTheme,
  ivory: IvoryTheme,
};

/** 默认主题 */
export const DefaultTheme = ParchmentTheme;

/** 主题列表（用于选择器） */
export const ThemeList: Array<{ id: ThemePresetId; name: string }> = [
  { id: 'parchment', name: '羊皮纸' },
  { id: 'crimson', name: '暗酒红' },
  { id: 'indigo', name: '深靛蓝' },
  { id: 'bronze', name: '古铜金' },
  { id: 'sakura', name: '樱花粉紫' },
  { id: 'obsidian', name: '墨黑' },
  { id: 'ivory', name: '米黄羊皮纸' },
];
