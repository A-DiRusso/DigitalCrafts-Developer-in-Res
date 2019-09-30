import axios from 'axios';


export default async (dept)  => {
  console.log('firing');
  const url = (`${window.apiHost}/dairy-inv`);
  const data = await axios.get(url)
  return {
    type: `getInv-${dept}`,
    payload: data,
  }
}