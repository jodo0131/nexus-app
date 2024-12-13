import { useSelector } from 'react-redux';
import { InboxOutlined } from '@ant-design/icons';
import { Divider, Flex, message, Upload, UploadProps } from 'antd';
import Button from 'components/Button/Button';
import ColorInput from 'components/ColorInput/ColorInput';
import { Form, FormItem } from 'components/Form/Form';
import { validationRules } from 'components/Form/validationRules';
import Input from 'components/Input/Input';
import { Subtitle, Text } from 'components/Typography/Typography';
import { useForm } from 'hooks/useForm';
import { InitialState } from 'store/state';
import { CSSProp } from 'styled-components';

import {
  CompanyProfileFormFields,
  TFormValues,
} from './CompanyProfileForm.type';

const customStyle: CSSProp = {
  maxWidth: 436,
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

const CompanyProfileForm = () => {
  const user = useSelector((state: InitialState) => state.user);
  const { form } = useForm<TFormValues>();

  const onSubmit = async () => {
    try {
      await form.validateFields();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form form={form} style={customStyle} onSubmitCapture={onSubmit}>
      <Flex vertical gap={16}>
        <FormItem
          label="Company Name"
          name={CompanyProfileFormFields.COMPANY_NAME}
          rules={[validationRules.required()]}
        >
          <Input placeholder="ABC Company" defaultValue={user?.businessName} />
        </FormItem>
        <FormItem
          label="Upload Logo Image"
          name={CompanyProfileFormFields.LOGO}
          rules={[validationRules.required()]}
        >
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

        <ColorInput
          label="Brand Color"
          name={CompanyProfileFormFields.BRAND_COLOR}
          rules={[validationRules.required()]}
          defaultValue={user?.brandColor}
        />
      </Flex>

      <Divider />

      <Flex justify="space-between">
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Flex>
    </Form>
  );
};
export default CompanyProfileForm;
