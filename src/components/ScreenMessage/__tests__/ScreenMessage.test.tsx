import React from 'react';
import { shallow } from 'enzyme';
import ScreenMessage from '../ScreenMessage';
import { FontAwesome } from '@expo/vector-icons';
import { Text } from 'react-native';

describe('<ScreenMessage/>', () => {
  it('should render component', () => {
    const props = {
      iconProps: {
        name: 'glass',
      },
      message: 'Test message',
    };
    const wrapper = shallow(<ScreenMessage {...props}/>);

    expect(wrapper.find(FontAwesome).props()).toMatchObject(props.iconProps);

    expect(wrapper.find(Text).prop('children')).toEqual(props.message);
  });
});