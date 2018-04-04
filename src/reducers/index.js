/**
 * Created by ed on 17/03/2018.
 */

'use strict';

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import console from './console';

const rootReducer = combineReducers({
  console,
  routing: routerReducer,
});

export default rootReducer;
