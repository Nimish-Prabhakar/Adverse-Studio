import { put, call } from 'redux-saga/effects';
import * as types from '../../constants/ActionTypes';
import addItemToCart from '../../services/AddItemToCart.service';
import getCartItems from '../../services/getCartItems.service';
import deleteCartItem from '../../services/deleteCartItem.service';
import addCouponCode from '../../services/addCouponCode.service';
import cartCheckout from '../../services/cartCheckout.service';

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
    const cartItems = response.json.ProductDetails;
    const cartItemStatus = response.ok;
    const cartValue = response.json.CartAmount;
    yield put({
      type: types.GET_CART_ITEMS_SUCCESS,
      cartItems,
      cartItemStatus,
      cartValue,
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
    } else {
      const deleteItemStatus = response.ok;
      yield put({ type: types.DELETE_CART_ITEM_SUCCESS, deleteItemStatus });
    }
  } catch (error) {
    yield put({ type: types.DELETE_CART_ITEM_ERROR });
  }
}

export function* addCouponCodeSaga({ customer_id, coupon_code, cart_value }) {
  try {
    const response = yield call(
      addCouponCode,
      customer_id,
      coupon_code,
      cart_value
    );
    if (!response.ok) {
      const serverSideError = response.json;
      yield put({ type: types.ADD_COUPON_CODE_ERROR, serverSideError });
    } else {
      console.log(response);
      const couponDiscountedValue = response.json.discounted_amount;
      const couponPercentageValue = response.json.discount_percentage;
      yield put({
        type: types.ADD_COUPON_CODE_SUCCESS,
        couponDiscountedValue,
        couponPercentageValue,
      });
    }
  } catch (error) {
    yield put({ type: types.ADD_COUPON_CODE_ERROR });
  }
}

export function* cartCheckoutSaga({ customer_id, coupon_code }) {
  try {
    const response = yield call(cartCheckout, customer_id, coupon_code);
    if (!response.ok) {
      const serverSideError = response.json;
      yield put({ type: types.CART_CHECKOUT_API_ERROR, serverSideError });
    } else {
      const paymentUrl = response.json.payment_url;
      yield put({
        type: types.CART_CHECKOUT_API_SUCCESS,
        paymentUrl,
      });
    }
  } catch (error) {
    yield put({ type: types.CART_CHECKOUT_API_ERROR });
  }
}
