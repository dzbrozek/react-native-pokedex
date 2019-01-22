import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import FavoriteItem from '../../components/FavoriteItem';
import ScreenMessage from '../../components/ScreenMessage';
import { inject, observer } from 'mobx-react/native';
import { FavoriteStore } from '../../stores/Favorite';

interface Props {
  favorite: FavoriteStore;
}

@inject('favorite')
@observer
class Favourite extends React.Component<Props> {
  static navigationOptions = {
    title: 'Favorite',
  };

  render() {
    const { favorite: { pokemons } } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.contentContainerStyle}
          horizontal={false}
          data={pokemons}
          keyExtractor={item => item}
          ListEmptyComponent={() => {
            return (
              <ScreenMessage
                iconProps={{ name: 'shopping-basket' }}
                message="You didn't catch any pokemon yet"
              />
            );
          }}
          renderItem={({ item }) => <FavoriteItem item={item}/>}
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
