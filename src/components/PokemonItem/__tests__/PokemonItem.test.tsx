import React from 'react';
import { pokemonFactory } from '../../../tests/factories';
import { shallow } from 'enzyme';
import PokemonItem from '../PokemonItem';
import { Image, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const pokemon = pokemonFactory.build();
const removePokemonMock = jest.fn();
const addPokemonMock = jest.fn();

describe('<PokemonItem/>', () => {
  it('should render component', () => {
    const favorite: any = {
      pokemons: [pokemon.id],
    };
    const wrapper = shallow(<PokemonItem item={pokemon} favorite={favorite}/>).dive();

    expect(wrapper.find(Image).prop('source')).toEqual({
      uri: pokemon.image,
    });

    expect(wrapper.find(Text).props()).toMatchObject({
      numberOfLines: 1,
      children: `#${pokemon.number} ${pokemon.name}`,
    });
  });

  it('should add pokemon to favorite', () => {
    const favorite: any = {
      pokemons: [],
      addPokemon: addPokemonMock,
    };
    const wrapper = shallow(<PokemonItem item={pokemon} favorite={favorite}/>).dive();

    expect(wrapper.find(FontAwesome).prop('name')).toEqual('heart-o');

    wrapper.find({ testId: 'toggle-favorite' }).simulate('press');

    expect(addPokemonMock).toHaveBeenCalledTimes(1);
    expect(addPokemonMock).toHaveBeenCalledWith(pokemon.id);
  });

  it('should remove pokemon from favorite', () => {
    const favorite: any = {
      pokemons: [pokemon.id],
      removePokemon: removePokemonMock,
    };
    const wrapper = shallow(<PokemonItem item={pokemon} favorite={favorite}/>).dive();

    expect(wrapper.find(FontAwesome).prop('name')).toEqual('heart');

    wrapper.find({ testId: 'toggle-favorite' }).simulate('press');

    expect(removePokemonMock).toHaveBeenCalledTimes(1);
    expect(removePokemonMock).toHaveBeenCalledWith(pokemon.id);
  });
});
