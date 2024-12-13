import { Tabs } from 'antd';
import styled from 'styled-components';
import { FontWeight } from 'theme/styles';

const StyledTabs = styled(Tabs)`
  .ant-tabs-tab-btn {
    font-weight: ${FontWeight.BOLD};
  }
`;

export default StyledTabs;
