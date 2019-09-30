

export default (operation, indexToChange) => {
  return {
    type: 'updateMain',
    payload: {
      operation,
      indexToChange,
    },
  }
}