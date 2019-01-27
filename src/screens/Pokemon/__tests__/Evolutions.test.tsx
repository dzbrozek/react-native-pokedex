import { FlatList } from 'react-native';
import { PokemonFactory } from '../../../tests/factories';
import { shallow } from 'enzyme';
import React from 'react';
import Evolutions from '../Evolutions';

const evolutions = PokemonFactory.buildList(3);
const wrapper = shallow(<Evolutions evolutions={evolutions}/>);

describe('<Evolutions/>', () => {
  it('should render component', () => {
    expect(wrapper.find(FlatList).props()).toMatchObject({
      horizontal: false,
      data: evolutions,
    });
  });

  it('should render list item', () => {
    const evolution = PokemonFactory.build();
    const RenderItem = wrapper.find(FlatList).prop('renderItem');
    const component = shallow(<RenderItem item={evolution}/>);

    expect(component.props()).toEqual({
      item: evolution,
    });
    expect(component.name()).toEqual('withNavigation(PokemonItem)');
  });
});
