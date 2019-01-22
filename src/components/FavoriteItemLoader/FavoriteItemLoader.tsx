import { theme } from '../../constants';
import { StyleSheet, View } from 'react-native';
import React from 'react';
import Loader from '../Loader';

const FavoriteItemLoader = () => {
  return (
    <View style={styles.container}>
      <Loader containerStyle={styles.imageWrapper} imageStyle={styles.image}/>
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
    flex: 0,
  },
  image: {
    width: 32,
    height: 32,
  },
});

export default FavoriteItemLoader;
