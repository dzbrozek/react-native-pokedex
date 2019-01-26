import gql from 'graphql-tag';
import { POKEMON_INFO } from 'gql';

export const ATTACK = gql`
  fragment attack on Attack {
    name
    type
    damage
  }
`;
export const GET_POKEMON_DETAILS = gql`
  query pokemon($id: String!) {
    pokemon(id: $id) {
      id
      number
      name
      image
      types
      resistant
    	weaknesses
    	classification
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      maxHP
      maxCP
      fleeRate
      evolutions {
        ...pokemon
      }
      attacks {
        fast {
          ...attack
        }
        special {
          ...attack
        }
      }
    }
  }
  ${POKEMON_INFO},
  ${ATTACK}
`;
