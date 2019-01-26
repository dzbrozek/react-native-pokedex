import React from 'react';
import { ScrollView, FlatList } from 'react-native';
import { PokemonDetailsProps } from '../../types/pokemon';
import SectionHeader from '../../components/SectionHeader';
import {
  ImageContainer,
  InfoContainer,
  Name, NameContainer,
  PokemonImage,
  StatsContainer,
  StyledPokemonType, StyledStatTile,
  TypeContainer,
} from './styles';
import FavoriteButton from '../../components/FavoriteButton';

interface Props {
  pokemon: PokemonDetailsProps;
}

class Details extends React.Component<Props> {
  render() {
    const { pokemon } = this.props;
    const stats = [
      { name: 'Weight', value: `${pokemon.weight.minimum} - ${pokemon.weight.maximum}`, color: '#7E1C70' },
      { name: 'Height', value: `${pokemon.height.minimum} - ${pokemon.height.maximum}`, color: '#2971B9' },
      { name: 'Max HP', value: pokemon.maxHP, color: '#6772A2' },
      { name: 'Max CP', value: pokemon.maxCP, color: '#4C2B1A' },
      { name: 'Flee Rate', value: pokemon.fleeRate, color: '#f97928' },
      { name: 'Classification', value: pokemon.classification, color: '#13a275' },
    ];

    return (
      <ScrollView>
        <InfoContainer>
          <NameContainer>
            <Name numberOfLines={1}>{`#${pokemon.number} ${pokemon.name}`}</Name>
            <FavoriteButton pokemonId={pokemon.id}/>
          </NameContainer>
          <ImageContainer>
            <PokemonImage source={{ uri: pokemon.image }} resizeMode="contain"/>
          </ImageContainer>
        </InfoContainer>

        <SectionHeader title="TYPE"/>

        <TypeContainer>
          {pokemon.types.map((type: string) => <StyledPokemonType key={type} type={type}/>)}
        </TypeContainer>

        <SectionHeader title="RESISTANT"/>

        <TypeContainer>
          {pokemon.resistant.map((type: string) => <StyledPokemonType key={type} type={type}/>)}
        </TypeContainer>

        <SectionHeader title="WEAKNESSES"/>

        <TypeContainer>
          {pokemon.weaknesses.map((type: string) => <StyledPokemonType key={type} type={type}/>)}
        </TypeContainer>

        <SectionHeader title="STATISTICS"/>

        <StatsContainer>
          <FlatList
            numColumns={2}
            data={stats}
            keyExtractor={(_, index) => String(index)}
            renderItem={({ item }) => <StyledStatTile
              title={item.name}
              value={item.value}
              color={item.color}
            />}
          />
        </StatsContainer>
      </ScrollView>
    );
  }
}

export default Details;
