import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native';
import { ListItemProps } from '../../common/types';
import { FontAwesome } from '@expo/vector-icons';
import { theme } from '../../constants';
import { Linking } from 'expo';

interface Props {
  item: ListItemProps;
}

class CreditItem extends React.Component<Props, {}> {
  onPress = () => {
    const { item: { link } } = this.props;

    Linking.canOpenURL(link)
      .then((supported: boolean) => {
        if (!supported) {
          ToastAndroid.show('Link cannot be opened', ToastAndroid.SHORT);
        } else {
          return Linking.openURL(link);
        }
      }).catch(() => ToastAndroid.show('Link cannot be opened', ToastAndroid.SHORT));
  }

  render() {
    const { item: { title, subtitle, icon } } = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={this.onPress}>
        <View style={styles.iconContainer}>
          <FontAwesome
            name={icon}
            size={26}
            color={theme.colors.red}
          />
        </View>
        <View style={styles.infoContainer} testID="item-text">
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        <View style={styles.linkContainer}>
          <FontAwesome
            name="arrow-right"
            size={26}
            color={theme.colors.red}
          />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: theme.layout.padding.sm,
  },
  iconContainer: {
    width: 34,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  linkContainer: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: theme.fonts.bold,
    fontSize: theme.fonts.fontSizeMedium,
  },
  subtitle: {
    fontFamily: theme.fonts.thin,
    fontSize: theme.fonts.fontSizeSmall,
  },
});

export default CreditItem;
