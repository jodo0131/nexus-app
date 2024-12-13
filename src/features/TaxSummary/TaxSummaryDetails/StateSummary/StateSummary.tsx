import { FC, useMemo, useState } from 'react';
import { TAXPARAM_CONFIG, TAXPARAM_SEQUENCE } from 'configs/app.config';
import { CURRENT_TAXPARAM } from 'configs/consts/localstorage';
import PendingTaxParams from 'features/PendingTaxParams/PendingTaxParams';
import StatesTaxParams from 'features/TaxParams/StatesTaxParam/StateTaxParams';
import { TaxSummaryDetailsProps } from 'features/TaxSummary/TaxSummary';
import TaxSummaryDetails from 'features/TaxSummary/TaxSummaryDetails/TaxSummaryDetails';
import { TAXPARAM_TYPE, TTaxParamStateValue } from 'models/TTaxParam';
import { getLocalStorage, setLocalStorage } from 'utils/localStorage';

import StateValue from './StateValue/StateValue';

type StatesSummaryProps = {
  id: string;
  values: TTaxParamStateValue[];
};

const StateSummary: FC<StatesSummaryProps & TaxSummaryDetailsProps> = ({
  id,
  values,
  onSave,
}) => {
  const [toggleTaxParams, setToggleTaxParams] = useState<boolean>(false);

  // This will return the details of the configuration of the tax param.
  const currentTaxParam = useMemo(
    () => TAXPARAM_CONFIG.find((form) => form.id === id),
    [],
  );

  // checks the current index of the tax param
  const currentIndex = TAXPARAM_SEQUENCE.findIndex((paramId) => paramId === id);

  // This will return the tax param in local storage, if it matches the id, then it is pending.
  const isPending = getLocalStorage(CURRENT_TAXPARAM) === id;

  const closeCurrentAndOpenNext = () => {
    // set the current tax form to the next form
    if (currentIndex < TAXPARAM_SEQUENCE.length - 1) {
      setLocalStorage(CURRENT_TAXPARAM, TAXPARAM_SEQUENCE[currentIndex + 1]);
    }

    // Close modal if last form
    if (currentIndex === TAXPARAM_SEQUENCE.length - 1) {
      setToggleTaxParams((previous) => !previous);
    }
  };

  return (
    <>
      {values?.length > 0 && (
        <TaxSummaryDetails
          title={currentTaxParam?.title}
          subtitle={currentTaxParam?.summary}
          onEdit={() => setToggleTaxParams((previous) => !previous)}
        >
          <StateValue values={values} />
        </TaxSummaryDetails>
      )}

      {values?.length === 0 && (
        <PendingTaxParams
          title={currentTaxParam?.title}
          subtitle={currentTaxParam?.pending}
          message="Waiting for data..."
          highlight={isPending}
          toggleModal={(bool) => setToggleTaxParams(bool)}
        />
      )}

      <StatesTaxParams
        mode="edit"
        type={TAXPARAM_TYPE.STATE}
        title={currentTaxParam?.title}
        subtitle={currentTaxParam?.subtitle}
        open={toggleTaxParams}
        fields={currentTaxParam?.fields}
        toggleModal={(bool) => setToggleTaxParams(bool)}
        defaultValues={values}
        onSave={onSave}
        next={closeCurrentAndOpenNext}
      />
    </>
  );
};
export default StateSummary;
