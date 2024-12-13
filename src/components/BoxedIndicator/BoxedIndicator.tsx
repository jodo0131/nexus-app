import React from 'react';
import { Color, Spacing } from 'theme/styles';

import StyledFlex from './BoxedIndicator.style';

export enum BoxedIndicatorType {
  WARNING = 'warning',
  DISABLED = 'disabled',
}

type BoxedIndicatorProps = {
  children: React.ReactNode;
  width?: string;
  type: BoxedIndicatorType;
};

const BoxedIndicator: React.FC<BoxedIndicatorProps> = ({
  children,
  width = '100%',
  type,
}) => {
  return (
    <StyledFlex
      gap={Spacing.SM}
      width={width}
      bgcolor={
        type === BoxedIndicatorType.WARNING ? Color.PRIMARY_LIGHT : Color.SUBTLE
      }
    >
      {children}
    </StyledFlex>
  );
};

export default BoxedIndicator;
