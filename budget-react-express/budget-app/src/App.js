import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Components/Home';
import Setup from './Components/Setup';
import NavBar from './Components/NavBar';
import Expenses from './Components/Expenses';
import Income from './Components/Income';



export default class App extends React.Component{
  state = {
    name: '',
    dudeInfo: [],
  }

  setDudeInfo = (dudeInfo => this.setState({dudeInfo}));
  changeName = (e => this.setState({name: e.target.value}));
  

  render(){
    return(
      <Router>
        <div className='container'>
          <div className='row'>
            <Route 
            path='/'
            component={NavBar}
            />
            <Route 
            exact 
            path='/'
            render={() => {
              return <Home 
                changeName={this.changeName}
                name={this.state.name}
                setDudeInfo={this.setDudeInfo}
                dudeInfo={this.state.dudeInfo}
              />
            }}
            />
            <Route 
            exact 
            path='/setup'
            render={() => {
              return <Setup
                changeName={this.changeName}
                name={this.state.name}
              />
            }}
            />
            <Route
              exact
              path='/add-expense'
              render={() => {
                return <Expenses 
                  dudeInfo={this.state.dudeInfo}
                />
              }}
            />
            <Route
              exact
              path='/add-income'
              render={() => {
                return <Income 
                  dudeInfo={this.state.dudeInfo}
                />
              }}
            />
          </div>
        </div>
      </Router>
    )
  }
}
