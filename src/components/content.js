/* Main component*/

import React from 'react';
import {Console, NoMatch} from './index';
import {Route, Switch} from 'react-router';
import 'src/styles/components/content.scss';

import * as CONTENTS from '../constants/contents';
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
          <Route path='*' render={(props) => {
            return (
              <NoMatch {...props}/>
            );
          }
          }/>
        </Switch>
      </div>

    );}
}

export default (Content);
