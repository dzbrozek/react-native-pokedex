import React from 'react';
import { shallow } from 'enzyme';
import TabBarIcon from '../TabBarIcon';
import { Ionicons } from '@expo/vector-icons';

describe('<TabBarIcon/>', () => {
  it('should render component', () => {
    const props = {
      focused: true,
      size: 12,
      name: 'md-information-circle',
      color: 'red',
    };
    const wrapper = shallow(<TabBarIcon {...props}/>);

    expect(wrapper.find(Ionicons).props()).toMatchObject({
      size: props.size,
      name: props.name,
      color: props.color,
    });
  });
});
