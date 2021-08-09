import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Loading = {
  open: boolean
}

export type LoadingState = {
  loading: Loading
}

export type UpdateLoadingPayload = Loading

const initialState: LoadingState = {
  loading: {
    open: false
  },
}

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  // HACK: reducerは肥大化したらファイル分けたくなるかも
  reducers: {
    toggleLoading(state, action: PayloadAction<UpdateLoadingPayload>) {
      state.loading = action.payload
    },
    reset(): LoadingState {
      return initialState
    },
  },
})