import React from 'react';
import { ImageBackground } from 'react-native';
import
{
  Container,
  Content,
  View,
}
from 'native-base';

import CustomHeader from '../../components/CustomHeader';
import Colors from '../../constants/Colors';

export default class StudentHomeScreen extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require('../../assets/main-bg.jpg')}
        style={{
        width: '100%',
        height: '100%'
        }}
      >
      <Container
        style={{
          backgroundColor: 'transparent'
        }}
      >
        <CustomHeader />
        <Content
          contentContainerStyle={{ flex: 1  }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: Colors.transparent,
            }}
          >
          </View>
          <View
            style={{
              flex: 2,
              backgroundColor: Colors.tint,
              borderTopWidth: 2,
              borderBottomWidth: 2,
              borderColor: Colors.base,
            }}
          >
          </View>
          <View
            style={{
              flex: 2,
              backgroundColor: Colors.transparent,
            }}
          >
          </View>
        </Content>
      </Container>
    </ImageBackground>);
  }
}
