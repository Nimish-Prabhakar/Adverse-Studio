import { DELIVERY_DETAILS_API } from '../constants/AppConstants';

const getUserAddress = async (customer_id) => {
  try {
    const response = await fetch(
      `${DELIVERY_DETAILS_API}/${customer_id}/address`,
      {
        method: 'GET',
      }
    );
    const json = await response.json();
    return { ok: response.ok, json };
  } catch (error) {
    const err = new Error('Internal server error');
    throw err;
  }
};

export default getUserAddress;
