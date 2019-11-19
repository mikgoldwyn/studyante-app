import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
} from 'react-native';
import { Container } from 'native-base';


export default class InitialLoadingScreen extends React.Component {
  componentDidMount() {
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    // await AsyncStorage.setItem('userToken', '123');
    const userToken = await AsyncStorage.getItem('userToken');
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  }

  render() {
    return (
      <Container>
        <ActivityIndicator />
      </Container>
    );
  }
}
