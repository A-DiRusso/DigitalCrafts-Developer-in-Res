
const seedData = [
  {
    food: 'steak',
    quantity: 20,
  },
  {
    food: 'chicken',
    quantity: 50,
  },
  {
    food: 'fish',
    quantity: 12,
  },
  {
    food: 'crab',
    quantity: 120,
  },
]
// All Reducers have two params
//1. current state, usually provide a default
//2. The action object
export default (state = seedData, action) => {
  // console.log('Meat Reducer is running!');
  if(action.type === 'updateMeat'){
    let newState = [...state];
    if(action.payload.operation === '+'){
      newState[action.payload.indexToChange].quantity++;
    } else if(action.payload.operation === '-'){
      newState[action.payload.indexToChange].quantity--;
    }
    return newState;
  } else if(action.type === 'clearInventory'){
    return [];
  } else if (action.type === 'resetInventory') {
    return state = seedData;
  } else if (action.type === 'addItem-Meat'){
    let newState = [...state];
    const { food, quantity } = action.payload;
    newState.push({ food, quantity });
    return newState;
  }
  return state;
}