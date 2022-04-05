/**
 * Service to get the details of a specific product.
 * @param {string} api - The api url which will return the details of a product.
 */

import { SINGLE_PRODUCT_DETAILS_API } from '../constants/AppConstants';

const getSingleProductDetails = async (product_id) => {
  try {
    const response = await fetch(`${SINGLE_PRODUCT_DETAILS_API}${product_id}`, {
      method: 'GET',
    });
    const json = await response.json();
    return { ok: response.ok, json };
  } catch (error) {
    const err = new Error('Internal server error');
    throw err;
  }
};

export default getSingleProductDetails;
