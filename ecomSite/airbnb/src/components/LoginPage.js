import React from 'react'
import Login from './NavBar/Login';
import './NavBar/NavBar.css';

export default function LoginPage(props) {
  
  const loginStyles = {
    "display": "block", 
    "border": "black"
  }
  const pushUrl = localStorage.getItem('preLoginPage') 
                  ? 
                  localStorage.getItem('preLoginPage') 
                  : 
                  '/';
  return (
    <div className="login-modal" style={loginStyles}>
        <h1>Login Page</h1>
        <Login closeModal={() =>{props.history.push(pushUrl)}} />
    </div>
  )
}
