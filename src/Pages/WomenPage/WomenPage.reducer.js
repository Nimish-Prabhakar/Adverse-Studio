import * as types from '../../constants/ActionTypes';

const initialState = {
  productDetails: [],
  individualCategories: {},
  productDetailsFetched: false,
};

const womenPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_WOMEN_PAGE_PRODUCTS_SUCCESS: {
      const { productDetails, individualCategories } = action;
      return {
        ...state,
        productDetails,
        individualCategories,
        productDetailsFetched: true,
      };
    }
    default:
      return state;
  }
};

export default womenPageReducer;
