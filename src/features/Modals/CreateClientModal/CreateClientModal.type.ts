export enum ECreateClientFormFields {
  BUSINESS_NAME = 'businessName',
  CLIENT_NAME = 'clientName',
  EMAIL = 'email',
}
export type TFormValues = {
  [ECreateClientFormFields.BUSINESS_NAME]: string;
  [ECreateClientFormFields.CLIENT_NAME]: string;
  [ECreateClientFormFields.EMAIL]: string;
};
