import { all, takeLatest } from 'redux-saga/effects';
import * as types from '../../constants/ActionTypes';
import { getSingleProductDetailsSaga } from './SingleProductPage.saga';

export default function* watchers() {
  yield all([
    takeLatest(types.GET_SINGLE_PRODUCT, getSingleProductDetailsSaga),
  ]);
}
