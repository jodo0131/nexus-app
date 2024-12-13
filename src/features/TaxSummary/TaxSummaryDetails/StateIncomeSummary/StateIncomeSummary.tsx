import { FC, useMemo, useState } from 'react';
import { TAXPARAM_CONFIG, TAXPARAM_SEQUENCE } from 'configs/app.config';
import { CURRENT_TAXPARAM } from 'configs/consts/localstorage';
import PendingTaxParams from 'features/PendingTaxParams/PendingTaxParams';
import StatesIncomeTaxParam from 'features/TaxParams/StatesIncomeTaxParam/StateIncomeTaxParam';
import { TaxSummaryDetailsProps } from 'features/TaxSummary/TaxSummary';
import TaxSummaryDetails from 'features/TaxSummary/TaxSummaryDetails/TaxSummaryDetails';
import { TAXPARAM_TYPE, TTaxParamStateIncomeValue } from 'models/TTaxParam';
import { getLocalStorage, setLocalStorage } from 'utils/localStorage';

import StatesIncomeValue from './StateIncomeValue/StateIncomeValue';

type StatesIncomeSummaryProps = {
  id: string;
  values: TTaxParamStateIncomeValue[];
};

const StateIncomeSummary: FC<
  StatesIncomeSummaryProps & TaxSummaryDetailsProps
> = ({ id, values, onSave }) => {
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
          <StatesIncomeValue values={values} />
        </TaxSummaryDetails>
      )}

      {/* If there are no values inputted, we are going to mark the tax as pending */}
      {values?.length === 0 && (
        <PendingTaxParams
          title={currentTaxParam?.title}
          subtitle={currentTaxParam?.pending}
          message="Waiting for data..."
          highlight={isPending}
          toggleModal={(bool) => setToggleTaxParams(bool)}
        />
      )}

      {/* If you want to edit the current opened tax param */}
      <StatesIncomeTaxParam
        mode="edit"
        type={TAXPARAM_TYPE.INCOME}
        title={currentTaxParam?.title}
        subtitle={currentTaxParam?.subtitle}
        fields={currentTaxParam?.fields}
        open={toggleTaxParams}
        toggleModal={(bool) => setToggleTaxParams(bool)}
        defaultValues={values}
        onSave={onSave}
        next={closeCurrentAndOpenNext}
      />
    </>
  );
};
export default StateIncomeSummary;
