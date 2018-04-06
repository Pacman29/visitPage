/* Image node  */
import React from 'react';

import 'src/styles/components/image.scss';

class Image extends React.Component{
  constructor(props) {
    super(props);
    this.image = props.img;
  }

  render(){
    return (
      <div className={'image'}>
        <img  src={this.image}></img>
      </div>
    );
  }
}


export default Image;