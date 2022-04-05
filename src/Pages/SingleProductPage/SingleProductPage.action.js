import * as types from '../../constants/ActionTypes';

export const getSingleProductDetails = (product_id) => ({
  type: types.GET_SINGLE_PRODUCT,
  product_id,
});
