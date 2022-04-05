import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './RootReducer';
import rootSaga from './RootSaga';

/**
 * Configuration of redux store
 */
/**
 * Configuration of redux store
 */
const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  return {
    ...createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware))),
    runSaga: sagaMiddleware.run(rootSaga),
  };
};

export default configureStore;
