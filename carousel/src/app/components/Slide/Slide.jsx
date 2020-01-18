import React from 'react'
import bemHelper from '../../utils/bem';
import './slide.scss';

const cn = bemHelper({ block: 'slide' });

const Slide = () => <li className={cn('container')} />

export default Slide;
