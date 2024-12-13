import { useMemo, useState } from 'react';
import { Flex, notification } from 'antd';
import { Form } from 'components/Form/Form';
import StateSelect from 'components/StateSelect/StateSelect';
import TaxParamModal from 'features/Modals/TaxParamModal/TaxParamModal';
import { mapStateIncomeValues } from 'helpers/mapStateIncomeValues';
import { unmapStateIncomeValues } from 'helpers/unmapStateIncomValues';
import { useForm } from 'hooks/useForm';
import { TStateValue } from 'models/TState';

import { TaxParamsStateIncomeProps } from '../TaxParams.type';
import IncomePerState from './IncomePerState';

type TStateIncomeFormValue = {
  [state in TStateValue]: { income: number };
};

const StatesIncomeTaxParam = ({
  title,
  subtitle,
  fields,
  onSave,
  mode = 'create',
  open,
  toggleModal,
  next,
  defaultValues,
}: TaxParamsStateIncomeProps) => {
  const { form } = useForm<TStateIncomeFormValue>();
  const [openSelect, setOpenSelect] = useState(false);

  const extractedStates = defaultValues?.map((value) => value.state);

  const [states, setStates] = useState<TStateValue[]>(extractedStates || []);

  console.log('states: ', extractedStates);
  console.log('defaultValues: ', defaultValues);

  const initialValues = useMemo(
    () => defaultValues && unmapStateIncomeValues(defaultValues),
    [defaultValues],
  );

  const onCountrySelect = (selectedStates: TStateValue[]) => {
    setStates(selectedStates);
  };

  const onSaveTaxForm = async (onSuccess: () => void) => {
    try {
      const values = await form.validateFields();

      // values is an object with state as key and income as value
      // ie. {CA: {income: 1000}}[]
      // this code converts it to {state: 'CA', income: 1000}[]
      const stateIncomeValues = mapStateIncomeValues(values);

      onSave?.(stateIncomeValues);
      onSuccess();

      // eslint-disable-next-line
    } catch (err) {
      notification.error({
        message: 'Error',
        description: 'Unable to save form. Please try again.',
      });
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

  const resetTaxForm = () => {
    setStates(extractedStates || []);

    toggleModal(false);
  };

  return (
    <TaxParamModal
      open={open}
      title={title}
      subtitle={subtitle}
      onCancel={resetTaxForm}
      onEdit={onEditTaxForm}
      onCreate={onCreateTaxForm}
      mode={mode}
    >
      <Form form={form} initialValues={initialValues}>
        <Flex vertical gap={16}>
          {fields?.map((field) => {
            if (field.name === 'state') {
              return (
                <StateSelect
                  key={field.name}
                  label={field.label}
                  open={openSelect}
                  onClick={() => setOpenSelect((previous) => !previous)}
                  values={states}
                  onChange={onCountrySelect}
                />
              );
            }
            if (field.name === 'income') {
              return (
                <IncomePerState
                  key={field.name}
                  field={field}
                  states={states}
                />
              );
            }
            // Return null if no conditions match
            return null;
          })}
        </Flex>
      </Form>
    </TaxParamModal>
  );
};
export default StatesIncomeTaxParam;
