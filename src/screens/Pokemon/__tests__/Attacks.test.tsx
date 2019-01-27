import React from 'react';
import { AttackFactory } from '../../../tests/factories';
import { shallow } from 'enzyme';
import Attacks from '../Attacks';
import { FlatList } from 'react-native';
import SectionHeader from '../../../components/SectionHeader';

const attacks = {
  fast: AttackFactory.buildList(2),
  special: AttackFactory.buildList(2),
};
const wrapper = shallow(<Attacks attacks={attacks}/>);

describe('<Attacks/>', () => {
  it('should render component', () => {
    const headers = wrapper.find(SectionHeader);
    const lists = wrapper.find(FlatList);

    expect(headers.at(0).prop('title')).toEqual('FAST');
    expect(lists.at(0).props()).toMatchObject({
      numColumns: 2,
      data: attacks.fast,
    });

    expect(headers.at(1).prop('title')).toEqual('SPECIAL');
    expect(lists.at(1).props()).toMatchObject({
      numColumns: 2,
      data: attacks.special,
    });
  });

  it('should render list item', () => {
    const attack = AttackFactory.build();
    const RenderItem = wrapper.find(FlatList).at(0).prop('renderItem');
    const component = shallow(<RenderItem item={attack}/>);

    expect(component.props()).toEqual({
      title: attack.name,
      value: attack.damage,
    });
    expect(component.name()).toEqual('Styled(InfoTile)');
  });
});
