import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import PokemonItem from '../../components/PokemonItem';
import { NavigationScreenProps, SafeAreaView } from 'react-navigation';
import { Query } from 'react-apollo';
import { GET_POKEMONS } from './gql';
import Loader from 'components/Loader';
import ScreenMessage from '../../components/ScreenMessage';
import { PokemonProps } from '../../types/pokemon';

const PAGE_SIZE = 15;
const NUM_POKEMONS = 151;

interface State {
  numResults: number;
}

class Pokedex extends React.Component<NavigationScreenProps, State> {
  static navigationOptions = {
    title: 'Pokédex',
  };

  state = {
    numResults: 50,
    results: [],
    hasMore: true,
    isLoading: true,
    hasError: false,
  };

  onEndReached = () => {
    const { numResults } = this.state;

    if (numResults >= NUM_POKEMONS) { return; }

    this.setState(prevState => ({
      numResults: prevState.numResults + PAGE_SIZE,
    }));
  }

  render() {
    const { numResults } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <Query
          query={GET_POKEMONS}
          variables={{ first: numResults }}
        >
          {({ loading, error, data }) => {
            if (error) {
              return <ScreenMessage message="Unable to load pokemons" iconProps={{ name: 'shopping-basket' }}/>;
            }
            return (
              <FlatList
                horizontal={false}
                data={data.pokemons}
                keyExtractor={(item: PokemonProps) => item.id}
                renderItem={({ item }) => <PokemonItem item={item}/>}
                onEndReached={this.onEndReached}
                ListFooterComponent={loading ? (
                  <View style={styles.loaderContainer}>
                    <Loader/>
                  </View>
                ) : null}
              />
            );
          }}
        </Query>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderContainer: {
    height: 90,
    marginHorizontal: 200,
  },
});

export default Pokedex;
