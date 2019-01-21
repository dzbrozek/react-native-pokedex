import React from 'react';
import { shallow } from 'enzyme';
import { Image } from 'react-native-animatable';
import FavoriteItemLoader from '../FavoriteItemLoader';

describe('<FavoriteItemLoader/>', () => {
  it('should render component', () => {
    const wrapper = shallow(<FavoriteItemLoader/>);

    expect(wrapper.find(Image).props()).toMatchObject({
      animation: 'tada',
      iterationCount: 'infinite',
      duration: 2000,
    });
  });
});
