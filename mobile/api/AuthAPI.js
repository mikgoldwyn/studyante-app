import axios from 'axios';


export default class AuthAPI {
  static instance = axios.create({
    baseURL: 'http://192.168.1.8:8000/api/',
  });

  static login = async ({ username, password }) => {
    const response = this.instance.post('users/login/', { username, password });
    return response;
  }

}
