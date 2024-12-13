import { Flex } from 'antd';
import styled from 'styled-components';
import { BorderRadius, Padding, Spacing } from 'theme/styles';

interface StyledFlexProps {
  width?: string;
  bgcolor: string;
}

export const StyledFlex = styled(Flex)<StyledFlexProps>`
  width: ${({ width }) => width};
  align-items: center;
  justify-content: space-between;
  gap: ${Spacing.SM}px;
  padding: ${Padding.BASE}px ${Padding.LG}px;
  border-radius: ${BorderRadius.XL}px;
  background-color: ${({ bgcolor }) => bgcolor};
`;

export default StyledFlex;
