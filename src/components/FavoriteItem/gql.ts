import gql from 'graphql-tag';
import { POKEMON_INFO } from 'gql';

export const GET_POKEMON = gql`
  query pokemon($id: String!) {
    pokemon(id: $id) {
      ...pokemon
    }
  }
  ${POKEMON_INFO}
`;
