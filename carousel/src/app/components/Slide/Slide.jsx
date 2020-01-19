import React from 'react'
import PropTypes from 'prop-types'
import bemHelper from '../../utils/bem';
import './slide.scss';

const cn = bemHelper({ block: 'slide' });

const Slide = ({ slide }) =>
  <li className={cn('container')}>
    <p className={cn("content-upper")}>{slide ? slide.upper : 'No Data'}</p>
    <p className={cn("content-middle")}>{slide ? slide.middle : 'No Data'}</p>
    <p className={cn("content-lower")}>{slide ? slide.lower : 'No Data'}</p>
  </li>

Slide.propTypes = {
  slide: PropTypes.shape({
    upper: PropTypes.string.isRequired,
    middle: PropTypes.string.isRequired,
    lower: PropTypes.string.isRequired
  })
}

export default Slide;
