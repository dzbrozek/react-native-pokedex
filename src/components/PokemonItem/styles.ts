import styled from 'styled-components/native';

export const Container = styled.View`
  padding: ${props => props.theme.layout.padding.sm}px;
  flex-direction: row;
`;

export const ImageContainer = styled.View`
  margin-right: ${props => props.theme.layout.padding.sm}px;
  padding: ${props => props.theme.layout.padding.xs}px;
`;

export const DetailsContainer = styled.View`
  flex-grow: 1;
  justify-content: center;
`;

export const LikeContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: 40px;
  flex-shrink: 0;
`;

export const Image = styled.Image`
  width: 67px;
  height: 67px;
`;

export const Name = styled.Text`
  font-family: ${props => props.theme.fonts.bold};
  font-size: ${props => props.theme.fonts.lg};
  color: ${props => props.theme.colors.black};
`;
export const Types = styled.View`
  flex-direction: row;
`;
