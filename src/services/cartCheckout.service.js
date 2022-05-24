import { CHECKOUT_API } from '../constants/AppConstants';

/**
 * Service to sign in user.
 * @param {Object} userDetails - Details of the user to sign in..
 */
const cartCheckout = async (customer_id, coupon_code) => {
  //   const requestBody = {
  //     coupon_code,
  //   };

  try {
    const response = await fetch(`${CHECKOUT_API}/${customer_id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(requestBody),
    });

    const json = await response.json();
    return { ok: response.ok, json };
  } catch (error) {
    return { ok: false, json: error };
  }
};

export default cartCheckout;
