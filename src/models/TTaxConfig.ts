/**
 * This is a type definition for the TaxParams from the TaxParams Config.
 * The TaxParams Config is a list of TaxParams that are used to render the TaxParams form.
 */

export type TBaseField = {
  name: string;
  label: string;
  required?: boolean;
};

export type TStateIncomeField = TBaseField & {
  description?: string;
};

export type TStateMethodField = TBaseField & {
  question?: string;
};

export type TStateConfig = {
  id: string;
  title: string;
  subtitle: string;
  summary?: string;
  pending?: string;
  type: 'state';
  fields: TBaseField[];
};

export type TStateIncomeConfig = {
  id: string;
  title: string;
  subtitle: string;
  summary?: string;
  pending?: string;
  type: 'state-income';
  fields: TStateIncomeField[];
};

export type TStateMethodConfig = {
  id: string;
  title: string;
  subtitle: string;
  summary?: string;
  pending?: string;
  type: 'state-method';
  fields: TStateMethodField[];
};

export type TTaxParamConfig =
  | TStateConfig
  | TStateIncomeConfig
  | TStateMethodConfig;
