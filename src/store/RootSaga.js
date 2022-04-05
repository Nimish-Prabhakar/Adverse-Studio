import { fork, all } from 'redux-saga/effects';
import womenPageRequestsWatcher from '../Pages/WomenPage/WomenPage.watcher';
import singlePageProductWatcher from '../Pages/SingleProductPage/SingleProductPage.watcher';

/**
 * Root Saga that forks all the watchers
 */
export default function* startForman() {
  yield all([fork(womenPageRequestsWatcher), fork(singlePageProductWatcher)]);
}
