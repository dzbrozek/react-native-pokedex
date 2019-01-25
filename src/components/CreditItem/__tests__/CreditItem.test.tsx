import { shallow } from 'enzyme';
import React from 'react';
import CreditItem from '../CreditItem';
import { FontAwesome } from '@expo/vector-icons';
import { Subtitle, Title } from '../styles';

describe('<CreditItem/>', () => {
  it('should render component', () => {
    const item = {
      title: 'My title',
      subtitle: 'My subtitle',
      icon: 'bath',
      link: 'https://github.com/',
    };
    const wrapper = shallow(<CreditItem item={item}/>);

    expect(wrapper.find(FontAwesome).at(0).prop('name')).toEqual(item.icon);

    const itemText = wrapper.find({ testID: 'info-container' });

    expect(itemText.find(Title).prop('children')).toEqual(item.title);
    expect(itemText.find(Subtitle).prop('children')).toEqual(item.subtitle);
  });
});
