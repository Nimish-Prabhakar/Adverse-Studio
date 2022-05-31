import * as types from '../../constants/ActionTypes';

export const getSingleProductDetails = (product_id) => ({
  type: types.GET_SINGLE_PRODUCT,
  product_id,
});

export const addProductDetailsToCart = (productDetails) => ({
  type: types.ADD_PRODUCT_TO_CART_GUEST,
  productDetails,
});
