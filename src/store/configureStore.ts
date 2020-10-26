import { applyMiddleware, createStore, compose } from 'redux'
import createSagaMiddleware from 'redux-saga';

import createRootReducer from './reducer';
import rootSaga from './sagas';

export default function configureStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    createRootReducer(),
    initialState,
    compose(
      applyMiddleware(
        sagaMiddleware,
      )
    )
  );

  sagaMiddleware.run(rootSaga);

  return store;
}

export const store = configureStore();
