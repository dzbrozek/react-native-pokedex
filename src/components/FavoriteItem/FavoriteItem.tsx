import React from 'react';
import { POKEMON } from '../../fixtures/pokemons';
import PokemonItem from '../PokemonItem';
import FavoriteItemLoader from '../FavoriteItemLoader';

const FavoriteItem = ({ item }) => {
  const pokemonData = POKEMON[item];

  if (pokemonData) {
    return <PokemonItem item={pokemonData}/>;
  }

  return <FavoriteItemLoader/>;
};

export default FavoriteItem;
