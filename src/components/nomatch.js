/* 404 component */
import React from 'react';
import '../styles/components/nomatch.scss';

export default class NoMatch extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <h3 className={'nomatch'}> 404. Page not found. Incorrect url</h3>
    );
  }
}