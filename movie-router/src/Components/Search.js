import React from 'react'

export default function Search(props) {
  console.log(props)
  return (
    <div>
      <h1>You searched for: {props.match.params.searchTerm}</h1>
    </div>
  )
}
