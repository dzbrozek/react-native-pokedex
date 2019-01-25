import React from 'react';
import { shallow } from 'enzyme';
import Loader from '../Loader';
import { PokeballImage } from '../styles';

describe('<Loader/>', () => {
  it('should render component', () => {
    const wrapper = shallow(<Loader/>);

    expect(wrapper.find(PokeballImage).props()).toMatchObject({
      animation: 'tada',
      iterationCount: 'infinite',
      duration: 2000,
    });
  });
});
