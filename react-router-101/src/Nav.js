import React from 'react'
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className="nav">
      <Link to='/'>Home Page</Link>
      <Link to='/about'>About Page</Link>
      <Link to='/superhero'>Super Hero Page</Link>
    </div>
  )
}
