import { ButtonProps } from 'antd';

import StyledButton, { StyledSecondaryButton } from './Button.style';

export const Button = (props: ButtonProps) => {
  const { color } = props;

  return <StyledButton {...props} style={{ color }} />;
};

export const SecondaryButton = (props: ButtonProps) => {
  return <StyledSecondaryButton {...props} />;
};

export default Button;
