import { useSelector } from 'react-redux';
import { Divider, Flex } from 'antd';
import Button from 'components/Button/Button';
import { Form, FormItem } from 'components/Form/Form';
import { validationRules } from 'components/Form/validationRules';
import Input, { InputPassword } from 'components/Input/Input';
import { useForm } from 'hooks/useForm';
import { InitialState } from 'store/state';
import { CSSProp } from 'styled-components';

import {
  AccountProfileFormFields,
  TFormValues,
} from './AccountProfileForm.type';

const customStyle: CSSProp = {
  maxWidth: 436,
};

const AccountProfileForm = () => {
  const user = useSelector((state: InitialState) => state.user);

  const { form } = useForm<TFormValues>();

  return (
    <Form form={form} style={customStyle}>
      <Flex vertical gap={16}>
        <FormItem
          label="Full Name"
          name={AccountProfileFormFields.FULL_NAME}
          rules={[validationRules.required()]}
        >
          <Input placeholder="John Doe" defaultValue={user?.fullName} />
        </FormItem>
        <FormItem
          label="Email Address"
          name={AccountProfileFormFields.EMAIL}
          rules={[validationRules.required()]}
        >
          <Input placeholder="Contact Name" defaultValue={user?.email} />
        </FormItem>

        <FormItem
          label="Password"
          name={AccountProfileFormFields.PASSWORD}
          rules={[validationRules.required('password')]}
        >
          <InputPassword placeholder="Password" />
        </FormItem>
      </Flex>

      <Button type="link">Reset password</Button>

      <Divider />

      <Flex justify="space-between">
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Flex>
    </Form>
  );
};
export default AccountProfileForm;
