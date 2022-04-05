import * as types from '../../constants/ActionTypes';

export const updateCartCountIncrement = () => ({
  type: types.UPDATE_CART_COUNT_INCREMENT,
});

export const updateCartCountDecrement = () => ({
  type: types.UPDATE_CART_COUNT_DECREMENT,
});
