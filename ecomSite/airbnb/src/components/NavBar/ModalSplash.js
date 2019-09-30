import React from 'react'
import { Link } from 'react-router-dom';

export default function ModalSplash({ changeModalContent }) {
  return (
    <div>
    <button 
      className="facebook-login"
    >
      Connect With Facebook
    </button>
    <button 
      className="google-login"
    >
      Connect with Google
    </button>
    <span>or</span>
    <button
      onClick={() => changeModalContent('signup')} 
      className="center email-login"
    >
      Sign up with email
    </button>
    <div className="border-rule"></div>
    <div
      onClick={() => changeModalContent('login')} 
      className="login-text align-left"
    >
      Already have an Airbnb account? 
      <Link to="">Log in</Link>
    </div>
  </div>
  )
}
