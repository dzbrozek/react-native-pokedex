import React from 'react';
import { FlatList } from 'react-native';
import { PokemonProps } from '../../types/pokemon';
import PokemonItem from '../../components/PokemonItem/PokemonItem';

interface Props {
  evolutions: PokemonProps[];
}

const Evolutions: React.FunctionComponent<Props> = ({ evolutions }) => {
  return (
    <FlatList
      horizontal={false}
      data={evolutions}
      keyExtractor={(item: PokemonProps) => item.id}
      renderItem={({ item }) => <PokemonItem item={item}/>}
    />
  );
};

export default Evolutions;
