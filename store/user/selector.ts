import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '..';

export const userSelectorState = (state: RootState) => state.user;

export const userSelector = createSelector(userSelectorState, (user) => {
  return user;
});

export const isLoginedSelector = createSelector(userSelector, (user) => {
  return user.isLogined;
});
