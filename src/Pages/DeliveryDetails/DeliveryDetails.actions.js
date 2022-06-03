import * as types from '../../constants/ActionTypes';

export const addDeliveryDetails = (customer_id, deliveryDetails) => ({
  type: types.ADD_DELIVERY_DETAILS,
  customer_id,
  deliveryDetails,
});

export const getDeliveryDetails = (customer_id) => ({
  type: types.GET_DELIVERY_DETAILS,
  customer_id,
});
