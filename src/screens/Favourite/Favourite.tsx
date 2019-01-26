import React from 'react';
import { FlatList } from 'react-native';
import FavoriteItem from '../../components/FavoriteItem';
import ScreenMessage from '../../components/ScreenMessage';
import { inject, observer } from 'mobx-react/native';
import { FavoriteStore } from '../../stores/Favorite';
import { NavigationScreenProps } from 'react-navigation';
import { styles } from './styles';
import { SafeContainer } from 'styles';

interface Props extends NavigationScreenProps {
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
      <SafeContainer>
        <FlatList
          contentContainerStyle={styles.contentContainer}
          horizontal={false}
          data={pokemons}
          keyExtractor={item => item}
          ListEmptyComponent={() => {
            return (
              <ScreenMessage
                iconProps={{ name: 'shopping-basket' }}
                message="You didn't like any pokemon yet"
              />
            );
          }}
          renderItem={({ item }) => <FavoriteItem item={item}/>}
        />
      </SafeContainer>
    );
  }
}

export default Favourite;
