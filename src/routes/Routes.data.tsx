import {
  DeploymentUnitOutlined,
  IdcardFilled,
  ReadOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { SignupStepProvider } from 'context/SignupStepContext';
import {
  EPrivatePaths,
  EPublicPaths,
  TPrivateRoute,
  TRoute,
} from 'models/TRoute';
import ClientPage from 'pages/PrivatePages/Client/ClientPage';
import ClientsPage from 'pages/PrivatePages/Clients/ClientsPage';
import CustomerPage from 'pages/PrivatePages/Customer/CustomerPage';
import CustomersPage from 'pages/PrivatePages/Customers/CustomersPage';
import MyAccountPage from 'pages/PrivatePages/MyAccount/MyAccountPage';
import ReportPage from 'pages/PrivatePages/Report/ReportPage';
import ReportsPage from 'pages/PrivatePages/Reports/ReportsPage';
import ForgotPasswordPage from 'pages/PublicPages/ForgotPassword/ForgotPasswordPage';
import LoginPage from 'pages/PublicPages/Login/LoginPage';
import SignupPage from 'pages/PublicPages/Signup/SignupPage';

export const CLIENT_ROUTES: TPrivateRoute[] = [
  {
    path: EPrivatePaths.Clients,
    title: 'Clients',
    component: <ClientsPage />,
    index: true,
    icon: <IdcardFilled />,
    inSidebar: true,
  },
  {
    path: EPrivatePaths.Clients,
    title: 'Client',
    component: <ClientPage />,
    params: '/:id',
    icon: <IdcardFilled />,
    inSidebar: false,
  },
  {
    path: EPrivatePaths.Report,
    title: 'Report',
    component: <ReportPage />,
    queryParams: '?id=:id',
    icon: <IdcardFilled />,
    inSidebar: false,
  },
  {
    path: EPrivatePaths.Reports,
    component: <ReportsPage />,
    title: 'Reports',
    icon: <ReadOutlined />,
    inSidebar: true,
  },
  {
    path: EPrivatePaths.MyAccount,
    component: <MyAccountPage />,
    title: 'My Account',
    icon: <UserOutlined />,
    inSidebar: true,
  },
];

export const ADMIN_ROUTES: TPrivateRoute[] = [
  {
    path: EPrivatePaths.Customers,
    title: 'Customers',
    component: <CustomersPage />,
    index: true,
    icon: <DeploymentUnitOutlined />,
    inSidebar: true,
  },
  {
    path: EPrivatePaths.Customers,
    title: 'Customer',
    params: '/:customerId',
    component: <CustomerPage />,
    inSidebar: false,
  },
  // add the CLIENT_ROUTES to the ADMIN_ROUTES
  ...CLIENT_ROUTES,
];

export const PUBLIC_ROUTES: TRoute[] = [
  {
    path: EPublicPaths.Login,
    component: <LoginPage />,
    index: true,
  },
  {
    path: EPublicPaths.SignUp,
    component: (
      <SignupStepProvider>
        <SignupPage />
      </SignupStepProvider>
    ),
  },
  {
    path: EPublicPaths.ForgotPassword,
    component: <ForgotPasswordPage />,
  },
];
