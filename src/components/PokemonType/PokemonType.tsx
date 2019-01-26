import { POKEMON_COLORS } from '../../constants/colors';
import { StyleProp, TextStyle } from 'react-native';
import React from 'react';
import { Container } from './styles';

interface Props {
  type: string;
  style?: StyleProp<TextStyle>;
}

const PokemonType: React.FunctionComponent<Props> = ({ type, style }) => {
  return <Container key={type} color={POKEMON_COLORS[type]} style={style}>{type}</Container>;
};

export default PokemonType;
