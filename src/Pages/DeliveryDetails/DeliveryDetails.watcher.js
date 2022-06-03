import { all, takeLatest } from 'redux-saga/effects';
import * as types from '../../constants/ActionTypes';
import { addUserAddressSaga, getUserAddressSaga } from './DeliveryDetails.saga';

export default function* watchers() {
  yield all([
    takeLatest(types.ADD_DELIVERY_DETAILS, addUserAddressSaga),
    takeLatest(types.GET_DELIVERY_DETAILS, getUserAddressSaga),
  ]);
}
