export const SIDER_WIDTH = '264px';
export const MODAL_HEIGHT = '420px';

export enum Screen {
  DESKTOP_LG = '1920px',
  DESKTOP_SM = '1440px',
  LAPTOP = '1280px',
  TABLET = '974px',
  MOBILE_LG = '568px',
  MOBILE_SM = '320px',
}

export enum BorderRadius {
  XS = 2,
  SM = 4,
  BASE = 6,
  MD = 8,
  LG = 12,
  XL = 24,
}

export enum Spacing {
  XXS = 4,
  XS = 8,
  SM = 12,
  BASE = 16,
  MD = 20,
  LG = 24,
  XL = 36,
  XXL = 48,
}

export enum Padding {
  XXS = 4,
  XS = 8,
  SM = 12,
  BASE = 16,
  MD = 20,
  LG = 24,
  XL = 32,
  XXL = 48,
}

export enum FontSize {
  SM = 12,
  BASE = 14,
  LG = 16,
  XL = 20,
}

export enum LineHeight {
  SM = 1.6,
  BASE = 1.4,
  LG = 1.25,
  XL = 1.2,
}

export enum FontWeight {
  LIGHT = 300,
  REGULAR = 400,
  MEDIUM = 500,
  SEMI_BOLD = 600,
  BOLD = 700,
}

export enum TitleFontSize {
  H1 = 38,
  H2 = 30,
  H3 = 24,
  H4 = 20,
  H5 = 16,
}

export enum TitleLineHeight {
  H1 = 1.2,
  H2 = 1.6,
  H3 = 1.3,
  H4 = 1.4,
  H5 = 1.5,
}

export enum Color {
  // Brand Colors
  PRIMARY_DEFAULT = '#F5222D',
  PRIMARY_HOVER = '#FF4D4F',
  PRIMARY_ACTIVE = '#CF1322',
  PRIMARY_LIGHT = '#FFF1F0',

  // Disabled Colors
  DISABLED_TEXT = 'rgba(0,0,0,0.25)',
  DISABLED_BG = 'rgba(0,0,0,0.04)',

  // Subtle Colors
  SUBTLE = '#F0F0F0',

  // Border Color
  BORDER_COLOR = '#D9D9D9',

  // Scrollbar Colors
  SCROLLBAR_TRACK = '#606060',
  SCROLLBAR_THUMB = '#9E9E9E',

  // Status Colors
  INFO = '#1677FF',
  ERROR = '#FF4D4F',
  WARNING = '#FAAD14',
  SUCCESS = '#52C41A',

  // Base Colors
  WHITE = '#FFF',
  BLACK = '#000',
  TRANSPARENT = 'transparent',
}
