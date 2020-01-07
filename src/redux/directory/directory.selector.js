import { createSelector } from "reselect";

const selectDirectory = state => state.derectory;

export const selectDirectorySections = createSelector(
  [selectDirectory],
  directory => directory.sections
);
