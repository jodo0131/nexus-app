import { useDispatch } from 'react-redux';
import { Flex, notification } from 'antd';
import Button from 'components/Button/Button';
import { Form, FormItem } from 'components/Form/Form';
import { validationRules } from 'components/Form/validationRules';
import Input from 'components/Input/Input';
import Modal from 'components/Modal/Modal';
import { ModalProps } from 'components/Modal/Modal.type';
import { useLoading } from 'context/LoadingContext';
import { useForm } from 'hooks/useForm';
import { TClient } from 'models/TClient';
import { addClient } from 'store/slices/clients/clients.slice';
import { v4 as uuidv4 } from 'uuid';

import { ECreateClientFormFields, TFormValues } from './CreateClientModal.type';

type CreateModalProps = ModalProps;

const CreateClientModal = ({ open, toggleModal }: CreateModalProps) => {
  const dispatch = useDispatch();
  const { form } = useForm<TFormValues>();

  const { isLoading, setLoading } = useLoading();

  const onClientCreate = async () => {
    try {
      const value = await form.validateFields();

      // Simulate a loading process
      setLoading(true);
      setTimeout(() => {
        const id = uuidv4();

        const newClient: TClient = {
          id,
          ...value,
        };

        dispatch(addClient(newClient));

        toggleModal(false);
        // toggle loading off
        setLoading(false);
      }, 3000);
    } catch (error) {
      notification.error({
        message: 'Error',
        description: 'Unable to save form. Please try again.',
      });
    }
  };

  const closeModal = () => toggleModal(false);

  return (
    <Modal
      title="Create a New Client"
      open={open}
      onOk={onClientCreate}
      onCancel={closeModal}
      destroyOnClose
      footer={[
        <Button key="cancel" disabled={isLoading} onClick={closeModal}>
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          loading={isLoading}
          onClick={onClientCreate}
        >
          Create
        </Button>,
      ]}
    >
      <Form form={form}>
        <Flex vertical gap={16}>
          <FormItem
            label="Company Name"
            name={ECreateClientFormFields.BUSINESS_NAME}
            rules={[validationRules.required()]}
          >
            <Input placeholder="Company Name" />
          </FormItem>
          <FormItem
            label="Contact Name"
            name={ECreateClientFormFields.CLIENT_NAME}
            rules={[validationRules.required()]}
          >
            <Input placeholder="Contact Name" />
          </FormItem>
          <FormItem
            label="Contact Email"
            name={ECreateClientFormFields.EMAIL}
            rules={[validationRules.required(), validationRules.email()]}
          >
            <Input placeholder="email@address.com" />
          </FormItem>
        </Flex>
      </Form>
    </Modal>
  );
};
export default CreateClientModal;
