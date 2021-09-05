import { createSlice } from '@reduxjs/toolkit'

export type LoadingState = {
  open: boolean
}

const initialState: LoadingState = {
  open: false
}

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    open(state) {
      return { ...state, open: true }
    },
    close() {
      return { ...initialState }
    },
  },
})