import { FC, ReactNode } from 'react';

import StyledContent from './Content.style';

const Content: FC<{ children: ReactNode }> = ({ children }) => {
  return <StyledContent>{children}</StyledContent>;
};

export default Content;
