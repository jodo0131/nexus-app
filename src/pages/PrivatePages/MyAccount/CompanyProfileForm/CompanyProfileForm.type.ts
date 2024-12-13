export enum CompanyProfileFormFields {
  COMPANY_NAME = 'companyName',
  LOGO = 'logo',
  BRAND_COLOR = 'brandColor',
}
export type TFormValues = {
  [CompanyProfileFormFields.COMPANY_NAME]: string;
  [CompanyProfileFormFields.LOGO]: string;
  [CompanyProfileFormFields.BRAND_COLOR]: string;
};
