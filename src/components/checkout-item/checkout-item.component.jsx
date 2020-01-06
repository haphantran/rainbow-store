import React from "react";
import { connect } from "react-redux";

import {
  removeItemFromCart,
  addItem,
  reduceItemQuantityInCart
} from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";

const CheckoutItem = ({
  cartItem,
  removeItem,
  addItem,
  reduceItemQuantity
}) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => reduceItemQuantity(cartItem)}>
          &#10094;
        </div>
        <span className='value'>{quantity} </span>
        <div className='arrow' onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className='price'> {price} </span>
      <div className='remove-button' onClick={() => removeItem(cartItem)}>
        &#10006;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  reduceItemQuantity: item => dispatch(reduceItemQuantityInCart(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
