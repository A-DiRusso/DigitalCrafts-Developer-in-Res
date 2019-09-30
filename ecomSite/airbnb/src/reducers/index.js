import { combineReducers } from 'redux';
import authReducer from './authReducer';


const index = combineReducers({
  auth: authReducer
})

export default index;