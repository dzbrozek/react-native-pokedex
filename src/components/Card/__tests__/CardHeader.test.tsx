import React from 'react';
import { shallow } from 'enzyme';
import CardHeader from '../CardHeader';
import { Text } from 'react-native';

describe('<CardHeader/>', () => {
  it('should render component', () => {
    const wrapper = shallow(<CardHeader>Example header</CardHeader>);

    expect(wrapper.find(Text).prop('children')).toEqual('Example header');
  });
});
