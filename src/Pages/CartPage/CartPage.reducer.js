import * as types from '../../constants/ActionTypes';

const initialState = {
  cartItemsCount: 0,
  cartItems: [],
  deleteItemStatus: false,
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
    case types.GET_CART_ITEMS_SUCCESS: {
      const { cartItems } = action;
      return {
        ...state,
        cartItems,
      };
    }
    case types.DELETE_CART_ITEM_SUCCESS: {
      const { deleteItemStatus } = action;
      return {
        ...state,
        deleteItemStatus,
      };
    }
    default:
      return state;
  }
};

export default cartPageReducer;
