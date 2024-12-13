import { FC } from 'react';
import { CheckCircleFilled } from '@ant-design/icons';
import { Flex } from 'antd';
import { STATE } from 'components/StateSelect/State.data';
import { Text } from 'components/Typography/Typography';
import { TTaxParamStateValue } from 'models/TTaxParam';
import { FontWeight, Spacing } from 'theme/styles';

type StateValueProps = {
  values: TTaxParamStateValue[];
};

const StateValue: FC<StateValueProps> = ({ values }) => {
  return (
    <Flex gap={Spacing.SM}>
      <CheckCircleFilled />
      <Text weight={FontWeight.BOLD}>
        {values
          ?.map((value) => STATE.find((state) => state.value === value)?.label)
          .join(', ')}
      </Text>
    </Flex>
  );
};
export default StateValue;
