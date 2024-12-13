import { FC } from 'react';
import { Col, Row } from 'antd';
import Label from 'components/Label/Label';
import { STATE } from 'components/StateSelect/State.data';
import { Text } from 'components/Typography/Typography';
import { TTaxParamStateIncomeValue } from 'models/TTaxParam';
import { FontWeight, Spacing } from 'theme/styles';
import { toCurrency } from 'utils/incomeUtils';

type StatesIncomeSummaryProps = {
  values: TTaxParamStateIncomeValue[];
};

const StatesIncomeValue: FC<StatesIncomeSummaryProps> = ({ values }) => {
  return (
    <Row gutter={16}>
      {values?.map(({ state, income }) => {
        const label = STATE.find((s) => s.value === state)?.label;
        return (
          <Col
            key={state}
            xs={24}
            sm={12}
            md={6}
            style={{ marginTop: Spacing.SM }}
          >
            <Label label={label}>
              <Text weight={FontWeight.BOLD}>{toCurrency(income)}</Text>
            </Label>
          </Col>
        );
      })}
    </Row>
  );
};
export default StatesIncomeValue;
