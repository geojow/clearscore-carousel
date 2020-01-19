import React from 'react';
import PropTypes from 'prop-types';
import bemHelper from '../../utils/bem';
import './progressring.scss'

const cn = bemHelper({ block: "progress-ring" })

const ProgressRing = ({ progress }) => {

  const radius = 185
  const stroke = 4
  const normalisedRadius = radius - stroke * 2;
  const circumference = normalisedRadius * 2 * Math.PI;

  const strokeDashoffset = circumference - progress / 100 * circumference;

  return (
    <svg className={cn('')}>
      <circle
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={circumference}
        style={{ strokeDashoffset, '--test': "black" }}
        r={normalisedRadius}
        cx={radius}
        cy={radius}
      />
    </svg>)
}

ProgressRing.propTypes = {
  progress: PropTypes.number.isRequired
}

export default ProgressRing;
