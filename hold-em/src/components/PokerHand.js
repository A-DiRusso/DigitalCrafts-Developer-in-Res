import React from 'react'
import Card from './Card';

//My job is to show a hand of cards
export default function PokerHand({ cards }) {
  console.log(cards);
  let hand = cards.map((card, i) => {
    return(
      <Card key={i} card={card} />
    )
  })
  return (
    <div className="poker-hand col-sm-12">
      <h1>Poker Hand</h1>
      {hand}
    </div>
  )
}

