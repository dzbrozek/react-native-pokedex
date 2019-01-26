import React from 'react';
import { AppLoading, Font } from 'expo';
import AppNavigator from '../../navigation';
import { theme } from '../../constants';
import { Provider as MobxProvider } from 'mobx-react/native';
import stores from 'stores';
import { ApolloProvider } from 'react-apollo';
import client from 'config/api';
import { ThemeProvider } from 'styled-components';
import { Container } from './styles';
import Loader from '../Loader';

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
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <MobxProvider {...stores}>
            <Container>
              <AppNavigator
                persistenceKey={__DEV__ ? 'NavigationStateDEV' : null}
                renderLoadingExperimental={() => <Loader/>}
              />
            </Container>
          </MobxProvider>
        </ApolloProvider>
      </ThemeProvider>
    );
  }
}
