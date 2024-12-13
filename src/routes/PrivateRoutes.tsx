import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import useRoutes from 'hooks/useRoutes';
import Layout from 'layout/Layout';

const PrivateRoutes = () => {
  const { routes, homeRoute } = useRoutes();

  return (
    <Suspense fallback={null}>
      <Routes>
        <Route element={<Layout />}>
          {routes.map((route) =>
            route.subRoutes?.length ? (
              <Route path={route.path} key={route.path}>
                {route.subRoutes?.map((subRoute) => (
                  <Route
                    path={subRoute.path}
                    element={subRoute.component}
                    index={subRoute.index}
                    key={subRoute.path}
                  />
                ))}
              </Route>
            ) : (
              <Route
                path={route.params ? route.path + route.params : route.path}
                element={route.component}
                key={route.path}
              />
            ),
          )}
          <Route path="/" element={homeRoute} />
          <Route path="*" element={<div>Page not found</div>} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default PrivateRoutes;
