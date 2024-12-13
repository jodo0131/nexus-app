import { PlusOutlined } from '@ant-design/icons';
import { Flex } from 'antd';
import Button from 'components/Button/Button';
import { Text, Title } from 'components/Typography/Typography';
import { Spacing } from 'theme/styles';

import StyledEmptyRecord from './EmptyRecord.style';

const EmptyRecord = ({
  name,
  onClick,
}: {
  name?: string;
  onClick?: () => void;
}) => {
  return (
    <StyledEmptyRecord
      vertical
      gap={Spacing.LG}
      justify="center"
      align="center"
    >
      <Flex vertical align="center" gap={6}>
        <Title>Build out a new year.</Title>
        <Text>Create a New Tax Year for {name}</Text>
      </Flex>

      <Button
        size="large"
        type="primary"
        icon={<PlusOutlined />}
        onClick={onClick}
      >
        Create New Year
      </Button>
    </StyledEmptyRecord>
  );
};
export default EmptyRecord;
