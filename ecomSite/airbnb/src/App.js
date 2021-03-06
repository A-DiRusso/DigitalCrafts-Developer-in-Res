import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import HostHome from './components/HostHome/HostHome';
import LoginPage from './components/LoginPage';
import FullAbode from './components/FullAbode/FullAbode';


function App() {
  return (
    <Router>
      <div className="App">
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
          path='/login'
          component={LoginPage}
        />
        <Route
          exact
          path='/host/homes'
          component={HostHome}
        />
        <Route
          exact
          path='/abode/:abodeId'
          component={FullAbode}
        />
      </div>
    </Router>
  );
}

export default App;
