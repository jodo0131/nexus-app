import React from 'react';
import { Flex } from 'antd';
import { Text } from 'components/Typography/Typography';
import { Spacing } from 'theme/styles';

type IconTextProps = {
  icon: React.ReactElement;
  text: string;
  color?: string;
};

function IconText({ icon, text, color }: IconTextProps) {
  const styledIcon = React.cloneElement(icon, {
    style: { color },
  });

  return (
    <Flex align="center" gap={Spacing.XS}>
      {styledIcon}
      <Text color={color}>{text}</Text>
    </Flex>
  );
}

export default IconText;
