import { put, call } from 'redux-saga/effects';
import addUserSignIn from '../../services/addUserSignIn.service';
import addUserSignUp from '../../services/addUserSignUp.service';
import * as types from '../../constants/ActionTypes';

export function* addUserSignInSaga({ userDetails }) {
  try {
    const response = yield call(addUserSignIn, userDetails);
    if (!response.ok) {
      const serverSideError = response.json;
      yield put({ type: types.SIGN_IN_ERROR, serverSideError });
    } else yield put({ type: types.SIGN_IN_SUCCESS, response });
  } catch (error) {
    yield put({ type: types.SIGN_IN_ERROR });
  }
}

export function* addUserSignUpSaga({ userDetails }) {
  try {
    const response = yield call(addUserSignUp, userDetails);
    if (!response.ok) {
      const serverSideError = response.json;
      yield put({ type: types.SIGN_UP_ERROR, serverSideError });
    } else yield put({ type: types.SIGN_UP_SUCCESS, response });
  } catch (error) {
    yield put({ type: types.SIGN_UP_ERROR });
  }
}
