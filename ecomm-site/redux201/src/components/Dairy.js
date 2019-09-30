import React, { Component } from 'react'
import { connect } from 'react-redux';
import updateDairy from '../actions/dairyInvUpdate';
import { bindActionCreators } from 'redux';
import AddItem from './AddItem';
import getInv from '../actions/getInv';


const mapStateToProps = (state) => {
  return {
    dairyData: state.dairy,
  }
} 
      
const mapDispatchToPorps = (dispatch) => {
  return bindActionCreators({
    updateDairy,
    getInv,
  }, dispatch)
}


class Dairy extends Component {
  
  componentDidMount() {
    // run a action that gets the dairy inventory from the backend
    this.props.getInv('dairy');

  }
  
  changeQuantity = (operation, indexToChange) => {
    // console.log(operation, indexToChange);
    this.props.updateDairy(operation, indexToChange);
  }
  
  render() {
    const dairy = this.props.dairyData.map(({ food, quantity }, i) => {
      return (
        <div key={i}>
          <li>{food} On Hand: {quantity}</li>
          <input className='add-button' type='button' onClick={() =>{this.changeQuantity('+', i)}} value="+"/>
          <input className='add-button' type='button' onClick={() => {this.changeQuantity('-', i)}} value="-"/>
        </div>
      )})
      return (
        <div>
          <h1>Dairy:</h1>
          <AddItem dept='Dairy' />
          {dairy}
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToPorps)(Dairy);
