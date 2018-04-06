// Main Route

'use strict';

import React from 'react';
import {Content} from '../components';

import 'index.scss';
import 'src/styles/body.scss';
import {Col, Grid, Row} from 'react-bootstrap';

export default class extends React.Component {
  constructor(){
    super();
    // Animation for change gradient in backgroun
    let colors = [[62, 35, 255],
      [60, 255, 60],
      [255, 35, 98],
      [45, 175, 230],
      [255, 0, 255],
      [255, 128, 0]];

    let step = 0;
    //color table indices for:
    // current color left
    // next color left
    // current color right
    // next color right
    const colorIndices = [0, 1, 2, 3];

    //transition speed
    const gradientSpeed = 0.002;

    function updateGradient()
    {


      let c0_0 = colors[colorIndices[0]];
      let c0_1 = colors[colorIndices[1]];
      let c1_0 = colors[colorIndices[2]];
      let c1_1 = colors[colorIndices[3]];

      let istep = 1 - step;
      let r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
      let g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
      let b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
      let color1 = 'rgb('+r1+','+g1+','+b1+')';

      let r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
      let g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
      let b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
      let color2 = 'rgb('+r2+','+g2+','+b2+')';

      let gradient = document.getElementsByClassName('gradient')[0];

      gradient.style.background = '-webkit-gradient(linear, left top, right top, from('+color1+'), to('+color2+'))';
      gradient.style.background = '-moz-linear-gradient(left, '+color1+' 0%, '+color2+' 100%)';

      step += gradientSpeed;
      if ( step >= 1 )
      {
        step %= 1;
        colorIndices[0] = colorIndices[1];
        colorIndices[2] = colorIndices[3];

        //pick two new target color indices
        //do not pick the same as the current one
        colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
        colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;

      }
    }

    setInterval(updateGradient,10);
  }
  render () {
    return (
      <div className={'gradient'}>
        <Grid>
          <Row className={'show-grid'}>
            <Col md={2}/>
            <Col md={8}>
              <Content/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
