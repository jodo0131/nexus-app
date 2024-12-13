import Typography from 'antd/es/typography';
import styled, { css } from 'styled-components';

import { TypographyGeneralProps } from './Typography.types';

const { Title, Text, Link, Paragraph } = Typography;

const typographyGeneralProperties = ({
  display,
  weight,
  color,
  size,
}: TypographyGeneralProps) => css`
  ${display && `display: ${display}`};
  ${weight && `font-weight: ${weight}`} !important;
  ${color && `color: ${color}`};
  ${size && `font-size: ${size}px`};

  word-break: unset;
  margin-bottom: 0 !important;
  margin-top: 0 !important;
`;

export const StyledTitle = styled(Title)`
  && {
    font-weight: 600;
    ${typographyGeneralProperties}
  }
`;

export const StyledSubtitle = styled(Text)`
  && {
    ${typographyGeneralProperties}
    font-size: ${props => props.theme.FontSize.LG}px;
    line-height: ${props => props.theme.LineHeight.LG};
  }
`;

export const StyledText = styled(Text)`
  && {
    ${typographyGeneralProperties}
    font-weight: 400;
  }
`;

export const StyledLink = styled(Link)`
  && {
    ${typographyGeneralProperties};

    color: ${props => props.theme.Color.PRIMARY_DEFAULT};

    &:hover {
      color: ${props => props.theme.Color.PRIMARY_HOVER};
    }
  }
`;

export const StyledParagraph = styled(Paragraph)`
  && {
    ${typographyGeneralProperties}
  }
`;
