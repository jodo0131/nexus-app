import { FC } from 'react';
import { TabsProps } from 'antd';

import StyledTabs from './Tabs.styles.';

const Tabs: FC<TabsProps> = (props) => {
  return <StyledTabs {...props} />;
};

export default Tabs;
