import React from 'react';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Root } from 'native-base';

import AppContainer from './navigation/Navigator';

export default class App extends React.Component {
  constructor(props) {
    super(props);
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
        BebasNeue: require('./assets/fonts/BebasNeue-Regular.ttf'),
        KeepCalm: require('./assets/fonts/KeepCalm-Medium.ttf'),
        ...Ionicons.font,
      }),
      Asset.loadAsync([
        require('./assets/login-bg.png'),
        require('./assets/main-bg.jpg'),
        require('./assets/sub-bg.jpg'),
      ]),
    ]);

    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Root>
        <AppContainer />
      </Root>
    );
  }
}
