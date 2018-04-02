/**
 * Created by ed on 17/03/2018.
 */

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'store';
import App from './routes';

import { Router} from 'react-router';
import { createBrowserHistory } from 'history';
let store = configureStore();
import { syncHistoryWithStore } from 'react-router-redux';
const history = syncHistoryWithStore(createBrowserHistory(), store);

// must be imported into the project at least once
import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css';
import 'src/styles/global.scss';


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App/>
    </Router>
  </Provider>,
  document.getElementById('app'),
);
