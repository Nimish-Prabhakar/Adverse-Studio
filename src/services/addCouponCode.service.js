import { COUPON_CODE_API } from '../constants/AppConstants';

/**
 * Service to add coupon discount.
 * @param {Object} coupon_code - Details of the coupon.
 */
const addCouponCode = async (customer_id, coupon_code, cart_value) => {
  const requestBody = {
    coupon_code,
    cart_value,
  };

  try {
    const response = await fetch(`${COUPON_CODE_API}/${customer_id}`, {
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

export default addCouponCode;
