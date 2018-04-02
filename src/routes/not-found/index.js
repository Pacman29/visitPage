/**
 * Created by ed on 18/03/2018.
 */

'use strict';

import React from 'react';

import RouteComponent from 'src/routes/route-component';
import { Link } from 'react-router-dom';

export default class extends RouteComponent {
  render () {
    return (
      <div align="middle">
        <h2>Page not found</h2>
        <Link to='/'>Go to main</Link>
      </div>
    );
  }
}
