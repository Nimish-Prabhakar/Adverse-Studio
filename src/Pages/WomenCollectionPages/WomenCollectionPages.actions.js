import * as types from '../../constants/ActionTypes';

export const signInAction = (userDetails) => ({
  type: types.SIGN_IN,
  userDetails,
});

export const signUpAction = (userDetails) => ({
  type: types.SIGN_UP,
  userDetails,
});

export const signOutAction = () => ({
  type: types.SIGN_OUT_SUCCESS,
});
