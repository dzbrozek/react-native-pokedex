import { shallow } from 'enzyme';
import React from 'react';
import App from '../App';
import { Text } from 'react-native';

describe('<App/>', () => {
  it('should render component', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(Text).prop('children')).toEqual('Open up App.js to start working on your app!');
  });
});
