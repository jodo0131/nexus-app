import { LinkProps } from 'antd/es/typography/Link';
import { ParagraphProps } from 'antd/es/typography/Paragraph';
import { TextProps } from 'antd/es/typography/Text';
import { TitleProps } from 'antd/es/typography/Title';
import { FontWeight } from 'theme/styles';

export type TypographyGeneralProps = {
  display?: 'block' | 'inline' | 'inline-block';
  color?: string;
  weight?: FontWeight;
  size?: number;
};

export type TTitleProps = TitleProps & TypographyGeneralProps;

export type TLinkProps = LinkProps & TypographyGeneralProps;

export type TParagraphProps = ParagraphProps & TypographyGeneralProps;

export type TTextProps = TextProps & TypographyGeneralProps;

export type TTitleSubtitleProps = TitleProps &
  TypographyGeneralProps & {
    subtitle: React.ReactNode;
  };
