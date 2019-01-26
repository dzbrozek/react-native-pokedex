import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  padding: ${props => props.theme.layout.padding.sm}px;
  border-width: 1px;
  border-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.shape.borderRadius}px;
`;

export const Title = styled.Text`
  font-size: ${props => props.theme.fonts.fontSizeSmall}px;
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.regular};
`;

export const Value = styled.Text`
  font-size: ${props => props.theme.fonts.fontSizeBig}px;
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.regular};
`;
