import React  from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import CardHeader from './CardHeader';
import CardBody from './CardBody';

interface Props {
  style?: StyleProp<ViewStyle>;
}

interface ChildrenElements {
  Header: typeof CardHeader;
  Body: typeof CardBody;
}

const Card: React.FunctionComponent<Props> & ChildrenElements = ({ children, style }) => {
  return (
    <View style={[style]}>
      {children}
    </View>
  );
};

Card.Header = CardHeader;
Card.Body = CardBody;

export default Card;
