import { TTaxParamValues } from './TTaxParam';

export type TTaxForm = {
  id?: string; // This is the id for the tax form
  clientId?: string; // This is the id of the client that created the tax form
  year: number; // This is the year of the tax form, This is the id for the tax form
  compiledDate?: string; // This is the date the tax form was compiled
  salesForm: TTaxParamValues;
  payrollForm: TTaxParamValues;
  equipmentValueForm: TTaxParamValues;
  advertisingForm: TTaxParamValues;
  transportationForm: TTaxParamValues;
  franchisingForm: TTaxParamValues;
  thirdPartyServicesForm: TTaxParamValues;
  employeeTravelForm: TTaxParamValues;
  businessRegistrationForm: TTaxParamValues;
  ownershipInterestForm: TTaxParamValues;
  independentContractorForm: TTaxParamValues;
  bankAccountsForm: TTaxParamValues;
  loansForm: TTaxParamValues;
  copyrightPatentsIntangiblesForm: TTaxParamValues;
  callCenterForm: TTaxParamValues;
  manufactureEquipmentForm: TTaxParamValues;
  meetingPlacesForm: TTaxParamValues;
  mobileStoreForm: TTaxParamValues;
  officePlaceBusinessForm: TTaxParamValues;
  partsDepartmentForm: TTaxParamValues;
  retailPropertyFixturesForm: TTaxParamValues;
  repairShopForm: TTaxParamValues;
  sampleDisplayRoomForm: TTaxParamValues;
  goodsConsignmentForm: TTaxParamValues;
  warehouseProductsForm: TTaxParamValues;
  consultingServicesForm: TTaxParamValues;
  employeeLeasingPersonnelServicesForm: TTaxParamValues;
  managementServicesForm: TTaxParamValues;
};
