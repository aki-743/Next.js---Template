import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Snackbar = {
  open: boolean;
  message: string;
}

export type SnackbarState = {
  snackbar: Snackbar
}

export type UpdateSnackbarPayload = Snackbar

const initialState: SnackbarState = {
  snackbar: {
    open: false,
    message: ""
  },
}

export const SnackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  // HACK: reducerは肥大化したらファイル分けたくなるかも
  reducers: {
    handleSnackbar(state, action: PayloadAction<UpdateSnackbarPayload>) {
      state.snackbar = action.payload
    },
    reset(): SnackbarState {
      return initialState
    },
  },
})