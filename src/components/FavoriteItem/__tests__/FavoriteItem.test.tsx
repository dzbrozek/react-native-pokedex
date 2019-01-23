import { mount } from 'enzyme';
import FavoriteItem from '../FavoriteItem';
import { MockedProvider } from 'react-apollo/test-utils';
import { GET_POKEMON } from '../gql';
import React from 'react';
import { pokemonFactory } from '../../../tests/factories';
import FavoriteItemLoader from '../../FavoriteItemLoader';
import wait from 'waait';
import PokemonItem from '../../PokemonItem';
import { Provider as MobxProvider } from 'mobx-react/native';

const item = '12345';
const commonMock = {
  request: {
    query: GET_POKEMON,
    variables: {
      id: item,
    },
  },
};

describe('<FavoriteItem/>', () => {
  it('should render loading state', () => {
    const wrapper = mount(
      <MockedProvider mocks={[]} addTypename={false}>
        <FavoriteItem item={item}/>
      </MockedProvider>,
    );

    expect(wrapper.find(FavoriteItemLoader).exists()).toEqual(true);
  });

  it('should render error state', () => {
    const mock = {
      ...commonMock,
      error: new Error(),
    };
    const wrapper = mount(
      <MockedProvider mocks={[mock]} addTypename={false}>
        <FavoriteItem item={item}/>
      </MockedProvider>,
    );

    expect(wrapper.find(FavoriteItemLoader).exists()).toEqual(true);
  });

  it('should render component with data', async () => {
    const pokemon = pokemonFactory.build();
    const mock = {
      ...commonMock,
      result: {
        data: { pokemon },
      },
    };
    const favorite: any = {
      pokemons: [],
    };
    const wrapper = mount(
      <MockedProvider mocks={[mock]} addTypename={false}>
        <MobxProvider favorite={favorite}>
          <FavoriteItem item={item}/>
        </MobxProvider>
      </MockedProvider>,
    );

    await wait(0);

    wrapper.update();

    expect(wrapper.find(PokemonItem).prop('item')).toEqual(pokemon);
  });
});
