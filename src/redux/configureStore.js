import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import womenPageReducer from './reducers/womenPageReducer';
import { watcherSaga } from './saga/rootSaga';

const reducers = combineReducers({
  womenPage: womenPageReducer,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducers, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);

export default store;
