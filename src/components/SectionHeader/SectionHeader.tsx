import React from 'react';
import { Container, Title } from './styles';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

interface Props {
  title: string;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
}

const SectionHeader: React.FunctionComponent<Props> = ({ title, style, titleStyle }) => {
  return (
    <Container style={style}>
      <Title style={titleStyle}>{title}</Title>
    </Container>
  );
};

export default SectionHeader;
