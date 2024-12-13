import { useState } from 'react';
import { notification } from 'antd';
import { Form } from 'components/Form/Form';
import StateSelect from 'components/StateSelect/StateSelect';
import TaxParamModal from 'features/Modals/TaxParamModal/TaxParamModal';
import { useForm } from 'hooks/useForm';
import { TStateValue } from 'models/TState';
import { TTaxParamStateValue } from 'models/TTaxParam';

import { TaxParamsStateProps } from '../TaxParams.type';

const StatesTaxParams = ({
  title,
  subtitle = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  fields,
  onSave,
  mode = 'create',
  open,
  toggleModal,
  next,
  defaultValues,
}: TaxParamsStateProps) => {
  const { form } = useForm<TTaxParamStateValue[]>();

  const [openSelect, setOpenSelect] = useState(false);

  const [states, setStates] = useState<TStateValue[]>(defaultValues || []);

  const onCountrySelect = (selectedStates: TStateValue[]) => {
    setStates(selectedStates);
  };

  const onSaveTaxForm = async (onSuccess: () => void) => {
    try {
      onSave?.(states);
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
    setStates(defaultValues || []);
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
      <Form form={form} initialValues={defaultValues}>
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

          // Return null if no conditions match
          return null;
        })}
      </Form>
    </TaxParamModal>
  );
};
export default StatesTaxParams;
