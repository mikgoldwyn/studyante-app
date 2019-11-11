import React from 'react';
import { Image, View } from 'react-native';
import { Container, Content, Form, Item, Input, Text, Button } from 'native-base';

import Colors from '../constants/Colors';


export default class LoginScreen extends React.Component {
  render() {
    return (
      <Container>
        <Content contentContainerStyle={{ flex: 1, backgroundColor: Colors.white }}>
          <View
            style={{ flex: 1 }}
          >
            <Form style={{ flex: 3, justifyContent: 'center', paddingHorizontal: 25 }}>
              <View style={{ marginBottom: 10 }}>
                <Text style={{ fontFamily: 'Sacramento', textAlign: 'center', fontSize: 50 }}>Studyante</Text>
              </View>
              <Item regular style={{ paddingHorizontal: 15, marginBottom: 20, borderRadius: 5, borderWidth: 1, backgroundColor: '#f5f5f5'}}>
                <Input placeholder='Username' />
              </Item>
              <Item regular style={{ paddingHorizontal: 15, marginBottom: 20, borderRadius: 5, borderWidth: 1, backgroundColor: '#f5f5f5'}}>
                <Input secureTextEntry placeholder='Password' />
              </Item>
              <Button block style={{ backgroundColor: Colors.tint }}><Text> Log In </Text></Button>
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
