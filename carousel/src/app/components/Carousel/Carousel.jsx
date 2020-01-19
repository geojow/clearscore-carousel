import React, { Component } from 'react';
import bemHelper from '../../utils/bem';
import Slide from '../Slide/Slide'
import './carousel.scss';

const cn = bemHelper({ block: 'carousel' });

class Carousel extends Component {
  render() {
    const slide = {
      upper: "Your credit score is",
      middle: '350',
      lower: "out of 700"
    }
    return (
      <ul className={cn('container')}>
        <Slide slide={slide} />
      </ul>
    )
  }
}

export default Carousel;
