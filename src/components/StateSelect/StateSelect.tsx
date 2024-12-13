import { Flex } from 'antd';
import { SelectProps } from 'antd/lib';
import { Text } from 'components/Typography/Typography';
import { TStateValue } from 'models/TState';
import { FontWeight, Spacing } from 'theme/styles';

import { STATE } from './State.data';
import StyledSelect from './StateSelect.styles.';

const StateSelect = (
  props: SelectProps & {
    label?: string;
    values?: TStateValue[];
  },
) => {
  const { label, values } = props;

  return (
    <Flex vertical gap={Spacing.XS}>
      {label && <Text weight={FontWeight.BOLD}>{label}</Text>}
      <StyledSelect
        mode="multiple"
        defaultValue={values}
        allowClear
        options={STATE}
        placeholder="Select States"
        {...props}
      />
    </Flex>
  );
};

export default StateSelect;
