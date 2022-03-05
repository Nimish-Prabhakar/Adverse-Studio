import { takeLatest } from 'redux-saga/effects';
import { GET_WOMEN_PAGE_PRODUCTS } from '../reducers/womenPageReducer';
import { handletGetWomenPageProducts } from './handlers/womenPageHandler';

export function* watcherSaga() {
  yield takeLatest(GET_WOMEN_PAGE_PRODUCTS, handletGetWomenPageProducts);
}
