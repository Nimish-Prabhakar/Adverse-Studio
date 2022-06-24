import { WISHLIST_ITEMS_API } from '../constants/AppConstants';

/**
 * Service to sign in user.
 * @param {Object} userDetails - Details of the user to sign in..
 */
const addItemToWishlist = async (customer_id, product_id) => {
  try {
    const response = await fetch(
      `${WISHLIST_ITEMS_API}/${customer_id}/wishlist?product_id=${product_id}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      }
    );
    const json = await response.json();
    return { ok: response.ok, json };
  } catch (error) {
    return { ok: false, json: error };
  }
};

export default addItemToWishlist;
