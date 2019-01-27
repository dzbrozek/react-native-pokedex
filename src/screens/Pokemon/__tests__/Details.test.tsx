import { shallow } from 'enzyme';
import { PokemonDetailsFactory } from '../../../tests/factories';
import React from 'react';
import Details from '../Details';
import { Name, PokemonImage, StyledPokemonType, TypeContainer } from '../styles';
import FavoriteButton from '../../../components/FavoriteButton';
import SectionHeader from '../../../components/SectionHeader';
import { FlatList } from 'react-native';

const pokemon = PokemonDetailsFactory.build();
const wrapper = shallow(<Details pokemon={pokemon}/>);

describe('<Details/>', () => {
  it('should render component', () => {
    expect(wrapper.find(Name).props()).toEqual({
      numberOfLines: 1,
      children: `#${pokemon.number} ${pokemon.name}`,
    });
    const types = wrapper.find(TypeContainer);

    expect(wrapper.find(FavoriteButton).prop('pokemonId')).toEqual(pokemon.id);

    expect(wrapper.find(PokemonImage).props()).toEqual({
      source: {
        uri: pokemon.image,
      },
      resizeMode: 'contain',
    });

    expect(wrapper.find(SectionHeader).map(node => node.prop('title'))).toEqual(
      ['TYPE', 'RESISTANT', 'WEAKNESSES', 'STATISTICS'],
    );

    expect(types.at(0).find(StyledPokemonType).map(node => node.prop('type'))).toEqual(pokemon.types);

    expect(types.at(1).find(StyledPokemonType).map(node => node.prop('type'))).toEqual(pokemon.resistant);

    expect(types.at(2).find(StyledPokemonType).map(node => node.prop('type'))).toEqual(pokemon.weaknesses);

    expect(wrapper.find(FlatList).props()).toMatchObject({
      numColumns: 2,
    });
  });

  it('should render list item', () => {
    const RenderItem = wrapper.find(FlatList).prop('renderItem');
    const item = { name: 'Flee Rate', value: pokemon.fleeRate, color: '#f97928' };
    const component = shallow(<RenderItem item={item}/>);

    expect(component.props()).toEqual({
      title: item.name,
      value: item.value,
      color: item.color,
    });
    expect(component.name()).toEqual('Styled(InfoTile)');
  });
});
