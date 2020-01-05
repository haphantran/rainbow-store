import { createSelector } from "reselect";

const selectUser = state => state.user;
//input selector: get whole state and select a slice of it

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);
