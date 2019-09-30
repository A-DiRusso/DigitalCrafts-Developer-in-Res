import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import signUpAction from '../../actions/signUpAction';

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      first: '',
      last: '',
      password: '',
      msg: '',
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    if((this.props.auth.msg === 'Email Already In Use') && (prevProps.auth.msg !== 'Email Already In Use')){
      this.setState({
        msg: "This user already exists please log in or create a new account."
      })
    } else if((this.props.auth.msg === 'Successfully Added A User') && (prevProps.auth.msg !== 'Successfully Added A User')) {
      this.props.closeModal();
    }
  }
  changeEmail = ({ target : { value : email }}) => this.setState({ email });
  changeFirst = ({ target : { value : first }}) => this.setState({ first });
  changeLast = ({ target : { value : last }}) => this.setState({ last });
  changePass = ({ target : { value: password }}) => this.setState({ password });
  submitSignUp = (e) => {
    // let formValid = true;
    // let msg = '';
    // for(let key in this.state){
    //   if((this.state[key].length < 1) && (key !== 'msg')) {
    //     //this is how you might protect the input fields 
    //     formValid = false;
    //     msg = `${key} field is required`;
    //     break;
    //   }
    // }
    // if(this.state.password.toLowerCase() === this.state.password) {
    //   // user doesn't have any uppercase characters 
    //   formValid = false;
    //   msg = "Your password must contain at least one upper case letter."
    // } else if(!(/\d/g.test(this.state.password))) {
    //   formValid = false;
    //   msg = 'Your password must contain at least one number.'
    // }
    // if(formValid){
      e.preventDefault();
      const userData = {...this.state}
      this.props.signUpAction(userData);
    // } else {
    //   this.setState({
    //     msg
    //   })
    // }
  }

  render() {
    return (
        <div className="register-form">
          <p className="form-msg red-text">{this.state.msg}</p>
        <form 
          onSubmit={this.submitSignUp}
        >
          <input
            required 
            onChange={this.changeEmail}
            className="email-signup" 
            placeholder="Email address" 
          />
          <input
            required 
            onChange={this.changeFirst}
            className="first-signup" 
            placeholder="First name" 
          />
          <input
            required 
            onChange={this.changeLast}
            className="last-signup" 
            placeholder="Last name" 
          />
          <input
            required  
            onChange={this.changePass}
            type="password" 
            className="password-signup" 
            placeholder="Password" 
          />
          <button className="sign-up-button">Sign up</button>
          <div className="border-rule"></div>
          <div className="login-text align-left">
            Already have an Airbnb account? 
            <span 
            onClick={() => this.props.changeModalContent('login')} 
            to="">
              Log In
            </span>
          </div>
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
    signUpAction
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
