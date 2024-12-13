import { FC } from 'react';
import { MenuItemProps } from 'antd';

import StyledMenuItem from './MenuItem.styles';

const MenuItem: FC<MenuItemProps> = (props) => {
  return <StyledMenuItem {...props} />;
};

export default MenuItem;
