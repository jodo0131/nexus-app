import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TBreadcrumb } from 'models/TBreadcrumb';
import { INITIAL_STATE } from 'store/state';

export const breadcrumbsSlice = createSlice({
  name: 'breadcrumbs',
  initialState: INITIAL_STATE.breadcrumbs,
  reducers: {
    addBreadcrumb: (state, action: PayloadAction<TBreadcrumb>) => {
      const newBreadcrumb = action.payload;

      if (!state) {
        return [newBreadcrumb];
      }

      // Check if the breadcrumb already exists
      const existingIndex = state.findIndex(
        (item) => item.path === newBreadcrumb.path,
      );

      if (existingIndex !== -1) {
        // If it exists, don't add it
        return state;
      } else {
        // If it doesn't exist, add it to the end
        return [...state, newBreadcrumb];
      }
    },
    clearBreadcrumbs: () => {
      return [];
    },
  },
});

export const { addBreadcrumb, clearBreadcrumbs } = breadcrumbsSlice.actions;

export default breadcrumbsSlice.reducer;
