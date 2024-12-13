import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { omit } from 'lodash';
import { TTaxForm } from 'models/TTaxForm';
import { InitialState } from 'store/state';
import { calculateDaysDifference } from 'utils/dateUtils';

type TaxParams = Omit<TTaxForm, 'id' | 'clientId' | 'year' | 'compiledDate'>;

const useValidateTaxForm = () => {
  const selectedTaxForm = useSelector(
    (state: InitialState) => state.currentTaxform,
  );

  const [isValid, setIsValid] = useState<boolean>(true);
  const [isExpired, setIsExpired] = useState<boolean>(false);

  useEffect(() => {
    if (!selectedTaxForm) {
      setIsValid(false);
      return;
    }

    const { compiledDate } = selectedTaxForm;

    const params: TaxParams = omit(selectedTaxForm, [
      'id',
      'clientId',
      'year',
      'compiledDate',
    ]);

    const daysDiff = calculateDaysDifference(compiledDate as string);

    const withinDateLimit = daysDiff <= 25;

    setIsExpired(!withinDateLimit);

    const currentIsValid = (Object.keys(params) as (keyof TaxParams)[]).every(
      (key) => params[key].values.length > 0,
    );

    setIsValid(currentIsValid);
  }, [selectedTaxForm]);

  return {
    isValid,
    isExpired,
  };
};

export default useValidateTaxForm;
