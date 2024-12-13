import Sider from 'antd/es/layout/Sider';
import styled from 'styled-components';
import { SIDER_WIDTH, Spacing } from 'theme/styles';

const StyledSidebar = styled(Sider)`
  && {
    min-width: ${SIDER_WIDTH} !important;
    position: fixed;
    height: 100vh;

    .ant-layout-sider-children {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: ${Spacing.SM}px;
    }
  }
`;
export default StyledSidebar;
