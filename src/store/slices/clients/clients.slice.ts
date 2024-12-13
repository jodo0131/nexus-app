import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TClient } from 'models/TClient';
import { INITIAL_STATE } from 'store/state';

export const clientsSlice = createSlice({
  name: 'clients',
  initialState: INITIAL_STATE.clients,
  reducers: {
    setClients: (_, action: PayloadAction<TClient[]>) => {
      return action.payload;
    },
    addClient: (state, action: PayloadAction<TClient>) => {
      return [action.payload, ...(state ?? [])];
    },
  },
});

export const { setClients, addClient } = clientsSlice.actions;

export default clientsSlice.reducer;
