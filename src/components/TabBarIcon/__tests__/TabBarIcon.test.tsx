import React from 'react';
import { shallow } from 'enzyme';
import TabBarIcon from '../TabBarIcon';
import { Icon } from '../styles';

describe('<TabBarIcon/>', () => {
  it('should render component', () => {
    const props = {
      focused: true,
      size: 12,
      name: 'plus-circle',
      color: 'red',
    };
    const wrapper = shallow(<TabBarIcon {...props}/>);

    expect(wrapper.find(Icon).props()).toMatchObject({
      size: props.size,
      name: props.name,
      color: props.color,
    });
  });
});
