

export default (state = {}, action) => {
  if(action.type === 'signUp'){
    console.log('signUp action.payload.data',action.payload.data)
    return action.payload.data;
  } else if(action.type === 'logout') {
    return {}
  } else if (action.type === 'login') {
    console.log('login action.payload.data', action.payload.data);
    return action.payload.data;
  } else if(action.type === 'testThunk') {
    console.log('Test of Thunk ran, who know\'s the time?');
  }
  return state;
}