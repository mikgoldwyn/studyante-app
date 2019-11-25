import axios from 'axios';
import Constants from 'expo-constants';


export default class UserAPI {
  static getBaseUrl = () => {
    if (__DEV__) {
      return `http://${Constants.manifest.debuggerHost.split(':').shift()}:8000/api/`;
    } else {
      return `api.mikgoldwyn.com/api/`;
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

}
