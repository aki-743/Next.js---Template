import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';
import { loadingSlice } from './loading';
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import { snackbarSlice } from './snackbar';

// HACK: `redux-persist failed to create sync storage. falling back to noop storage.`の対応
// https://github.com/vercel/next.js/discussions/15687#discussioncomment-45319
const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};
const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage();

const rootReducer = combineReducers({
  loading: loadingSlice.reducer,
  snackbar: snackbarSlice.reducer,
});

const persistConfig = {
  key: 'p-next-test',
  version: 1,
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
