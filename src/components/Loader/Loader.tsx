import { ImageStyle, StyleProp, ViewStyle } from 'react-native';
import React from 'react';
import { Container, PokeballImage } from './styles';

interface Interface {
  containerStyle?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
}

const Loader: React.FunctionComponent<Interface> = ({ imageStyle, containerStyle }) => {
  return (
    <Container style={containerStyle}>
      <PokeballImage
        animation="tada"
        iterationCount="infinite"
        duration={2000}
        style={imageStyle}
        source={require('../../assets/images/pokeball.png')}
      />
    </Container>
  );
};

export default Loader;
