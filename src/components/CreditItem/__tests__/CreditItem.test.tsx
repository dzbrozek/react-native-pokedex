import { shallow } from 'enzyme';
import React from 'react';
import CreditItem from '../CreditItem';
import { Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

describe('<CreditItem/>', () => {
  it('should render component', () => {
    const item = {
      title: 'My title',
      subtitle: 'My subtitle',
      icon: 'md-pulse',
      link: 'https://github.com/',
    };
    const wrapper = shallow(<CreditItem item={item}/>);

    expect(wrapper.find(Ionicons).at(0).prop('name')).toEqual(item.icon);

    const itemText = wrapper.find({ testID: 'item-text' }).find(Text);

    expect(itemText.at(0).prop('children')).toEqual(item.title);
    expect(itemText.at(1).prop('children')).toEqual(item.subtitle);
  });
});
