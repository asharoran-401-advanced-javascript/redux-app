/* eslint-disable strict */
'use strict';

const initialState = {
  productSelected : [],
  counter : 0,
};


export default (state = initialState , action) => {
  let { type , payload} = action;

  switch (type) {
  case 'ADD':
  { let counter = state.counter++;
    let actualState = state.productSelected.push(payload);
    return {counter ,actualState};
  }
  case 'RESET':
    return initialState;

  default:
    return state;
  }
};


export const add = (productName) => {
  return {
    type : 'ADD',
    payload : productName,
  };
};

export const reset = () => {
  return {
    type: 'RESET',
  };
};

