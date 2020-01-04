import { createSelector } from "reselect";

const selectCart = state => state.cart;
//input selector: get whole state and select a slice of it

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumQuantity, cartItem) => accumQuantity + cartItem.quantity,
      0
    )
);
