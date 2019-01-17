import React from 'react';
import { View, Text } from 'react-native';

class Favourite extends React.Component {
  static navigationOptions = {
    title: 'Favorite',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Favourite</Text>
      </View>
    );
  }
}

export default Favourite;
