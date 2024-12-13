import { ReactNode } from 'react';

export type TRoute = {
  component: ReactNode;
  path: EPublicPaths | EPrivatePaths;
  index?: boolean;
  inSidebar?: boolean;
  params?: string;
  queryParams?: string;
};

export type TPrivateRoute = TRoute & {
  title?: string;
  icon?: ReactNode;
  subRoutes?: TPrivateRoute[];
};

export enum EPublicPaths {
  Login = 'login',
  SignUp = 'sign-up',
  ForgotPassword = 'forgot-password',
}

export enum EPrivatePaths {
  Customers = 'customers',
  Clients = 'clients',
  Reports = 'reports',
  Report = 'report',
  MyAccount = 'my-account',
}
