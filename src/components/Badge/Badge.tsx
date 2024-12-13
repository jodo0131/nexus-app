import { FC } from 'react';
import { BadgeProps } from 'antd';

import StyledBadge from './Badge.style';

const Badge: FC<BadgeProps> = (props) => {
  return <StyledBadge {...props} />;
};

export default Badge;
