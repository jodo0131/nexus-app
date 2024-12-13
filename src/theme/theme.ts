import { ThemeConfig } from 'antd';

import {
  BorderRadius,
  Color,
  FontSize,
  FontWeight,
  LineHeight,
  Spacing,
} from './styles';

export const APP_THEME = {
  scrollbar: {
    thumb: Color.SCROLLBAR_THUMB,
    track: Color.SCROLLBAR_TRACK,
    modal: {
      thumb: Color.SCROLLBAR_THUMB,
    },
  },
  Color,
  FontSize,
  LineHeight,
  FontWeight,
  Spacing,
  BorderRadius,
};

export const LIGHT: ThemeConfig = {
  token: {
    // Background
    colorBgContainer: Color.WHITE,

    // brand colors
    colorPrimary: Color.PRIMARY_DEFAULT,
    colorPrimaryHover: Color.PRIMARY_HOVER,
    colorPrimaryActive: Color.PRIMARY_ACTIVE,

    // border radius
    borderRadiusXS: BorderRadius.XS,
    borderRadiusSM: BorderRadius.SM,
    borderRadius: BorderRadius.LG,
    borderRadiusLG: BorderRadius.XL,

    // error
    colorError: Color.ERROR,
    // warning
    colorWarning: Color.WARNING,
  },
  components: {
    Button: {
      // default styles
      // colorLink: Color.PRIMARY_DEFAULT,
      // colorLinkHover: Color.PRIMARY_HOVER,
      // colorLinkActive: Color.PRIMARY_ACTIVE,
    },
    Input: {
      // default styles
      fontSize: FontSize.BASE,
      lineHeight: LineHeight.BASE,
      borderRadius: BorderRadius.SM,
      activeBorderColor: Color.PRIMARY_DEFAULT,
      hoverBorderColor: Color.PRIMARY_HOVER,
    },
    InputNumber: {
      // default styles
      fontSize: FontSize.BASE,
      lineHeight: LineHeight.BASE,
      borderRadius: BorderRadius.SM,
      activeBorderColor: Color.PRIMARY_DEFAULT,
      hoverBorderColor: Color.PRIMARY_HOVER,
    },
    Select: {
      // default styles
      fontSize: FontSize.BASE,
      lineHeight: LineHeight.BASE,
      borderRadius: BorderRadius.SM,
    },
    Menu: {
      // default styles
      // colorBgContainer: Color.TRANSPARENT,
      // colorText: `rgba(0, 0, 0, 0.65)`,
      // itemBorderRadius: BorderRadius.XL,
      // // hover
      // itemHoverColor: Color.WHITE,
      // itemHoverBg: `rgba(0, 0, 0, 0.1)`,
      // // selected menu item
      // itemSelectedColor: Color.WHITE,
      // itemSelectedBg: Color.PRIMARY_DEFAULT,
      // itemActiveBg: Color.PRIMARY_ACTIVE,
    },
    Modal: {},
  },
};
