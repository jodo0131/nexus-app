export enum EditClientFormFields {
  BUSINESS_NAME = 'businessName',
  CLIENT_NAME = 'clientName',
  EMAIL = 'email',
}
export type FormValues = {
  [EditClientFormFields.BUSINESS_NAME]: string;
  [EditClientFormFields.CLIENT_NAME]: string;
  [EditClientFormFields.EMAIL]: string;
};
