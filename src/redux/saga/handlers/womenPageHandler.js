import { call, put } from 'redux-saga/effects';
import getAllProductsWomenPage from '../../../services/getAllProductsWomenPage.service';
import { setWomenPageProducts } from '../../reducers/womenPageReducer';

export function* handletGetWomenPageProducts(action) {
  try {
    const response = yield call(getAllProductsWomenPage);
    yield put(setWomenPageProducts(response));
  } catch (error) {
    console.log(error);
  }
}
