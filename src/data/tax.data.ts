import { TTaxForm } from 'models/TTaxForm';

export const EMPTY_TAXFORM: TTaxForm = {
  year: 0,
  salesForm: { type: 'state-income', values: [] },
  payrollForm: { type: 'state-income', values: [] },
  equipmentValueForm: { type: 'state-income', values: [] },
  advertisingForm: { type: 'state-method', values: [] },
  transportationForm: { type: 'state-method', values: [] },
  franchisingForm: { type: 'state-method', values: [] },
  thirdPartyServicesForm: { type: 'state-method', values: [] },
  employeeTravelForm: { type: 'state-method', values: [] },
  businessRegistrationForm: { type: 'state', values: [] },
  ownershipInterestForm: { type: 'state', values: [] },
  independentContractorForm: { type: 'state', values: [] },
  bankAccountsForm: { type: 'state', values: [] },
  loansForm: { type: 'state', values: [] },
  copyrightPatentsIntangiblesForm: { type: 'state', values: [] },
  callCenterForm: { type: 'state', values: [] },
  manufactureEquipmentForm: { type: 'state', values: [] },
  meetingPlacesForm: { type: 'state', values: [] },
  mobileStoreForm: { type: 'state', values: [] },
  officePlaceBusinessForm: { type: 'state', values: [] },
  partsDepartmentForm: { type: 'state', values: [] },
  retailPropertyFixturesForm: { type: 'state', values: [] },
  repairShopForm: { type: 'state', values: [] },
  sampleDisplayRoomForm: { type: 'state', values: [] },
  goodsConsignmentForm: { type: 'state', values: [] },
  warehouseProductsForm: { type: 'state', values: [] },
  consultingServicesForm: { type: 'state', values: [] },
  employeeLeasingPersonnelServicesForm: { type: 'state', values: [] },
  managementServicesForm: { type: 'state', values: [] },
};

export const TAXFORM1: TTaxForm = {
  id: 'taxform-2024',
  year: 2024,
  compiledDate: '2024-01-01',
  salesForm: {
    type: 'state-income',
    values: [],
  },
  payrollForm: {
    type: 'state-income',
    values: [],
  },
  equipmentValueForm: {
    type: 'state-income',
    values: [],
  },
  advertisingForm: {
    type: 'state-method',
    values: [],
  },
  transportationForm: {
    type: 'state-method',
    values: [],
  },
  franchisingForm: {
    type: 'state-method',
    values: [],
  },
  thirdPartyServicesForm: {
    type: 'state-method',
    values: [],
  },
  employeeTravelForm: {
    type: 'state-method',
    values: [],
  },
  businessRegistrationForm: { type: 'state', values: ['CA', 'NY', 'TX', 'FL'] },
  ownershipInterestForm: {
    type: 'state',
    values: ['CA', 'NY', 'TX', 'FL', 'WA', 'OR'],
  },
  independentContractorForm: {
    type: 'state',
    values: ['CA', 'NY', 'TX', 'FL', 'WA', 'OR'],
  },
  bankAccountsForm: {
    type: 'state',
    values: ['CA', 'NY', 'TX', 'FL', 'WA', 'OR'],
  },
  loansForm: { type: 'state', values: ['CA', 'NY', 'TX', 'FL', 'WA', 'OR'] },
  copyrightPatentsIntangiblesForm: {
    type: 'state',
    values: ['CA', 'NY', 'TX', 'FL', 'WA', 'OR'],
  },
  callCenterForm: {
    type: 'state',
    values: ['CA', 'NY', 'TX', 'FL', 'WA', 'OR'],
  },
  manufactureEquipmentForm: {
    type: 'state',
    values: ['CA', 'NY', 'TX', 'FL', 'WA', 'OR'],
  },
  meetingPlacesForm: {
    type: 'state',
    values: ['CA', 'NY', 'TX', 'FL', 'WA', 'OR'],
  },
  mobileStoreForm: {
    type: 'state',
    values: ['CA', 'NY', 'TX', 'FL', 'WA', 'OR'],
  },
  officePlaceBusinessForm: {
    type: 'state',
    values: ['CA', 'NY', 'TX', 'FL', 'WA', 'OR'],
  },
  partsDepartmentForm: {
    type: 'state',
    values: ['CA', 'NY', 'TX', 'FL', 'WA', 'OR'],
  },
  retailPropertyFixturesForm: {
    type: 'state',
    values: ['CA', 'NY', 'TX', 'FL', 'WA', 'OR'],
  },
  repairShopForm: {
    type: 'state',
    values: ['CA', 'NY', 'TX', 'FL', 'WA', 'OR'],
  },
  sampleDisplayRoomForm: {
    type: 'state',
    values: ['CA', 'NY', 'TX', 'FL', 'WA', 'OR'],
  },
  goodsConsignmentForm: {
    type: 'state',
    values: ['CA', 'NY', 'TX', 'FL', 'WA', 'OR'],
  },
  warehouseProductsForm: {
    type: 'state',
    values: ['CA', 'NY', 'TX', 'FL', 'WA', 'OR'],
  },
  consultingServicesForm: {
    type: 'state',
    values: ['CA', 'NY', 'TX', 'FL', 'WA', 'OR'],
  },
  employeeLeasingPersonnelServicesForm: {
    type: 'state',
    values: ['CA', 'NY', 'TX', 'FL', 'WA'],
  },
  managementServicesForm: {
    type: 'state',
    values: ['CA', 'NY', 'TX', 'FL', 'WA', 'OR'],
  },
};

export const TAXFORM2: TTaxForm = {
  id: 'taxform-2023',
  year: 2023,
  compiledDate: '2023-01-01',
  salesForm: {
    type: 'state-income',
    values: [],
  },
  payrollForm: {
    type: 'state-income',
    values: [],
  },
  equipmentValueForm: {
    type: 'state-income',
    values: [],
  },
  advertisingForm: {
    type: 'state-method',
    values: [],
  },
  transportationForm: {
    type: 'state-method',
    values: [],
  },
  franchisingForm: {
    type: 'state-method',
    values: [],
  },
  thirdPartyServicesForm: {
    type: 'state-method',
    values: [],
  },
  employeeTravelForm: {
    type: 'state-method',
    values: [],
  },
  businessRegistrationForm: { type: 'state', values: ['CA', 'NY', 'TX', 'FL'] },
  ownershipInterestForm: {
    type: 'state',
    values: ['CA', 'NY', 'TX', 'FL', 'WA', 'OR'],
  },
  independentContractorForm: {
    type: 'state',
    values: ['CA', 'NY', 'TX', 'FL', 'WA', 'OR'],
  },
  bankAccountsForm: {
    type: 'state',
    values: ['CA', 'NY', 'TX', 'FL', 'WA', 'OR'],
  },
  loansForm: { type: 'state', values: ['CA', 'NY', 'TX', 'FL', 'WA', 'OR'] },
  copyrightPatentsIntangiblesForm: {
    type: 'state',
    values: ['CA', 'NY', 'TX', 'FL', 'WA', 'OR'],
  },
  callCenterForm: {
    type: 'state',
    values: ['CA', 'NY', 'TX', 'FL', 'WA', 'OR'],
  },
  manufactureEquipmentForm: {
    type: 'state',
    values: ['CA', 'NY', 'TX', 'FL', 'WA', 'OR'],
  },
  meetingPlacesForm: {
    type: 'state',
    values: ['CA', 'NY', 'TX', 'FL', 'WA', 'OR'],
  },
  mobileStoreForm: {
    type: 'state',
    values: ['CA', 'NY', 'TX', 'FL', 'WA', 'OR'],
  },
  officePlaceBusinessForm: {
    type: 'state',
    values: ['CA', 'NY', 'TX', 'FL', 'WA', 'OR'],
  },
  partsDepartmentForm: {
    type: 'state',
    values: ['CA', 'NY', 'TX', 'FL', 'WA', 'OR'],
  },
  retailPropertyFixturesForm: {
    type: 'state',
    values: ['CA', 'NY', 'TX', 'FL', 'WA', 'OR'],
  },
  repairShopForm: {
    type: 'state',
    values: ['CA', 'NY', 'TX', 'FL', 'WA', 'OR'],
  },
  sampleDisplayRoomForm: {
    type: 'state',
    values: ['CA', 'NY', 'TX', 'FL', 'WA', 'OR'],
  },
  goodsConsignmentForm: {
    type: 'state',
    values: ['CA', 'NY', 'TX', 'FL', 'WA', 'OR'],
  },
  warehouseProductsForm: {
    type: 'state',
    values: ['CA', 'NY', 'TX', 'FL', 'WA', 'OR'],
  },
  consultingServicesForm: {
    type: 'state',
    values: ['CA', 'NY', 'TX', 'FL', 'WA', 'OR'],
  },
  employeeLeasingPersonnelServicesForm: {
    type: 'state',
    values: ['CA', 'NY', 'TX', 'FL', 'WA'],
  },
  managementServicesForm: {
    type: 'state',
    values: ['CA', 'NY', 'TX', 'FL', 'WA', 'OR'],
  },
};

export const TAXFORM3: TTaxForm = {
  id: 'taxform-2022',
  year: 2022,
  compiledDate: '2022-01-01',
  salesForm: {
    type: 'state-income',
    values: [],
  },
  payrollForm: {
    type: 'state-income',
    values: [],
  },
  equipmentValueForm: {
    type: 'state-income',
    values: [],
  },
  advertisingForm: {
    type: 'state-method',
    values: [],
  },
  transportationForm: {
    type: 'state-method',
    values: [],
  },
  franchisingForm: {
    type: 'state-method',
    values: [],
  },
  thirdPartyServicesForm: {
    type: 'state-method',
    values: [],
  },
  employeeTravelForm: {
    type: 'state-method',
    values: [],
  },
  businessRegistrationForm: { type: 'state', values: ['CA', 'NY', 'TX', 'FL'] },
  ownershipInterestForm: {
    type: 'state',
    values: ['CA', 'NY', 'TX', 'FL', 'WA', 'OR'],
  },
  independentContractorForm: {
    type: 'state',
    values: ['CA', 'NY', 'TX', 'FL', 'WA', 'OR'],
  },
  bankAccountsForm: {
    type: 'state',
    values: ['CA', 'NY', 'TX', 'FL', 'WA', 'OR'],
  },
  loansForm: { type: 'state', values: ['CA', 'NY', 'TX', 'FL', 'WA', 'OR'] },
  copyrightPatentsIntangiblesForm: {
    type: 'state',
    values: ['CA', 'NY', 'TX', 'FL', 'WA', 'OR'],
  },
  callCenterForm: {
    type: 'state',
    values: ['CA', 'NY', 'TX', 'FL', 'WA', 'OR'],
  },
  manufactureEquipmentForm: {
    type: 'state',
    values: ['CA', 'NY', 'TX', 'FL', 'WA', 'OR'],
  },
  meetingPlacesForm: {
    type: 'state',
    values: ['CA', 'NY', 'TX', 'FL', 'WA', 'OR'],
  },
  mobileStoreForm: {
    type: 'state',
    values: ['CA', 'NY', 'TX', 'FL', 'WA', 'OR'],
  },
  officePlaceBusinessForm: {
    type: 'state',
    values: ['CA', 'NY', 'TX', 'FL', 'WA', 'OR'],
  },
  partsDepartmentForm: {
    type: 'state',
    values: ['CA', 'NY', 'TX', 'FL', 'WA', 'OR'],
  },
  retailPropertyFixturesForm: {
    type: 'state',
    values: ['CA', 'NY', 'TX', 'FL', 'WA', 'OR'],
  },
  repairShopForm: {
    type: 'state',
    values: ['CA', 'NY', 'TX', 'FL', 'WA', 'OR'],
  },
  sampleDisplayRoomForm: {
    type: 'state',
    values: ['CA', 'NY', 'TX', 'FL', 'WA', 'OR'],
  },
  goodsConsignmentForm: {
    type: 'state',
    values: ['CA', 'NY', 'TX', 'FL', 'WA', 'OR'],
  },
  warehouseProductsForm: {
    type: 'state',
    values: ['CA', 'NY', 'TX', 'FL', 'WA', 'OR'],
  },
  consultingServicesForm: {
    type: 'state',
    values: ['CA', 'NY', 'TX', 'FL', 'WA', 'OR'],
  },
  employeeLeasingPersonnelServicesForm: {
    type: 'state',
    values: ['CA', 'NY', 'TX', 'FL', 'WA'],
  },
  managementServicesForm: {
    type: 'state',
    values: ['CA', 'NY', 'TX', 'FL', 'WA', 'OR'],
  },
};
