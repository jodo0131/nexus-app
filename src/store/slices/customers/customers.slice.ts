import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TUser } from 'models/TUser.ts';
import { INITIAL_STATE } from 'store/state';

export const customersSlice = createSlice({
  name: 'customers',
  initialState: INITIAL_STATE.customers,
  reducers: {
    setCustomers: (_, action: PayloadAction<TUser[]>) => {
      return action.payload;
    },
    createNewCustomer: (state, action: PayloadAction<TUser>) => {
      return [action.payload, ...(state ?? [])];
    },
  },
});

export const { setCustomers, createNewCustomer } = customersSlice.actions;

export default customersSlice.reducer;
