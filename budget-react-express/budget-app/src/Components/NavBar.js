import React from 'react'
import { Link } from 'react-router-dom';


export default function NavBar() {
  return (
    <div>
      <ul className="nav">
        <li className="nav-item">
          <Link 
            to="/" 
            className="nav-link active">
              Home
          </Link>
        </li>
        <li className="nav-item">
          <Link 
            to="/add-income" 
            className="nav-link">
              Add Income
          </Link>
        </li>
        <li className="nav-item">
          <Link 
            to="/add-expense" 
            className="nav-link">
              Add Expense
          </Link>
        </li>
        <li className="nav-item">
          <Link 
            to="/setup" 
            className="nav-link">
              Start - Set Up your Account
          </Link>
        </li>
      </ul>
    </div>
  )
}
