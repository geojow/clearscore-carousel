import React from 'react';
import { shallow } from 'enzyme';
import Carousel from './Carousel';

describe('Carousel', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Carousel />));

  it('should render a <ul />', () => {
    expect(wrapper.find('ul').length).toEqual(1);
  })
})
