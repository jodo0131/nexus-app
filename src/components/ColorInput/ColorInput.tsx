import React, { useState } from 'react';
import { ColorPicker, Flex } from 'antd';
import { AggregationColor } from 'antd/es/color-picker/color';
import { FormItem } from 'components/Form/Form';
import Input from 'components/Input/Input';
import { BorderRadius } from 'theme/styles';

type ColorInputProps = {
  name: string;
  label: string;
  rules?: any[]; // eslint-disable-line
  defaultValue?: string;
  optional?: boolean;
};

const ColorInput: React.FC<ColorInputProps> = ({
  name,
  label,
  rules,
  defaultValue,
  optional,
}) => {
  const [color, setColor] = useState(defaultValue);

  const handleColorChange = (_: AggregationColor, css: string) => {
    setColor(css);
  };

  return (
    <FormItem label={label} name={name} rules={rules} optional={optional}>
      <Flex gap={16}>
        <Input
          value={color}
          onChange={(e) => setColor(e.target.value)}
          style={{ maxWidth: 120, textTransform: 'uppercase' }}
        />
        <ColorPicker
          value={color}
          onChange={handleColorChange}
          defaultFormat="hex"
          format="hex"
          style={{ borderRadius: BorderRadius.MD }}
        />
      </Flex>
    </FormItem>
  );
};

export default ColorInput;
