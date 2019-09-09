import React from 'react'

// My job is to show a crad
export default function Card({ card }) {
  const thisCard = `./cards/${card}.png`
  return (
    <div className="col-sm-2 card">
      <img src={thisCard} alt={card}/>
    </div>
  )
}
