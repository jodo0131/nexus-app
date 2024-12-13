import { useDispatch, useSelector } from 'react-redux';
import { TabsProps } from 'antd';
import LoadingScreen from 'components/LoadingScreen/LoadingScreen.tsx';
import Tabs from 'components/Tabs/Tabs.tsx';
import { useLoading } from 'context/LoadingContext.tsx';
import useOnce from 'hooks/useOnce.tsx';
import PageHeader from 'layout/PageHeader/PageHeader.tsx';
import PageWrapper from 'layout/PageWrapper/PageWrapper.tsx';
import { setCustomers } from 'store/slices/customers/customers.slice.ts';
import { InitialState } from 'store/state.tsx';

import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb.tsx';
import { EPrivatePaths } from '../../../models/TRoute.ts';
import { addBreadcrumb } from '../../../store/slices/breadcrumbs/breadcrumbs.slice.ts';
import CustomersTab from './CustomersTab/CustomersTab.tsx';
import ReportsTab from './ReportsTab/ReportsTab.tsx';

const CUSTOMERS_TABS: TabsProps['items'] = [
  {
    key: '1',
    label: 'Customers',
    children: <CustomersTab />,
  },
  {
    key: '2',
    label: 'Reports',
    children: <ReportsTab />,
  },
];

const CustomersPage = () => {
  const dispatch = useDispatch();

  const user = useSelector((state: InitialState) => state.user);
  const breadcrumbs = useSelector((state: InitialState) => state.breadcrumbs);

  console.log('BREADCRUMBS: ', breadcrumbs);

  const { setLoading } = useLoading();

  useOnce(() => {
    setLoading(true);

    setTimeout(() => {
      if (!user) return;

      const { customers } = user;

      if (customers) {
        dispatch(setCustomers(customers));
        dispatch(
          addBreadcrumb({ label: 'Customers', path: EPrivatePaths.Customers }),
        );
      }

      // toggle loading off
      setLoading(false);
    }, 3000);
  }, [user]);

  const onChange = () => {
    // onChange(key: string) => handle tab change
  };

  return (
    <PageWrapper>
      <LoadingScreen />
      <Breadcrumb items={breadcrumbs} />
      <PageHeader
        title={user?.businessName}
        subtitle={`${user?.fullName}  •  ${user?.email}`}
      />
      <Tabs
        defaultActiveKey="1"
        size="large"
        items={CUSTOMERS_TABS}
        onChange={onChange}
      />
    </PageWrapper>
  );
};
export default CustomersPage;
