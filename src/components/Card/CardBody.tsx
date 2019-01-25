import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { CardBodyContainer } from './styles';

interface Props {
  style?: StyleProp<ViewStyle>;
}

const CardBody: React.FunctionComponent<Props> = ({ children, style }) => {
  return (
    <CardBodyContainer style={style}>
      {children}
    </CardBodyContainer>
  );
};

export default CardBody;
