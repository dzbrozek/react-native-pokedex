import gql from 'graphql-tag';

export const POKEMON_INFO = gql`
  fragment pokemon on Pokemon {
    id
    number
    name
    types
    image
  }
`;
