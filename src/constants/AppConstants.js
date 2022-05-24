const VERSION = '1.0.0';

export const WOMEN_PAGE_DATA_URL =
  'https://karkhana-studio-backend.onrender.com/api/v1/listing/women';

export const SINGLE_PRODUCT_DETAILS_API =
  'https://karkhana-studio-backend.onrender.com/api/v1/listing?product_id=';

export const ADD_USER_SIGN_UP_API =
  'https://karkhana-studio-backend.onrender.com/api/v1/customer';

export const ADD_USER_SIGN_IN_API =
  'https://karkhana-studio-backend.onrender.com/api/v1/customer/login';

export const CART_ITEMS_API =
  'https://karkhana-studio-backend.onrender.com/api/v1/customer';

export const WISHLIST_PRODUCTS_API =
  'https://karkhana-studio-backend.onrender.com/api/v1/customer';

export const COUPON_CODE_API =
  'https://karkhana-studio-backend.onrender.com/api/v1/discount';

export const CHECKOUT_API =
  'https://karkhana-studio-backend.onrender.com/api/v1/checkout';

export const womenPageCategories = [
  'kaftans',
  'tops',
  'bottoms',
  'dresses',
  'crochets',
  'accessories',
];

export const sleeveLengthCategory = [
  {
    index: 1,
    itemText: 'Long',
  },
  {
    index: 2,
    itemText: 'Medium',
  },
  {
    index: 3,
    itemText: 'Short',
  },
];

export const sizeCategory = [
  {
    index: 1,
    itemText: 'Long',
  },
  {
    index: 2,
    itemText: 'Medium',
  },
  {
    index: 3,
    itemText: 'Short',
  },
];

export const priceCategory = [
  {
    index: 1,
    itemText: 'Low to High',
  },
  {
    index: 2,
    itemText: 'High to Low',
  },
];

export const colorCategory = [
  {
    index: 1,
    itemText: 'Red',
  },
  {
    index: 2,
    itemText: 'Blue',
  },
  {
    index: 3,
    itemText: 'Green',
  },
  {
    index: 4,
    itemText: 'Black',
  },
];

console.log('Karkhana Studio Version: ', VERSION);
