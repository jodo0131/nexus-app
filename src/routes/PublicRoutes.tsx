import { Navigate, Route, Routes } from 'react-router-dom';

import { PUBLIC_ROUTES } from './Routes.data';

const PublicRoutes = () => (
  <Routes>
    {PUBLIC_ROUTES.map((route) => (
      <Route path={route.path} element={route.component} key={route.path} />
    ))}
    <Route path="*" element={<Navigate replace to={PUBLIC_ROUTES[0].path} />} />
  </Routes>
);

export default PublicRoutes;
