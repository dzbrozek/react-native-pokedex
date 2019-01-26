import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import Loader from '../../components/Loader';
import { Centered, SafeContainer } from 'styles';
import { Query } from 'react-apollo';
import { GET_POKEMON_DETAILS } from './gql';
import ScreenMessage from '../../components/ScreenMessage';
import PokemonTabs from './PokemonTabs';

class Pokemon extends React.PureComponent<NavigationScreenProps> {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('name', 'Pokemon'),
    };
  }

  render() {
    const { navigation } = this.props;
    const id = navigation.getParam('id');

    return (
      <SafeContainer>
        <Query query={GET_POKEMON_DETAILS} variables={{ id }}>
          {({ loading, error, data }) => {
            if (loading) {
              return (
                <Centered>
                  <Loader/>
                </Centered>
              );
            }
            if (error) {
              return <ScreenMessage message="Pokemon not found" iconProps={{ name: 'question-circle' }}/>;
            }
            return <PokemonTabs pokemon={data.pokemon}/>;
          }}
        </Query>
      </SafeContainer>
    );
  }
}

export default Pokemon;
