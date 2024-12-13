import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TClient } from 'models/TClient';
import { TTaxForm } from 'models/TTaxForm';
import { INITIAL_STATE } from 'store/state';

export const selectedSlice = createSlice({
  name: 'selected',
  initialState: INITIAL_STATE.selected,
  reducers: {
    setSelectedClient: (state, action: PayloadAction<TClient>) => {
      return {
        ...state,
        selectedClient: action.payload,
      };
    },
    setSelectedTaxForm: (state, action: PayloadAction<TTaxForm>) => {
      return {
        ...state,
        selectedTaxForm: action.payload,
      };
    },
  },
});

export const { setSelectedClient, setSelectedTaxForm } = selectedSlice.actions;

export default selectedSlice.reducer;
