import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import clearInventory from '../actions/clearInventory';
import resetInventory from '../actions/resetInventory';
import updateMeat from '../actions/meatInvUpdate';
import updateDairy from '../actions/dairyInvUpdate';
import updateFrozen from '../actions/frozenInvUpdate';

const mapStateToProps = (state) => {
  return {
    dairyData: state.dairy,
    frozenData: state.frozen,
    meatData: state.meat,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateDairy,
    updateFrozen,
    updateMeat,
    clearInventory,
    resetInventory,
  }, dispatch)
}

class Main extends Component {

  changeQuantity = (operation, indexToChange) => {
    console.log('changeQuantity called', operation, indexToChange);
    this.props.updateDairy(operation, indexToChange);
    this.props.updateFrozen(operation, indexToChange);
    this.props.updateMeat(operation, indexToChange);
  }

  render() {
    const { dairyData, frozenData, meatData } = this.props;
    const storeInventoryArray = [...dairyData, ...frozenData, ...meatData];
    const storeProducts = storeInventoryArray.map(({ food, quantity }, i) => {
      return  (
        <div key={i}>
          <li key={i}> {food} On Hand: {quantity}</li>
          <input className='add-button' type='button' onClick={() => {this.changeQuantity('+', i)}} value='+' />
          <input className='add-button' type='button' onClick={() => {this.changeQuantity('-', i)}} value='-' />
        </div>
      )
    });
    const dairy = dairyData.map(({ food, quantity }, i) => <li key={i}> {food} On Hand: {quantity}</li>);
    const dairyQuantity = dairyData.reduce((a,b) => a + b.quantity, 0);
    const frozenFoods = frozenData.map(({ food, quantity }, i) => <li key={i}> {food} On Hand: {quantity}</li>)
    const frozenQuantity = frozenData.reduce((a, b) => a + b.quantity, 0);
    const meats = meatData.map(({ food, quantity }, i) => <li key={i}> {food} On Hand: {quantity}</li>);
    const meatQuantity = meatData.reduce((a, b) => a + b.quantity, 0);
    return (
      <div>
        <h1>Home page!</h1>
        <button onClick={this.props.clearInventory}>Clear All</button>
        <button onClick={this.props.resetInventory}>Reset Inventory</button>
        <div>
          <h4>Dairy On Hand: {dairyQuantity}</h4> 
          {dairy} 
        </div>
        <div>
          <h4>Frozen On Hand: {frozenQuantity}</h4>
          {frozenFoods}  
        </div>
        <div>
          <h4>Meats On Hand: {meatQuantity}</h4>
          {meats} 
        </div>
          <div>
            <h4>All The Things!</h4>
            {storeProducts}
          </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);