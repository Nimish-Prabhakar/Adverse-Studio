import { WISHLIST_ITEMS_API } from '../constants/AppConstants';

/**
 * Service to sign in user.
 * @param {Object} userDetails - Details of the user to sign in..
 */
const getWishlistItems = async (customer_id) => {
  try {
    const response = await fetch(
      `${WISHLIST_ITEMS_API}/${customer_id}/wishlist`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }
    );
    const json = await response.json();
    return { ok: response.ok, json };
  } catch (error) {
    return { ok: false, json: error };
  }
};

export default getWishlistItems;
