import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import BootstrapNavBar from './Components/BootstrapNavBar';
import Home from './Components/Home'
import One from './Components/One';
import Two from './Components/Two';
import Three from './Components/Three';
import Four from './Components/Four';
import Atlanta from './Components/Atlanta';

const atlImages = [
  'http://i.huffpost.com/gen/1716876/images/o-ATLANTA-TRAFFIC-facebook.jpg',
  'http://2.bp.blogspot.com/--XZFLg6LSq8/U4YV65sb2MI/AAAAAAAAO8A/cFl-Em5Zb0A/s1600/Sawfish_Atlanta_Aquarium.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/a/a3/Piedmont-park-urban-park.jpg'
]

export default class App extends Component{
  render() {
    console.log(atlImages);
    return (
      <Router>
        <Route
          path='/'
          component={BootstrapNavBar}
        />
        <Route 
          path='/' exact
          render={() => <Home images={atlImages} />}
        />
        <Route
          path='/one'
          component={One}
        />
        <Route
          path='/two'
          component={Two}
        />
        <Route  
          path='/three'
          component={Three}
        />
        <Route
          path='/four'
          component={Four}
        />
        <Route
          path='/atlanta'
          component={Atlanta}
        />
      </Router>
    )
  }
}