//this is only a test :) 

export default () => {
  return waitASec
}

const waitASec = (dispatch, getState) => {
  console.log('Wait a sec is running');
  setTimeout(() => {
    console.log('Two Seconds have passed.');
    dispatch({
      type: "testThunk"
    })
  }, 2000)
}