import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  flex-shrink: 0;
`;

export const Message = styled.Text`
  font-family: ${props => props.theme.fonts.thin};
  font-size: ${props => props.theme.fonts.lg}px;
  color: ${props => props.theme.colors.blackGrey};
  padding: ${props => props.theme.layout.padding.sm}px;
`;

export const Icon = styled(FontAwesome)`
  align-self: center;
  font-size: 40px;
  color: ${props => props.theme.colors.blackGrey};
`;
