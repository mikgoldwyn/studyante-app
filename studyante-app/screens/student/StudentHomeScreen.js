import React from 'react';
import {
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  Container,
  Content,
  View,
  Icon,
} from 'native-base';

import CustomHeader from '../../components/base/CustomHeader';
import LightText from '../../components/base/LightText';
import Colors from '../../constants/Colors';


class NavigationItem extends React.Component {
  render() {
    return (
      <TouchableWithoutFeedback
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            paddingHorizontal: 50,
            backgroundColor: Colors.opaqueTint,
            alignItems: 'center',
            borderBottomWidth: (this.props.last)? 0 : 2,
            borderBottomColor: Colors.base,
            borderTopWidth: 0,
          }}
          >
          <Icon style={{ paddingHorizontal: 20, color: Colors.black }} name='arrow-dropright' />
          <LightText style={{ color: Colors.black }}>{this.props.text}</LightText>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}


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
              borderTopWidth: 2,
              borderBottomWidth: 2,
              borderColor: Colors.base,
            }}
          >
            <NavigationItem
              text="REQUIREMENTS"
            />
            <NavigationItem
              text="PLANNER / CALENDAR"
            />
            <NavigationItem
              text="CLASS FUND"
              last
            />
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
