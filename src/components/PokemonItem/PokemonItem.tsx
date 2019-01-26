import React from 'react';
import { PokemonProps } from '../../types/pokemon';
import Touchable from 'react-native-platform-touchable';
import PokemonType from '../PokemonType';
import { Container, DetailsContainer, Image, ImageContainer, LikeContainer, Name, Types } from './styles';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';
import FavoriteButton from '../FavoriteButton';

interface Props extends NavigationInjectedProps {
  item: PokemonProps;
}

class PokemonItem extends React.Component<Props> {
  onPress = () => {
    const { item: { id, name }, navigation } = this.props;

    navigation.navigate('Pokemon', { id, name });
  }

  render() {
    const { item } = this.props;
    return (
      <Touchable onPress={this.onPress}>
        <Container>
          <ImageContainer>
            <Image source={{ uri: item.image }} resizeMode="contain"/>
          </ImageContainer>
          <DetailsContainer>
            <Name numberOfLines={1}>{`#${item.number} ${item.name}`}</Name>
            <Types>
              {item.types.map((type: string) => <PokemonType key={type} type={type}/>)}
            </Types>
          </DetailsContainer>
          <LikeContainer>
            <FavoriteButton pokemonId={item.id}/>
          </LikeContainer>
        </Container>
      </Touchable>
    );
  }
}

export default withNavigation(PokemonItem);
