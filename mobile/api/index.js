import axios from 'axios';

import Storage from '../Storage';

export UserAPI from './UserAPI';
export RequirementAPI from './RequirementAPI';
import Constants from 'expo-constants';


axios.defaults.baseURL = (__DEV__) ?
  `http://${Constants.manifest.debuggerHost.split(':').shift()}:8000/api/` :
  `https://mikgoldwyn.com/api/`;

axios.interceptors.request.use(
  async (config) => {
    const userData = await Storage.getItem('USER_DATA');
    config.headers.Authorization = `Token ${userData.auth_token}`;
    return config;
  },
  async (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);
