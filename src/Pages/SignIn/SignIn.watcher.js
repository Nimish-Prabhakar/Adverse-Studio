import { all, takeLatest } from 'redux-saga/effects';
import * as types from '../../constants/ActionTypes';
import { addUserSignInSaga, addUserSignUpSaga } from './SignIn.saga';

/**
 * Defines the watchers related to sign in page.
 * These watchers will be imported in store/RootSaga.js
 */
export default function* watchers() {
  yield all([
    takeLatest(types.SIGN_IN, addUserSignInSaga),
    takeLatest(types.SIGN_UP, addUserSignUpSaga),
  ]);
}
