/* eslint-disable strict */
'use strict';

import {createStore , combineReducers} from 'redux'; // we use combine reducers if we deal with more that one reduers
import { composeWithDevTools } from 'redux-devtools-extension'; //give me the history of my action and run the current action only)
// import action from './action.js';
// console.log('action' , action);
import categories from './category-action.js';
import products from './product-action.js';
import cart from './cart-action.js';

let reducers = combineReducers({categories , products , cart});

const store = () => {
  return createStore(reducers , composeWithDevTools());
};

export default store();