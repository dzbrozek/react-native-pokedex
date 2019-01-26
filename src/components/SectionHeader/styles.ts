import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${props => props.theme.colors.red};
  padding: ${props => props.theme.layout.padding.sm}px 0;
`;

export const Title = styled.Text`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.regular};
  font-size: ${props => props.theme.fonts.fontSizeMedium}px;
  padding-left: ${props => props.theme.layout.padding.sm}px;
`;
