import { shallow } from 'enzyme';
import React from 'react';
import PokemonTabs from '../PokemonTabs';
import { PokemonDetailsFactory, PokemonFactory } from '../../../tests/factories';
import Loader from '../../../components/Loader';
import { TabView } from 'react-native-tab-view';
import Evolutions from '../Evolutions';
import Attacks from '../Attacks';
import Details from '../Details';

describe('<PokemonTabs/>', () => {
  it('should render loader', () => {
    const pokemon = PokemonFactory.build();
    const wrapper = shallow(<PokemonTabs pokemon={pokemon}/>);
    wrapper.setState({
      routes: [],
    });

    expect(wrapper.find(Loader).exists()).toEqual(true);
  });

  it('should render component with evolutions tab', () => {
    const pokemon = PokemonDetailsFactory.build();
    const wrapper = shallow(<PokemonTabs pokemon={pokemon}/>);

    expect(wrapper.find(TabView).prop('navigationState')).toEqual({
      index: 0,
      routes: [
        { key: 'details', title: 'Details' },
        { key: 'evolutions', title: 'Evolutions' },
        { key: 'attacks', title: 'Attacks' },
      ],
    });
  });

  it('should render component without evolutions tab', () => {
    const pokemon = PokemonDetailsFactory.build({ evolutions: null });
    const wrapper = shallow(<PokemonTabs pokemon={pokemon}/>);

    expect(wrapper.find(TabView).prop('navigationState')).toEqual({
      index: 0,
      routes: [
        { key: 'details', title: 'Details' },
        { key: 'attacks', title: 'Attacks' },
      ],
    });
  });

  it('should render pages', () => {
    const evolutions = PokemonFactory.buildList(2);
    const pokemon = PokemonDetailsFactory.build({ evolutions });
    const wrapper = shallow(<PokemonTabs pokemon={pokemon}/>);
    const renderScene = wrapper.find(TabView).prop('renderScene');

    let scene = renderScene({ route: { key: 'details' } });

    expect(scene).toEqual(<Details pokemon={pokemon} />);

    scene = renderScene({ route: { key: 'evolutions' } });

    expect(scene).toEqual(<Evolutions evolutions={evolutions} />);

    scene = renderScene({ route: { key: 'attacks' } });

    expect(scene).toEqual(<Attacks attacks={pokemon.attacks} />);
  });
});
