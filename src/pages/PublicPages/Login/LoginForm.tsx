import { Link } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import { Checkbox, Flex } from 'antd';
import Button from 'components/Button/Button';
import { Form, FormItem } from 'components/Form/Form';
import { validationRules } from 'components/Form/validationRules';
import Input, { InputPassword } from 'components/Input/Input';
import { useForm } from 'hooks/useForm';
import { useLogin } from 'hooks/useLogin';
import { EPublicPaths } from 'models/TRoute';
import { Spacing } from 'theme/styles';

const LoginForm = () => {
  const { form } = useForm<{ email: string; password: string }>();
  const { login, loading } = useLogin();

  const onSubmit = async () => {
    const { email, password } = await form.validateFields();
    await login(email, password);
  };

  return (
    <Form form={form} onSubmitCapture={onSubmit}>
      <Flex vertical gap={Spacing.MD}>
        <Flex vertical gap={Spacing.MD}>
          <FormItem
            name="email"
            label=""
            rules={[validationRules.required('email'), validationRules.email()]}
          >
            <Input placeholder="Username" prefix={<UserOutlined />} />
          </FormItem>
          <FormItem
            name="password"
            label=""
            rules={[validationRules.required('password')]}
          >
            <InputPassword placeholder="Password" />
          </FormItem>
        </Flex>

        <Flex justify="space-between">
          <FormItem name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </FormItem>

          <Button type="link">
            <Link to={`/${EPublicPaths.ForgotPassword}`}>Forgot password</Link>
          </Button>
        </Flex>

        <Button type="primary" size="large" htmlType="submit" loading={loading}>
          Login
        </Button>
      </Flex>
    </Form>
  );
};
export default LoginForm;
