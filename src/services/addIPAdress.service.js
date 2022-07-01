import { IP_API } from '../constants/AppConstants';

/**
 * Service to add coupon discount.
 * @param {Object} coupon_code - Details of the coupon.
 */
const addIP = async (ip, country, state) => {
  const requestBody = {
    ip,
    country,
    state,
  };

  try {
    const response = await fetch(IP_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody),
    });

    const json = await response.json();
    return { ok: response.ok, json };
  } catch (error) {
    return { ok: false, json: error };
  }
};

export default addIP;
