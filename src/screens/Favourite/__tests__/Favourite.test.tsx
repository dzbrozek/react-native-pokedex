import { shallow } from 'enzyme';
import Favourite from '../Favourite';
import React from 'react';
import { FlatList } from 'react-native';

const favorite: any = {
  pokemons: ['1', '2'],
};
const navigation: any = {};

describe('<Favourite/>', () => {
  it('should render component', () => {
    const wrapper = shallow(<Favourite favorite={favorite} navigation={navigation}/>).dive();

    expect(wrapper.find(FlatList).props()).toMatchObject({
      horizontal: false,
      data: favorite.pokemons,
    });
  });

  it('should render empty component', () => {
    const wrapper = shallow(<Favourite favorite={favorite} navigation={navigation}/>).dive();
    const ListEmptyComponent = wrapper.find(FlatList).prop('ListEmptyComponent');
    const component = shallow(<ListEmptyComponent/>);

    expect(component.props()).toEqual({
      iconProps: { name: 'shopping-basket' },
      message: 'You didn\'t like any pokemon yet',
    });
    expect(component.name()).toEqual('ScreenMessage');
  });

  it('should render item', () => {
    const item = '13';
    const wrapper = shallow(<Favourite favorite={favorite} navigation={navigation}/>).dive();
    const RenderItem = wrapper.find(FlatList).prop('renderItem');
    const component = shallow(<RenderItem item={item}/>);

    expect(component.props()).toEqual({
      item,
    });
    expect(component.name()).toEqual('FavoriteItem');
  });
});
