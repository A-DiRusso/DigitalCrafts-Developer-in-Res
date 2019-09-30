import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
} from 'react-router-dom';
import Home from './Home';
import About from './About';
import SuperHero from './SuperHero';
import Nav from './Nav';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      
    }
  }
  render() {
    
    return(
      <Router>
        <Route path='/' component={Nav} />
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/superhero' render={() => <SuperHero heroName="Robin" />}/>
      </Router>
    )
  }
}


export default App;
