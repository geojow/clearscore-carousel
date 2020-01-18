import React from 'react';
import { shallow } from 'enzyme';
import Carousel from './Carousel';
import Slide from '../Slide/Slide';

describe('Carousel', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Carousel />));

  it('should render a <ul />', () => {
    expect(wrapper.find('ul').length).toEqual(1);
  })

  it('should render a Slide component', () => {
    expect(wrapper.containsMatchingElement(<Slide />)).toEqual(true)
  })
})
