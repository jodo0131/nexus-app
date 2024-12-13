import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { InitialState } from 'store/state';

import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

const AuthRoute = () => {
  const user = useSelector((state: InitialState) => state.user);

  return (
    <Routes>
      {user ? (
        <Route path="/*" element={<PrivateRoutes />} />
      ) : (
        <Route path="/*" element={<PublicRoutes />} />
      )}
    </Routes>
  );
};

export default AuthRoute;
