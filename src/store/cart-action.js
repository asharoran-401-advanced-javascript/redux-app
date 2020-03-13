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
    return state.productSelected.push(payload);
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

