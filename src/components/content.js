import React from 'react';
import {Image, TeamInfo} from './index';
import {Route, Switch} from 'react-router';
import 'src/styles/components/content.scss';

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
          <Route exact path='/' component={TeamInfo}/>
          <Route path='/teampage' component={Image}/>
        </Switch>
      </div>

    );}
}
export default Content;