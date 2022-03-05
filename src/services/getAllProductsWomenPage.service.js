/**
 * Service to get the list of products to be displayed on women's page.
 * @param {string} api - The api url which will return the list of products to be displayed on women's page.
 * @returns {Object} - Json
 */

import { WOMEN_PAGE_DATA_URL } from '../constants/AppConstants';

const getAllProductsWomenPage = async () => {
  try {
    const response = await fetch(WOMEN_PAGE_DATA_URL, {
      method: 'GET',
    });
    const json = await response.json();
    return { ok: response.ok, json };
  } catch (error) {
    const err = new Error('Internal server error');
    throw err;
  }
};

export default getAllProductsWomenPage;
