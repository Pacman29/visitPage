import React from 'react';
import PropTypes from 'prop-types';

import 'src/styles/components/teaminfo.scss';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import * as TeamInfoActions from '../actions/teaminfo';
import { createStructuredSelector, createSelector } from 'reselect';
import renderHTML from 'react-render-html';


class TeamInfo extends React.Component{
  constructor() {
    super();
    this._timer = setInterval(() => this.addChar(),25);
    this.flagHaveText = true;
  }

    static propTypes = {
      addChar: PropTypes.func.isRequired,
      addCursor: PropTypes.func.isRequired,
      deleteCursor: PropTypes.func.isRequired,
      displaytext: PropTypes.string.isRequired,
    };

    addChar() {
      this.props.addChar();
    }

    addCursor() {
      this.props.addCursor();
    }

    deleteCursor() {
      this.props.deleteCursor();
    }

    render(){
      if(this.flagHaveText && this.props.displaytext.indexOf('|') !== -1){
        clearInterval(this._timer);
        let flag = false;
        this._timer = setInterval(() => {
          if(flag){
            this.addCursor();
          } else {
            this.deleteCursor();
          }
          flag = !flag;
        },750);
        this.flagHaveText = false;
      }
      return (
        <div className='console'>
          {renderHTML(this.props.displaytext)}
        </div>
      );
    }
}

const mapStateToProps = createStructuredSelector({
  displaytext: createSelector(
    (state) => state.adder,
    (adderState) => adderState
  ),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(TeamInfoActions, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(TeamInfo);