import React from 'react';
import { View, Text } from 'react-native';

class Pokedex extends React.Component {
  static navigationOptions = {
    title: 'Pokédex',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Pokedex</Text>
      </View>
    );
  }
}

export default Pokedex;
