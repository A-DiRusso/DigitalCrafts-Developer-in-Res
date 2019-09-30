import React, { Component } from 'react'
import addItemAction from '../actions/addItemAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';




class AddItem extends Component {
  state = {
    food: '',
    quantity: 0,
  }

  submitItem = (e) => {
    e.preventDefault();
    this.props.addItemAction(
      this.props.dept,
      this.state.food,
      this.state.quantity
    )
  }

  changeFood = (e) => {
    console.log(this);
    this.setState({
      food: e.target.value
    })
  }
  changeQuantity = (e) => {
    this.setState({
      quantity: Number(e.target.value)
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitItem}>
          <input
            value={this.state.food}
            onChange={this.changeFood} 
            type='text'
            placeholder="Item"
          />
          <input 
            value={this.state.quantity}
            onChange={this.changeQuantity}
            type='number'
            min='0'
            //placeholder="Amount"
          />
          <input
            type='submit'
            value='Submit'
          />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addItemAction
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(AddItem);