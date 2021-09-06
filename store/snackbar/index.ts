import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type SnackbarState = {
  /** スナックバーの状態 */
  open: boolean;
  /** スナックバーで表示するメッセージ */
  message: string;
  /** スナックバーをすぐに表示するか */
  immediately: boolean;
}

export type UpdateSnackbarPayload = {
  message: string;
};

const initialState: SnackbarState = {
    open: false,
    message: "",
    immediately: false,
}

export const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    openSnackbar(state, action: PayloadAction<UpdateSnackbarPayload>) {
      return { ...state, open: true, mesage: action.payload.message }
    },
    immediatelyOpenSnackbar(state, action: PayloadAction<UpdateSnackbarPayload>) {
      return { ...state, open: true, mesage: action.payload.message, immediately: true }
    },
    reset(): SnackbarState {
      return { ...initialState }
    },
  },
})