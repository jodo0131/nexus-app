import { FC } from 'react';
import { Flex } from 'antd';
import Label from 'components/Label/Label';
import { STATE } from 'components/StateSelect/State.data';
import { Text } from 'components/Typography/Typography';
import { TStateMethodField } from 'models/TTaxConfig';
import { TTaxParamStateMethodValue } from 'models/TTaxParam';
import { FontWeight, Spacing } from 'theme/styles';

type StateMethodValueProps = {
  values: TTaxParamStateMethodValue[];
  fields?: TStateMethodField[];
};

const StateMethodValue: FC<StateMethodValueProps> = ({ values, fields }) => {
  return (
    <Flex vertical gap={Spacing.LG}>
      {values?.map(({ method, state }) => {
        const stateLabel = state
          ?.map((state) => {
            return STATE.find((s) => s.value === state)?.label;
          })
          .join(', ');

        const fieldLabel = fields?.find(
          (field) => field.name === method,
        )?.label;

        return (
          <Label label={fieldLabel}>
            <Text weight={FontWeight.BOLD}>{stateLabel}</Text>
          </Label>
        );
      })}
    </Flex>
  );
};
export default StateMethodValue;
