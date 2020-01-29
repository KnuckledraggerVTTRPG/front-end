import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/test.action';

const initialState = {
  value: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { value: state.value + 1 };
    case DECREMENT_COUNTER:
      return { value: state.value - 1 };
    default:
      return state;
  }
};
