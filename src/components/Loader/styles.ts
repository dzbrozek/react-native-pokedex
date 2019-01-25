import styled from 'styled-components/native';
import { Image } from 'react-native-animatable';

export const Container = styled.View`
  flex-shrink: 1;
  justify-content: center;
  align-items: center;
`;

export const PokeballImage = styled(Image)`
  width: 48px;
  height: 48px;
`;
