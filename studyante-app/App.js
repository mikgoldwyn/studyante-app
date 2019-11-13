import React from 'react';
import { StatusBar } from 'react-native';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import AppContainer from './navigation/Navigator';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    StatusBar.setBackgroundColor('rgba(0, 0, 0, 0)');
    StatusBar.setTranslucent(true);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Promise.all([
      Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        Sacramento: require('./assets/fonts/Sacramento-Regular.ttf'),
        ...Ionicons.font,
      }),
      Asset.loadAsync([
        require('./assets/login-bg.png'),
      ]),
    ]);

    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <AppContainer />
    );
  }
}
