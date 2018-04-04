import React from 'react';
import {Image, Console} from './index';
import {Route, Switch} from 'react-router';
import 'src/styles/components/content.scss';

import * as CONTENTS from '../constants/contents';
import {Col, Grid, Row} from 'react-bootstrap';
import {connect} from 'react-redux';
import * as queryString from 'query-string';
import UserInfo from './userinfo';

class Content extends React.Component{
  render(){
    
    return (
      <div className={'content shell'}>
        <div>
          <p className="top-bar">
                /Users/SAS/Documents/website/
          </p>
        </div>
        <Switch>
          <Route exact path='/' render={(props) => {
            return (
              <Console {...props} rendercontent={CONTENTS.MAINCONTENT}/>
            );
          }
          }/>
          <Route path='/teampage' render={(props) => {
            return (
              <UserInfo {...props}/>
            );
          }
          }/>
        </Switch>
      </div>

    );}
}

export default (Content);
