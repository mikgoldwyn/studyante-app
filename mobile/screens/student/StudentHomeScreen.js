import React from 'react';
import {
  ImageBackground,
  TouchableWithoutFeedback,
  Dimensions,
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
        onPress={this.props.onPress}
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
    console.log(this.props.navigation.state);
    return (
      <ImageBackground
        source={require('../../assets/main-bg.jpg')}
        style={{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        }}
      >
        <Container
          style={{
            backgroundColor: 'transparent'
          }}
        >
          <CustomHeader
            navigation={this.props.navigation}
            firstName={this.props.navigation.state.params.first_name}
            lastName={this.props.navigation.state.params.last_name}
          />
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
                text='REQUIREMENTS'
                onPress={() => this.props.navigation.navigate('StudentRequirements')}
              />
              <NavigationItem
                text='PLANNER / CALENDAR'
              />
              <NavigationItem
                text='CLASS FUND'
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
      </ImageBackground>
    );
  }
}
