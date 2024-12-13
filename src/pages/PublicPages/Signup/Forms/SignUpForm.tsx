import { useState } from 'react';
import { Divider, Flex, notification } from 'antd';
import Button from 'components/Button/Button';
import { Form, FormItem } from 'components/Form/Form';
import { validationRules } from 'components/Form/validationRules';
import Input, { InputPassword } from 'components/Input/Input';
import { Text } from 'components/Typography/Typography';
import { useLoading } from 'context/LoadingContext';
import { useSignUpStep } from 'context/SignupStepContext';
import { useForm } from 'hooks/useForm';
import { FontSize, Spacing } from 'theme/styles';

type TSignUpFormType = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUpForm = () => {
  const { currentSignupStep, setCurrentSignupStep } = useSignUpStep();
  const { form } = useForm<TSignUpFormType>();
  const { isLoading, setLoading } = useLoading();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const onSubmit = async () => {
    setLoading(true);
    setTimeout(async () => {
      try {
        const valid = await form.validateFields();

        if (!valid) return;

        // move to next step
        setCurrentSignupStep(currentSignupStep + 1);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        notification.error({
          message: 'Error',
          description: 'Unable to save form. Please try again.',
        });
      }

      // toggle loading off
      setLoading(false);
    }, 3000);
  };

  return (
    <Form form={form} onSubmitCapture={onSubmit} style={{ height: '100%' }}>
      <Flex vertical justify="space-between" style={{ height: '100%' }}>
        <Flex vertical gap={Spacing.SM}>
          <FormItem
            label="What is your name?"
            name="fullName"
            rules={[validationRules.required('full name')]}
          >
            <Input type="text" />
          </FormItem>

          <FormItem
            label="Email"
            name="email"
            rules={[validationRules.required('email'), validationRules.email()]}
          >
            <Input type="email" />
          </FormItem>

          <FormItem
            label="Set a Password"
            name="password"
            rules={[...validationRules.password]}
          >
            <InputPassword
              type="password"
              visibilityToggle={{
                visible: passwordVisible,
                onVisibleChange: setPasswordVisible,
              }}
            />
          </FormItem>
          <FormItem
            label="Repeat Password"
            name="confirmPassword"
            dependencies={['password']}
            rules={[...validationRules.passwordConfirm]}
          >
            <InputPassword
              type="password"
              visibilityToggle={{
                visible: confirmPasswordVisible,
                onVisibleChange: setConfirmPasswordVisible,
              }}
            />
          </FormItem>
        </Flex>
        <Divider />
        <Flex justify="space-between" align="center">
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            loading={isLoading}
          >
            Create Account
          </Button>
          <Text size={FontSize.LG}>
            * Your free report can be up to 3 states.
          </Text>
        </Flex>
      </Flex>
    </Form>
  );
};
export default SignUpForm;
