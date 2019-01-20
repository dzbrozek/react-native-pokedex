import { theme } from '../../constants';
import { StyleSheet, View } from 'react-native';
import { Image } from 'react-native-animatable';
import React from 'react';

const PokemonItemLoader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          animation="tada"
          iterationCount="infinite"
          duration={2000}
          source={require('../../assets/images/pokeball.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: theme.layout.paddingSmall,
    flexDirection: 'row',
  },
  imageWrapper: {
    marginRight: theme.layout.paddingSmall,
    padding: theme.layout.paddingExtraSmall,
    width: 67,
    height: 67,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PokemonItemLoader;
