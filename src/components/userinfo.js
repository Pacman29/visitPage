/* UserInfo component*/

import React from 'react';
import PropTypes from 'prop-types';
import {Grid, Row, Col} from 'react-bootstrap';
import {Image, Console} from 'index';
import {connect} from 'react-redux';
import * as queryString from 'query-string';
import * as IMAGES from '../constants/images';
import * as CONTENT from '../constants/contents';

import renderHTML from 'react-render-html';
import '../styles/components/userinfo.scss';
import * as UserInfoActions from '../actions/actionUserInfo';
import {bindActionCreators} from 'redux';
import * as ConsoleInput from '../constants/actiontypes';
import {createSelector,createStructuredSelector} from 'reselect';


class UserInfo extends React.Component{
  constructor(props){
    super(props);
    let query = queryString.parse(props.location.search);
    switch (query.user){
    case 'kapustin':{
      this.image = IMAGES.ALEX;
      this.headertext = CONTENT.HEADER_ALEX;
      this.usertext = CONTENT.CONTENT_ALEX;
      break;
    }
    case 'asriyan':{
      this.image = IMAGES.ED;
      this.headertext = CONTENT.HEADER_ED;
      this.usertext = CONTENT.CONTENT_ED;
      break;
    }
    case 'balyakin':{
      this.image = IMAGES.DANILA;
      this.headertext = CONTENT.HEADER_DANICH;
      this.usertext = CONTENT.CONTENT_DANICH;
      break;
    }
    case 'kamakin':{
      this.image = IMAGES.ANDREY;
      this.headertext = CONTENT.HEADER_ANDREY;
      this.usertext = CONTENT.CONTENT_ANDREY;
      break;
    }
    default : {
      this.image = IMAGES.TEAM;
      this.headertext = CONTENT.HEADER_USER;
      this.usertext = CONTENT.CONTENT_USER;
      break;
    }
    }
    this.flag = true;
    this.footer = '';
  }

  static propTypes = {
    inputState: PropTypes.string.isRequired,
  };

  // Render footer after inputing main text
  consoleInput(){
    
    if(this.props.inputState === ConsoleInput.INPUTOFF && this.flag){
      this.flag = !this.flag;
      this.footer = (<Console {...this.props} rendercontent={CONTENT.CONSOLE}/>);
    }
    return this.footer;
  }

  render(){
    return (
      <Grid className={'userinfo'}>
        <Row className={'show-grid'}>
          <div className={'console'}>
            {renderHTML(this.headertext)}
          </div>
        </Row>
        <Row className={'show-grid'}>
          <Col md={3}>
            <Image {...this.props} img={this.image}/>
          </Col>
          <Col md={9} className={'main'}>
            <Console {...this.props} rendercontent={this.usertext} blink={false}/>
          </Col>
        </Row>
        <Row className={'show-grid footer'}>
          {this.consoleInput()}
        </Row>
      </Grid>
    );
  }
}


const mapStateToProps = createStructuredSelector(
  {
    inputState: createSelector(
      (state) => state.console,
      (inputState) => inputState
    ),
  }
);


function mapDispatchToProps(dispatch) {
  return bindActionCreators(UserInfoActions, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(UserInfo);