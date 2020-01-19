import React from 'react';
import { shallow } from 'enzyme';
import Slide from './Slide';
import ProgressRing from '../ProgressRing/ProgressRing'

describe('Slide', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Slide slide={{ id: '1', upper: '', middle: '', lower: '', progress: 10 }} />));

  it('should render a <li />', () => {
    expect(wrapper.find('li').length).toEqual(1);
  })

  it('should render a ProgressRing component', () => {
    expect(wrapper.containsMatchingElement(<ProgressRing progress={10} />)).toEqual(true);
  })

  it('should render the content from slide prop', () => {
    wrapper.setProps({ slide: { id: '1', upper: 'Your credit score is', middle: '350', lower: 'out of 700', progress: null } });
    expect(wrapper.text()).toEqual('Your credit score is350out of 700')
  })
})
