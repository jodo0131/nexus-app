import { EMPTY_TAXFORM } from 'data/tax.data';
import { TClient } from 'models/TClient';
import { TCustomer } from 'models/TCustomer';
import { TTaxForm } from 'models/TTaxForm';
import { TUser } from 'models/TUser';

import { TBreadcrumb } from '../models/TBreadcrumb.ts';

export type TSelected = {
  selectedClient?: TClient;
  selectedCustomer?: TCustomer;
};

export interface InitialState {
  user: TUser | null;
  customers?: TCustomer[];
  clients: TClient[];
  taxforms?: TTaxForm[];
  selected?: TSelected;
  currentTaxform: TTaxForm;
  breadcrumbs?: TBreadcrumb[];
}

export const INITIAL_STATE: InitialState = {
  user: null,
  customers: [],
  clients: [],
  taxforms: [],
  selected: {},
  currentTaxform: EMPTY_TAXFORM,
  breadcrumbs: [],
};
