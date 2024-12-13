import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { LogoutOutlined } from '@ant-design/icons';
import { Flex } from 'antd';
import NexusLogoWhite from 'assets/img/logo/nexus-logo-fff.svg';
import useRoutes from 'hooks/useRoutes';
import { logoutUser } from 'store/slices/user/user.slice';
import { Spacing } from 'theme/styles';

import Menu from './Menu/Menu';
import StyledSidebar from './Sidebar.styles';

const Sidebar = () => {
  const dispatch = useDispatch();
  const { routes } = useRoutes();

  const location = useLocation();

  const selectedKey = useMemo(() => {
    return location.pathname.split('/')[1];
  }, [location.pathname]);

  const handleLogOut = async () => {
    dispatch(logoutUser());
  };

  return (
    <StyledSidebar>
      <Flex vertical>
        <img
          src={NexusLogoWhite}
          alt="Nexus Logo in sidebar"
          style={{ width: 100, margin: Spacing.MD }}
        />
        <Menu
          selectedKeys={[selectedKey]}
          items={routes
            .filter((route) => route.inSidebar === true)
            .map((route) => {
              return {
                key: route.path,
                title: route.title,
                label: <Link to={route.path}>{route.title}</Link>,
                ...(route.icon ? { icon: route.icon } : {}),
              };
            })}
        />
      </Flex>

      <Menu
        items={[
          {
            title: 'Logout',
            label: 'Logout',
            key: 'logout',
            icon: <LogoutOutlined />,
            onClick: handleLogOut,
          },
        ]}
      />
    </StyledSidebar>
  );
};
export default Sidebar;
