import { Breadcrumb } from 'antd';
import styled from 'styled-components';
import { Color } from 'theme/styles.ts';

const StyledBreadcrumb = styled(Breadcrumb)`
  .ant-breadcrumb-link a:hover,
  .ant-breadcrumb-link a:active,
  .ant-breadcrumb-link a.active {
    background: none;
    color: ${Color.PRIMARY_DEFAULT};
  }
`;

export default StyledBreadcrumb;
