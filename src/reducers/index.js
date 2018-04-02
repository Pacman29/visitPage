/**
 * Created by ed on 17/03/2018.
 */

'use strict';

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';


import adder from './teaminfo';

const rootReducer = combineReducers({
  routing: routerReducer,
  adder,
});

export default rootReducer;
