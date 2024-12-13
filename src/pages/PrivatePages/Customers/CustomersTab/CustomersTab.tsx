import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Search from 'components/Search/Search.tsx';
import Table from 'components/Table/Table.tsx';
import { useLoading } from 'context/LoadingContext.tsx';
import useOnce from 'hooks/useOnce.tsx';
import PageHeader from 'layout/PageHeader/PageHeader.tsx';
import PageWrapper from 'layout/PageWrapper/PageWrapper.tsx';
import { setCustomers } from 'store/slices/customers/customers.slice.ts';
import { InitialState } from 'store/state.tsx';

import { CustomersTableColumn } from './CustomersColumn.data.tsx';

const CustomersTab = () => {
  const dispatch = useDispatch();

  const user = useSelector((state: InitialState) => state.user);

  const { setLoading } = useLoading();

  const allCustomers = useSelector((state: InitialState) => state.customers);

  const activeCustomers = useMemo(
    () => allCustomers?.filter((customer) => customer.active),
    [allCustomers],
  );

  const onSearch = () => {
    // onSearch(value: string) => logic here
  };

  useOnce(() => {
    setLoading(true);

    setTimeout(() => {
      if (!user) return;

      const { customers } = user;

      if (customers) {
        dispatch(setCustomers(customers));
        // dispatch(
        //   addBreadcrumb({ label: 'Customers', path: PrivatePaths.Customers }),
        // );
      }

      // toggle loading off
      setLoading(false);
    }, 3000);
  }, [user]);

  return (
    <PageWrapper>
      <PageHeader title="Customer Clients" />
      <Search size="large" onSearchSubmit={onSearch} placeholder="Search" />
      <Table columns={CustomersTableColumn} dataSource={activeCustomers} />
    </PageWrapper>
  );
};
export default CustomersTab;
