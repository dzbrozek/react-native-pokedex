import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex: 1;
  flex-shrink: 0;
  flex-direction: row;
  padding: ${props => props.theme.layout.padding.sm}px;
`;

export const IconContainer = styled.View`
  width: 34px;
  justify-content: center;
  align-items: center;
`;

export const InfoContainer = styled.View`
  flex-grow: 1;
  padding-horizontal: 12px;
`;

export const LinkContainer = styled.View`
  width: 40px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${props => props.theme.fonts.bold};
  font-size: ${props => props.theme.fonts.md}px;
`;

export const Subtitle = styled.Text`
  font-family: ${props => props.theme.fonts.thin};
  font-size: ${props => props.theme.fonts.sm}px;
`;
