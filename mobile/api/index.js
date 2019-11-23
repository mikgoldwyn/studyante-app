import axios from 'axios';

import Storage from '../Storage';

export AuthAPI from './AuthAPI';
export RequirementAPI from './RequirementAPI';


axios.defaults.baseURL = 'http://192.168.1.8:8000/api/';

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
