import React from 'react'

export default function Home(props) {
  const atlImages = props.images.map((img, i) => <img src={img} key={i} alt="Atlanta" />)
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>A page about Atlanta</h1>
      {atlImages}
    </div>
  )
}
