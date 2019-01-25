import React from 'react';
import Loader from '../Loader';
import { Container, styles } from './styles';

const FavoriteItemLoader = () => {
  return (
    <Container>
      <Loader containerStyle={styles.imageContainer} imageStyle={styles.image}/>
    </Container>
  );
};

export default FavoriteItemLoader;
