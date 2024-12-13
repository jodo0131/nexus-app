import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import LoadingScreen from 'components/LoadingScreen/LoadingScreen';
import { useLoading } from 'context/LoadingContext';
import { useModalContext } from 'context/ModalContext';
import { EMPTY_TAXFORM } from 'data/tax.data';
import TaxParams from 'features/TaxParams/TaxParams';
import useClient from 'hooks/useClients';
import useTaxForms from 'hooks/useTaxforms';
import PageHeader from 'layout/PageHeader/PageHeader';
import PageWrapper from 'layout/PageWrapper/PageWrapper';
import { setCurrentTaxform } from 'store/slices/current-taxform/current-taxform.slice';
// import { setSelectedTaxForm } from 'store/slices/selected/selected.slice';
import { createTaxForm } from 'store/slices/taxform/taxform.slice';

import EmptyRecord from './EmptyRecord/EmptyRecord';
import TaxTabs from './TaxTabs/TaxTabs';

const ClientPage = () => {
  const dispatch = useDispatch();

  const { id } = useParams<{ id: string }>();

  const { setLoading } = useLoading();
  const { selectedClient } = useClient(id);

  const { taxforms, hasTaxForms } = useTaxForms(id);

  const { openEditClientModal } = useModalContext();

  const [toggleTaxForms, setToggleTaxForms] = useState<boolean>(false);

  const onCreateNewTaxYear = () => {
    const newTaxForm = {
      ...EMPTY_TAXFORM,
      clientId: id,
      year: new Date().getFullYear(),
      compiledDate: undefined,
    };

    // Simulate a loading process
    setLoading(true);
    setTimeout(() => {
      dispatch(createTaxForm(newTaxForm));
      dispatch(setCurrentTaxform(newTaxForm));

      setToggleTaxForms((previous) => !previous);

      // toggle loading off
      setLoading(false);
    }, 3000);
  };

  return (
    <PageWrapper>
      <LoadingScreen />
      <PageHeader
        title={selectedClient?.businessName}
        subtitle={`${selectedClient?.clientName} • ${selectedClient?.email}`}
        actions={[
          {
            label: 'Edit Client',
            onClick: openEditClientModal,
          },
        ]}
      />

      {toggleTaxForms && (
        <TaxParams toggle={(bool) => setToggleTaxForms(bool)} />
      )}

      {hasTaxForms ? (
        <TaxTabs taxforms={taxforms} />
      ) : (
        <EmptyRecord
          name={selectedClient?.businessName}
          onClick={onCreateNewTaxYear}
        />
      )}
    </PageWrapper>
  );
};
export default ClientPage;
