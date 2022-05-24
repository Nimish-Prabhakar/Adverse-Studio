import * as types from '../../constants/ActionTypes';

const initialState = {
  cartItemsCount: 0,
  cartItems: [],
  deleteItemStatus: false,
  cartItemStatus: false,
  couponDiscountedValue: 0,
  couponPercentageValue: 0,
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
      const { cartItems, cartItemStatus } = action;
      return {
        ...state,
        cartItems,
        cartItemStatus,
      };
    }
    case types.DELETE_CART_ITEM_SUCCESS: {
      const { deleteItemStatus } = action;
      return {
        ...state,
        deleteItemStatus,
      };
    }
    case types.ADD_COUPON_CODE_SUCCESS: {
      const { couponDiscountedValue, couponPercentageValue } = action;
      return {
        ...state,
        couponDiscountedValue,
        couponPercentageValue,
      };
    }
    default:
      return state;
  }
};

export default cartPageReducer;
