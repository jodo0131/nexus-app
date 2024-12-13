import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit';
import { TClient } from 'models/TClient';
import { TCustomer } from 'models/TCustomer.ts';
import { TTaxForm } from 'models/TTaxForm';
import { TUser } from 'models/TUser';
import { persistReducer, persistStore } from 'redux-persist';
import { PersistPartial } from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

import { TBreadcrumb } from '../models/TBreadcrumb.ts';
import { breadcrumbsSlice } from './slices/breadcrumbs/breadcrumbs.slice.ts';
import { clientsSlice } from './slices/clients/clients.slice';
import { currentTaxformSlice } from './slices/current-taxform/current-taxform.slice';
import { customersSlice } from './slices/customers/customers.slice.ts';
import { selectedSlice } from './slices/selected/selected.slice';
import { taxFormsSlice } from './slices/taxform/taxform.slice';
import { userSlice } from './slices/user/user.slice';
import { INITIAL_STATE, TSelected } from './state';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'clients', 'taxforms', 'selected'], // Add slices here that you want to persist
};

const rootReducer = combineReducers({
  user: userSlice.reducer,
  customers: customersSlice.reducer,
  clients: clientsSlice.reducer,
  taxforms: taxFormsSlice.reducer,
  selected: selectedSlice.reducer,
  currentTaxform: currentTaxformSlice.reducer,
  breadcrumbs: breadcrumbsSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

type PreloadedState = {
  user: TUser | null;
  customers: TCustomer[];
  clients: TClient[];
  taxforms: TTaxForm[];
  selected: TSelected;
  currentTaxform: TTaxForm;
  breadcrumbs: TBreadcrumb[];
} & PersistPartial;

const setupStore = (initialState: PreloadedState) =>
  configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        },
      }),
    preloadedState: initialState,
  });

export const store = setupStore(INITIAL_STATE as PreloadedState);
export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
