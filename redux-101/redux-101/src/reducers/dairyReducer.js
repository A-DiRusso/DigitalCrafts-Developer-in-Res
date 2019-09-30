
const seedData = [
  {
    food: 'cheese',
    quantity: 120,
  },
  {
    food: 'milk',
    quantity: 37,
  },
  {
    food: 'yogurt',
    quantity: 75,
  },
  {
    food: 'kefir',
    quantity: 3,
  },
]
// All Reducers have two params
//1. current state, usually provide a default
//2. The action object
export default (state = seedData, action) => {
  // console.log('Dairy Reducer is running!');
  // console.log(action.type);
  // console.log(action.payload);

  if(action.type === 'updateDairy'){
    let newState = [...state];
    if(action.payload.operation === '+'){
      newState[action.payload.indexToChange].quantity++;
    } else if(action.payload.operation === '-'){
      newState[action.payload.indexToChange].quantity--;
    }
    return newState;
  } else if(action.type === 'clearInventory'){
    return [];
  } else if (action.type === 'resetInventory'){
    return state= seedData;
  } else if (action.type === 'addItem-Dairy'){
    let newState = [...state];
    const { food, quantity } = action.payload;
    newState.push({
      food,
      quantity,
    });
    return newState;
  }

  // switch (action.type){
  //   case 'updateDairy': {
  //     console.log('updateD', action.payload);
  //     let newState = [...state];
  //     let newStateTurn = (action.payload.operation === '+') 
  //     ?
  //     // console.log('update Dairy Operation +', action.payload.operation)
  //     newState[action.payload.indexToChange].quantity++ && console.log('newState ++: ', newState)
  //     : (action.payload.operation === '-')
  //     ?
  //     // console.log('update Dairy Operation -', action.payload.operation)
  //     newState[action.payload.indexToChange].quantity-- && console.log('newState --: ', newState)
  //     : console.log('Is this thing on?')
  //   }
  //   default: {
  //     console.log('default');
  //     break;
  //   }
  // }
  // return newStateTurn;
  return state;

  // return state;
}
