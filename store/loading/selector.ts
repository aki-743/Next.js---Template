import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

export const loadingSelectorState = (state: RootState) => state.loading;

export const loadingSelector = createSelector(loadingSelectorState, (loading) => {
    return loading;
});