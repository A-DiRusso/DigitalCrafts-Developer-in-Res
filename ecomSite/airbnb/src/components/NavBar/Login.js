import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import logInAction from '../../actions/logInAction'

class Login extends Component {
  constructor(props){
    super(props);
    this.state = { email: '', password: '', msg: '', }
  }

  componentDidUpdate = (prevProps, prevState) => {
    let msg = ""
    if(this.props.auth.msg !== prevProps.auth.msg){
      if(this.props.auth.msg === 'Invalid Password') {
        msg = "We do not have a user with this password."
      } else if(this.props.auth.msg === 'No Email') {
        msg = "This email is not registered. Please enter a different email or register."
      } else if(this.props.auth.msg === 'Logged In') {
        this.props.closeModal();
      }
      this.setState({ msg });
    }
  }

  changeEmail = ({ target : { value: email }}) => this.setState({ email });
  changePass = ({ target: { value: password }}) => this.setState({ password });
  submitLogIn = (e) => {
    e.preventDefault();
    // validation for email and password would go here...
    const userData = {...this.state};
    this.props.logInAction(userData);
  }
  handleModalChange = () => this.props.changeModalContent('signup');

  render() {
    return (
      <div className="login-form">
        <p className="form-msg red-text">{this.state.msg}</p>
        <form
          onSubmit={this.submitLogIn}
        >
        <button className="facebook-login">Connect With Facebook</button>
        <button className="google-login">Connect with Google</button>
        <span>or</span>
        <input
          onChange={this.changeEmail} 
          className="email-signup" 
          placeholder="Email address" 
        />
        <input 
          onChange={this.changePass}
          type="password"
          className="password-signup" 
          placeholder="Password" 
        />
        <button className="sign-up-button">Log In</button>
        <div className="border-rule"></div>
        <div className="login-text align-left">Don't have an account? <span onClick={this.handleModalChange} to="">Sign Up</span ></div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    logInAction
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);