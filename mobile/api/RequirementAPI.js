import axios from 'axios';


export default class RequirementAPI {
  static Constants = {
    MATH: 'math',
    FILIPINO: 'filipino',
    ENGLISH: 'english',
    SCIENCE: 'science',
    AP: 'ap',
    TLE: 'tle',
    CE: 'ce',
    COMPUTER: 'computer',
    MAPEH: 'mapeh',
  };

  static list = async (params = {}) => {
    const response = await axios.get('requirements/', { params });
    return response;
  }

  static update = async (data) => {
    const response = await axios.patch(`requirements/${data.id}/`, data);
    return response;
  }

  static create = async (data) => {
    const response = await axios.post(`requirements/`, data);
    return response;
  }

}
