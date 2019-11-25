import React from 'react';
import {
  ImageBackground,
  View,
  Alert,
  TouchableOpacity,
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
  CardItem,
  Card,
  Fab,
} from 'native-base';

import { RequirementAPI } from '../../api';
import Colors from '../../constants/Colors';


export default class TeacherStudentsRequirementsScreen extends React.Component {
  _handleRequirementPress = async (requirement) => {
    Alert.alert(
      null,
      (requirement.status == 'completed') ?
        'Change status to PENDING' :
        'Change status to COMPLETED'
      ,
      [
        {
          text: 'Accept',
          onPress: async () => {
            await RequirementAPI.update({
              id: requirement.id,
              status: (requirement.status == 'completed') ?
                'pending' :
                'completed',
            });
            const response = await RequirementAPI
              .list({ student: this.props.navigation.state.params.student.id });

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
            this.setState({ subjectsWithRequirements });
            // end onPress
          }
        },
        { text: 'Cancel', onPress: () => null },
      ]
    );

  }

  constructor(props) {
    super(props);
    this.state = {
      subjectsWithRequirements: this.props.navigation.state.params.subjectsWithRequirements,
    };
  }

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
                onPress={() => this.props.navigation.navigate('TeacherStudentList')}
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
                {this.props.navigation.state.params.student.first_name}
                {' '}
                {this.props.navigation.state.params.student.last_name}
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
                Object.entries(this.state.subjectsWithRequirements)
                  .map(([subject, requirements]) => (
                    <Card
                      key={subject}
                    >
                      <CardItem header>
                        <Text
                          style={{
                            fontFamily: 'BebasNeue',
                            fontSize: 19,
                            color: Colors.tint,
                          }}
                        >
                          {subject}
                        </Text>
                      </CardItem>
                      {
                        requirements.map((requirement) => (
                          <CardItem
                            button
                            onPress={this._handleRequirementPress.bind(this, requirement)}
                            key={requirement.id}
                            style={{
                              backgroundColor: (requirement.status == 'completed') ?
                                Colors.tint :
                                Colors.white,
                            }}
                          >
                            <Icon active/>
                            <Text
                              style={{
                                fontFamily: 'KeepCalm',
                                fontSize: 12,
                                color: Colors.black,
                              }}
                            >
                              {requirement.name}
                              {
                                requirement.status == 'completed' ?
                                '(COMPLETED)' :
                                null
                              }
                            </Text>
                            <Right>
                              <Icon
                              style={{
                                color: requirement.status == 'completed' ?
                                  Colors.white:
                                  Colors.tint,
                              }}
                              name='arrow-forward'
                              />
                            </Right>
                           </CardItem>
                        ))
                      }
                     </Card>
                  ))
              }
            </View>
          </Content>
          <Fab
            style={{ backgroundColor: '#34A34F' }}
            position='bottomRight'
            onPress={() => {}}
          >
            <Icon name='add' />
          </Fab>
        </Container>
      </ImageBackground>
    );
  }
}
