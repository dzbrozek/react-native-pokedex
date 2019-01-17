import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { theme } from '../../constants';

interface Props {
  style?: StyleProp<ViewStyle>;
}

const CardBody: React.FunctionComponent<Props> = ({ children, style }) => {
  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderWidth: 1,
    borderColor: theme.colors.lightgrey,
    borderTopColor: 'transparent',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
});

export default CardBody;
