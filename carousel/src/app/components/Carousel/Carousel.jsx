import React, { Component } from 'react';
import bemHelper from '../../utils/bem';
import Slide from '../Slide/Slide'
import './carousel.scss';

const cn = bemHelper({ block: 'carousel' });

class Carousel extends Component {
  render() {
    return (
      <ul className={cn('container')}>
        <Slide />
      </ul>
    )
  }
}

export default Carousel;
