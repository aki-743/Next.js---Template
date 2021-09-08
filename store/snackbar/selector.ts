import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '..';

export const snackbarSelectorState = (state: RootState) => state.snackbar;

export const snackbarSelector = createSelector(snackbarSelectorState, (snackbar) => {
    return snackbar;
});
