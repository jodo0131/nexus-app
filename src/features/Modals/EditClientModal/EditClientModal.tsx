import { useDispatch, useSelector } from 'react-redux';
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
import { setSelectedClient } from 'store/slices/selected/selected.slice';
import { InitialState } from 'store/state';

import { EditClientFormFields } from './EditClientModal.type';

type EditClientProps = ModalProps;

const EditClientModal = ({ open, toggleModal }: EditClientProps) => {
  const dispatch = useDispatch();

  const selectedClient = useSelector(
    (state: InitialState) => state?.selected?.selectedClient,
  );

  const initialValues = {
    [EditClientFormFields.BUSINESS_NAME]: selectedClient?.businessName,
    [EditClientFormFields.CLIENT_NAME]: selectedClient?.clientName,
    [EditClientFormFields.EMAIL]: selectedClient?.email,
  };

  const { form } = useForm<TClient>();

  const { isLoading, setLoading } = useLoading();

  const onEditClient = async () => {
    try {
      const updatedClient = await form.validateFields();

      // Simulate a loading process
      setLoading(true);
      setTimeout(() => {
        dispatch(setSelectedClient(updatedClient));

        toggleModal(false);
        // toggle loading off
        setLoading(false);
      }, 3000);

      // eslint-disable-next-line
    } catch (error) {
      notification.error({
        message: 'Error',
        description: 'Unable to save form. Please try again. ',
      });
    }
  };

  const closeModal = () => toggleModal(false);

  return (
    <Modal
      title="Edit Client"
      open={open}
      onOk={onEditClient}
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
          onClick={onEditClient}
        >
          Save
        </Button>,
      ]}
    >
      <Form form={form} initialValues={initialValues}>
        <Flex vertical gap={16}>
          <FormItem
            label="Company Name"
            name={EditClientFormFields.BUSINESS_NAME}
            rules={[validationRules.required()]}
          >
            <Input placeholder="Company Name" />
          </FormItem>
          <FormItem
            label="Contact Name"
            name={EditClientFormFields.CLIENT_NAME}
            rules={[validationRules.required()]}
          >
            <Input placeholder="Contact Name" />
          </FormItem>
          <FormItem
            label="Contact Email"
            name={EditClientFormFields.EMAIL}
            rules={[validationRules.required(), validationRules.email()]}
          >
            <Input placeholder="email@address.com" />
          </FormItem>
        </Flex>
      </Form>
    </Modal>
  );
};
export default EditClientModal;
