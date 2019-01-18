import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { StyleProp, StyleSheet, TextStyle } from 'react-native';

interface Props {
  name: string;
  size: number;
  color: string;
  focused: boolean;
  iconStyle?: StyleProp<TextStyle>;
}

const TabBarIcon: React.FunctionComponent<Props> = ({ focused, name, size, color, iconStyle }) => {
  return (
    <FontAwesome
      name={name}
      size={size}
      style={[styles.icon, focused ? styles.focused : null, iconStyle]}
      color={color}
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    marginBottom: -3,
    opacity: 0.6,
  },
  focused: {
    opacity: 1,
  },
});

export default TabBarIcon;
