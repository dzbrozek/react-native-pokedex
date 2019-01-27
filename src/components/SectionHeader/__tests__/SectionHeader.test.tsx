import React from 'react';
import { shallow } from 'enzyme';
import SectionHeader from '../SectionHeader';
import { Title } from '../styles';

describe('<SectionHeader/>', () => {
  it('should render component', () => {
    const title = 'Test header';
    const wrapper = shallow(<SectionHeader title="Test header"/>);

    expect(wrapper.find(Title).prop('children')).toEqual(title);
  });
});
