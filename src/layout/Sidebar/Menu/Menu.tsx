import { FC } from 'react';
import { MenuProps } from 'antd';

import StyledMenu from './Menu.styles';

const Menu: FC<MenuProps> = (props) => {
  return <StyledMenu {...props} />;
};
export default Menu;
