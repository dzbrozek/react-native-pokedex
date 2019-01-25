import React from 'react';
import { shallow } from 'enzyme';
import ScreenMessage from '../ScreenMessage';
import { Icon, Message } from '../styles';

describe('<ScreenMessage/>', () => {
  it('should render component', () => {
    const props = {
      iconProps: {
        name: 'glass',
      },
      message: 'Test message',
    };
    const wrapper = shallow(<ScreenMessage {...props}/>);

    expect(wrapper.find(Icon).props()).toMatchObject(props.iconProps);

    expect(wrapper.find(Message).prop('children')).toEqual(props.message);
  });
});
