import { createSlice } from '@reduxjs/toolkit';
import { LoadingState } from './types/slice';

const initialState: LoadingState = {
  open: false,
};

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    open(state) {
      return { ...state, open: true };
    },
    close() {
      return { ...initialState };
    },
  },
});
