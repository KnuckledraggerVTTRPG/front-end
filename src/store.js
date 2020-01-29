import { applyMiddleware, createStore } from 'redux';
import { logger } from 'redux-logger';
import rootReducer from './reducers/index';

export default () => {
  return createStore(rootReducer, applyMiddleware(logger));
};
