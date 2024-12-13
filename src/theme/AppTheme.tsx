import { FC, ReactNode } from 'react';
import { ConfigProvider } from 'antd';
import { ThemeProvider } from 'styled-components';

import DefaultStyles from './DefaultStyles';
import { APP_THEME, LIGHT } from './theme';

const AppTheme: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ConfigProvider theme={LIGHT}>
      <ThemeProvider theme={APP_THEME}>
        <DefaultStyles />
        {children}
      </ThemeProvider>
    </ConfigProvider>
  );
};

export default AppTheme;
