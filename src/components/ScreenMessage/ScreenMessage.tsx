import React from 'react';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';
import { IconProps } from 'react-native-vector-icons/Icon';
import { Message, Container, Icon } from './styles';

interface Props {
  message: string;
  iconProps: IconProps;
  iconStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const ScreenMessage: React.FunctionComponent<Props> = ({ message, iconProps, iconStyle, textStyle }) => {
  return (
    <Container>
      <Icon
        {...iconProps}
        style={iconStyle}
      />
      <Message style={textStyle}>{message}</Message>
    </Container>
  );
};

export default ScreenMessage;
