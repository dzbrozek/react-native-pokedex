import { shallow } from 'enzyme';
import React from 'react';
import { View } from 'react-native';
import Card from '../Card';
import CardBody from '../CardBody';
import CardHeader from '../CardHeader';

const Component = () => <View/>;

describe('<Card/>', () => {
  it('should render component', () => {
    const wrapper = shallow((
      <Card>
        <Component/>
      </Card>
    ));

    expect(wrapper.find(Component).exists()).toEqual(true);
  });

  it('should test static properties', () => {
    expect(Card.Body).toEqual(CardBody);

    expect(Card.Header).toEqual(CardHeader);
  });
});
