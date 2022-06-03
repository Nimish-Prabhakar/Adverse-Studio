import { DELIVERY_DETAILS_API } from '../constants/AppConstants';

/**
 * Service to sign in user.
 * @param {Object} userDetails - Details of the user to sign in..
 */
const addUserAddress = async (customer_id, deliveryDetails) => {
  const requestBody = {
    address: deliveryDetails.address,
    area: deliveryDetails.area,
    landmark: deliveryDetails.landmark,
    city: deliveryDetails.city,
    state: deliveryDetails.state,
    pincode: deliveryDetails.pincode,
  };

  try {
    const response = await fetch(
      `${DELIVERY_DETAILS_API}/${customer_id}/address`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
      }
    );

    const json = await response.json();
    return { ok: response.ok, json };
  } catch (error) {
    return { ok: false, json: error };
  }
};

export default addUserAddress;
