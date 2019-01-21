import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AppLoading, Font } from 'expo';
import AppNavigator from '../../navigation';
import { theme } from '../../constants';
import { Provider as MobxProvider } from 'mobx-react/native';
import stores from 'stores';

export default class App extends React.Component {
  state = {
    isReady: false,
  };

  startAsync = async () => {
    await Promise.all([
      Font.loadAsync({
        'Roboto-Black': require('../../assets/fonts/Roboto-Black.ttf'),
        'Roboto-Bold': require('../../assets/fonts/Roboto-Bold.ttf'),
        'Roboto-Italic': require('../../assets/fonts/Roboto-Italic.ttf'),
        'Roboto-Light': require('../../assets/fonts/Roboto-Light.ttf'),
        'Roboto-Medium': require('../../assets/fonts/Roboto-Medium.ttf'),
        'Roboto-Thin': require('../../assets/fonts/Roboto-Thin.ttf'),
        'Roboto-Regular': require('../../assets/fonts/Roboto-Regular.ttf'),
      }),
    ]);
  }

  onError = (error: Error)  => {
    console.warn(error);
  }

  onFinish = () => {
    this.setState({ isReady: true });
  }

  render() {
    const { isReady } = this.state;

    if (!isReady) {
      return (
        <AppLoading
          startAsync={this.startAsync}
          onError={this.onError}
          onFinish={this.onFinish}
        />
      );
    }

    return (
      <View style={styles.container}>
        <MobxProvider {...stores}>
          <AppNavigator />
        </MobxProvider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
});
