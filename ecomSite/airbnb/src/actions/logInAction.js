import axios from 'axios';

export default (data) => {
  console.log('login Action', data);
  const url = `${window.apiHost}/users/login`
  const axiosResponse = axios.post(url, data);
  return {
    type: "login",
    payload: axiosResponse
  }
}