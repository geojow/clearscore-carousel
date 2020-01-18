import React, { Component } from 'react';
import bemHelper from '../../utils/bem';
import './carousel.scss';

const cn = bemHelper({ block: 'carousel' });

class Carousel extends Component {
  render() {
    return (
      <ul className={cn('container')}></ul>
    )
  }
}

export default Carousel;
