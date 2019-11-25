import React from 'react';
import {
  ActivityIndicator,
} from 'react-native';
import { Container, Content } from 'native-base';

import Storage from '../Storage';


export default class InitialLoadingScreen extends React.Component {
  componentDidMount() {
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    // await AsyncStorage.setItem('userToken', '123');
    const userData = await Storage.getItem('USER_DATA');
    this.props.navigation.navigate('Auth');
    if (userData) {
      if (userData.type == 'student') {
        this.props.navigation.navigate('StudentHome', userData);
      } else {
        this.props.navigation.navigate('TeacherHome', userData);
      }
    } else {
      this.props.navigation.navigate('Auth');
    }
  }

  render() {
    return (
      <Container>
        <Content contentContainerStyle={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
          <ActivityIndicator />
        </Content>
      </Container>
    );
  }
}
