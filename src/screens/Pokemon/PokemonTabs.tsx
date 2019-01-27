import React from 'react';
import { Dimensions } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import { theme } from '../../constants';
import Details from './Details';
import Evolutions from './Evolutions';
import Attacks from './Attacks';
import { Centered } from 'styles';
import Loader from '../../components/Loader';
import { PokemonDetailsProps, PokemonProps } from '../../types/pokemon';

interface State {
  index: number;
  routes: {key: string, title: string}[];
}

interface Props {
  pokemon: PokemonDetailsProps;
}

class PokemonTabs extends React.PureComponent<Props, State> {
  state = {
    index: 0,
    routes: [],
  };

  renderScene = ({ route }) => {
    const { pokemon } = this.props;

    switch (route.key) {
      case 'details':
        return <Details pokemon={pokemon} />;
      case 'evolutions':
        return <Evolutions evolutions={pokemon.evolutions as PokemonProps[]} />;
      case 'attacks':
        return <Attacks attacks={pokemon.attacks} />;
      default:
        return null;
    }
  }

  render() {
    const { width, height } = Dimensions.get('window');
    const { routes } = this.state;

    if (!routes.length) {
      return (
        <Centered>
          <Loader/>
        </Centered>
      );
    }

    return (
      <TabView
        navigationState={this.state}
        renderScene={this.renderScene}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width, height }}
        renderTabBar={props =>
          <TabBar
            {...props}
            style={{ backgroundColor: theme.colors.red }}
            indicatorStyle={{ backgroundColor: theme.colors.white }}
          />
        }
      />
    );
  }

  updateRoutes = () => {
    const routes = [
      { key: 'details', title: 'Details' },
      { key: 'evolutions', title: 'Evolutions' },
      { key: 'attacks', title: 'Attacks' },
    ];
    const { pokemon } = this.props;

    if (!pokemon.evolutions) {
      routes.splice(1, 1);
    }

    this.setState({
      routes,
    });
  }

  componentDidMount() {
    this.updateRoutes();
  }

  componentDidUpdate(prevProps) {
    const { pokemon } = this.props;

    if (pokemon !== prevProps.pokemon) {
      this.setState({
        index: 0,
      });
      this.updateRoutes();
    }
  }
}

export default PokemonTabs;
