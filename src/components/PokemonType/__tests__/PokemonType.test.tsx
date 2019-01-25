import { shallow } from 'enzyme';
import React from 'react';
import PokemonType from '../PokemonType';
import { Container } from '../styles';

describe('<PokemonType/>', () => {
  it('should render component', () => {
    const type = 'Grass';
    const wrapper = shallow(<PokemonType type={type}/>);

    expect(wrapper.find(Container).prop('children')).toEqual(type);
  });
});
