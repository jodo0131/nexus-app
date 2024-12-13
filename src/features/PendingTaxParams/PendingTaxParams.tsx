import { Button, Flex } from 'antd';
import { Text, TitleSubtitle } from 'components/Typography/Typography';
import { BorderRadius, Color, Spacing } from 'theme/styles';

export type PendingTaxFormProps = {
  title?: string;
  subtitle?: string;
  message: string;
  highlight?: boolean;
  toggleModal: (bool: boolean) => void;
};

const HIGLIGHT_STYLE = {
  padding: `${Spacing.SM}px ${Spacing.MD}px`,
  borderRadius: BorderRadius.LG,
  backgroundColor: Color.PRIMARY_LIGHT,
  borderLeft: `12px solid ${Color.PRIMARY_DEFAULT}`,
};

const PendingTaxParams = ({
  title = '',
  subtitle = '',
  message = '',
  highlight = false,
  toggleModal,
}: PendingTaxFormProps) => {
  return (
    <Flex vertical style={{ ...(highlight && HIGLIGHT_STYLE) }}>
      <Flex justify="space-between">
        <TitleSubtitle level={2} title={title} subtitle={subtitle} />
        <Button
          type="primary"
          ghost={!highlight}
          onClick={() => toggleModal(true)}
        >
          Edit
        </Button>
      </Flex>

      <Text style={{ padding: `${Spacing.MD}px 0px` }}>{message}</Text>
    </Flex>
  );
};
export default PendingTaxParams;
