import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Components/Home';
import SingleMovie from './Components/SingleMovie';
import NavBar from './Components/NavBar';
import Search from './Components/Search';


export default class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <div className='row'>
            <Route
              path='/'
              component={NavBar}
            />
            <Route
              path='/' exact
              component={Home}
            />
            <Route
              path='/movie/:movieId'
              component={SingleMovie}
            />
            <Route
              path='/search/:searchTerm'
              component={Search}
            />
          </div>
        </div>
      </Router>
    )
  }
}

