import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { EPrivatePaths } from 'models/TRoute';
import { USER_ROLES } from 'models/TUser';
import { ADMIN_ROUTES, CLIENT_ROUTES } from 'routes/Routes.data';
import { InitialState } from 'store/state';

const useRoutes = () => {
  const currentUser = useSelector((state: InitialState) => state.user);

  const routes = useMemo(() => {
    if (currentUser?.role === USER_ROLES.ADMIN) {
      return ADMIN_ROUTES;
    }

    return CLIENT_ROUTES;
  }, [currentUser]);

  return {
    routes,
    homeRoute:
      currentUser?.role === USER_ROLES.ADMIN
        ? EPrivatePaths.Customers
        : EPrivatePaths.Clients,
  };
};

export default useRoutes;
