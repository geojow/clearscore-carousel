import React, { Component } from 'react';
import bemHelper from '../../utils/bem'
import Carousel from '../Carousel/Carousel'
import './dashboard.scss';

const cn = bemHelper({ block: 'dashboard' })

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    fetch('/api/creditReport')
      .then(response => response.json())
      .then(json => this.setState({ data: json.data }))
  }

  render() {
    return (
      <div className={cn('container')}>
        <Carousel />
      </div>
    )
  }
}

export default Dashboard;
