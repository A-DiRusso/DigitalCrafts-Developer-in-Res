import React, { Component } from 'react'
import { connect } from 'react-redux';
import updateFrozen from '../actions/frozenInvUpdate';
import { bindActionCreators } from 'redux';
import AddItem from './AddItem';

const mapStateToProps = (state) => {
  return {
    frozenData: state.frozen,
  }
}



const mapDispatchToProps = (dispatch) => {
  // mapDispatchToProps is how we connect
  //our component using this action creator
  // to the dispatch
  // this function returns a bindActionCreators and we hand 
  // bindActinoCreators an Object
  return bindActionCreators({
    //each property will be a local prop
    // each value will be a function, action
    //creator, that will have its return value, action
    //sent to the dsipatch
    updateFrozen: updateFrozen,
  }, dispatch)
}


class FrozenDept extends Component {

  changeQuantity = (operation, indexToChange) => {
    this.props.updateFrozen(operation, indexToChange);
  }

  render() {

    const frozenFoods = this.props.frozenData.map(({food, quantity}, i) => {
    return (
      <div key={i}>
        <li key={i}>{food} On Hand: {quantity}</li>
        <input className='add-button' type='button' onClick={() => {this.changeQuantity('+', i)}} value='+'/>
        <input className='add-button' type='button' onClick={() => {this.changeQuantity('-', i)}} value='-' />
      </div>
      )
    })
    return (
      <div>
        <h1>Frozen Foods:</h1>
        <AddItem dept='Frozen' />
        {frozenFoods}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FrozenDept);
