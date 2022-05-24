import * as types from '../../constants/ActionTypes';

export const updateCartCountIncrement = () => ({
  type: types.UPDATE_CART_COUNT_INCREMENT,
});

export const updateCartCountDecrement = () => ({
  type: types.UPDATE_CART_COUNT_DECREMENT,
});

export const addCartItems = (customer_id, cartItems) => ({
  type: types.ADD_CART_ITEM,
  customer_id,
  cartItems,
});

export const getCartItems = (customer_id) => ({
  type: types.GET_CART_ITEMS,
  customer_id,
});

export const deleteCartItem = (customer_id, product_id, size, color) => ({
  type: types.DELETE_CART_ITEM,
  customer_id,
  product_id,
  size,
  color,
});

export const addCouponCode = (customer_id, coupon_code, cart_value) => ({
  type: types.ADD_COUPON_CODE,
  customer_id,
  coupon_code,
  cart_value,
});

export const cartCheckout = (customer_id, coupon_code) => ({
  type: types.CART_CHECKOUT_API,
  customer_id,
  coupon_code,
});
