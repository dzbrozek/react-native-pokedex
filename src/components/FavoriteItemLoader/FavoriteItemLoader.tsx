import { theme } from '../../constants';
import { StyleSheet, View } from 'react-native';
import { Image } from 'react-native-animatable';
import React from 'react';

const FavoriteItemLoader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          animation="tada"
          iterationCount="infinite"
          duration={2000}
          style={styles.image}
          source={require('../../assets/images/pokeball.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: theme.layout.padding.sm,
    flexDirection: 'row',
  },
  imageWrapper: {
    marginRight: theme.layout.padding.sm,
    padding: theme.layout.padding.xs,
    width: 67,
    height: 67,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 32,
    height: 32,
  },
});

export default FavoriteItemLoader;
