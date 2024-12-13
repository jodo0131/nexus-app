import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TTaxForm } from 'models/TTaxForm';
import { INITIAL_STATE } from 'store/state';

export const taxFormsSlice = createSlice({
  name: 'taxForms',
  initialState: INITIAL_STATE.taxforms,
  reducers: {
    // This function sets the tax forms list.
    setTaxForms: (_, action: PayloadAction<TTaxForm[]>) => {
      return action.payload;
    },
    // This function creates a new tax form and adds it to the tax forms list.
    createTaxForm: (state, action: PayloadAction<TTaxForm>) => {
      const isExists = state?.some(
        (taxForm) => taxForm.year === action.payload.year,
      );

      if (isExists) {
        return state;
      }

      return [action.payload, ...(state ?? [])];
    },
    // This function updates the tax form from the tax forms list, if it exists, otherwise it creates a new one.
    updateTaxForm: (
      state: TTaxForm[] | undefined,
      action: PayloadAction<TTaxForm>,
    ) => {
      const isExists = state?.some(
        (taxForm) => taxForm.year === action.payload.year,
      );

      if (isExists) {
        return (
          state?.map((taxForm) =>
            taxForm.year === action.payload.year ? action.payload : taxForm,
          ) ?? []
        );
      }

      return [...(state ?? []), action.payload];
    },
  },
});

export const { setTaxForms, createTaxForm, updateTaxForm } =
  taxFormsSlice.actions;

export default taxFormsSlice.reducer;
