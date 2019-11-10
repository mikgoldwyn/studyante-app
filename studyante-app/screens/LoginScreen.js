import React from 'react';
import { Image, View } from 'react-native';
import { Container, Content, Form, Item, Input } from 'native-base';

import Colors from '../constants/Colors';


export default class LoginScreen extends React.Component {
  render() {
    return (
      <Container>
        <Content contentContainerStyle={{ flex: 1 }}>
          <View
            style={{ flex: 1 }}
          >
            <Form style={{ flex: 3, justifyContent: 'center', paddingHorizontal: 25 }}>
              <Item regular style={{ paddingHorizontal: 15, marginBottom: 20, borderRadius: 5, borderWidth: 1, backgroundColor: '#f5f5f5'}}>
                <Input placeholder='Username' />
              </Item>
              <Item regular style={{ paddingHorizontal: 15, marginBottom: 20, borderRadius: 5, borderWidth: 1, backgroundColor: '#f5f5f5'}}>
                <Input placeholder='Password' />
              </Item>
            </Form>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <Image
                transform={[{ scaleY: 1.02 }]}
                style={{ height: '100%', resizeMode: 'contain' }}
                source={require('../assets/login-bg.png')}
              />
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}
