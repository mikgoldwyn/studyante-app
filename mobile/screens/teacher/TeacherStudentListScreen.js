import React from 'react';
import {
  ImageBackground,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
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
} from 'native-base';

import { RequirementAPI } from '../../api';
import HeavyText from '../../components/base/HeavyText';
import Colors from '../../constants/Colors';


class Student extends React.Component {
  handleStudentPress = async () => {
    const response = await RequirementAPI
      .list({ student: this.props.data.id });

    const subjectsWithRequirements = {
        MATH: [],
        FILIPINO: [],
        ENGLISH: [],
        SCIENCE: [],
        AP: [],
        TLE: [],
        CE: [],
        COMPUTER: [],
        MAPEH: [],
    };
    response.data.map((requirement) => {
      subjectsWithRequirements[requirement.subject].push(requirement);
    });
    Object.entries(subjectsWithRequirements).map(([subject, data]) => {
      if (! data.length) {
        delete subjectsWithRequirements[subject];
      }
    });
    this.props.navigation
      .navigate(
        'TeacherStudentRequirements',
        {
          subjectsWithRequirements,
          student: this.props.data,
        }
      );
  }

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={this.handleStudentPress}
      >
        <View
          style={{
            backgroundColor: Colors.white,
            alignItems: 'center',
            marginBottom: 10,
          }}
          >
          <HeavyText
            style={{
              fontSize: 25,
              color: Colors.base,
            }}
            >
            {this.props.data.first_name} {this.props.data.last_name}
          </HeavyText>
        </View>
      </TouchableWithoutFeedback>
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
              height: 100,
              backgroundColor: Colors.white
            }}
          >
            <Left>
              <Button
                transparent
                onPress={() => this.props.navigation.navigate('TeacherHome')}
              >
                <Icon
                  style={{ color: Colors.tint }}
                  name='arrow-back'
                />
              </Button>
            </Left>
            <Body>
              <Text
                style={{
                  color: Colors.base,
                  fontSize: 19,
                  fontFamily: 'Roboto_medium',
                  marginLeft: -3,
                  paddingLeft: 0,
                  paddingTop: 1,
                }}
              >
                REQUIREMENTS ({this.props.navigation.state.params.gender.toUpperCase()})
              </Text>
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
              {
                this.props.navigation.state.params
                  .students.map((student) => {
                    return(
                      <Student
                        key={student.id}
                        data={student}
                        navigation={this.props.navigation}
                      />
                    );
                  })
              }
            </View>
          </Content>
        </Container>
      </ImageBackground>
    );
  }
}
