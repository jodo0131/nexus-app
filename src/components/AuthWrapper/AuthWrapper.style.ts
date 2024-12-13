import { Flex } from 'antd';
import styled from 'styled-components';

const StyledAuthWrapper = styled(Flex)`
  width: 100%;
  height: 100vh;

  background: ${(props) => props.theme.Color.BLACK};
`;

export default StyledAuthWrapper;
