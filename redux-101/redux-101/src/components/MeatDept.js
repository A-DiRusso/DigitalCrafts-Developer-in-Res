import React, { Component } from 'react'
// in order for this component to know about redux we need some glue
// react-redux...specfically the connect thing 
import { connect } from 'react-redux';
import updateMeat from '../actions/meatInvUpdate';
import { bindActionCreators } from 'redux';
import AddItem from './AddItem';


//this won't be used by the class
const mapStateToProps = (state) => {
  //mapStateToProps takes one arg: state
  //That 'state' var, is the rootReducer Store
  //mapstatetoprops returns an object with the key/property 
  // is the local prop name in this component the value will be the 
  // property in the rootReducer(store)
  return {
    meatData: state.meat,
  }
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateMeat: updateMeat,
  }, dispatch)
}

class MeatDept extends Component {

  updateQuantity(operation, indexToChange){
    this.props.updateMeat(operation, indexToChange);
  }
  render() {
    const meatArr = this.props.meatData;
    console.log(meatArr);
    const meats = meatArr.map(({food, quantity}, i) => {
      return (
        <div key={i}>
          <li>{food} On Hand: {quantity}</li>
          <input className='add-button' type='button' onClick={() => {this.updateQuantity('+', i)}} value='+' />
          <input className='add-button' type='button' onClick={() => {this.updateQuantity('-', i)}} value='-' />
        </div>
        )
      })
    return (
      <div>
        <h1>Meat:</h1>
        <AddItem dept='Meat' />
          {meats}
      </div>
    )
  }
}
// we don't export the class for Redux
// we expor the connect which takes 2 args
//1. a Function that is going to mapStateToProps
//2. a Function that maps the dispatch to props
//3. connect is a function that returns a function
// that function takes an arg of the component 
export default connect(mapStateToProps, mapDispatchToProps)(MeatDept);