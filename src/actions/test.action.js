export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export const incrementCounter = payload => {
  return {
    type: INCREMENT_COUNTER,
    payload,
  };
};

export const decrementCounter = payload => {
  return {
    type: DECREMENT_COUNTER,
    payload,
  };
};
