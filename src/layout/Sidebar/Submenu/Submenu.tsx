import { FC } from 'react';
import { SubMenuProps } from 'antd';

import SSubmenu from './Submenu.style';

const Submenu: FC<SubMenuProps> = (props) => {
  return <SSubmenu {...props} />;
};

export default Submenu;
