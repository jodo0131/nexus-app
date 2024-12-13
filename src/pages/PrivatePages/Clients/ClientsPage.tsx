import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IdcardFilled } from '@ant-design/icons';
import LoadingScreen from 'components/LoadingScreen/LoadingScreen';
import Search from 'components/Search/Search';
import { useLoading } from 'context/LoadingContext';
import { useModalContext } from 'context/ModalContext';
import ClientsTable from 'features/Tables/ClientsTable/ClientsTable';
import PageHeader from 'layout/PageHeader/PageHeader';
import PageWrapper from 'layout/PageWrapper/PageWrapper';
import { setClients } from 'store/slices/clients/clients.slice';
import { InitialState } from 'store/state';

const ClientsPage = () => {
  const dispatch = useDispatch();

  const user = useSelector((state: InitialState) => state.user);

  const { setLoading } = useLoading();
  const { openCreateClientModal } = useModalContext();

  const allClients = useSelector((state: InitialState) => state.clients);

  const activeClients = useMemo(
    () => allClients.filter((client) => client.active),
    [allClients],
  );

  const onSearch = () => {
    // onSearch(value: string) => logic here
  };

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      if (!user) return;

      const { clients } = user;

      if (clients) {
        dispatch(setClients(clients));
      }

      // toggle loading off
      setLoading(false);
    }, 3000);
  }, [user]);

  return (
    <PageWrapper>
      <LoadingScreen />
      <PageHeader
        title="Clients"
        subtitle={`${allClients.length} Clients  •  ${activeClients.length} Active`}
        actions={[
          {
            label: 'Create New Client',
            icon: <IdcardFilled />,
            onClick: openCreateClientModal,
          },
        ]}
      />
      <Search size="large" onSearchSubmit={onSearch} placeholder="Search" />
      <ClientsTable data={allClients} />
    </PageWrapper>
  );
};
export default ClientsPage;
