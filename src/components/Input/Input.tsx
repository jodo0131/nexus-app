import { FC } from 'react';
import { CloseCircleFilled } from '@ant-design/icons';
import { InputNumberProps } from 'antd';
import { PasswordProps } from 'antd/es/input/';
import { InputProps } from 'antd/es/input/Input';

import { StyledInput, StyledInputNumber, StyledPassword } from './Input.styles';

const Input: FC<InputProps> = (props) => {
  const { status } = props;

  return (
    <StyledInput
      {...props}
      suffix={status === 'error' && <CloseCircleFilled />}
    />
  );
};
export const InputPassword: FC<PasswordProps> = (props) => {
  const { status } = props;

  return (
    <StyledPassword
      {...props}
      suffix={status === 'error' && <CloseCircleFilled />}
    />
  );
};

export const InputNumber: FC<InputNumberProps> = (props) => {
  const { status } = props;

  return (
    <StyledInputNumber
      {...props}
      suffix={status === 'error' && <CloseCircleFilled />}
    />
  );
};

export default Input;
