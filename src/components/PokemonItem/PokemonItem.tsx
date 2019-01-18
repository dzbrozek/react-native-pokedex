import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import { PokemonProps } from '../../types/pokemon';
import { theme } from '../../constants';
import { FontAwesome } from '@expo/vector-icons';
import Touchable from 'react-native-platform-touchable';
import PokemonType from '../PokemonType';

interface Props {
  item: PokemonProps;
  liked: boolean;
}

const PokemonItem: React.FunctionComponent<Props> = ({ item, liked }) => {
  const iconName = liked ? 'heart' : 'heart-o';
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
          <FontAwesome
            name={iconName}
            size={26}
            color={theme.colors.red}
          />
        </View>
      </View>
    </Touchable>
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
    width: 72,
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
