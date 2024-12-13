import { PropsWithChildren, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Flex } from 'antd';
import { Title } from 'components/Typography/Typography';
import { getTaxParams } from 'helpers/getTaxParams';
import {
  TAXPARAM_TYPE,
  TaxParamType,
  TTaxParamStateIncomeValue,
  TTaxParamStateMethodValue,
  TTaxParamStateValue,
  TTaxParamValues,
} from 'models/TTaxParam';
import { InitialState } from 'store/state';
import { TaxParamsDispatchEvents } from 'store/taxparams-dispatch';
import { Spacing } from 'theme/styles';

import StateIncomeSummary from './TaxSummaryDetails/StateIncomeSummary/StateIncomeSummary';
import StateMethodSummary from './TaxSummaryDetails/StateMethodSummary/StateMethodSummary';
import StateSummary from './TaxSummaryDetails/StateSummary/StateSummary';
import TaxSummaryIndicator from './TaxSummaryIndicator/TaxSummaryIndicator';

export type TaxSummaryDetailsProps = PropsWithChildren & {
  title?: string;
  subtitle?: string;
  onSave?: (
    values:
      | TTaxParamStateIncomeValue[]
      | TTaxParamStateMethodValue[]
      | TTaxParamStateValue[],
  ) => void;
};

const TaxSummary = () => {
  const dispatch = useDispatch();

  const selectedTaxForm = useSelector(
    (state: InitialState) => state.currentTaxform,
  );

  const currentYear = useMemo(() => selectedTaxForm?.year, [selectedTaxForm]);

  const taxParams = getTaxParams(selectedTaxForm);

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

  return (
    <Flex vertical gap={Spacing.LG}>
      <Flex align="center" justify="space-between">
        <Title>{currentYear}</Title>
        <TaxSummaryIndicator />
      </Flex>

      <Flex vertical gap={Spacing.LG}>
        {taxParams.map((params) => {
          const { name, type, values } = params;

          if (type === TAXPARAM_TYPE.INCOME) {
            return (
              <StateIncomeSummary
                key={name}
                id={name}
                values={values as TTaxParamStateIncomeValue[]}
                onSave={(values) => onSave(name, type, values)}
              />
            );
          }

          if (type === TAXPARAM_TYPE.METHOD) {
            return (
              <StateMethodSummary
                key={name}
                id={name}
                values={values as TTaxParamStateMethodValue[]}
                onSave={(values) => onSave(name, type, values)}
              />
            );
          }

          if (type === TAXPARAM_TYPE.STATE) {
            return (
              <StateSummary
                key={name}
                id={name}
                values={values as TTaxParamStateValue[]}
                onSave={(values) => onSave(name, type, values)}
              />
            );
          }

          return null;
        })}
      </Flex>
    </Flex>
  );
};

export default TaxSummary;
