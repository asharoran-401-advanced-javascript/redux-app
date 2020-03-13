/* eslint-disable strict */
'use strict';

import {createStore , combineReducers} from 'redux'; // we use combine reducers if we deal with more that one reduers
import { composeWithDevTools } from 'redux-devtools-extension'; //give me the history of my action and run the current action only)
import action from './action.js';
console.log('action' , action);

let reducers = combineReducers({action});

const store = () => {
  return createStore(reducers , composeWithDevTools());
};

export default store();