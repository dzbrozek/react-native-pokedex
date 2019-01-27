import styled from 'config/styled-components';
import PokemonType from '../../components/PokemonType';
import InfoTile from '../../components/InfoTile';

export const TypeContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0 ${props => props.theme.layout.padding.sm}px;
`;

export const StyledPokemonType = styled(PokemonType)`
  font-size: ${props => props.theme.fonts.md};
  padding-left: ${props => props.theme.layout.padding.sm}px;
  padding-right: ${props => props.theme.layout.padding.sm}px;
  margin: ${props => props.theme.layout.padding.sm}px ${props => props.theme.layout.padding.sm}px
  ${props => props.theme.layout.padding.sm}px 0;
`;

export const InfoContainer = styled.View`
  align-items: center;
  padding: ${props => props.theme.layout.padding.sm}px;
`;

export const NameContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Name = styled.Text`
  font-size: ${props => props.theme.fonts.xl}px;
  color: ${props => props.theme.colors.black};
  font-family: ${props => props.theme.fonts.bold};
  padding-right: ${props => props.theme.layout.padding.sm}px;
`;

export const ImageContainer = styled.View`
  flex: 0;
  width: 200px;
  height: 100px;
  margin: ${props => props.theme.layout.padding.sm}px 0;
`;

export const PokemonImage = styled.Image`
  flex: 1;
  flex-shrink: 0;
`;

export const StatsContainer = styled.View`
  padding: ${props => props.theme.layout.padding.sm}px;
  align-items: center;
`;

export const StyledInfoTile = styled(InfoTile)`
  width: 50%;
  background-color: ${props => props.color};
`;

export const AttacksContainer = styled.View`
  padding: ${props => props.theme.layout.padding.sm}px;
`;
