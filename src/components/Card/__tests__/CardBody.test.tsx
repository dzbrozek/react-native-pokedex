import React from 'react';
import { shallow } from 'enzyme';
import CardBody from '../CardBody';
import { Text } from 'react-native';

const Component = () => <Text/>;

describe('<CardBody/>', () => {
  it('should render component', () => {
    const wrapper = shallow((
      <CardBody>
        <Component/>
      </CardBody>
    ));

    expect(wrapper.find(Component).exists()).toEqual(true);
  });
});
