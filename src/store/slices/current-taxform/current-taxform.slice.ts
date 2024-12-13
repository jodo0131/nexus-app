import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TTaxForm } from 'models/TTaxForm';
import { INITIAL_STATE } from 'store/state';

export const currentTaxformSlice = createSlice({
  name: 'year',
  initialState: INITIAL_STATE.currentTaxform,
  reducers: {
    setCurrentTaxform: (_, action: PayloadAction<TTaxForm>) => {
      return action.payload;
    },
    setCurrentTaxformYear: (state, action: PayloadAction<number>) => {
      state.year = action.payload;
    },
    setCurrentTaxformSales: (
      state,
      action: PayloadAction<TTaxForm['salesForm']>,
    ) => {
      state.salesForm = action.payload;
    },
    setCurrentTaxformPayroll: (
      state,
      action: PayloadAction<TTaxForm['payrollForm']>,
    ) => {
      state.payrollForm = action.payload;
    },
    setCurrentTaxformEquipment: (
      state,
      action: PayloadAction<TTaxForm['equipmentValueForm']>,
    ) => {
      state.equipmentValueForm = action.payload;
    },
    setCurrentTaxformAdvertising: (
      state,
      action: PayloadAction<TTaxForm['advertisingForm']>,
    ) => {
      state.advertisingForm = action.payload;
    },
    setCurrentTaxformTransportation: (
      state,
      action: PayloadAction<TTaxForm['employeeTravelForm']>,
    ) => {
      state.transportationForm = action.payload;
    },
    setCurrentTaxformFranchising: (
      state,
      action: PayloadAction<TTaxForm['franchisingForm']>,
    ) => {
      state.franchisingForm = action.payload;
    },
    setCurrentTaxformThirdPartyService: (
      state,
      action: PayloadAction<TTaxForm['thirdPartyServicesForm']>,
    ) => {
      state.thirdPartyServicesForm = action.payload;
    },
    setCurrentTaxformEmployeeTravel: (
      state,
      action: PayloadAction<TTaxForm['employeeTravelForm']>,
    ) => {
      state.employeeTravelForm = action.payload;
    },
    setCurrentTaxformBusinessRegistration: (
      state,
      action: PayloadAction<TTaxForm['businessRegistrationForm']>,
    ) => {
      state.businessRegistrationForm = action.payload;
    },
    setCurrentTaxformOwnershipInterest: (
      state,
      action: PayloadAction<TTaxForm['ownershipInterestForm']>,
    ) => {
      state.ownershipInterestForm = action.payload;
    },
    setCurrentTaxformIndependentContractor: (
      state,
      action: PayloadAction<TTaxForm['independentContractorForm']>,
    ) => {
      state.independentContractorForm = action.payload;
    },
    setCurrentTaxformBankAccounts: (
      state,
      action: PayloadAction<TTaxForm['bankAccountsForm']>,
    ) => {
      state.bankAccountsForm = action.payload;
    },
    setCurrentTaxformLoans: (
      state,
      action: PayloadAction<TTaxForm['loansForm']>,
    ) => {
      state.loansForm = action.payload;
    },
    setCurrentTaxformCopyrightPatents: (
      state,
      action: PayloadAction<TTaxForm['copyrightPatentsIntangiblesForm']>,
    ) => {
      state.copyrightPatentsIntangiblesForm = action.payload;
    },
    setCurrentTaxformCallCenter: (
      state,
      action: PayloadAction<TTaxForm['callCenterForm']>,
    ) => {
      state.callCenterForm = action.payload;
    },
    setCurrentTaxformManufactureEquipment: (
      state,
      action: PayloadAction<TTaxForm['manufactureEquipmentForm']>,
    ) => {
      state.manufactureEquipmentForm = action.payload;
    },
    setCurrentTaxformMeetingPlace: (
      state,
      action: PayloadAction<TTaxForm['meetingPlacesForm']>,
    ) => {
      state.meetingPlacesForm = action.payload;
    },
    setCurrentTaxformMobileStore: (
      state,
      action: PayloadAction<TTaxForm['mobileStoreForm']>,
    ) => {
      state.mobileStoreForm = action.payload;
    },
    setCurrentTaxformPlaceOfBusiness: (
      state,
      action: PayloadAction<TTaxForm['officePlaceBusinessForm']>,
    ) => {
      state.officePlaceBusinessForm = action.payload;
    },
    setCurrentTaxformPartsDepartment: (
      state,
      action: PayloadAction<TTaxForm['partsDepartmentForm']>,
    ) => {
      state.partsDepartmentForm = action.payload;
    },
    setCurrentTaxformRetailPropertyFixtures: (
      state,
      action: PayloadAction<TTaxForm['retailPropertyFixturesForm']>,
    ) => {
      state.retailPropertyFixturesForm = action.payload;
    },
    setCurrentTaxformRepairShop: (
      state,
      action: PayloadAction<TTaxForm['repairShopForm']>,
    ) => {
      state.repairShopForm = action.payload;
    },
    setCurrentTaxformDisplayRoom: (
      state,
      action: PayloadAction<TTaxForm['sampleDisplayRoomForm']>,
    ) => {
      state.sampleDisplayRoomForm = action.payload;
    },
    setCurrentTaxformGoodsConsignment: (
      state,
      action: PayloadAction<TTaxForm['goodsConsignmentForm']>,
    ) => {
      state.goodsConsignmentForm = action.payload;
    },
    setCurrentTaxformWarehouseProducts: (
      state,
      action: PayloadAction<TTaxForm['warehouseProductsForm']>,
    ) => {
      state.warehouseProductsForm = action.payload;
    },
    setCurrentTaxformConsultingServices: (
      state,
      action: PayloadAction<TTaxForm['consultingServicesForm']>,
    ) => {
      state.consultingServicesForm = action.payload;
    },
    setCurrentTaxformEmployeeLeasing: (
      state,
      action: PayloadAction<TTaxForm['employeeLeasingPersonnelServicesForm']>,
    ) => {
      state.employeeLeasingPersonnelServicesForm = action.payload;
    },
    setCurrentTaxformManagementServices: (
      state,
      action: PayloadAction<TTaxForm['managementServicesForm']>,
    ) => {
      state.managementServicesForm = action.payload;
    },
  },
});

export const {
  setCurrentTaxform,
  setCurrentTaxformYear,
  setCurrentTaxformSales,
  setCurrentTaxformPayroll,
  setCurrentTaxformEquipment,
  setCurrentTaxformAdvertising,
  setCurrentTaxformTransportation,
  setCurrentTaxformFranchising,
  setCurrentTaxformThirdPartyService,
  setCurrentTaxformEmployeeTravel,
  setCurrentTaxformBusinessRegistration,
  setCurrentTaxformOwnershipInterest,
  setCurrentTaxformIndependentContractor,
  setCurrentTaxformBankAccounts,
  setCurrentTaxformLoans,
  setCurrentTaxformCopyrightPatents,
  setCurrentTaxformCallCenter,
  setCurrentTaxformManufactureEquipment,
  setCurrentTaxformMeetingPlace,
  setCurrentTaxformMobileStore,
  setCurrentTaxformPlaceOfBusiness,
  setCurrentTaxformPartsDepartment,
  setCurrentTaxformRetailPropertyFixtures,
  setCurrentTaxformRepairShop,
  setCurrentTaxformDisplayRoom,
  setCurrentTaxformGoodsConsignment,
  setCurrentTaxformWarehouseProducts,
  setCurrentTaxformConsultingServices,
  setCurrentTaxformEmployeeLeasing,
  setCurrentTaxformManagementServices,
} = currentTaxformSlice.actions;

export default currentTaxformSlice.reducer;
