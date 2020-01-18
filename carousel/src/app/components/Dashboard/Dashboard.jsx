import React from 'react';
import bemHelper from '../../utils/bem'
import Carousel from '../Carousel/Carousel'
import './dashboard.scss';

const cn = bemHelper({ block: 'dashboard' })

export default () => (
  <div className={cn('container')}>
    <Carousel />
  </div>
);
