import React from 'react';
import { Divider, Flex } from 'antd';
import Button from 'components/Button/Button';
import { TitleSubtitle } from 'components/Typography/Typography';
import { Spacing } from 'theme/styles';

type TaxSummaryDetailsProps = {
  title?: string;
  subtitle?: string;
  onEdit: () => void;
  children: React.ReactNode;
};

const TaxSummaryDetails = ({
  title,
  subtitle,
  onEdit,
  children,
}: TaxSummaryDetailsProps) => {
  return (
    <Flex vertical gap={Spacing.LG}>
      <Flex justify="space-between">
        <TitleSubtitle level={2} title={title} subtitle={subtitle} />
        <Button type="default" shape="round" ghost onClick={onEdit}>
          Edit
        </Button>
      </Flex>

      {children}

      <Divider />
    </Flex>
  );
};

export default TaxSummaryDetails;
