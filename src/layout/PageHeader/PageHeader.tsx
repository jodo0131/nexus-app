import { ReactNode } from 'react';
import { Flex } from 'antd';
import Button from 'components/Button/Button';
import { Subtitle, Title } from 'components/Typography/Typography';
import { Color, Spacing } from 'theme/styles';

import StyledPageHeader from './PageHeader.style';

export interface PageHeaderActionProps {
  label: string;
  icon?: ReactNode;
  onClick: () => void;
  type?: 'primary' | 'link' | 'dashed' | 'text' | 'default';
  ghost?: boolean;
}

interface PageHeaderProps {
  title?: string;
  subtitle?: string;
  actions?: PageHeaderActionProps[];
}
const PageHeader = ({ title, subtitle, actions }: PageHeaderProps) => {
  return (
    <StyledPageHeader>
      <Flex vertical gap={Spacing.XXS}>
        <Title>{title}</Title>
        <Subtitle color={Color.DISABLED_TEXT}>{subtitle}</Subtitle>
      </Flex>

      <Flex gap={Spacing.XXS}>
        {actions?.length &&
          actions.map((action) => (
            <Button
              key={action.label}
              type={action.type ?? 'primary'}
              ghost={action.ghost}
              size="large"
              onClick={action.onClick}
              icon={action.icon}
            >
              {action.label}
            </Button>
          ))}
      </Flex>
    </StyledPageHeader>
  );
};

export default PageHeader;
