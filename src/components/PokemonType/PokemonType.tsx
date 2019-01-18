import { POKEMON_TYPE_STYLES } from '../../constants/colors';
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';
import React from 'react';
import { theme } from '../../constants';

interface Props {
  type: string;
  style?: StyleProp<TextStyle>;
}

const PokemonType: React.FunctionComponent<Props> = ({ type, style }) => {
  return <Text key={type} style={[styles.type, POKEMON_TYPE_STYLES[type], style]}>{type}</Text>;
};

const styles = StyleSheet.create({
  type: {
    paddingVertical: theme.layout.paddingExtraSmall,
    paddingHorizontal: theme.layout.paddingSmall,
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.layout.paddingSmall,
    fontFamily: theme.fonts.regular,
    fontSize: theme.fonts.fontSizeSmall,
    color: theme.colors.white,
  },
});

export default PokemonType;
