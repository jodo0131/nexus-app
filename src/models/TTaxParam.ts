import { TStateValue } from './TState';

export const TAXPARAM_TYPE = {
  STATE: 'state',
  INCOME: 'state-income',
  METHOD: 'state-method',
} as const;

export type TaxParamType = (typeof TAXPARAM_TYPE)[keyof typeof TAXPARAM_TYPE];

export type TTaxParamStateIncomeValue = {
  state: TStateValue;
  income: number;
};

export type TTaxParamStateMethodValue = {
  method: string;
  state: TStateValue[];
};

// export type TTaxParamStateMethodValue = {
//   [method: string]: { state: TStateValue[] };
// };

// export type TTaxParamStateIncomeValue = {
//   [key in TStateValue]: { income: number };
// };

// export type TTaxParamStateMethodValue = {
//   [method: string]: { state: TStateValue[] };
// };

export type TTaxParamStateValue = TStateValue;

export type TTaxParamValues = {
  type: TaxParamType;
  values:
    | TTaxParamStateIncomeValue[]
    | TTaxParamStateMethodValue[]
    | TTaxParamStateValue[];
};
