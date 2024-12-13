import { Content } from 'antd/es/layout/layout';
import styled from 'styled-components';
import { SIDER_WIDTH } from 'theme/styles';

const StyledContent = styled(Content)`
  && {
    margin-left: ${SIDER_WIDTH};
    background-color: ${(props) => props.theme.Color.WHITE};

    &.ant-layout-content {
      padding: ${(props) => props.theme.Spacing.XL}px;
    }
  }
`;

export default StyledContent;
