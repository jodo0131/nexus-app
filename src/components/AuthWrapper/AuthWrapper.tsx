import { FC, ReactNode } from 'react';

import StyledAuthWrapper from './AuthWrapper.style';

const AuthWrapper: FC<{ children: ReactNode; bgcolor?: string }> = ({
  children,
  bgcolor,
}) => {
  return (
    <StyledAuthWrapper
      vertical
      align="center"
      justify="center"
      style={{ backgroundColor: bgcolor }}
    >
      {children}
    </StyledAuthWrapper>
  );
};
export default AuthWrapper;
