import React from 'react';
import { ToastAndroid, TouchableNativeFeedback } from 'react-native';
import { PokemonProps } from '../../types/pokemon';
import { theme } from '../../constants';
import { FontAwesome } from '@expo/vector-icons';
import Touchable from 'react-native-platform-touchable';
import PokemonType from '../PokemonType';
import { inject, observer } from 'mobx-react/native';
import { FavoriteStore } from '../../stores/Favorite';
import { Container, DetailsContainer, Image, ImageContainer, LikeContainer, Name, Types } from './styles';

interface Props {
  item: PokemonProps;
  favorite?: FavoriteStore;
}

@inject('favorite')
@observer
class PokemonItem extends React.Component<Props> {
  toggleFavorite = async () => {
    const { item: { id: pokemonId }, favorite } = this.props;
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
    const { item, favorite } = this.props;
    const favoriteIcon = favorite!.pokemons.indexOf(item.id) > -1 ? 'heart' : 'heart-o';
    return (
      <Touchable>
        <Container>
          <ImageContainer>
            <Image source={{ uri: item.image }} resizeMode="cover"/>
          </ImageContainer>
          <DetailsContainer>
            <Name numberOfLines={1}>{`#${item.number} ${item.name}`}</Name>
            <Types>
              {item.types.map((type: string) => <PokemonType key={type} type={type}/>)}
            </Types>
          </DetailsContainer>
          <LikeContainer>
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
          </LikeContainer>
        </Container>
      </Touchable>
    );
  }
}

export default PokemonItem;
