import { Menu } from 'antd';
import styled from 'styled-components';
import { Color } from 'theme/styles';

const StyledMenu = styled(Menu)`
  background: ${Color.TRANSPARENT};

  .ant-menu-item {
    color: rgba(255, 255, 255, 0.65);
    border: 1px solid ${Color.TRANSPARENT};
  }

  .ant-menu-item-active:not(.ant-menu-item-selected) {
    color: ${Color.WHITE} !important;
    background: rgba(255, 255, 255, 0.15) !important;
    border-color: rgba(255, 255, 255, 0.65) !important;
  }

  .ant-menu-item-selected {
    color: ${Color.WHITE};
    background: ${Color.PRIMARY_DEFAULT};
  }
`;

export default StyledMenu;
