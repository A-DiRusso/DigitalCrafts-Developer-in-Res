import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import DairyDept from './components/Dairy';
import FrozenDept from './components/FrozenDept';
import Home from './components/Main';
import NavBar from './components/NavBar';
import MeatDept from './components/MeatDept';


export default function App() {
  return (
    <Router>
      <h1>  
          Welcome to Publix Inventory System 
        <span 
          role="img" 
          aria-label="Nerd Smile">
            🤓
        </span>
      </h1>
      <Route
        path='/'
        component={NavBar}
      />
      <Route
        exact
        path='/'
        component={Home}
      />
      <Route
        exact
        path='/meat'
        component={MeatDept}
      />
      <Route
        exact
        path='/dairy'
        component={DairyDept}
      />
      <Route
        exact
        path='/frozen'
        component={FrozenDept}
      />
    </Router>
  )
}

