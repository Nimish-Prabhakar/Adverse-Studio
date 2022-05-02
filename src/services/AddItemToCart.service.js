import { CART_ITEMS_API } from '../constants/AppConstants';

/**
 * Service to sign in user.
 * @param {Object} userDetails - Details of the user to sign in..
 */
const addItemToCart = async (customer_id, cartItems) => {
  const requestBody = {
    product_id: parseInt(cartItems.product_id),
    color: cartItems.color,
    size: cartItems.size,
    quantity: parseInt(cartItems.quantity),
  };

  try {
    const response = await fetch(`${CART_ITEMS_API}/${customer_id}/cart`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody),
    });

    const json = await response.json();
    return { ok: response.ok, json };
  } catch (error) {
    return { ok: false, json: error };
  }
};

export default addItemToCart;
