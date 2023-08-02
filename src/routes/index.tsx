import { Navigate, useRoutes, Outlet } from 'react-router-dom';

import { PublicRoute, ProtectedRoute } from 'components/wrappers';

import LoginPage from 'pages/LoginPage';
import NotFoundPage from 'pages/NotFoundPage';
import UnderDevelopmentPage from 'pages/UnderDevelopmentPage';

import { ROUTES } from './routes.const';

export const AppRoutes = () => {
  const isAuth = false;
  const routes = [
    {
      path: ROUTES.HOME,
      children: [
        {
          element: (
            <PublicRoute isAuth={isAuth}>
              <Outlet />
            </PublicRoute>
          ),
          children: [
            {
              path: '',
              element: <Navigate to={ROUTES.LOGIN} replace={true} />,
            },
            { path: ROUTES.LOGIN, element: <LoginPage /> },
            { path: ROUTES.REGISTER, element: <UnderDevelopmentPage /> },
          ],
        },
        {
          element: (
            <ProtectedRoute isAuth={isAuth}>
              <Outlet />
            </ProtectedRoute>
          ),
          children: [
            {
              children: [
                {
                  element: <Outlet />,
                  children: [
                    {
                      path: ROUTES.PROFILE,
                      element: <UnderDevelopmentPage />,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ];

  const routing = useRoutes(routes);

  return routing;
};
