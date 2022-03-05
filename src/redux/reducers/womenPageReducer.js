export const GET_WOMEN_PAGE_PRODUCTS = 'GET_WOMEN_PAGE_PRODUCTS';
export const SET_WOMEN_PAGE_PRODUCTS = 'SET_WOMEN_PAGE_PRODUCTS';

export const getWomenPageProducts = () => ({
  type: GET_WOMEN_PAGE_PRODUCTS,
});

export const setWomenPageProducts = (womenPageProducts) => ({
  type: SET_WOMEN_PAGE_PRODUCTS,
  womenPageProducts,
});

const initialState = {
  womenPageProducts: [],
};

const womenPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WOMEN_PAGE_PRODUCTS:
      const { womenPageProducts } = action;
      state.womenPageProducts.push(womenPageProducts);
      return { ...state, ...womenPageProducts };
    default:
      return state;
  }
};

export default womenPageReducer;
