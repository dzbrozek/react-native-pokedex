import { ToastAndroid, TouchableNativeFeedback } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { inject, observer } from 'mobx-react/native';
import Touchable from 'react-native-platform-touchable';
import { FavoriteStore } from '../../stores/Favorite';
import { theme } from '../../constants';

interface Props {
  pokemonId: string;
  favorite?: FavoriteStore;
}

@inject('favorite')
@observer
class FavoriteButton extends React.Component<Props> {
  toggleFavorite = async () => {
    const { pokemonId, favorite } = this.props;
    const added = favorite!.pokemons.indexOf(pokemonId) > -1;

    try {
      if (added) {
        await favorite!.removePokemon(pokemonId);
      } else {
        await favorite!.addPokemon(pokemonId);
      }
    } catch (e) {
      ToastAndroid.show('We can\'t do that right now', ToastAndroid.SHORT);
    }
  }

  render() {
    const { favorite, pokemonId } = this.props;
    const favoriteIcon = favorite!.pokemons.indexOf(pokemonId) > -1 ? 'heart' : 'heart-o';

    return (
      <Touchable
        onPress={this.toggleFavorite}
        hitSlop={theme.layout.hitSlop}
        background={TouchableNativeFeedback.Ripple(theme.colors.red, true)}
        testId="toggle-favorite"
      >
        <FontAwesome
          name={favoriteIcon}
          size={26}
          color={theme.colors.red}
        />
      </Touchable>
    );
  }
}

export default FavoriteButton;
