// this file is an action creator!
// action creators return actions
//actions are always objects
// that has atleast one property: type: 
// The action object with a type property is then going to be handed to the dispatch
// The dispatch will send taht action to all the reducers 

export default (operation, indexToChange) => {
  return {
    type: 'updateFrozen',
    payload: {
      operation,
      indexToChange,
    }
  }
}



