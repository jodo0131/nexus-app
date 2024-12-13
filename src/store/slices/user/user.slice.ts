import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TUser } from 'models/TUser';
import { INITIAL_STATE } from 'store/state';

export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE.user,
  reducers: {
    loginUser: (_, action: PayloadAction<TUser>) => {
      const user = { ...action.payload, password: '' };
      return user;
    },
    logoutUser: () => {
      return null;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
