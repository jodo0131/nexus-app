import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { TAXPARAM_CONFIG } from 'configs/app.config';
import { CURRENT_TAXPARAM } from 'configs/consts/localstorage';
import {
  TAXPARAM_TYPE,
  TaxParamType,
  TTaxParamStateIncomeValue,
  TTaxParamStateMethodValue,
  TTaxParamStateValue,
  TTaxParamValues,
} from 'models/TTaxParam';
import { TaxParamsDispatchEvents } from 'store/taxparams-dispatch';
import { setLocalStorage } from 'utils/localStorage';

import StatesIncomeTaxParam from './StatesIncomeTaxParam/StateIncomeTaxParam';
import StatesMethodTaxParam from './StatesMethodTaxParam/StatesMethodTaxParam';
import StatesTaxParams from './StatesTaxParam/StateTaxParams';

// generating the sequence of tax forms
const TAXPARAM_SEQUENCE = TAXPARAM_CONFIG.map(({ id }) => id);

const TaxParams = ({ toggle }: { toggle: (bool: boolean) => void }) => {
  const dispatch = useDispatch();

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(
    () => setLocalStorage<string>(CURRENT_TAXPARAM, TAXPARAM_SEQUENCE[0]),
    [],
  );

  const onSave = (
    id: string,
    type: TaxParamType,
    values:
      | TTaxParamStateIncomeValue[]
      | TTaxParamStateMethodValue[]
      | TTaxParamStateValue[],
  ) => {
    const taxparam: TTaxParamValues = {
      type: type,
      values,
    };

    dispatch(TaxParamsDispatchEvents[id](taxparam));
  };

  const closeCurrentAndOpenNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);

    if (currentIndex < TAXPARAM_SEQUENCE.length - 1) {
      setLocalStorage(CURRENT_TAXPARAM, TAXPARAM_SEQUENCE[currentIndex + 1]);
    }

    if (currentIndex === TAXPARAM_SEQUENCE.length - 1) {
      toggle(false);
    }
  };

  return (
    <>
      {TAXPARAM_CONFIG.map((param, index) => {
        const currentN = index + 1;
        const { id, type } = param;

        if (param.type === TAXPARAM_TYPE.INCOME) {
          return (
            <StatesIncomeTaxParam
              type={TAXPARAM_TYPE.INCOME}
              key={param.id}
              title={`${currentN}. ${param.title}`}
              subtitle={param.subtitle}
              open={TAXPARAM_SEQUENCE[currentIndex] === param.id}
              fields={param.fields}
              toggleModal={(bool) => toggle(bool)}
              onSave={(values) => onSave(id, type, values)}
              next={closeCurrentAndOpenNext}
            />
          );
        }
        if (param.type === TAXPARAM_TYPE.METHOD) {
          return (
            <StatesMethodTaxParam
              type={TAXPARAM_TYPE.METHOD}
              key={param.id}
              title={`${currentN}. ${param.title}`}
              subtitle={param.subtitle}
              open={TAXPARAM_SEQUENCE[currentIndex] === param.id}
              fields={param.fields}
              toggleModal={(bool) => toggle(bool)}
              onSave={(values) => onSave(id, type, values)}
              next={closeCurrentAndOpenNext}
            />
          );
        }
        if (param.type === TAXPARAM_TYPE.STATE) {
          return (
            <StatesTaxParams
              type={TAXPARAM_TYPE.STATE}
              key={param.id}
              title={`${currentN}. ${param.title}`}
              subtitle={param.subtitle}
              open={TAXPARAM_SEQUENCE[currentIndex] === param.id}
              fields={param.fields}
              toggleModal={(bool) => toggle(bool)}
              onSave={(values) => onSave(id, type, values)}
              next={closeCurrentAndOpenNext}
            />
          );
        }
        // Return null or any other fallback component
        return null;
      })}
    </>
  );
};

export default TaxParams;
