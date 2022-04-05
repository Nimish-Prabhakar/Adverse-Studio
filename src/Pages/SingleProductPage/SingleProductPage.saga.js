import { put, call } from 'redux-saga/effects';
import getSingleProductDetails from '../../services/getSingleProductDetails.service';
import * as types from '../../constants/ActionTypes';

/**
 * Saga used to get all details of a specific product
 */
export function* getSingleProductDetailsSaga({ product_id }) {
  try {
    const response = yield call(getSingleProductDetails, product_id);
    if (!response.ok) {
      const error = new Error(response.json.errorDescription);
      error.status = response.status;
      throw error;
    }
    const productInfoFecthed = response.json;
    const productInfo = productInfoFecthed.product_details;
    yield put({
      type: types.GET_SINGLE_PRODUCT_SUCCESS,
      productInfo,
    });
  } catch (error) {
    yield put({ type: types.GET_SINGLE_PRODUCT_ERROR });
  }
}
