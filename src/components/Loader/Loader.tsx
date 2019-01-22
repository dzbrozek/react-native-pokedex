import { ImageStyle, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { Image } from 'react-native-animatable';
import React from 'react';

interface Interface {
  containerStyle?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
}

const Loader: React.FunctionComponent<Interface> = ({ imageStyle, containerStyle }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Image
        animation="tada"
        iterationCount="infinite"
        duration={2000}
        style={[styles.image, imageStyle]}
        source={require('../../assets/images/pokeball.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 48,
    height: 48,
  },
});

export default Loader;
