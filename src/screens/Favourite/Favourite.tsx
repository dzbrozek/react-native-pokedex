import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import PokemonItem from '../../components/PokemonItem';
import EmptyMessage from '../../components/EmptyMessage';

class Favourite extends React.Component {
  static navigationOptions = {
    title: 'Favorite',
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.contentContainerStyle}
          horizontal={false}
          data={[]}
          keyExtractor={item => item.id}
          ListEmptyComponent={() => {
            return (
              <EmptyMessage
                iconProps={{ name: 'shopping-basket' }}
                message="You didn't catch any pokemon yet"
              />
            );
          }}
          renderItem={({ item }) => <PokemonItem item={item} liked={true}/>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    flexGrow: 1,
  },
});

export default Favourite;
