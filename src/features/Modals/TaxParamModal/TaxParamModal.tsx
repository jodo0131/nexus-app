import React from 'react';
import { useSelector } from 'react-redux';
import { Flex } from 'antd';
import Button, { SecondaryButton } from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import { Text, TitleSubtitle } from 'components/Typography/Typography';
import { InitialState } from 'store/state';

export const TAXPARAMS_MODE = {
  CREATE: 'create',
  EDIT: 'edit',
} as const;

export type TaxParamModalMode =
  (typeof TAXPARAMS_MODE)[keyof typeof TAXPARAMS_MODE];

type TaxParamModalProps = {
  open: boolean;
  title?: string;
  subtitle?: string;
  onCancel: () => void;
  onEdit: () => void;
  onCreate: () => void;
  mode: TaxParamModalMode;
  children: React.ReactNode;
};

const TaxParamModal = ({
  open,
  title,
  subtitle,
  onCancel,
  onEdit,
  onCreate,
  mode,
  children,
}: TaxParamModalProps) => {
  const selectedTaxForm = useSelector(
    (state: InitialState) => state.currentTaxform,
  );

  return (
    <Modal
      title={
        <Flex vertical>
          <Text>{selectedTaxForm?.year}</Text>
          <TitleSubtitle level={2} title={title} subtitle={subtitle} />
        </Flex>
      }
      open={open}
      onCancel={onCancel}
      destroyOnClose
      footer={
        <Flex justify="space-between" style={{ width: '100%' }}>
          <Button onClick={onCancel}>Cancel</Button>
          <Flex gap={8}>
            <SecondaryButton onClick={onEdit}>Save & Close</SecondaryButton>
            {mode === 'create' && (
              <Button type="primary" onClick={onCreate}>
                Save & Next
              </Button>
            )}
          </Flex>
        </Flex>
      }
    >
      {children}
    </Modal>
  );
};

export default TaxParamModal;
