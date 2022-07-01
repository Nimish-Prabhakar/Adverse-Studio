import { DEAL_CLICK_API } from '../constants/AppConstants';

/**
 * Service to add coupon discount.
 * @param {Object} coupon_code - Details of the coupon.
 */
const dealClick = async (clicked) => {
  const requestBody = {
    clicked,
  };

  try {
    const response = await fetch(DEAL_CLICK_API, {
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

export default dealClick;
