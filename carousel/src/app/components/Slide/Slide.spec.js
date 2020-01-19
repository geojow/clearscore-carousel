import React from 'react';
import { shallow } from 'enzyme';
import Slide from './Slide';

describe('Slide', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Slide slide={{ upper: '', middle: '', lower: '' }} />));

  it('should render a <li />', () => {
    expect(wrapper.find('li').length).toEqual(1);
  })

  it('should render the content from slide prop', () => {
    wrapper.setProps({ slide: { upper: 'Your credit score is', middle: '350', lower: 'out of 700' } });
    expect(wrapper.text()).toEqual('Your credit score is350out of 700')
  })
})
