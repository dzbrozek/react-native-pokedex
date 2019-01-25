import { POKEMON_TYPE_STYLES } from '../../constants/colors';
import { StyleProp, TextStyle } from 'react-native';
import React from 'react';
import { Container } from './styles';

interface Props {
  type: string;
  style?: StyleProp<TextStyle>;
}

const PokemonType: React.FunctionComponent<Props> = ({ type, style }) => {
  return <Container key={type} style={[POKEMON_TYPE_STYLES[type], style]}>{type}</Container>;
};

export default PokemonType;
