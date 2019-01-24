import About from '../About';
import { shallow } from 'enzyme';
import Card from '../../../components/Card';
import React from 'react';
import { FlatList, Text } from 'react-native';

describe('<About/>', () => {
  it('should render component', () => {
    const navigation: any = {};
    const wrapper = shallow(<About navigation={navigation}/>);

    const cards = wrapper.find(Card);
    const infoCard = cards.at(0);
    const creditsCard = cards.at(1);

    expect(infoCard.find(Card.Header).prop('children')).toEqual('Info');
    expect(infoCard.find(Card.Body).find(Text).prop('children')).toEqual('Simple React Native app displaying ' +
      'information about pokemons.');

    expect(creditsCard.find(Card.Header).prop('children')).toEqual('Credits');
    expect(creditsCard.find(FlatList).exists()).toEqual(true);
  });
});
