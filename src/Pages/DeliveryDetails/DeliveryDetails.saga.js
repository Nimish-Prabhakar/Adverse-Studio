import { put, call } from 'redux-saga/effects';
import * as types from '../../constants/ActionTypes';
import addUserAddress from '../../services/addUserAddress.service';

export function* addUserAddressSaga({ customer_id, deliveryDetails }) {
  try {
    const response = yield call(addUserAddress, customer_id, deliveryDetails);
    if (!response.ok) {
      const serverSideError = response.json;
      yield put({ type: types.ADD_DELIVERY_DETAILS_ERROR, serverSideError });
    } else yield put({ type: types.ADD_DELIVERY_DETAILS_SUCCESS, response });
  } catch (error) {
    yield put({ type: types.ADD_DELIVERY_DETAILS_ERROR });
  }
}

export function* getUserAddressSaga({ customer_id }) {
  try {
    const response = yield call(addUserAddress, customer_id);
    if (!response.ok) {
      const serverSideError = response.json;
      yield put({ type: types.GET_DELIVERY_DETAILS_ERROR, serverSideError });
    } else yield put({ type: types.GET_DELIVERY_DETAILS_SUCCESS, response });
  } catch (error) {
    yield put({ type: types.GET_DELIVERY_DETAILS_ERROR });
  }
}
