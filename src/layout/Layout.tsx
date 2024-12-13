import { Outlet } from 'react-router-dom';

import Content from './Content/Content';
import StyledLayout from './Layout.style';
import Sidebar from './Sidebar/Sidebar';

const Layout = () => {
  return (
    <StyledLayout>
      <Sidebar />
      <Content>
        <Outlet />
      </Content>
    </StyledLayout>
  );
};
export default Layout;
