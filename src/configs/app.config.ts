import { TTaxParamConfig } from 'models/TTaxConfig';

export const TAXPARAM_CONFIG: TTaxParamConfig[] = [
  // Sales Tax Form
  {
    id: 'salesForm',
    title: 'Sales',
    subtitle: 'Sales Tax Form',
    summary: 'I am tax summary desription...',
    pending: 'I am pending description...',
    type: 'state-income',
    fields: [
      {
        name: 'state',
        label: 'In what states does your company have sales?',
      },
      {
        name: 'income',
        label: 'Add state income',
        description: 'Enter the exact amount you made in sales in each state.',
        required: true,
      },
    ],
  },
  // Payroll Tax Form
  {
    id: 'payrollForm',
    title: 'Payroll',
    subtitle: 'Payroll Tax Form',
    summary: 'I am tax summary desription...',
    pending: 'I am pending description...',
    type: 'state-income',
    fields: [
      {
        name: 'state',
        label: 'In what states does your company have payroll?',
      },
      {
        name: 'income',
        label: 'Add state income',
        description:
          'Enter the exact amount you made in payroll in each state.',
        required: true,
      },
    ],
  },
  // Equipment Value Tax Form
  {
    id: 'equipmentValueForm',
    title: 'Equipment Value',
    subtitle: 'Equipment Value Tax Form',
    summary: 'I am tax summary desription...',
    pending: 'I am pending description...',
    type: 'state-income',
    fields: [
      {
        name: 'state',
        label: 'In what states does your company have equipment value?',
      },
      {
        name: 'income',
        label: 'Add state income',
        description:
          'Enter the exact amount you made in equipment value in each state.',
        required: true,
      },
    ],
  },
  // Advertising Tax Form
  {
    id: 'advertisingForm',
    title: 'Advertising',
    subtitle: 'Advertising Tax Form',
    summary: 'I am tax summary desription...',
    pending: 'I am pending description...',
    type: 'state-method',
    fields: [
      {
        name: 'isApplicable',
        label: 'Is this organization participate in advertising or marketing?',
      },
      {
        name: 'sendsCatalog',
        label: 'Sends Catalogs',
        question: 'What states did the client send customers catalogs?',
      },
      {
        name: 'directMail',
        label: 'Sends Direct Mail',
        question: 'What states did the client send direct mail?',
      },
      {
        name: 'localMediaAdvertising',
        label: 'Local Media Advertising',
        question: 'What states did the client use local media?',
      },
      {
        name: 'displayOrDistribution',
        label: 'Promotional Material for Display or Distribution',
        question:
          'What states did the client use promotional material for display or distribution?',
      },
      {
        name: 'digitalAdvertising',
        label: 'Digital Advertising',
        question: 'What states did the client use digital advertising?',
      },
      {
        name: 'notApplicable',
        label: 'Not Applicable',
      },
    ],
  },
  // Transportation Tax Form
  {
    id: 'transportationForm',
    title: 'Transportation',
    subtitle: 'Transportation Tax Form',
    summary: 'I am tax summary desription...',
    pending: 'I am pending description...',
    type: 'state-method',
    fields: [
      {
        name: 'isApplicable',
        label:
          'Does this organization participate in the transporting of goods or services?',
      },
      {
        name: 'blackhaulGoods',
        label: 'Backhaul goods',
        question: 'What states did the client backhaul goods?',
      },
      {
        name: 'deliverPickupGoods',
        label: 'Deliver or pick up goods',
        question: 'What states did the client deliver or pick up goods?',
      },
      {
        name: 'occasionalDeliveries',
        label: 'Provide occasional deliveries',
        question: 'What states did the client provide occasional deliveries?',
      },
      {
        name: 'pickupDamagedGoods',
        label: 'Pick up damaged goods',
        question:
          'What states did the client pick up damaged goods for return or repair?',
      },
      {
        name: 'pickupRawMaterials',
        label: 'Pick up raw materials',
        question: 'What states did the client pick up raw materials?',
      },
      {
        name: 'transit',
        label: 'Transit through any state even without pick up or delivery',
        question: 'What states did the client transit through?',
      },
      {
        name: 'deliverPickupByCarrier',
        label: 'Deliver pick up goods through hired carriers',
        question:
          'What states did the client deliver or pick up goods through hired carriers?',
      },
      {
        name: 'notApplicable',
        label: 'Not Applicable',
        question: 'What states did the client not transport goods in?',
      },
    ],
  },
  // Franhcising Tax Form
  {
    id: 'franchisingForm',
    title: 'Franchising',
    subtitle: 'Franchising Tax Form',
    summary: 'I am tax summary desription...',
    pending: 'I am pending description...',
    type: 'state-method',
    fields: [
      {
        name: 'isApplicable',
        label: 'Does this organization have franchise locations?',
      },
      {
        name: 'centralizeProcessing',
        label: 'Centralize Processing',
        question: 'What states did the client centralize processing in?',
      },
      {
        name: 'deliverProducts',
        label: 'Deliver Products',
        question: 'What states did the client deliver products?',
      },
      {
        name: 'fieldOperations',
        label: 'Evaluate Field Operations (Including Quality Control)',
        question: 'What states did the client evaluate field operations?',
      },
      {
        name: 'trainEmployees',
        label: 'Train Employees',
        question:
          'What states did the client train employees or franchisees in?',
      },
      {
        name: 'visitFranchises',
        label: 'Visit Franchises',
        question: 'What states did the client visit franchises in?',
      },
      {
        name: 'ownLicenses',
        label: 'Own Licenses or Trademarks',
        question: 'What states did the client own licenses or trademarks in?',
      },
      {
        name: 'managementTraining',
        label: 'Provide Management Training',
        question: 'What states did the client provide management training in?',
      },
      {
        name: 'qualityControl',
        label: 'Coordinate Quality Control Visits (Including 3rd Parties)',
        question:
          'What states did the client coordinate quality control visits in?',
      },
      {
        name: 'regionalMeetings',
        label: 'Hold Regional Meetings',
        question: 'What states did the client hold regional meetings in?',
      },
      {
        name: 'notApplicable',
        label: 'Not Applicable',
        question: 'What states did the client not advertise in?',
      },
    ],
  },
  // Third Party Services Tax Form
  {
    id: 'thirdPartyServicesForm',
    title: 'Third Party Services',
    subtitle: 'Third Party Services Tax Form',
    summary: 'I am tax summary desription...',
    pending: 'I am pending description...',
    type: 'state-method',
    fields: [
      {
        name: 'isApplicable',
        label: 'Does this organization use third-party services?',
      },
      {
        name: 'collectionServices',
        label: 'Provide Collection Services',
        question: 'What states did the client provide collection services in?',
      },
      {
        name: 'creditChecks',
        label: 'Operate Credit Checks',
        question: 'What states did the client operate credit checks in?',
      },
      {
        name: 'fulfillmentService',
        label: 'Operate a Fulfillment Service',
        question:
          'What states did the client operate a fulfillment service in?',
      },
      {
        name: 'repossesProperty',
        label: 'Repossess Property',
        question: 'What states did the client repossess property in?',
      },
      {
        name: 'installProducts',
        label: 'Install Products',
        question: 'What states did the client install products in?',
      },
      {
        name: 'warrantyService',
        label: 'Provide Repair or Warranty Service',
        question:
          'What states did the client provide repair or warranty service in?',
      },
      {
        name: 'deliveryPickupByHiredCarriers',
        label: 'Deliver or pick up goods through hired carriers',
        question:
          'What states did the client deliver or pick up goods through hired carriers in?',
      },
      {
        name: 'notApplicable',
        label: 'No Third-Party Services Used',
        question: 'What states did the client not use third-party services in?',
      },
    ],
  },
  // Employee Travel Tax Form
  {
    id: 'employeeTravelForm',
    title: 'Employee Travel',
    subtitle: 'Employee Travel Tax Form',
    summary: 'I am tax summary desription...',
    pending: 'I am pending description...',
    type: 'state-method',
    fields: [
      {
        name: 'isApplicable',
        label: 'Does this organization have employees that travel?',
      },
      {
        name: 'sellTangiblePropery',
        label: 'To Sell Tangible Property',
        question: 'What states did the client sell tangible property in?',
      },
      {
        name: 'sellRealProperty',
        label: 'To Sell Real Property',
        question: 'What states did the client sell real property in?',
      },
      {
        name: 'sellServices',
        label: 'To Sell Services',
        question: 'What states did the client sell services in?',
      },
      {
        name: 'attendBoardMeetings',
        label: 'To Attend Board Meetings',
        question: 'What states did the client attend board meetings in?',
      },
      {
        name: 'resolveCustomComplaints',
        label: 'To Resolve Customer Complaints',
        question: 'What states did the client resolve customer complaints in?',
      },
      {
        name: 'seminarForCustomers',
        label: 'To Conduct Seminars for Customers',
        question:
          'What states did the client conduct seminars for customers in?',
      },
      {
        name: 'recruiteEmployees',
        label: 'To Recruit, Train, or Hire Employees',
        question:
          'What states did the client recruit, train, or hire employees in?',
      },
      {
        name: 'superviseInstallation',
        label: 'To Install Products or Supervise Installation',
        question: 'What states did the client install products in?',
      },
      {
        name: 'maintainProducts',
        label: 'To Repair or Maintain Products',
        question: 'What states did the client repair or maintain products in?',
      },
      {
        name: 'secureSalesDeposits',
        label: 'To Secure Sales Deposits',
        question: 'What states did the client secure sales deposits in?',
      },
      {
        name: 'speakingEngagements',
        label: 'For Speaking Engagements',
        question: 'What states did the client have speaking engagements in?',
      },
      {
        name: 'provideTechnicalAssistance',
        label: 'To Provide Technical Assistance',
        question: 'What states did the client provide technical assistance in?',
      },
      {
        name: 'approveOrders',
        label: 'To Accept or Approve Orders',
        question: 'What states did the client accept or approve orders in?',
      },
      {
        name: 'displayAdvice',
        label: 'To Display Racks and Advice',
        question: 'What states did the client display racks and advice in?',
      },
      {
        name: 'inspectInventory',
        label: 'To Inspect Invetory',
        question: 'What states did the client inspect inventory in?',
      },
      {
        name: 'attendTradeShows',
        label: 'To Attend Trade Shows',
        question: 'What states did the client attend trade shows in?',
      },
      {
        name: 'notApplicable',
        label: 'No Employee Travel',
        question: 'What states did the client not travel in?',
      },
    ],
  },
  // Business Registration Tax Form
  {
    id: 'businessRegistrationForm',
    title: 'Business Registration',
    subtitle: 'Business Registration Tax Form',
    summary: 'I am tax summary desription...',
    pending: 'I am pending description...',
    type: 'state',
    fields: [
      {
        name: 'state',
        label: 'In what states is your company registered?',
      },
    ],
  },
  // Ownership Interest Tax Form
  {
    id: 'ownershipInterestForm',
    title: 'Ownership Interest',
    subtitle: 'Ownership Interest Tax Form',
    summary: 'I am tax summary desription...',
    pending: 'I am pending description...',
    type: 'state',
    fields: [
      {
        name: 'state',
        label: 'In what states does your company have ownership interest?',
      },
    ],
  },
  // Independent Contractor Tax Form
  {
    id: 'independentContractorForm',
    title: 'Independent Contractor',
    subtitle: 'Independent Contractor Tax Form',
    summary: 'I am tax summary desription...',
    pending: 'I am pending description...',
    type: 'state',
    fields: [
      {
        name: 'state',
        label: 'In what states does your company have independent contractors?',
      },
    ],
  },
  // Bank Account Tax Form
  {
    id: 'bankAccountsForm',
    title: 'Bank Accounts',
    subtitle: 'Bank Accounts Tax Form',
    summary: 'I am tax summary desription...',
    pending: 'I am pending description...',
    type: 'state',
    fields: [
      {
        name: 'state',
        label: 'In what states does your company have bank accounts?',
      },
    ],
  },
  // Loans Tax Form
  {
    id: 'loansForm',
    title: 'Loans',
    subtitle: 'Loans Tax Form',
    summary: 'I am tax summary desription...',
    pending: 'I am pending description...',
    type: 'state',
    fields: [
      {
        name: 'state',
        label: 'In what states does your company have loans?',
      },
    ],
  },
  // Copyrights Patents or Intangibles Tax Form
  {
    id: 'copyrightPatentsIntangiblesForm',
    title: 'Copyright Patents or Intangibles',
    subtitle: 'Copyright Patents or Intangibles Tax Form',
    summary: 'I am tax summary desription...',
    pending: 'I am pending description...',
    type: 'state',
    fields: [
      {
        name: 'state',
        label:
          'In what states does your company have copyrights, patents, or intangibles?',
      },
    ],
  },
  // Call Center Tax Form
  {
    id: 'callCenterForm',
    title: 'Call Center',
    subtitle: 'Call Center Tax Form',
    summary: 'I am tax summary desription...',
    pending: 'I am pending description...',
    type: 'state',
    fields: [
      {
        name: 'state',
        label: 'In what states does your company have call centers?',
      },
    ],
  },
  // Manufacture Equipment Tax Form
  {
    id: 'manufactureEquipmentForm',
    title: 'Manufacture Equipment',
    subtitle: 'Manufacture Equipment Tax Form',
    summary: 'I am tax summary desription...',
    pending: 'I am pending description...',
    type: 'state',
    fields: [
      {
        name: 'state',
        label: 'In what states does your company manufacture equipment?',
      },
    ],
  },
  // Meeting Places
  {
    id: 'meetingPlacesForm',
    title: 'Meeting Places',
    subtitle: 'Meeting Places Tax Form',
    summary: 'I am tax summary desription...',
    pending: 'I am pending description...',
    type: 'state',
    fields: [
      {
        name: 'state',
        label: 'In what states does your company have meeting places?',
      },
    ],
  },
  // Mobile Store
  {
    id: 'mobileStoreForm',
    title: 'Mobile Store',
    subtitle: 'Mobile Store Tax Form',
    summary: 'I am tax summary desription...',
    pending: 'I am pending description...',
    type: 'state',
    fields: [
      {
        name: 'state',
        label: 'In what states does your company have mobile stores?',
      },
    ],
  },
  // Office or Place of Business
  {
    id: 'officePlaceBusinessForm',
    title: 'Office or Place of Business',
    subtitle: 'Office or Place of Business Tax Form',
    summary: 'I am tax summary desription...',
    pending: 'I am pending description...',
    type: 'state',
    fields: [
      {
        name: 'state',
        label:
          'In what states does your company have offices or places of business?',
      },
    ],
  },
  // Parts Department
  {
    id: 'partsDepartmentForm',
    title: 'Parts Department',
    subtitle: 'Parts Department Tax Form',
    summary: 'I am tax summary desription...',
    pending: 'I am pending description...',
    type: 'state',
    fields: [
      {
        name: 'state',
        label: 'In what states does your company have parts departments?',
      },
    ],
  },
  // Retail Property or Fixtures
  {
    id: 'retailPropertyFixturesForm',
    title: 'Retail Property or Fixtures',
    subtitle: 'Retail Property or Fixtures Tax Form',
    summary: 'I am tax summary desription...',
    pending: 'I am pending description...',
    type: 'state',
    fields: [
      {
        name: 'state',
        label:
          'In what states does your company have retail properties or fixtures?',
      },
    ],
  },
  // Repair Shop
  {
    id: 'repairShopForm',
    title: 'Repair Shop',
    subtitle: 'Repair Shop Tax Form',
    summary: 'I am tax summary desription...',
    pending: 'I am pending description...',
    type: 'state',
    fields: [
      {
        name: 'state',
        label: 'In what states does your company have repair shops?',
      },
    ],
  },
  // Sample or Display Room
  {
    id: 'sampleDisplayRoomForm',
    title: 'Sample or Display Room',
    subtitle: 'Sample or Display Room Tax Form',
    summary: 'I am tax summary desription...',
    pending: 'I am pending description...',
    type: 'state',
    fields: [
      {
        name: 'state',
        label: 'In what states does your company have sample or display rooms?',
      },
    ],
  },
  // Goods on Consignment
  {
    id: 'goodsConsignmentForm',
    title: 'Goods on Consignment',
    subtitle: 'Goods on Consignment Tax Form',
    summary: 'I am tax summary desription...',
    pending: 'I am pending description...',
    type: 'state',
    fields: [
      {
        name: 'state',
        label: 'In what states does your company have goods on consignment?',
      },
    ],
  },
  // Warehouse Products
  {
    id: 'warehouseProductsForm',
    title: 'Warehouse Products',
    subtitle: 'Warehouse Products Tax Form',
    summary: 'I am tax summary desription...',
    pending: 'I am pending description...',
    type: 'state',
    fields: [
      {
        name: 'state',
        label: 'In what states does your company have warehouse products?',
      },
    ],
  },
  // Consulting Services
  {
    id: 'consultingServicesForm',
    title: 'Consulting Services',
    subtitle: 'Consulting Services Tax Form',
    summary: 'I am tax summary desription...',
    pending: 'I am pending description...',
    type: 'state',
    fields: [
      {
        name: 'state',
        label: 'In what states does your company provide consulting services?',
      },
    ],
  },
  // Employee Leasing or Personnel Services
  {
    id: 'employeeLeasingPersonnelServicesForm',
    title: 'Employee Leasing or Personnel Services',
    subtitle: 'Employee Leasing or Personnel Services Tax Form',
    summary: 'I am tax summary desription...',
    pending: 'I am pending description...',
    type: 'state',
    fields: [
      {
        name: 'state',
        label:
          'In what states does your company provide employee leasing or personnel services?',
      },
    ],
  },
  // Management Services
  {
    id: 'managementServicesForm',
    title: 'Management Services',
    subtitle: 'Management Services Tax Form',
    summary: 'I am tax summary desription...',
    pending: 'I am pending description...',
    type: 'state',
    fields: [
      {
        name: 'state',
        label: 'In what states does your company provide management services?',
      },
    ],
  },
];

export const TAXPARAM_SEQUENCE = TAXPARAM_CONFIG.map(({ id }) => id);
