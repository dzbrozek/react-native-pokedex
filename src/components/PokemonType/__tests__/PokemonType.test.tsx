import { shallow } from 'enzyme';
import React from 'react';
import PokemonType from '../PokemonType';
import { Text } from 'react-native';

describe('<PokemonType/>', () => {
  it('should render component', () => {
    const type = 'Grass';
    const wrapper = shallow(<PokemonType type={type}/>);

    expect(wrapper.find(Text).prop('children')).toEqual(type);
  });
});
