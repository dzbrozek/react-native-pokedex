import React from 'react';
import { shallow } from 'enzyme';
import FavoriteItemLoader from '../FavoriteItemLoader';
import Loader from '../../Loader';

describe('<FavoriteItemLoader/>', () => {
  it('should render component', () => {
    const wrapper = shallow(<FavoriteItemLoader/>);

    expect(wrapper.find(Loader).exists()).toEqual(true);
  });
});
