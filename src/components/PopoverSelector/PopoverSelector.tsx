import React from 'react';
import { Flex, Popover } from 'antd';
import Button from 'components/Button/Button';
import { Color, Spacing } from 'theme/styles';

interface PopoverSelectorProps {
  content: React.ReactNode;
  label: string;
  disabled?: boolean;
}

const PopoverSelector: React.FC<PopoverSelectorProps> = ({
  content,
  label,
  disabled,
}) => {
  return (
    <Popover
      placement="bottom"
      content={
        !disabled && (
          <Flex vertical gap={Spacing.XXS}>
            {content}
          </Flex>
        )
      }
    >
      <Button
        type="link"
        color={Color.BLACK}
        disabled={disabled}
        onClick={(e) => e.stopPropagation()}
      >
        {label}
      </Button>
    </Popover>
  );
};

export default PopoverSelector;
