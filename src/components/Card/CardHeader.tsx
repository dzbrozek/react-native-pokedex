import React from 'react';
import { Text, StyleProp, StyleSheet, TextStyle, View, ViewStyle } from 'react-native';
import { theme } from '../../constants';

interface Props {
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  children: string;
}

const CardHeader: React.FunctionComponent<Props> = ({ containerStyle, textStyle, children }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.text, textStyle]}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: theme.layout.padding.sm,
    backgroundColor: theme.colors.red,
    borderTopLeftRadius: theme.shape.borderRadius,
    borderTopRightRadius: theme.shape.borderRadius,
  },
  text: {
    fontSize: theme.fonts.fontSizeMedium,
    color: theme.colors.white,
    fontFamily: theme.fonts.regular,
  },
});

export default CardHeader;
