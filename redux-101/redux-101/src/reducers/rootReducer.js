//1. get a method from redux called combinReducer
import { combineReducers } from 'redux';
//2.get each individual reducer
// the store is managed by this thing
//the manager need indivual departments

import frozenReducer from './frozenReducer';
import dairyReducer from './dairyReducer';
import meatReducer from './meatReducer';


//3. call combineReducers and hand it an object
//3.1. each key in the object we pass to combineReducers
// will b e a peice of state in the redux store
//3.2. each value will be the value of that peice of 
//state in the redux store

const rootReducer = combineReducers({
  frozen: frozenReducer,
  dairy: dairyReducer,
  meat: meatReducer,
});

export default rootReducer;