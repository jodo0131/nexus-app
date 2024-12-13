import { PropsWithChildren } from 'react';
import { Text } from 'components/Typography/Typography';

import { StyledLabel } from './Label.styles';

type LabelProps = PropsWithChildren & {
  label?: string;
  vertical?: boolean;
  size?: number;
  style?: React.CSSProperties;
};

const Label = ({
  label,
  vertical = true,
  size,
  children,
  style,
}: LabelProps) => {
  return (
    <StyledLabel vertical={vertical} style={style}>
      <Text size={size}>{label}</Text>
      {children}
    </StyledLabel>
  );
};

export default Label;
