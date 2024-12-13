import { Divider, Flex } from 'antd';
import { FormItem } from 'components/Form/Form';
import { validationRules } from 'components/Form/validationRules';
import { InputNumber } from 'components/Input/Input';
import { STATE } from 'components/StateSelect/State.data';
import { Text, Title } from 'components/Typography/Typography';
import { TStateIncomeField } from 'models/TTaxConfig';

import { EStateIncome } from '../TaxParams.type';

const IncomePerState = ({
  field,
  states,
}: {
  field: TStateIncomeField;
  states: string[];
}) => {
  return (
    <>
      {states.length > 0 && (
        <>
          <Divider />
          <Flex vertical gap={6}>
            <Title level={4}>{field.label}</Title>
            <Text>{field.description}</Text>
          </Flex>
        </>
      )}

      {states?.map((state) => (
        <FormItem
          key={state}
          label={STATE.find((s) => s.value === state)?.label}
          name={[state, EStateIncome.INCOME]}
          rules={[validationRules.required()]}
        >
          <InputNumber prefix="$" placeholder="Enter Income" />
        </FormItem>
      ))}
    </>
  );
};
export default IncomePerState;
