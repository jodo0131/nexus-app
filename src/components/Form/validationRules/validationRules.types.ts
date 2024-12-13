import { Rule, RuleRender } from 'antd/es/form';

export type { default as Rule } from 'antd/es/form';

export type TRegexPatters = {
  [key: string]: RegExp;
};

export type TValidationRules = {
  password: Rule[];
  passwordConfirm: RuleRender[];
  acceptTerms: Rule[];
  startTime: Rule[];
  endTime: Rule[];
  startDate: Rule[];
  endDate: Rule[];
  endDateOptional: Rule[];
  startTimeOptional: Rule[];
  endTimeOptional: Rule[];
  required: (fieldName?: string) => Rule;
  requiredField: (fieldName?: string) => Rule;
  email: () => Rule;
  multipleEmails: () => Rule;
  phoneNumber: () => Rule;
  withoutSpace: (fieldName?: string) => Rule;
  integerMoreThanZeroOptional: () => Rule;
  integerOptional: () => Rule;
  onePointDecimal: () => Rule;
  integerWithDecimalsRequired: () => Rule;
  integerWithDecimalsOptional: () => Rule;
  domainNameOptional: () => Rule;
  integerFromZeroToHundred: () => Rule;
  onlyEnglishLetters: () => Rule;
  address: () => Rule;
  validUrl: () => Rule;
};
