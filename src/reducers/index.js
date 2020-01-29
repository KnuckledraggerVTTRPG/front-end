import { combineReducers } from 'redux';
import testReducer from './test.reducer';

const rootReducer = combineReducers({
  counter: testReducer,
});

export default rootReducer;
