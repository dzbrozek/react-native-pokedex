import styled from 'styled-components/native';

export const Container = styled.Text`
  padding: ${props => props.theme.layout.padding.xs}px;
  border-radius: ${props => props.theme.shape.borderRadius}px;
  margin-right: ${props => props.theme.layout.padding.sm}px;
  font-family: ${props => props.theme.fonts.regular};
  font-size: ${props => props.theme.fonts.fontSizeSmall}px;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.color};
  ${props => props.style};
`;
