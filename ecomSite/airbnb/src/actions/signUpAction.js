import axios from 'axios';


export default (data) => {
  const url = `${window.apiHost}/users/signup`
  const axiosResponse = axios.post(url, data);
  return {
    type: "signUp",
    payload: axiosResponse
  }
}