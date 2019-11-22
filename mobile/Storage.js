import { AsyncStorage } from 'react-native';


export default class Storage {
  static _parseData = (data) => {
    try {
      return JSON.parse(data);
    } catch (e) {
      return data;
    }
  }

  static _prepareData = (data) => {
    try {
      return JSON.stringify(data);
    } catch (e) {
      return data;
    }
  }

  static getItem = async (key) => {
    const data = await AsyncStorage.getItem(key);
    return this._parseData(data);
  }

  static setItem = async (key, data) => {
    data = this._prepareData(data);
    return await AsyncStorage.setItem(key, data);
  }

  static removeItem = async (key) => {
    return await AsyncStorage.removeItem(key);
  }

}
