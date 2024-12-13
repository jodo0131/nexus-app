import { TClient } from 'models/TClient';

import { TAXFORM1, TAXFORM2, TAXFORM3 } from './tax.data';

export const EMPTY_CLIENT: TClient = {
  id: '',
  businessName: '',
  clientName: '',
  email: '',
  lastReport: '',
  taxforms: [],
  active: true,
};

export const CLIENT1: TClient = {
  id: 'client-1',
  businessName: 'Widget Co',
  clientName: 'Omari Horne',
  email: 'omari.horne@widget.co',
  taxforms: [],
  active: true,
};

export const CLIENT2: TClient = {
  id: 'client-2',
  businessName: 'Realty Co',
  clientName: 'Melani Harrington',
  email: 'melani.harrington@realty.co',
  lastReport: '2023-01-01',
  taxforms: [TAXFORM1],
  active: true,
};

export const CLIENT3: TClient = {
  id: 'client-3',
  businessName: 'Web Incorporated',
  clientName: 'Alejandro Duke',
  email: 'alejandro.duke@webinc.com',
  lastReport: '2023-01-01',
  taxforms: [TAXFORM2, TAXFORM3],
  active: true,
};

export const CLIENT4: TClient = {
  id: 'client-4',
  businessName: 'We Build Websites',
  clientName: 'Tomas Nielsen',
  email: 'tomas.nielsen@websites.com',
  lastReport: '2023-01-01',
  taxforms: [TAXFORM1, TAXFORM2],
  active: true,
};

export const CLIENT5: TClient = {
  id: 'client-5',
  businessName: 'We Pay Taxes',
  clientName: 'Bellamy Ross',
  email: 'belamy.ross@wepaytaxes.com',
  lastReport: '2023-01-01',
  taxforms: [TAXFORM1, TAXFORM3],
  active: true,
};
