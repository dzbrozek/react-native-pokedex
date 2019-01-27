import { StyleProp, ViewProps } from 'react-native';
import React from 'react';
import { Container, Title, Value } from './styles';

interface Props {
  title: string;
  value: string;
  style?: StyleProp<ViewProps>;
}
const InfoTile: React.FunctionComponent<Props> = ({ title, value, style }) => {
  return (
    <Container style={style}>
      <Title numberOfLines={1}>{title}</Title>
      <Value numberOfLines={1}>{value}</Value>
    </Container>
  );
};

export default InfoTile;
