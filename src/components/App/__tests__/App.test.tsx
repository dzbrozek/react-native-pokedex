import { shallow } from 'enzyme';
import React from 'react';
import App from '../App';
import { AppLoading } from 'expo';
import AppNavigator from '../../../navigation';

describe('<App/>', () => {
  it('should render loader', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(AppLoading).exists()).toEqual(true);
  });

  it('should render navigator', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({
      isReady: true,
    });

    expect(wrapper.find(AppNavigator).exists()).toEqual(true);
  });
});
