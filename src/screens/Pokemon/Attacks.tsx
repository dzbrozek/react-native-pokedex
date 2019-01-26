import React from 'react';
import { ScrollView, FlatList } from 'react-native';
import { AttackProps, PokemonAttacksProps } from '../../types/pokemon';
import SectionHeader from '../../components/SectionHeader';
import { AttacksContainer, StyledStatTile } from './styles';
import { POKEMON_COLORS } from '../../constants/colors';

interface Props {
  attacks: PokemonAttacksProps;
}

class Attacks extends React.Component<Props> {
  renderAttacks = (header, attacks) => {
    return (
      <React.Fragment>
        <SectionHeader title={header}/>

        <AttacksContainer>
          <FlatList
            numColumns={2}
            data={attacks}
            keyExtractor={(attack: AttackProps) => attack.name}
            renderItem={({ item }) => <StyledStatTile
              title={item.name}
              value={item.damage}
              color={POKEMON_COLORS[item.type]}
            />}
          />
        </AttacksContainer>
      </React.Fragment>
    );
  }
  render() {
    const { attacks: { fast, special } } = this.props;

    return (
      <ScrollView>
        {this.renderAttacks('FAST', fast)}

        {this.renderAttacks('SPECIAL', special)}
      </ScrollView>
    );
  }
}

export default Attacks;
