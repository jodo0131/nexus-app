import { FC } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import Button from 'components/Button/Button';
import { Form, FormItem } from 'components/Form/Form';
import Input from 'components/Input/Input';
import { useForm } from 'hooks/useForm';

import StyledSearch from './Search.styles.';

type SearchProps = {
  size?: SizeType;
  onSearchSubmit?: (value: string) => void;
  placeholder?: string;
  initialValue?: string;
};

const Search: FC<SearchProps> = ({
  size,
  onSearchSubmit,
  placeholder,
  initialValue,
}) => {
  const { form } = useForm<{ value: string }>();

  const onSubmitForm = () => {
    const { value } = form.getFieldsValue();

    if (onSearchSubmit) {
      onSearchSubmit(value);
    }
  };
  return (
    <StyledSearch size={size}>
      <Form form={form} onSubmitCapture={onSubmitForm} className="w-100">
        <FormItem name="value" initialValue={initialValue || ''}>
          <Input placeholder={placeholder || 'Search'} />
        </FormItem>
      </Form>
      <Button onClick={onSubmitForm} type="primary">
        <SearchOutlined />
      </Button>
    </StyledSearch>
  );
};

export default Search;
