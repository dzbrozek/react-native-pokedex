import React from 'react';
import { shallow } from 'enzyme';
import { FontAwesome } from '@expo/vector-icons';
import FavoriteButton from '../FavoriteButton';

const pokemonId = '12345';
const removePokemonMock = jest.fn();
const addPokemonMock = jest.fn();

describe('<FavoriteButton/>', () => {
  it('should add pokemon to favorite', () => {
    const favorite: any = {
      pokemons: [],
      addPokemon: addPokemonMock,
    };
    const wrapper = shallow(<FavoriteButton pokemonId={pokemonId} favorite={favorite}/>).dive();

    expect(wrapper.find(FontAwesome).prop('name')).toEqual('heart-o');

    wrapper.find({ testId: 'toggle-favorite' }).simulate('press');

    expect(addPokemonMock).toHaveBeenCalledTimes(1);
    expect(addPokemonMock).toHaveBeenCalledWith(pokemonId);
  });

  it('should remove pokemon from favorite', () => {
    const favorite: any = {
      pokemons: [pokemonId],
      removePokemon: removePokemonMock,
    };
    const wrapper = shallow(<FavoriteButton pokemonId={pokemonId} favorite={favorite}/>).dive();

    expect(wrapper.find(FontAwesome).prop('name')).toEqual('heart');

    wrapper.find({ testId: 'toggle-favorite' }).simulate('press');

    expect(removePokemonMock).toHaveBeenCalledTimes(1);
    expect(removePokemonMock).toHaveBeenCalledWith(pokemonId);
  });
});
