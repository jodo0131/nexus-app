export enum AccountProfileFormFields {
  FULL_NAME = 'fullName',
  EMAIL = 'email',
  PASSWORD = 'password',
}
export type TFormValues = {
  [AccountProfileFormFields.FULL_NAME]: string;
  [AccountProfileFormFields.EMAIL]: string;
  [AccountProfileFormFields.PASSWORD]: string;
};
