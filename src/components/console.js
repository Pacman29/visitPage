/* Console component for create DOM
*  nodes  */

import React from 'react';
import PropTypes from 'prop-types';

import 'src/styles/components/teaminfo.scss';
import renderHTML from 'react-render-html';

import * as ACTIONTYPES from '../constants/actiontypes';

import * as UserInfoActions from '../actions/actionUserInfo';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Console extends React.Component{
  constructor(props) {
    super(props);
    this.content = props.rendercontent;

    // check need blink cursor in the end of text
    this.enableblinkcursor = props.blink !== undefined ? props.blink : true ;
    // time interval for inputing text
    this._timer = setInterval(() => {
      this.forceUpdate();
    },5);
    this.currentcontent = '';
    this.charindex = 0;
    this.action = ACTIONTYPES.ADD_CHAR;
    this.props.inputon();
  }

  // add action dispatch
  static propTypes = {
    inputon : PropTypes.func.isRequired,
    inputoff: PropTypes.func.isRequired,
  };

  // add char in display text
  addChar(){
    let str = '';
    str = this.content[this.charindex++];
    if(str === '<')
      do{
        str += this.content[this.charindex++];
      } while (str[str.length-1] !== '>');

    this.currentcontent += str;
    // animation for blink the cursor
    if(this.charindex === this.content.length){
      this.action = undefined;
      clearInterval(this._timer);
      if(this.enableblinkcursor){
        let flag = true;
        this._timer = setInterval(() => {
          this.action = (flag) ? ACTIONTYPES.ADD_CURSOR : ACTIONTYPES.DELETE_CURSOR;
          flag = !flag;
          this.forceUpdate();
        },750);
      }
      this.props.inputoff();
    }
    return this.currentcontent;
  }

  addCursor(){
    this.currentcontent += '|';
  }

  deleteCursor(){
    this.currentcontent = this.currentcontent.slice(0,this.currentcontent.length-1);
  }

  // Handler next action for displaying text
  contentHandler(){
    switch (this.action){
    case ACTIONTYPES.ADD_CHAR: {
      this.addChar();
      break;
    }
    case ACTIONTYPES.ADD_CURSOR: {
      this.addCursor();
      break;
    }
    case ACTIONTYPES.DELETE_CURSOR: {
      this.deleteCursor();
      break;
    }
    default:{
      break;
    }
    }
    return this.currentcontent;
  }

  render(){
    let content = this.contentHandler();
    return (
      <div className='console'>
        {renderHTML(content)}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(UserInfoActions, dispatch);
}

export default connect(null,mapDispatchToProps)(Console);