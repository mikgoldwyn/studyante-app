import React from 'react';
import {
  ImageBackground,
  View,
} from 'react-native';
import Constants from 'expo-constants';
import {
  Container,
  Content,
  Icon,
  Header,
  Left,
  Right,
  Button,
  Body,
  Text,
  Title,
} from 'native-base';

import HeavyText from '../../components/base/HeavyText';
import Colors from '../../constants/Colors';


class Subject extends React.Component {
    render() {
      return (
        <View
          style={{
            backgroundColor: Colors.white,
            padding: 15,
            borderRadius: 50,
            alignItems: 'center',
            marginBottom: 20,
          }}
        >
          <HeavyText
            style={{
              fontSize: 25,
              color: Colors.base,
            }}
          >
            {this.props.text}
          </HeavyText>
        </View>
      );
    }
}


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
        <Container style={{ backgroundColor: Colors.transparent }} >
          <Header
            iosBarStyle='dark-content'
            androidStatusBarColor={Colors.transparent}
            style={{
              paddingTop: Constants.statusBarHeight,
              backgroundColor: Colors.white
            }}
          >
            <Left>
              <Button
                transparent
                onPress={() => this.props.navigation.navigate('StudentHome')}
              >
                <Icon
                  style={{ color: Colors.tint }}
                  name='arrow-back'
                />
              </Button>
            </Left>
            <Body>
              <Title
                style={{
                  color: Colors.base,
                }}
              >
                REQUIREMENTS
              </Title>
            </Body>
            <Right>
              <Button hasText transparent>
                <Text>Cancel</Text>
              </Button>
            </Right>
          </Header>
          <Content>
            <View
              style={{
                paddingVertical: 30,
                paddingHorizontal: 20,
              }}
            >
              <Subject text='MATH' />
              <Subject text='FILIPINO' />
              <Subject text='ENGLISH' />
              <Subject text='SCIENCE' />
              <Subject text='AP' />
              <Subject text='TLE' />
              <Subject text='CE' />
              <Subject text='COMPUTER' />
              <Subject text='MAPEH' />
            </View>
          </Content>
        </Container>
      </ImageBackground>
    );
  }
}
