import { combineReducers } from 'redux';
import womenPageReducer from '../Pages/WomenPage/WomenPage.reducer';
import singleProductPageReducer from '../Pages/SingleProductPage/SingleProductPage.reducer';
import cartPageReducer from '../Pages/CartPage/CartPage.reducer';
import signInPageReducer from '../Pages/SignIn/SignIn.reducer';

/**
 * Root reducer, which is a combination of several reducers
 */

const rootReducer = combineReducers({
  womenPageReducer,
  singleProductPageReducer,
  cartPageReducer,
  signInPageReducer,
});

export default rootReducer;
