import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import { Icon } from './styles';

interface Props {
  name: string;
  size: number;
  color: string;
  focused: boolean;
  iconStyle?: StyleProp<TextStyle>;
}

const TabBarIcon: React.FunctionComponent<Props> = ({ focused, name, size, color, iconStyle }) => {
  return (
    <Icon
      name={name}
      size={size}
      focused={focused}
      style={iconStyle}
      color={color}
    />
  );
};

export default TabBarIcon;
