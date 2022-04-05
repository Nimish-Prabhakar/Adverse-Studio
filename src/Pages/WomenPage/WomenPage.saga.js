import { put, call } from 'redux-saga/effects';
import getAllProductsWomenPage from '../../services/getAllProductsWomenPage.service';
import * as types from '../../constants/ActionTypes';

/**
 * Saga used to get all products listed on women page
 */
export function* getAllProductsWomenPageSaga() {
  try {
    const response = yield call(getAllProductsWomenPage);
    if (!response.ok) {
      const error = new Error(response.json.errorDescription);
      error.status = response.status;
      throw error;
    }
    const productDetails = response.json;
    const individualCategories = {
      kaftans: productDetails.women_product_minis.Kaftan,
      tops: productDetails.women_product_minis.Tops,
      bottoms: productDetails.women_product_minis.Bottoms,
      dresses: productDetails.women_product_minis.Dresses,
      crochets: productDetails.women_product_minis.Crochets,
      accessories: productDetails.women_product_minis.Accessories,
    };
    yield put({
      type: types.GET_ALL_WOMEN_PAGE_PRODUCTS_SUCCESS,
      productDetails,
      individualCategories,
    });
  } catch (error) {
    yield put({ type: types.GET_ALL_WOMEN_PAGE_PRODUCTS_ERROR });
  }
}
