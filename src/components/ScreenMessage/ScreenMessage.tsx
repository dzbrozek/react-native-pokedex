import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View, Text, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { theme } from '../../constants';
import { IconProps } from 'react-native-vector-icons/Icon';

interface Props {
  message: string;
  iconProps: IconProps;
  iconStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const ScreenMessage: React.FunctionComponent<Props> = ({ message, iconProps, iconStyle, textStyle }) => {
  return (
    <View style={styles.container}>
      <FontAwesome
        {...iconProps}
        style={[styles.icon, iconStyle]}
      />
      <Text style={[styles.text, textStyle]}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    fontFamily: theme.fonts.bold,
    fontSize: theme.fonts.fontSizeBig,
    color: theme.colors.black,
    padding: theme.layout.padding.sm,
  },
  icon: {
    alignSelf: 'center',
    fontSize: 40,
    color: theme.colors.black,
  },
});

export default ScreenMessage;
