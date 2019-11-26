import React from 'react';
import {
  ImageBackground,
  View,
  Alert,
  Modal,
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
  CardItem,
  Card,
  Label,
  Form,
  Item,
  Input,
  DatePicker,
  Picker,
  Fab,
} from 'native-base';

import { RequirementAPI, UserAPI } from '../../api';
import Colors from '../../constants/Colors';


export default class TeacherStudentsRequirementsScreen extends React.Component {
  _handleRequirementPress = async (requirement) => {
    Alert.alert(
      null,
      (requirement.status == 'completed') ?
        'Change status to PENDING' :
        'Change status to COMPLETED',
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
          }
        },
        { text: 'Cancel', onPress: () => null },
      ]
    );

  }

  _showModal = () => {
    this.setState({
      modal: {
        visible: true,
        subject: null,
        student: null,
        deadline: null,
        name: null,
      },
    });
  }

  _hideModal = () => {
    this.setState({
      modal: {
        visible: false,
        subject: null,
        student: null,
        deadline: null,
        name: null,
      },
    });
  }

  _handleAddRequirement = async () => {
    const data = {
      student: this.state.modal.student.id,
      deadline: this.state.modal.deadline,
      subject: this.state.modal.subject,
      name: this.state.modal.name,
    };
    try {
      await RequirementAPI.create(data);
      const response = await RequirementAPI.list({ student: data.student.id });
      this.setState({ students: response.data });
    } catch (error) {
      console.log(error.response.data);
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      subjectsWithRequirements: this.props.navigation.state.params.subjectsWithRequirements,
      modal: {
        visible: false,
        subject: null,
        student: null,
        deadline: null,
        name: null,
      },
      students: this.props.navigation.state.params.students,
    };
    this.subjects = [
      'MATH',
      'FILIPINO',
      'ENGLISH',
      'SCIENCE',
      'AP',
      'TLE',
      'CE',
      'COMPUTER',
      'MAPEH',
    ];
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
            <Modal
              animationType='fade'
              transparent={true}
              visible={this.state.modal.visible}
            >
              <TouchableWithoutFeedback onPress={this._hideModal}>
                <View style={{ height: '50%', backgroundColor: 'rgba(0, 0, 0, .5)' }}>
                </View>
              </TouchableWithoutFeedback>
              <View style={{ flex: 1, justifyContent: 'space-around', padding: 25, height: '50%', backgroundColor: 'white' }}>
                <View>
                  <Form>
                    <Item picker>
                      <Label>Subject</Label>
                      <Picker
                        mode='dropdown'
                        iosIcon={<Icon name='arrow-down' />}
                        placeholder='Select a Subject'
                        selectedValue={this.state.modal.subject}
                        onValueChange={
                          (subject) => this.setState((state, props) => {
                            const modal = JSON.parse(JSON.stringify(state.modal));
                            modal.subject = subject;
                            return { modal };
                          })
                        }
                      >
                        <Picker.Item label='' value={null}/>
                        {
                          this.subjects.map((subject) => <Picker.Item label={subject} value={subject} key={subject} />)
                        }
                      </Picker>
                    </Item>
                    <Item picker>
                      <Label>Student</Label>
                      <Picker
                        mode='dropdown'
                        iosIcon={<Icon name='arrow-down' />}
                        placeholder='Select a Student'
                        selectedValue={this.state.modal.student}
                        onValueChange={
                          (student) => this.setState((state, props) => {
                            const modal = JSON.parse(JSON.stringify(state.modal));
                            modal.student = student;
                            return { modal };
                          })
                        }
                      >
                        <Picker.Item label='' value={null}/>
                        {
                          this.state.students
                            .map((student) => (
                              <Picker.Item label={`${student.first_name} ${student.last_name}`} value={student.id} key={student.id} />
                            ))
                        }
                      </Picker>
                    </Item>
                    <Item picker>
                      <Label>Deadline</Label>
                      <DatePicker
                        onDateChange={(date) => {
                          this.setState((state, props) => {
                            const modal = JSON.parse(JSON.stringify(state.modal));
                            modal.deadline = date.toISOString().split('T')[0];
                            return { modal };
                          });
                        }}
                      />
                    </Item>
                    <Item picker>
                      <Label>Name</Label>
                      <Input
                        onChangeText={(text) => {
                          this.setState((state, props) => {
                            const modal = JSON.parse(JSON.stringify(state.modal));
                            modal.name = text;
                            return { modal };
                          });
                        }}
                      />
                    </Item>
                    <Button
                      block
                      style={{
                        backgroundColor: Colors.tint
                      }}
                      onPress={this._handleAddRequirement}
                      >
                      <Text>Add Requirement</Text>
                    </Button>
                  </Form>
                </View>
              </View>
            </Modal>

          </Content>
          <Fab
            style={{ backgroundColor: '#34A34F' }}
            position='bottomRight'
            onPress={this._showModal}
          >
            <Icon name='add' />
          </Fab>
        </Container>
      </ImageBackground>
    );
  }
}
