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

jest.mock('../../FavoriteItemLoader/styles');
jest.mock('../../PokemonItem/styles');

const item = '12345';
const favorite: any = {
  pokemons: [],
};
const commonMock = {
  request: {
    query: GET_POKEMON,
    variables: {
      id: item,
    },
  },
};

describe('<FavoriteItem/>', () => {
  const prepareWrapper = (mocks) => {
    return mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <MobxProvider favorite={favorite}>
          <FavoriteItem item={item}/>
        </MobxProvider>
      </MockedProvider>,
    );
  };

  it('should render loading state', () => {
    const wrapper = prepareWrapper([]);

    expect(wrapper.find(FavoriteItemLoader).exists()).toEqual(true);
  });

  it('should render error state', async () => {
    const mock = {
      ...commonMock,
      error: new Error(),
    };
    const wrapper = prepareWrapper([mock]);

    await wait(2);

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
    const wrapper = prepareWrapper([mock]);

    await wait(0);

    wrapper.update();

    expect(wrapper.find(PokemonItem).prop('item')).toEqual(pokemon);
  });
});
