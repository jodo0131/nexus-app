import { TUser } from 'models/TUser';

import { CLIENT1, CLIENT2, CLIENT3, CLIENT4, CLIENT5 } from './clients.data';

export const CUSTOMER1: TUser = {
  id: 'customer-1',
  email: 'nathanburt@epictrust.com',
  password: 'customer',
  fullName: 'Nathan Burt',
  businessName: 'Epic Trust',
  role: 'CUSTOMER',
  lastReport: '2023-01-01',
  clients: [CLIENT1],
  active: true,
};

export const CUSTOMER2: TUser = {
  id: 'customer-2',
  email: 'johndoe@accountantsinc.com',
  password: 'customer',
  fullName: 'John Doe',
  businessName: 'Accountants Inc.',
  role: 'CUSTOMER',
  lastReport: '2023-01-01',
  clients: [CLIENT2, CLIENT3],
  active: true,
};

export const CUSTOMER3: TUser = {
  id: 'customer-3',
  email: 'billbillson@accountco.com',
  password: 'customer',
  fullName: 'Bill Billson',
  businessName: 'AccountantCo',
  role: 'CUSTOMER',
  lastReport: '2023-01-01',
  clients: [CLIENT4, CLIENT5],
  active: true,
};

export const ADMIN_USER: TUser = {
  id: 'admin-1',
  email: 'admin@email.com',
  password: 'admin',
  fullName: 'John Doe',
  businessName: 'Admin Business',
  brandColor: '#000000',
  role: 'ADMIN',
  customers: [CUSTOMER1, CUSTOMER2, CUSTOMER3],
  clients: [CLIENT1, CLIENT2, CLIENT3, CLIENT4, CLIENT5],
};

export const USERS: TUser[] = [ADMIN_USER, CUSTOMER1, CUSTOMER2, CUSTOMER3];
