import { ModalProps } from 'components/Modal/Modal.type';
import { TaxParamModalMode } from 'features/Modals/TaxParamModal/TaxParamModal';
import {
  TTaxParamStateIncomeValue,
  TTaxParamStateMethodValue,
  TTaxParamStateValue,
} from 'models/TTaxParam';

export enum EStateIncome {
  STATE = 'state',
  INCOME = 'income',
}

type TBaseField = {
  name: string;
  label: string;
  required?: boolean;
};

type TStateIncomeField = TBaseField & {
  description?: string;
};

type TStateMethodField = TBaseField & {
  question?: string;
};

type TFields = TBaseField[] | TStateIncomeField[] | TStateMethodField[];

export type TStateFormValues = string;
export type TStateIncomeFormValues = {
  [key: string]: {
    income: number;
  };
};

export type TaxParamProps = ModalProps & {
  title?: string;
  subtitle?: string;
  fields?: TFields;
  mode?: TaxParamModalMode;
  next?: () => void;
  toggleModal: (open: boolean) => void;
};

export type TaxParamsStateProps = {
  type: 'state';
  onSave?: (values: TTaxParamStateValue[]) => void;
  defaultValues?: TTaxParamStateValue[];
} & TaxParamProps;

export type TaxParamsStateMethodProps = {
  type: 'state-method';
  onSave?: (values: TTaxParamStateMethodValue[]) => void;
  defaultValues?: TTaxParamStateMethodValue[];
} & TaxParamProps;

export type TaxParamsStateIncomeProps = {
  type: 'state-income';
  onSave?: (values: TTaxParamStateIncomeValue[]) => void;
  defaultValues?: TTaxParamStateIncomeValue[];
} & TaxParamProps;

export type TaxParamsTypeProps =
  | TaxParamsStateProps
  | TaxParamsStateMethodProps
  | TaxParamsStateIncomeProps;
