import * as types from '../../constants/ActionTypes';

export const deliveryDetailsEntered = (deliveryDetails) => ({
  type: types.DELIVERY_DETAILS_ENTERED,
  deliveryDetails,
});

export const signOutAction = () => ({
  type: types.SIGN_OUT_SUCCESS,
});
