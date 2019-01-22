import gql from 'graphql-tag';
import { POKEMON_INFO } from 'gql';

export const GET_POKEMONS = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      ...pokemon
    }
  }
  ${POKEMON_INFO}
`;
