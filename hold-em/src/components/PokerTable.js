import React, { Component } from 'react'
import './PokerTable.css';
import PokerHand from './PokerHand';
import Deck from '../utilityClasses/Deck';


export default class PokerTable extends Component {
  constructor(){
    super();
    this.deck = new Deck();
    this.deck.create();
    this.deck.shuffle();
    this.state = {
      playerHand: [],
      dealerHand: [],
      communityHand: [],
    }
    console.log(this.deck.cards);
  }

  prepDeck = () => {
    const cardOne = this.deck.cards.shift();
    const cardTwo = this.deck.cards.shift();
    const cardThree = this.deck.cards.shift();
    const cardFour = this.deck.cards.shift();
    this.setState({
      playerHand:[cardOne, cardThree],
      dealerHand:[cardTwo, cardFour],
    })
  }

  render() {
    return (
      <div className="the-table col-sm-12">
        <PokerHand cards={ this.state.playerHand } />
        <PokerHand cards={ this.state.communityHand }/>
        <PokerHand cards={ this.state.dealerHand }/>
        <button onClick={this.prepDeck} className="btn btn-primary">Start</button>
      </div>
    )
  }
}
