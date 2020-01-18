import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from './Dashboard';
import Carousel from '../Carousel/Carousel';

describe('Dashboard', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Dashboard />));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render a Carousel component', () => {
    expect(wrapper.containsMatchingElement(<Carousel />)).toEqual(true);
  })
})
