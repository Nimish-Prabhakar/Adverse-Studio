import { CART_ITEMS_API } from '../constants/AppConstants';

/**
 * Service to sign in user.
 * @param {Object} userDetails - Details of the user to sign in..
 */
const deleteCartItem = async (customer_id, product_id, size, color) => {
  try {
    const response = await fetch(
      `${CART_ITEMS_API}/${customer_id}/cart/?product_id=${product_id}&size=$${size}&color=${color}`,
      {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      }
    );

    const json = await response.json();
    return { ok: response.ok, json };
  } catch (error) {
    return { ok: false, json: error };
  }
};

export default deleteCartItem;
