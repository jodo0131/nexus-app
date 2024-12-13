import { InboxOutlined } from '@ant-design/icons';
import {
  Divider,
  Flex,
  message,
  notification,
  Upload,
  UploadProps,
} from 'antd';
import Button from 'components/Button/Button';
import ColorInput from 'components/ColorInput/ColorInput';
import { Form, FormItem } from 'components/Form/Form';
import { validationRules } from 'components/Form/validationRules';
import Input from 'components/Input/Input';
import { Subtitle, Text } from 'components/Typography/Typography';
import { useLoading } from 'context/LoadingContext';
import { useSignUpStep } from 'context/SignupStepContext';
import { useForm } from 'hooks/useForm';

type TBrandingForm = {
  businessName: string;
  logo: string;
  brandColor?: string;
};

const { Dragger } = Upload;

const props: UploadProps = {
  name: 'file',
  multiple: true,
  action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      // console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop() {
    // console.log('Dropped files', e.dataTransfer.files);
  },
};

const BrandingForm = () => {
  const { form } = useForm<TBrandingForm>();

  const { isLoading, setLoading } = useLoading();
  const { currentSignupStep, setCurrentSignupStep } = useSignUpStep();

  const onSubmit = async () => {
    setLoading(true);

    setTimeout(async () => {
      try {
        const valid = await form.validateFields();

        if (!valid) return;

        // move to next step
        setCurrentSignupStep(currentSignupStep + 1);
        // eslint-disable-next-line no-console, @typescript-eslint/no-unused-vars
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
        <Flex vertical gap={16}>
          <FormItem
            label="Company Name"
            name="businessName"
            rules={[validationRules.required()]}
          >
            <Input placeholder="ABC Company" />
          </FormItem>
          <FormItem label="Upload Logo Image" optional name="logo">
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <Subtitle display="block">Upload a PNG or SVG Logo</Subtitle>
              <Text display="block" type="secondary">
                Atleast 500px by 500px
              </Text>
            </Dragger>
          </FormItem>

          <ColorInput label="Brand Color" optional name="brandColor" />
        </Flex>

        <Divider />

        <Flex justify="space-between">
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Brand Away!
          </Button>
        </Flex>
      </Flex>
    </Form>
  );
};
export default BrandingForm;
