import { FC } from 'react';
import { CardProps } from 'antd';

import StyledCard from './Card.style';

const Card: FC<CardProps> = (props) => {
  return <StyledCard {...props} />;
};

export default Card;
