import { Input, InputNumber } from 'antd';
import styled from 'styled-components';

const StyledInput = styled(Input)`
  && {
    width: 100%;
  }
`;

const StyledPassword = styled(Input.Password)``;

const StyledInputNumber = styled(InputNumber)`
  && {
    width: 100%;
  }
`;

export { StyledInput, StyledInputNumber, StyledPassword };
