import { CART_ITEMS_API } from '../constants/AppConstants';

const getCartItems = async (customer_id) => {
  try {
    const response = await fetch(`${CART_ITEMS_API}/${customer_id}/cart`, {
      method: 'GET',
    });
    const json = await response.json();
    return { ok: response.ok, json };
  } catch (error) {
    const err = new Error('Internal server error');
    throw err;
  }
};

export default getCartItems;
