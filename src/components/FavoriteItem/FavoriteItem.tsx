import React from 'react';
import { POKEMON } from '../../fixtures/pokemons';
import PokemonItem from '../PokemonItem';
import PokemonItemLoader from '../PokemonItemLoader';

const FavoriteItem = ({ item }) => {
  const pokemonData = POKEMON[item];

  if (pokemonData) {
    return <PokemonItem item={pokemonData}/>;
  }

  return <PokemonItemLoader/>;
};

export default FavoriteItem;
