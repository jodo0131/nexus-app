import { Flex } from 'antd';
import styled from 'styled-components';
import { BorderRadius } from 'theme/styles';

const StyledEmptyRecord = styled(Flex)`
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.04);
  border-radius: ${BorderRadius.XL}px;
`;

export default StyledEmptyRecord;
