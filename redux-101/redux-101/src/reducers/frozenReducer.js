
const seedData = [
  {
    food: 'pizza',
    quantity: 12,
  },
  {
    food: 'ice cream',
    quantity: 21,
  },
  {
    food: 'family dinner',
    quantity: 5,
  },
  {
    food: 'frozen veggies',
    quantity: 132,
  },
]
// All Reducers have two params
//1. current state, usually provide a default
//2. The action object
export default (state = seedData, action) => {
  // console.log('Frozen Reducer is running!');
  // console.log(action.payload);
  // console.log(action.type);
  if(action.type === 'updateFrozen'){
    let newState = [...state];
    if(action.payload.operation === '+'){
      newState[action.payload.indexToChange].quantity++;
    } else if(action.payload.operation === '-'){
      newState[action.payload.indexToChange].quantity--;
    }
    return newState;
  } else if (action.type === 'clearInventory'){
    return [];
  } else if (action.type === 'resetInventory') {
    return state = seedData;
  } else if(action.type === 'addItem-Frozen') {
    let newState = [...state]
    const { food, quantity } = action.payload;
    newState.push({ food ,quantity });
    return newState;
  }
  return state;
}