import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Checkbox, Flex, notification, Radio } from 'antd';
import { Form, FormItem } from 'components/Form/Form';
import TaxParamModal from 'features/Modals/TaxParamModal/TaxParamModal';
import { useForm } from 'hooks/useForm';
import { TTaxParamStateMethodValue } from 'models/TTaxParam';
import { InitialState } from 'store/state';

import { TaxParamsStateMethodProps } from '../TaxParams.type';
import StateMethodSelect from './StateMethod';

const StatesMethodTaxParam = ({
  title,
  subtitle,
  fields,
  onSave,
  mode = 'create',
  open,
  toggleModal,
  next,
  defaultValues,
}: TaxParamsStateMethodProps) => {
  const selectedTaxForm = useSelector(
    (state: InitialState) => state.currentTaxform,
  );
  const { form } = useForm<string[]>();

  const [methods, setMethods] = useState<TTaxParamStateMethodValue[]>([]);

  const [isApplicable, setIsApplicable] = useState(
    defaultValues?.length ?? false,
  );

  const isApplicableField = useMemo(
    () => (fields ? fields[0] : null),
    [fields],
  );

  const otherFields = useMemo(() => (fields ? fields.slice(1) : []), [fields]);

  const isNotApplicableChecked = useMemo(
    () => methods.some((obj) => 'notApplicable' in obj),
    [methods],
  );

  const onSaveTaxForm = async (onSuccess: () => void) => {
    try {
      const hasEmptyStates = methods.some(
        (method) => method.state.length === 0,
      );

      if (hasEmptyStates) {
        notification.error({
          message: 'Error',
          description: 'Please select states for all advertising methods.',
        });
        return;
      }

      if (isApplicable && methods.length === 0) {
        notification.error({
          message: 'Error',
          description: 'Please select at least one advertising method.',
        });
        return;
      }

      onSave?.(methods);

      onSuccess();
      // eslint-disable-next-line
    } catch (err) {
      notification.error({
        message: 'Error',
        description: 'Unable to save form. Please try again.',
      });
    }
  };

  const handleMethodsChange = (selectedMethods: string[]) => {
    if (selectedMethods.includes('notApplicable')) {
      // reset the methods if notApplicable is selected
      // form.setFieldsValue({ methods: ['notApplicable'] });
      // clear the form
      form.setFieldsValue([]);
    } else if (selectedMethods.length > 0) {
      // const updatedMethods = selectedMethods.map((method) => {
      //   const existingMethod = methods.find(
      //     (m) => Object.keys(m)[0] === method,
      //   );
      //   if (existingMethod) {
      //     return existingMethod;
      //   }
      //   return {
      //     [method]: { state: [] },
      //   };
      // });
      // setMethods(updatedMethods);

      const updatedMethods = selectedMethods.map((method) => {
        const existingMethod = methods.find((m) => m.method === method);
        if (existingMethod) {
          return existingMethod;
        }
        return {
          method,
          state: [],
        };
      });

      setMethods(updatedMethods);
    } else {
      // reset the methods if no methods are selected
      form.setFieldsValue([]);
      setMethods([]);
    }
  };

  const onCreateTaxForm = () => {
    onSaveTaxForm(() => next?.());
  };

  const onEditTaxForm = () => {
    onSaveTaxForm(() => {
      next?.();
      toggleModal(false);
    });
  };

  return (
    <TaxParamModal
      open={open}
      title={title}
      subtitle={subtitle}
      onCancel={() => toggleModal(false)}
      onEdit={onEditTaxForm}
      onCreate={onCreateTaxForm}
      mode={mode}
    >
      <Form
        form={form}
        initialValues={{
          isApplicable,
          methods: methods.map(({ method }) => method),
        }}
        onValuesChange={(changedValues) => {
          if ('isApplicable' in changedValues) {
            setIsApplicable(changedValues.isApplicable);
            handleMethodsChange([]);
          } else {
            handleMethodsChange(changedValues?.methods);
          }
        }}
      >
        <Flex vertical gap={16}>
          {isApplicableField && (
            <FormItem
              name={isApplicableField.name}
              label={isApplicableField.label}
            >
              <Radio.Group
                options={[
                  { label: 'Yes', value: true },
                  { label: 'No', value: false },
                ]}
              />
            </FormItem>
          )}
          {isApplicable && (
            <FormItem
              name="methods"
              label={`Select all the ways the organization advertised in ${selectedTaxForm?.year}`}
            >
              <Checkbox.Group>
                <Flex vertical gap={8}>
                  {otherFields?.map((field) => (
                    <Checkbox
                      key={field.name}
                      value={field.name}
                      disabled={
                        isNotApplicableChecked && field.name !== 'notApplicable'
                      }
                    >
                      {field.label}
                    </Checkbox>
                  ))}
                </Flex>
              </Checkbox.Group>
            </FormItem>
          )}

          <StateMethodSelect
            isNotApplicableChecked={isNotApplicableChecked}
            fields={otherFields}
            methods={methods}
            setMethods={setMethods}
          />
        </Flex>
      </Form>
    </TaxParamModal>
  );
};
export default StatesMethodTaxParam;
