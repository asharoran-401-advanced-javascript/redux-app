/* eslint-disable strict */
'use strict';

import {createStore , combinereducers} from 'redux'; // we use combine reducers if we deal with more that one reduers
import { composeWithDevTools } from 'redux-devtools-extension'; //give me the history of my action and run the current action only)
import action from './action.js';

let reducers = combinereducers({action});

const store = () => {
  return createStore(reducers , composeWithDevTools());
};

export default store();