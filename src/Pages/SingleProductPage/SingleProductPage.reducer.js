import * as types from '../../constants/ActionTypes';

const initialState = {
  productInfo: {},
  colorsAvailable: [],
  productInfoFetched: false,
};

const singleProductPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_SINGLE_PRODUCT_SUCCESS: {
      const { productInfo } = action;
      let { colorsAvailable } = state;
      colorsAvailable.push(...Object.keys(productInfo.colors_and_size));
      return {
        ...state,
        productInfo,
        colorsAvailable,
        productInfoFetched: true,
      };
    }
    default:
      return state;
  }
};

export default singleProductPageReducer;
