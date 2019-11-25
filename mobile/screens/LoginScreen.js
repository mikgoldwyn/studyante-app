import React from 'react';
import { Image, Dimensions, Keyboard } from 'react-native';
import {
  Toast,
  Container,
  Content,
  Form,
  Item,
  Input,
  Text,
  Button,
  View
} from 'native-base';

import { UserAPI } from '../api';
import Storage from '../Storage';
import Colors from '../constants/Colors';


export default class LoginScreen extends React.Component {
  _handleLogin = async () => {
    this.setState({ loading: true });
    try {
      const response = await UserAPI.login({ username: this.state.username, password: this.state.password });
      const data = response.data;
      await Storage.setItem('USER_DATA', data);
      this.setState({ loading: false });
      if (data.type == 'student') {
        this.props.navigation.navigate('StudentHome', data);
      } else {
        this.props.navigation.navigate('TeacherHome', data);
      }
    } catch (error) {
      Toast.show({
        text: 'Invalid username or password',
        buttonText: 'Try again',
      });
      this.setState({ loading: false });
      throw(error);
    }
  }

  _keyboardDidShow = () => {
    this.setState({ keyboardUp: true });
  }

  _keyboardDidHide = () => {
    this.setState({ keyboardUp: false });
  }

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      username: null,
      password: null,
      keyboardUp: false,
    };
  }

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this._keyboardDidShow,
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this._keyboardDidHide,
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  render() {
    return (
      <Container>
        <Content contentContainerStyle={{ flexGrow: 1, backgroundColor: Colors.white }}>
          <View
            style={{ flex: 1 }}
          >
            <Form style={{ flex: 3, justifyContent: 'center', paddingHorizontal: 25 }}>
              <View style={{ marginBottom: 10 }}>
                <Text style={{ fontFamily: 'Sacramento', textAlign: 'center', fontSize: 50 }}>Studyante</Text>
              </View>
              <Item regular style={{ paddingHorizontal: 15, marginBottom: 20, borderRadius: 5, borderWidth: 1, backgroundColor: '#f5f5f5' }}>
                <Input autoCapitalize='none' onChangeText={(text) => this.setState({ username: text })} placeholder='Username' />
              </Item>
              <Item regular style={{ paddingHorizontal: 15, marginBottom: 20, borderRadius: 5, borderWidth: 1, backgroundColor: '#f5f5f5' }}>
                <Input onChangeText={(text) => this.setState({ password: text })} secureTextEntry placeholder='Password' />
              </Item>
              <Button
                block
                style={{ backgroundColor: Colors.tint }}
                onPress={this._handleLogin}
              >
                <Text> Log In </Text>
              </Button>
            </Form>
            {
              ! this.state.keyboardUp &&
              <Image
                transform={[{ scaleY: 1.02 }]}
                resizeMode='contain'
                style={{ width:  Dimensions.get('window').width, height: 150 }}
                source={require('../assets/login-bg.png')}
              />
            }
          </View>
        </Content>
      </Container>
    );
  }
}
