import { put, call } from 'redux-saga/effects';
import * as types from '../../constants/ActionTypes';
import addItemToCart from '../../services/AddItemToCart.service';
import getCartItems from '../../services/getCartItems.service';
import deleteCartItem from '../../services/deleteCartItem.service';

/**
 * Saga used to get all products listed on women page
 */
export function* addCartItemSaga({ customer_id, cartItems }) {
  try {
    const response = yield call(addItemToCart, customer_id, cartItems);
    if (!response.ok) {
      const serverSideError = response.json;
      yield put({ type: types.ADD_CART_ITEM_ERROR, serverSideError });
    } else yield put({ type: types.ADD_CART_ITEM_SUCCESS, response });
  } catch (error) {
    yield put({ type: types.ADD_CART_ITEM_ERROR });
  }
}

export function* getCartItemsSaga({ customer_id }) {
  try {
    const response = yield call(getCartItems, customer_id);
    if (!response.ok) {
      const error = new Error(response.json.errorDescription);
      error.status = response.status;
      throw error;
    }
    const cartItems = response.json;
    yield put({
      type: types.GET_CART_ITEMS_SUCCESS,
      cartItems,
    });
  } catch (error) {
    yield put({ type: types.GET_CART_ITEMS_ERROR });
  }
}

export function* deleteCartItemSaga({ customer_id, product_id, size, color }) {
  try {
    const response = yield call(
      deleteCartItem,
      customer_id,
      product_id,
      size,
      color
    );
    if (!response.ok) {
      const serverSideError = response.json;
      yield put({ type: types.DELETE_CART_ITEM_ERROR, serverSideError });
    } else yield put({ type: types.DELETE_CART_ITEM_SUCCESS, response });
  } catch (error) {
    yield put({ type: types.DELETE_CART_ITEM_ERROR });
  }
}
