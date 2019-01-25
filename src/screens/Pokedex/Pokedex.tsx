import React from 'react';
import { FlatList } from 'react-native';
import PokemonItem from '../../components/PokemonItem';
import { NavigationScreenProps } from 'react-navigation';
import { Query } from 'react-apollo';
import { GET_POKEMONS } from './gql';
import Loader from 'components/Loader';
import ScreenMessage from '../../components/ScreenMessage';
import { PokemonProps } from '../../types/pokemon';
import { Container, FooterContainer } from './styles';

const PAGE_SIZE = 15;

interface State {
  numResults: number;
  hasMore: boolean;
}

class Pokedex extends React.PureComponent<NavigationScreenProps, State> {
  static navigationOptions = {
    title: 'Pokedex',
  };

  state = {
    hasMore: true,
    numResults: PAGE_SIZE,
  };

  onEndReached = () => {
    const { hasMore } = this.state;

    if (!hasMore) { return; }

    this.setState(prevState => ({
      numResults: prevState.numResults + PAGE_SIZE,
    }));
  }

  render() {
    const { numResults } = this.state;

    return (
      <Container>
        <Query
          query={GET_POKEMONS}
          variables={{ first: numResults }}
          onCompleted={(data) => {
            if (data.pokemons.length < numResults) {
              this.setState({
                hasMore: false,
              });
            }
          }}
        >
          {({ loading, error, data }) => {
            if (error) {
              return <ScreenMessage message="Your Pokedex is broken" iconProps={{ name: 'th' }}/>;
            }
            return (
              <FlatList
                horizontal={false}
                data={data.pokemons}
                keyExtractor={(item: PokemonProps) => item.id}
                renderItem={({ item }) => <PokemonItem item={item}/>}
                onEndReached={this.onEndReached}
                ListFooterComponent={loading ? (
                  <FooterContainer>
                    <Loader/>
                  </FooterContainer>
                ) : null}
              />
            );
          }}
        </Query>
      </Container>
    );
  }
}

export default Pokedex;
