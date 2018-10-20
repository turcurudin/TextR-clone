import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import { createLogger } from 'redux-logger';

import reducer from './reducers'

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ })

function configureStore(initialState) {
  const enhancer = compose(applyMiddleware(
    loggerMiddleware,
  ));
  return createStore(reducer, initialState, enhancer);
}

export default configureStore({});
