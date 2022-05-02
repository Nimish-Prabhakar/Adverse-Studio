import { fork, all } from 'redux-saga/effects';
import womenPageRequestsWatcher from '../Pages/WomenPage/WomenPage.watcher';
import singlePageProductWatcher from '../Pages/SingleProductPage/SingleProductPage.watcher';
import signInPageWatcher from '../Pages/SignIn/SignIn.watcher';
import cartPageWatcher from '../Pages/CartPage/CartPage.watcher';

/**
 * Root Saga that forks all the watchers
 */
export default function* startForman() {
  yield all([
    fork(womenPageRequestsWatcher),
    fork(singlePageProductWatcher),
    fork(signInPageWatcher),
    fork(cartPageWatcher),
  ]);
}
