import React from 'react';
import { PokemonFactory } from '../../../tests/factories';
import { shallow } from 'enzyme';
import PokemonItem from '../PokemonItem';
import { Image, Name } from '../styles';

jest.mock('../styles');
jest.mock('react-navigation', () => ({
  withNavigation: jest.fn(component => component),
}));
const pokemon = PokemonFactory.build();
const navigateMock = jest.fn();
const navigation = {
  navigate: navigateMock,
};

describe('<PokemonItem/>', () => {
  it('should render component', () => {
    const wrapper = shallow(<PokemonItem item={pokemon}/>);

    expect(wrapper.find(Image).prop('source')).toEqual({
      uri: pokemon.image,
    });

    expect(wrapper.find(Name).props()).toMatchObject({
      numberOfLines: 1,
      children: `#${pokemon.number} ${pokemon.name}`,
    });
  });

  it('should test press event', () => {
    // @ts-ignore
    const wrapper = shallow(<PokemonItem item={pokemon} navigation={navigation}/>);

    wrapper.simulate('press');

    expect(navigateMock).toHaveBeenCalledTimes(1);
    expect(navigateMock).toHaveBeenCalledWith('Pokemon', { id: pokemon.id, name: pokemon.name });
  });
});
