import React from 'react';
import bemHelper from '../../utils/bem'
import './dashboard.scss';

const cn = bemHelper({ block: 'dashboard' })

export default () => (
  <div className={cn('container')}>
    Hello World!!
  </div>
);
