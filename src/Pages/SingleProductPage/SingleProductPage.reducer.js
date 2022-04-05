import * as types from '../../constants/ActionTypes';

const initialState = {
  productInfo: {},
  productInfoFetched: false,
};

const singleProductPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_SINGLE_PRODUCT_SUCCESS: {
      const { productInfo } = action;
      return {
        ...state,
        productInfo,
        productInfoFetched: true,
      };
    }
    default:
      return state;
  }
};

export default singleProductPageReducer;
