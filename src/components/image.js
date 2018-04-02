import React from 'react';
import PropTypes from 'prop-types';

import 'src/styles/components/image.scss';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import * as TeamInfoActions from '../actions/teaminfo';
import { createStructuredSelector, createSelector } from 'reselect';
import renderHTML from 'react-render-html';
import * as images from '../constants/images';

const queryString = require('query-string');

class Image extends React.Component{
  constructor(ownProps) {
    super();
    
    switch (ownProps.query.user){
    case 'kapustin':{
      this.image = images.ALEX;
      break;
    }
    case 'asriyan':{
      this.image = images.ED;
      break;
    }
    case 'balyakin':{
      this.image = images.DANILA;
      break;
    }
    case 'kamakin':{
      this.image = images.ANDREY;
      break;
    }
    }
  }

    static propTypes = {
      query: PropTypes.object.isRequired,
    };

    render(){
      return (
        <div className={'image'}>
          <img src={this.image}></img>
        </div>
      );
    }
}

const mapStateToProps = (state,ownProps) => {
  return {
    state,
    query: queryString.parse(ownProps.location.search),
  };
};

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(, dispatch);
// }

export default connect(mapStateToProps)(Image);