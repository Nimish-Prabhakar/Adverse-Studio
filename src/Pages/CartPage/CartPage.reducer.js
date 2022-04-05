import * as types from '../../constants/ActionTypes';

const initialState = {
  cartItemsCount: 0,
  cartItems: [],
};

const cartPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_CART_COUNT_INCREMENT: {
      let { cartItemsCount } = state;
      cartItemsCount += 1;
      return {
        ...state,
        cartItemsCount,
      };
    }
    case types.UPDATE_CART_COUNT_DECREMENT: {
      let { cartItemsCount } = state;
      cartItemsCount -= 1;
      return {
        ...state,
        cartItemsCount,
      };
    }
    default:
      return state;
  }
};

export default cartPageReducer;
