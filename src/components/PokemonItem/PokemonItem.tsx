import React from 'react';
import { Image, StyleSheet, View, Text, ToastAndroid, TouchableNativeFeedback } from 'react-native';
import { PokemonProps } from '../../types/pokemon';
import { theme } from '../../constants';
import { FontAwesome } from '@expo/vector-icons';
import Touchable from 'react-native-platform-touchable';
import PokemonType from '../PokemonType';
import { inject, observer } from 'mobx-react/native';
import { FavoriteStore } from '../../stores/Favorite';

interface Props {
  item: PokemonProps;
  favorite: FavoriteStore;
}

@inject('favorite')
@observer
class PokemonItem extends React.Component<Props> {
  toggleFavorite = async () => {
    const { item: { id: pokemonId }, favorite } = this.props;
    const added = favorite.pokemons.indexOf(pokemonId) > -1;

    try {
      if (added) {
        await favorite.removePokemon(pokemonId);
      } else {
        await favorite.addPokemon(pokemonId);
      }
    } catch (e) {
      ToastAndroid.show('We can\'t do that right now', ToastAndroid.SHORT);
    }
  }

  render() {
    const { item, favorite } = this.props;
    const favoriteIcon = favorite.pokemons.indexOf(item.id) > -1 ? 'heart' : 'heart-o';
    return (
      <Touchable>
        <View style={styles.container}>
          <View style={styles.imageWrapper}>
            <Image source={{ uri: item.image }} style={styles.image}/>
          </View>
          <View style={styles.infoWrapper}>
            <Text style={styles.name} numberOfLines={1}>{`#${item.number} ${item.name}`}</Text>
            <View style={styles.types}>
              {item.types.map((type: string) => <PokemonType key={type} type={type}/>)}
            </View>
          </View>
          <View style={styles.likeWrapper}>
            <Touchable
              onPress={this.toggleFavorite}
              hitSlop={theme.layout.hitSlop}
              background={TouchableNativeFeedback.Ripple(theme.colors.red, true)}
            >
              <FontAwesome
                name={favoriteIcon}
                size={26}
                color={theme.colors.red}
              />
            </Touchable>
          </View>
        </View>
      </Touchable>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: theme.layout.paddingSmall,
    flexDirection: 'row',
  },
  imageWrapper: {
    marginRight: theme.layout.paddingSmall,
    padding: theme.layout.paddingExtraSmall,
  },
  infoWrapper: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  likeWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    flexShrink: 0,
  },
  image: {
    width: 67,
    height: 67,
    resizeMode: 'cover',
  },
  name: {
    fontFamily: theme.fonts.bold,
    fontSize: theme.fonts.fontSizeBig,
    color: theme.colors.black,
  },
  types: {
    flexDirection: 'row',
  },
});

export default PokemonItem;
