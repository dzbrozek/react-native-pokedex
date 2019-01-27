import { mount, shallow } from 'enzyme';
import { MockedProvider } from 'react-apollo/test-utils';
import { GET_POKEMONS } from '../gql';
import React from 'react';
import { PokemonFactory } from '../../../tests/factories';
import wait from 'waait';
import Pokedex from '../Pokedex';
import { FlatList } from 'react-native';
import ScreenMessage from '../../../components/ScreenMessage';

jest.mock('../../../components/ScreenMessage/styles');

const first = 15;
const pokemons = PokemonFactory.buildList(3);
const commonMock = {
  request: {
    query: GET_POKEMONS,
    variables: {
      first,
    },
  },
};
const dataMock = {
  ...commonMock,
  result: {
    data: {
      pokemons,
    },
  },
};
const navigation: any = {};

describe('<Pokedex/>', () => {
  const prepareWrapper = (mocks) => {
    return mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Pokedex navigation={navigation}/>
      </MockedProvider>,
    );
  };

  it('should render error state', async () => {
    const mock = {
      ...commonMock,
      error: new Error(),
    };
    const wrapper = prepareWrapper([mock]);

    await wait(2);

    wrapper.update();

    expect(wrapper.find(ScreenMessage).props()).toEqual({
      iconProps: {
        name: 'th',
      },
      message: 'Your Pokedex is broken',
    });
  });

  it('should render component with data', async () => {
    const wrapper = prepareWrapper([dataMock]);

    await wait(0);

    wrapper.update();

    expect(wrapper.find(FlatList).props()).toMatchObject({
      horizontal: false,
      data: pokemons,
    });
  });

  it('should render list item', async () => {
    const wrapper = prepareWrapper([dataMock]);

    await wait(0);

    wrapper.update();

    const RenderItem = wrapper.find(FlatList).props().renderItem;
    const component = shallow(<RenderItem item={pokemons[0]}/>);

    expect(component.props()).toEqual({
      item: pokemons[0],
    });
    expect(component.name()).toEqual('withNavigation(PokemonItem)');
  });
});
