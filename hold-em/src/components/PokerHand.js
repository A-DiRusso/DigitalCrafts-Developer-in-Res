import React from 'react'
import Card from './Card';

//My job is to show a hand of cards
export default function PokerHand({ cards }) {
  let hand = cards.map((card, i) => {
    return(
      <Card key={i} card={card} />
    )
  })
  return (
    <div className="poker-hand col-sm-12">
      <p>Poker Hand</p>
      {hand}
    </div>
  )
}

