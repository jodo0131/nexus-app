/* eslint-disable @typescript-eslint/no-explicit-any */
import { RuleObject } from 'antd/lib/form';
import dayjs from 'dayjs';

import { TRegexPatters, TValidationRules } from './validationRules.types';

export const regexPatterns: TRegexPatters = {
  oneUpperCase: /[A-Z]+/,
  oneLowerCase: /[a-z]+/,
  oneNumber: /\d/,
  oneSymbol: /[*@!#%&$_+=?.<>;:'"/()^~{}]+/,
  letters8: /.{8,}/,
  phoneNumber: /^[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/, // without +1 , (xxx) yyy-zzzz
  domainName: /^((?!-)[A-Za-z0-9-]{1,63}(?!-)\.)+[A-Za-z]{2,6}$/,
  url: /[(http(s)?):(www)?a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/,
  onlyWhiteSpace: /.*[^ ].*/,
  subDomain: /^[a-z][a-z0-9.-]+[a-z0-9]$/,
  emailsSeparatedWithComma: /^([\w+-.%]+@[\w-.]+\.[A-Za-z]{2,}(\s*,?\s*)*)+$/,
  onlyEnglishLetters: /^[a-zA-Z\s]*$/,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
};

export const passwordValidationRegex: RuleObject[] = [
  { type: 'regexp', pattern: regexPatterns.oneUpperCase },
  { type: 'regexp', pattern: regexPatterns.oneLowerCase },
  { type: 'regexp', pattern: regexPatterns.oneNumber },
  { type: 'regexp', pattern: regexPatterns.oneSymbol },
  { type: 'regexp', pattern: regexPatterns.letters8 },
];

export const passwordValidator = (
  value: string,
  // rulesCount: number,
): boolean => {
  // let count = 0;
  // passwordValidationRegex.forEach((rule: RuleObject) => {
  //   if (rule.pattern?.test(value)) {
  //     count += 1;
  //   }
  // });
  if (regexPatterns.letters8.test(value)) {
    return true;
  }
  return false;
};

export const validationRules: TValidationRules = {
  required: (fieldName) => ({
    validator(_: RuleObject, value: any) {
      if (
        (typeof value === 'string' && value.trim()) ||
        (typeof value !== 'string' && !!value)
      ) {
        return Promise.resolve();
      }
      return Promise.reject(
        new Error(
          fieldName
            ? `The ${fieldName} is required!`
            : 'This field is required!',
        ),
      );
    },
  }),
  requiredField: (fieldName) => ({
    required: true,
    message: fieldName
      ? `The ${fieldName} is required!`
      : 'This field is required!',
  }),
  email: () => ({
    type: 'email',
    message: 'Incorrect email address!',
  }),
  multipleEmails: () => ({
    pattern: regexPatterns.emailsSeparatedWithComma,
    message: 'Incorrect email address!',
  }),
  phoneNumber: () => ({
    pattern: regexPatterns.phoneNumber,
    message: 'Invalid mobile number format!',
  }),
  withoutSpace: (fieldName) => ({
    validator(_: RuleObject, value) {
      if (!regexPatterns.startEndWhiteSpace.test(value)) {
        return Promise.resolve();
      }
      return Promise.reject(
        new Error(
          fieldName
            ? `${fieldName} can't start or end with white space!`
            : "This field can't start or end with white space!",
        ),
      );
    },
  }),
  password: [
    {
      validator(_: RuleObject, value: any) {
        if (!value?.length) {
          return Promise.reject(new Error('The password is required!'));
        }
        if (passwordValidator(value)) {
          return Promise.resolve();
        }
        return Promise.reject(
          new Error('Password must be at least 8 characters long.'),
        );
      },
    },
  ],
  acceptTerms: [
    {
      validator(_: RuleObject, value: any) {
        if (value) {
          return Promise.resolve();
        }
        return Promise.reject(new Error('Please accept Terms and Conditions!'));
      },
    },
  ],
  passwordConfirm: [
    ({ getFieldValue }) => ({
      validator(_: RuleObject, value: any) {
        if (!value?.length) {
          return Promise.reject(new Error('The confirm password is required!'));
        }
        if (getFieldValue('password') === value) {
          return Promise.resolve();
        }
        return Promise.reject(new Error('The passwords do not match!'));
      },
    }),
  ],
  startTime: [
    ({ getFieldValue, setFields }) => ({
      validator(_: RuleObject, value: string) {
        if (!value) {
          return Promise.reject(new Error('The field is required!'));
        }
        if (dayjs(getFieldValue('endTime')).isSame(dayjs(value), 'minutes')) {
          return Promise.reject(
            new Error('Start time should not be same as end time!'),
          );
        }
        if (
          !getFieldValue('endTime') ||
          dayjs(getFieldValue('endTime')).isAfter(dayjs(value))
        ) {
          setFields([
            {
              name: 'endTime',
              errors: [],
            },
          ]);
          return Promise.resolve();
        }
        return Promise.reject(
          new Error('The start time must be earlier than end!'),
        );
      },
    }),
  ],
  endTime: [
    ({ getFieldValue, setFields }) => ({
      validator(_: RuleObject, value: string) {
        if (!value) {
          return Promise.reject(new Error('The field is required!'));
        }
        if (dayjs(getFieldValue('startTime')).isSame(dayjs(value), 'minutes')) {
          return Promise.reject(
            new Error('End time should not be same as start time'),
          );
        }
        if (
          !getFieldValue('startTime') ||
          dayjs(getFieldValue('startTime')).isBefore(dayjs(value))
        ) {
          setFields([
            {
              name: 'startTime',
              errors: [],
            },
          ]);
          return Promise.resolve();
        }
        return Promise.reject(
          new Error('The end time must be later than start'),
        );
      },
    }),
  ],
  startDate: [
    ({ getFieldValue, setFields }) => ({
      validator(_: RuleObject, value: string) {
        if (!value) {
          return Promise.reject(new Error('The field is required!'));
        }
        if (
          !getFieldValue('endDate') ||
          dayjs(getFieldValue('endDate')).isAfter(dayjs(value))
        ) {
          setFields([
            {
              name: 'endDate',
              errors: [],
            },
          ]);
          return Promise.resolve();
        }
        return Promise.reject(
          new Error('The start date must be earlier than end'),
        );
      },
    }),
  ],
  endDate: [
    ({ getFieldValue, setFields }) => ({
      validator(_: RuleObject, value: string) {
        if (!value) {
          return Promise.reject(new Error('The field is required!'));
        }
        if (
          !getFieldValue('startDate') ||
          dayjs(getFieldValue('startDate')).isBefore(dayjs(value))
        ) {
          setFields([
            {
              name: 'startDate',
              errors: [],
            },
          ]);
          return Promise.resolve();
        }
        return Promise.reject(
          new Error('The end date must be later than start!'),
        );
      },
    }),
  ],
  endDateOptional: [
    ({ getFieldValue, setFields }) => ({
      validator(_: RuleObject, value: string) {
        if (!value) {
          return Promise.resolve();
        }
        if (
          !getFieldValue('startDate') ||
          dayjs(getFieldValue('startDate')).isBefore(dayjs(value))
        ) {
          setFields([
            {
              name: 'startDate',
              errors: [],
            },
          ]);
          return Promise.resolve();
        }
        return Promise.reject(
          new Error('The end date must be later than start!'),
        );
      },
    }),
  ],
  startTimeOptional: [
    ({ getFieldValue, setFields }) => ({
      validator(_: RuleObject, value: string) {
        if (
          !getFieldValue('endTime') ||
          dayjs(getFieldValue('endTime')).isAfter(dayjs(value))
        ) {
          setFields([
            {
              name: 'endTime',
              errors: [],
            },
          ]);
          return Promise.resolve();
        }
        return Promise.reject(
          new Error('The start time must be earlier than end!'),
        );
      },
    }),
  ],
  endTimeOptional: [
    ({ getFieldValue, setFields }) => ({
      validator(_: RuleObject, value: string) {
        if (
          !getFieldValue('startTime') ||
          dayjs(getFieldValue('startTime')).isBefore(dayjs(value))
        ) {
          setFields([
            {
              name: 'startTime',
              errors: [],
            },
          ]);
          return Promise.resolve();
        }
        return Promise.reject(
          new Error('The end time must be later than start!'),
        );
      },
    }),
  ],
  integerMoreThanZeroOptional: () => ({
    validator(_: RuleObject, value: any) {
      if (value > 0 || !value) {
        return Promise.resolve();
      }
      return Promise.reject(new Error('The value should not be negative!'));
    },
  }),
  integerFromZeroToHundred: () => ({
    validator(_: RuleObject, value: any) {
      if ((value >= 0 && value <= 100) || !value) {
        return Promise.resolve();
      }
      return Promise.reject(
        new Error('The value should be between 0 and 100!'),
      );
    },
  }),
  integerWithDecimalsRequired: () => ({
    validator(_: RuleObject, value: any) {
      if (!value || Number.isNaN(+value)) {
        return Promise.reject(new Error('This field is required!'));
      }
      if (!value.match(/^[+-](\d*\.)?\d+$/g)) {
        return Promise.resolve();
      }
      return Promise.reject(new Error('The value should be positive number!'));
    },
  }),
  integerWithDecimalsOptional: () => ({
    validator(_: RuleObject, value: any) {
      if (!value.match(/^[+-](\d*\.)?\d+$/g)) {
        return Promise.resolve();
      }
      return Promise.reject(new Error('The value should be positive number!'));
    },
  }),

  integerOptional: () => ({
    validator(_: RuleObject, value: any) {
      if (!value.match(/[^\d]/g)) {
        return Promise.resolve();
      }
      return Promise.reject(new Error('The value should be positive number!'));
    },
  }),
  onePointDecimal: () => ({
    validator(_: RuleObject, value: any) {
      if (!!value && !!value.split('.')[1]) {
        if (value.split('.')[1].length > 1) {
          return Promise.reject(
            new Error('The value should contain one decimal!'),
          );
        }
      }
      return Promise.resolve();
    },
  }),
  domainNameOptional: () => ({
    validator(_: RuleObject, value: string[]) {
      if (
        !value ||
        !value.length ||
        value.every((item) => item.match(regexPatterns.domainName))
      ) {
        return Promise.resolve();
      }
      return Promise.reject(new Error('Invalid domain name!'));
    },
  }),
  onlyEnglishLetters: () => ({
    pattern: regexPatterns.onlyEnglishLetters,
    message: 'Only english letters are allowed!',
  }),
  address: () => ({
    validator(_: RuleObject, value: Record<string, string>) {
      if (Object.values(value).some((item) => !item)) {
        return Promise.reject(new Error('Please provide a correct address!'));
      }
      if (value.state && value.state.toLowerCase() !== 'idaho') {
        return Promise.reject(new Error('Please provide an address in Idaho!'));
      }
      return Promise.resolve();
    },
  }),
  validUrl: () => ({
    validator(_: RuleObject, value: string) {
      if (value) {
        try {
          // eslint-disable-next-line no-new
          new URL(value);
          return Promise.resolve();
        } catch (error) {
          return Promise.reject(
            new Error(
              'The provided URL is invalid․ Please check the URL and try again.',
            ),
          );
        }
      }
      return Promise.resolve();
    },
  }),
};
