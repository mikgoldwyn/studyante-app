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
  CardItem,
  Toast,
} from 'native-base';

import { UserAPI } from '../../api';
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
            height: 75,
            backgroundColor: 'white',
            width: Dimensions.get('window').width - 50,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 25,
          }}
        >
          <CardItem>
            <LightText>{this.props.text}</LightText>
          </CardItem>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}


export default class StudentHomeScreen extends React.Component {
  _goToRequirements = async (gender) => {
    const type = 'student';
    const response = await UserAPI.list({ gender, type });
    this.props.navigation
      .navigate('TeacherStudentList', { gender, students: response.data });
  }

  render() {
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
            profilePicture={this.props.navigation.state.params.profile_picture}
            type='Teacher'
          />
          <Content
            contentContainerStyle={{ flex: 1 }}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: Colors.transparent,
              }}
            >
            </View>
              <NavigationItem
                text='REQUIREMENTS BOYS'
                onPress={this._goToRequirements.bind(this, 'male')}
              />
              <View style={{ paddingVertical: 25 }} />
              <NavigationItem
                text='REQUIREMENTS GIRLS'
                onPress={this._goToRequirements.bind(this, 'female')}
              />
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
