import About from '../About';
import { shallow } from 'enzyme';
import Card from '../../../components/Card';
import React from 'react';
import { FlatList } from 'react-native';
import { CardText, InfoCard } from '../styles';

describe('<About/>', () => {
  it('should render component', () => {
    const navigation: any = {};
    const wrapper = shallow(<About navigation={navigation}/>);

    const infoCard = wrapper.find(InfoCard);
    const creditsCard = wrapper.find(Card);

    expect(infoCard.find(Card.Header).prop('children')).toEqual('Info');
    expect(infoCard.find(Card.Body).find(CardText).prop('children')).toEqual('Simple React Native ' +
      'app displaying information about pokemons.');

    expect(creditsCard.find(Card.Header).prop('children')).toEqual('Credits');
    expect(creditsCard.find(FlatList).exists()).toEqual(true);
  });
});
