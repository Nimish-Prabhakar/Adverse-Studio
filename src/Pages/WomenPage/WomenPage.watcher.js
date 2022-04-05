import { all, takeLatest } from 'redux-saga/effects';
import * as types from '../../constants/ActionTypes';
import { getAllProductsWomenPageSaga } from './WomenPage.saga';

export default function* watchers() {
  yield all([
    takeLatest(types.GET_ALL_WOMEN_PAGE_PRODUCTS, getAllProductsWomenPageSaga),
  ]);
}
