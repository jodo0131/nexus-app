import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTaxForms } from 'store/slices/taxform/taxform.slice';
import { InitialState } from 'store/state';

const useTaxForms = (clientId?: string) => {
  const user = useSelector((state: InitialState) => state.user);
  const taxforms = useSelector((state: InitialState) => state.taxforms);

  const hasTaxForms = useMemo(
    () => taxforms && taxforms.length > 0,
    [taxforms],
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTaxForms = async () => {
      if (user) {
        const currentClient = user.clients?.find(
          (client) => client.id === clientId,
        );

        if (!currentClient) return;

        const { taxforms } = currentClient || {};

        if (taxforms) {
          dispatch(setTaxForms(taxforms));
        }
      }
    };

    if (user) {
      fetchTaxForms();
    }
  }, [user]);

  return { taxforms, hasTaxForms };
};

export default useTaxForms;
