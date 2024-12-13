import { FC, ReactNode } from 'react';

import StyledPageWrapper from './PageWrapper.style';

const PageWrapper: FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <StyledPageWrapper vertical gap="large">
      {children}
    </StyledPageWrapper>
  );
};

export default PageWrapper;
