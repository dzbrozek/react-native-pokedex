import React from 'react';
import PokemonItem from '../PokemonItem';
import FavoriteItemLoader from '../FavoriteItemLoader';
import { Query } from 'react-apollo';
import { GET_POKEMON } from './gql';

const FavoriteItem = ({ item: id }) => {
  return (
    <Query query={GET_POKEMON} variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading || error) {
          return <FavoriteItemLoader/>;
        }
        return <PokemonItem item={data.pokemon}/>;
      }}
    </Query>
  );
};

export default FavoriteItem;
