import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedClient } from 'store/slices/selected/selected.slice';
import { InitialState } from 'store/state';

const useClient = (id?: string) => {
  const dispatch = useDispatch();

  const allClients = useSelector((state: InitialState) => state.clients);
  const selectedClient = useSelector(
    (state: InitialState) => state.selected?.selectedClient,
  );

  useEffect(() => {
    if (!id) return;

    const fetchClient = allClients.find((client) => client.id === id);

    if (!fetchClient) return;

    dispatch(setSelectedClient(fetchClient));
  }, [id, allClients, dispatch]);

  return { allClients, selectedClient };
};

export default useClient;
