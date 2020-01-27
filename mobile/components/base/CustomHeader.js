import React from 'react';
import Constants from 'expo-constants';
import { Alert } from 'react-native';
import {
  Text,
  View,
  Header,
  Body,
  Thumbnail,
  Button,
  Icon,
} from 'native-base';

import Storage from '../../Storage';
import Colors from '../../constants/Colors';


export default class StudentHomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  _handleLogoutButton = async () => {
    Alert.alert(
      null,
      'Are you sure you want to logout?',
      [
        {
          text: 'Logout',
          onPress: async () => {
            await Storage.removeItem('USER_DATA');
            this.props.navigation.navigate('Auth');
          }
        },
        { text: 'Cancel', onPress: () => null },
      ]
    );
  }

  _

  render() {
    return (
      <Header
        transparent
        span
        noLeft
        style={{
          backgroundColor: Colors.transparent,
          paddingTop: Constants.statusBarHeight,
        }}
        androidStatusBarColor={Colors.transparent}
      >
        <Body>
          <View
            style={{
              flex: 1,
              flexDirection: 'row'
            }}
          >
            {
              this.props.profilePicture
              ? <Thumbnail
                  source={{ uri: this.props.profilePicture }}
                />
              : <Thumbnail
                  source={{ uri: 'https://66.media.tumblr.com/090f255775a02ea78c588b9c6c9da5e8/tumblr_pj2d3d1F9i1uym0tp_540.jpg' }}
                />

            }
            <View style={{ padding: 10, flexDirection: 'column' }}>
              <Text style={{ textAlign: 'center', letterSpacing: 5, color: Colors.white, backgroundColor: Colors.tint, padding: .5 }}>
                {this.props.firstName} {this.props.lastName}
              </Text>
              <Text style={{ letterSpacing: 5, color: Colors.white, padding: .5 }}>
                Grade 10 {this.props.type}
              </Text>
            </View>
            <Button
              onPress={this._handleLogoutButton}
              iconLeft
              transparent
            >
              <Icon
                style={{ color: Colors.white }}
                android='ios-arrow-down'
                ios='ios-arrow-down'
              />
            </Button>
          </View>
        </Body>
      </Header>
    );
  }
}
