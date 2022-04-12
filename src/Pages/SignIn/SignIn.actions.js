import * as types from '../../constants/ActionTypes';

export const signInAction = () => ({
  type: types.SIGN_IN_SUCCESS,
});

export const signOutAction = () => ({
  type: types.SIGN_OUT_SUCCESS,
});
