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
      playerHand: ['deck', 'deck'],
      dealerHand: ['deck', 'deck'],
      communityHand: ['deck', 'deck', 'deck', 'deck', 'deck'],
      wager: 0,
      bankroll: 100,
      msg: '',
    }
    // console.log(this.deck.cards);
  }

  checkHandRank = () => {
    console.log('checkHandRank');
    const { playerHand, communityHand, dealerHand } = this.state;
    let playerPlusCommunity = [...playerHand, ...communityHand];
    let dealerPlusCommunity = [...dealerHand, ...communityHand];
    //['A ', 'K ', 'Q ', 'J ', 'T ']
    // const neverGonnaWork = playerPlusCommunity.map(card => card.replace(reggie, ['J', 'T', 'Q', 'K', 'A']))
    // console.log('never ', neverGonnaWork);
    
    // const mightWork = playerPlusCommunity.map(card => {
    //   // const reggie = /11|10|11|12|13|1/g
    //   const solveObj = {
    //     11: card.replace(/11/g, 'J'),
    //     10: card.replace(/10/g, 'T'),
    //     12: card.replace(/12/g, 'Q'),
    //     13: card.replace(/13/g, 'K'),
    //     1: card.replace(/1/g, 'A'),
    //   }
    //   if(card === solveObj[Object.keys()]){
    //     return Object.values()
    //   }
      
    // })
    // console.log(mightWork);// Cannot convert undefined or null to object :)

    const playerSolve = playerPlusCommunity.map((card) => card.replace(/10/g, 'T').replace(/11/g, 'J').replace(/12/g, 'Q').replace(/13/g, 'K').replace(/1/g, 'A'));
    const dealerSolve = dealerPlusCommunity.map((card) => card.replace(/10/g, 'T').replace(/11/g, 'J').replace(/12/g, 'Q').replace(/13/g, 'K').replace(/1/g, 'A'));
    console.log('player +', playerSolve);
    console.log('dealer +', dealerSolve);

    const playerHandRank = window.Hand.solve(playerSolve);
    const dealerHandRank = window.Hand.solve(dealerSolve);
    console.log(playerHandRank);
    console.log(dealerHandRank);

    const winner = window.Hand.winners([playerHandRank, dealerHandRank]);
    console.log(winner);
  }

  prepDeck = () => {
    const cardOne = this.deck.cards.shift();
    const cardTwo = this.deck.cards.shift();
    const cardThree = this.deck.cards.shift();
    const cardFour = this.deck.cards.shift();

    this.setState({
      playerHand:[cardOne, cardThree],
      dealerHand:[cardTwo, cardFour],
      communityHand: ['deck', 'deck', 'deck', 'deck', 'deck'],
    })
  }

  bet = (amount) => {
    const newWager = this.state.wager + amount;
    const newBankroll = this.state.bankroll - amount;
    if(newBankroll >= 0) {
      this.setState({
        wager: newWager,
        bankroll: newBankroll,
      })
    } else {
      this.setState({
        msg: "You Don't Have Enough Money!"
      }, this.clearMsg)
    }
  }

  clearMsg = () =>{
    setTimeout(() => {
      this.setState({
        msg: "",
      })
    },2000)
  }

  check = () => {
    let communityNewHand = [...this.state.communityHand];
    // console.log(communityNewHand);
    if(communityNewHand[0] === 'deck'){
      communityNewHand = [
        this.deck.cards.shift(),
        this.deck.cards.shift(),
        this.deck.cards.shift()
      ]
    } else {
      communityNewHand.push(this.deck.cards.shift())
    }
    if(communityNewHand.length === 5) {
      this.checkHandRank();
    }
    this.setState({
      communityHand: communityNewHand,
    })
  }

  render() {
    return (
      <div className="the-table col-sm-12">
        <h1>Poker Time!</h1>
        <div className="col-sm-12 text-center the-numbers">
          <div className="col-sm-3 col-sm-offset-3">
            Current Pot: ${this.state.wager}
          </div>
          <div className="col-sm-3">
            Bankroll: ${this.state.bankroll}
          </div>
        </div>
        <div className="player-message">
          {this.state.msg}
        </div>
        <PokerHand cards={ this.state.playerHand } />
        <PokerHand cards={ this.state.communityHand }/>
        <PokerHand cards={ this.state.dealerHand }/>
        <div className="col-sm-12 buttons">
          <button onClick={this.prepDeck} className="btn btn-primary">Deal</button>
          <button onClick={()=>{this.bet(5)}} className="btn btn-success">Bet 5</button>
          <button onClick={this.check} className="btn btn-warning">Check</button>
          <button onClick={this.prepDeck} className="btn btn-danger">Fold</button>
        </div>
      </div>
    )
  }
}
