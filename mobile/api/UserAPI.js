import axios from 'axios';
import Constants from 'expo-constants';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import { Platform } from 'react-native';
import Storage from '../Storage';


export default class UserAPI {
  static getBaseUrl = () => {
    if (__DEV__) {
      return `http://${Constants.manifest.debuggerHost.split(':').shift()}:8000/api/`;
    } else {
      return `https://mikgoldwyn.com/api/`;
    }
  }

  static instance = axios.create({
    baseURL: this.getBaseUrl(),
  });

  static login = async ({ username, password }) => {
    const response = this.instance.post('users/login/', { username, password });
    return response;
  }

  static list = async (params = {}) => {
    const response = await axios.get('users/', { params });
    return response;
  }

  static registerPushNotifications = async () => {
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;

    // only ask if permissions have not already been determined, because
    // iOS won't necessarily prompt the user a second time.
    if (existingStatus !== 'granted') {
      // Android remote notification permissions are granted during the app
      // install, so this will only ask on iOS
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }

    // Stop here if the user did not grant permissions
    if (finalStatus !== 'granted') {
      return;
    }

    // Get the token that uniquely identifies this device
    let token = await Notifications.getExpoPushTokenAsync();
    let userData = await Storage.getItem('USER_DATA');
    // POST the token to your backend server from where you can retrieve it to send push notifications.
    const data = { token };
    this.instance.post(`users/${userData.id}/register-push-notification/`, data);
    if (Platform.OS === 'android') {
      Notifications.createChannelAndroidAsync(
        'push-notifications',
        {
          name: 'Push Notifications',
          sound: true,
        }
      );
    }
  }
}
