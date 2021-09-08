import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type UserState = {
  isLogined: boolean;
  userName: string;
};

const initialState: UserState = {
  isLogined: false,
  userName: '',
};

type LoginAction = {
  userName: string;
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action: PayloadAction<LoginAction>) {
      return { ...state, isLogined: true, ...action.payload };
    },
    logout() {
      return { ...initialState };
    },
  },
});
