import React from 'react';
import { View, FlatList } from 'react-native';
import { POKEMONS } from '../../fixtures/pokemons';
import PokemonItem from '../../components/PokemonItem';

class Pokedex extends React.Component {
  static navigationOptions = {
    title: 'Pokédex',
  };

  render() {
    return (
      <View>
        <FlatList
          horizontal={false}
          data={POKEMONS}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <PokemonItem item={item} liked={true}/>}
        />
      </View>
    );
  }
}

export default Pokedex;
