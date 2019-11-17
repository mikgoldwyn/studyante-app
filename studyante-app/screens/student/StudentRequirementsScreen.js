import React from 'react';
import {
  ImageBackground,
} from 'react-native';
import Constants from 'expo-constants';
import {
  Container,
  Content,
  Icon,
  Header,
  Left,
  Button,
  Body,
  Title,
} from 'native-base';

import Colors from '../../constants/Colors';


export default class StudentHomeScreen extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require('../../assets/sub-bg.jpg')}
        style={{
        width: '100%',
        height: '100%'
        }}
      >
        <Container style={{ backgroundColor: 'transparent' }} >
          <Header
            span
            style={{
              paddingTop: Constants.statusBarHeight,
              backgroundColor: 'white',
            }}
          >
            <Left>
              <Button transparent>
                <Icon
                  onPress={() => this.props.navigation.navigate('StudentHome')}
                  style={{ color: Colors.tint }}
                  name='arrow-back'
                />
              </Button>
            </Left>
            <Body>
              <Title
                style={{
                  color: Colors.base,
                  fontSize: 30
                }}
              >
                Requirements
              </Title>
            </Body>
          </Header>
          <Content contentContainerStyle={{ flex: 1  }} >
          </Content>
        </Container>
      </ImageBackground>
    );
  }
}
