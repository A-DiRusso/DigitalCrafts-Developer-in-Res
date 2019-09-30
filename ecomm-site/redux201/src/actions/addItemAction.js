import axios from 'axios';


export default (dept, food, quantity) => {
  const type = `addItem-${dept}`
  const url = `${window.apiHost}/update-dept/${dept}`
  const updateDept = axios.post(url, {
    quantity,
    food,
  });

  return {
    type,
    payload: updateDept,
  }
}