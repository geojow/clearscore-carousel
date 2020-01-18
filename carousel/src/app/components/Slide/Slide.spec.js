import React from 'react';
import { shallow } from 'enzyme';
import Slide from './Slide';

describe('Slide', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Slide />));

  it('should render a <li />', () => {
    expect(wrapper.find('li').length).toEqual(1);
  })
})
