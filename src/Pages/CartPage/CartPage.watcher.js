import { all, takeLatest } from 'redux-saga/effects';
import * as types from '../../constants/ActionTypes';
import {
  getCartItemsSaga,
  addCartItemSaga,
  deleteCartItemSaga,
} from './CartPage.saga';

export default function* watchers() {
  yield all([
    takeLatest(types.ADD_CART_ITEM, addCartItemSaga),
    takeLatest(types.DELETE_CART_ITEM, deleteCartItemSaga),
    takeLatest(types.GET_CART_ITEMS, getCartItemsSaga),
  ]);
}
