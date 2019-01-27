import { shallow } from 'enzyme';
import React from 'react';
import InfoTile from '../InfoTile';
import { Title, Value } from '../styles';

describe('<InfoTile/>', () => {
  it('should render component', () => {
    const title = 'Weight';
    const value = '12kg -18kg';
    const wrapper = shallow(<InfoTile title={title} value={value}/>);

    expect(wrapper.find(Title).props()).toEqual({
      numberOfLines: 1,
      children: title,
    });

    expect(wrapper.find(Value).props()).toEqual({
      numberOfLines: 1,
      children: value,
    });
  });
});
