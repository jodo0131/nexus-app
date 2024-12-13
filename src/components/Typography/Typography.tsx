import { Flex } from 'antd';
import { Spacing } from 'theme/styles';

import {
  StyledLink,
  StyledParagraph,
  StyledSubtitle,
  StyledText,
  StyledTitle,
} from './Typography.styles';
import {
  TLinkProps,
  TParagraphProps,
  TTextProps,
  TTitleProps,
  TTitleSubtitleProps,
} from './Typography.types';

export const Title = ({ ...props }: TTitleProps) => {
  return <StyledTitle {...props} />;
};

export const Subtitle = ({ ...props }: TTextProps) => {
  return <StyledSubtitle {...props} />;
};

export const Text = ({ ...props }: TTextProps) => {
  return <StyledText {...props} />;
};

export const SecondaryText = ({ ...props }: TTextProps) => {
  return <StyledText type="secondary" {...props} />;
};

export const Link = ({ ...props }: TLinkProps) => {
  return <StyledLink {...props} />;
};

export const Paragraph = ({ ...props }: TParagraphProps) => {
  return <StyledParagraph {...props} />;
};

export const TitleSubtitle = ({
  title,
  level = 1,
  subtitle,
}: TTitleSubtitleProps) => {
  return (
    <Flex vertical gap={Spacing.XXS}>
      <Title level={level}>{title}</Title>
      <Text>{subtitle}</Text>
    </Flex>
  );
};
