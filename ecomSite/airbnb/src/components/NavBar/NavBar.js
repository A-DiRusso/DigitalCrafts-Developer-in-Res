import React, { Component } from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom';
import ModalSplash from './ModalSplash';
import Login from './Login';
import Signup from './Signup';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import logoutAction from '../../actions/logoutAction';
import testThunkAction from '../../actions/thunkTest';

class NavBar extends Component {
  
  state = { 
    showModal: false,
    modalContent: <ModalSplash />
  };

  componentDidMount() {
    this.props.aThunk();
    this.setState({
      modalContent: <ModalSplash changeModalContent={this.changeModalContent} />
    })
  }

  changeModalContent = (newContent) => {
    let modalContent = <ModalSplash changeModalContent={this.changeModalContent} />
    if (newContent === 'login'){
        modalContent = <Login  changeModalContent={this.changeModalContent} />
    } else if(newContent === 'signup'){
      modalContent = <Signup changeModalContent={this.changeModalContent} />
    }
    this.setState({
      modalContent
    })
  }

  signUp = () => {
    document.querySelector('body').className = 'body-modal-show';
    this.setState({
       showModal: true,
       modalContent: <Signup changeModalContent={this.changeModalContent} closeModal={this.closeModal}/>
    })
  };

  logIn = () => {
    document.querySelector('body').className = 'body-modal-show';
    this.setState({
      showModal: true,
      modalContent: <Login changeModalContent={this.changeModalContent} closeModal={this.closeModal}/>
    })
  }
  
  closeModal = () => {
    document.querySelector('body').className = '';
    this.setState({ 
      showModal: false 
    })
  }

  buildNavLinks = () => {
    let navLinks = '';
    if(!this.props.auth.token) {

    navLinks = 
      <ul
        id="nav-mobile"
        className="right"
      >
        <li>
          <Link to="/host/homes">Host a Home</Link>
        </li>
        <li>
          <Link to="/host/experience">Host an Experience</Link>
        </li>
        <li>
          <Link to="/help">Help</Link>
        </li>
        <li
          className="nav-non-link"
          onClick={this.signUp} 
        >
          Sign up
        </li>
        <li 
          className="nav-non-link"
          onClick={this.logIn} 
        >
          Log In
        </li>
      </ul>
    } else {
      navLinks = 
      <ul
      id="nav-mobile"
      className="right"
    >
    <li>
      <Link to="/host/home">Host a Home</Link>
    </li>
    <li>
      <Link to="/saved">Saved</Link>
    </li>
    <li>
      <Link to="/trips">Trips</Link>
    </li>
    <li>
      <Link to="/host/experience">Welcome {this.props.auth.first}</Link>
    </li>  
    <li>
      <Link to='/' onClick={this.props.logout}>Logout</Link>
    </li>  
    </ul>
    }

    return navLinks;
    
  }
  
  render() {
    let navColor = "transparent";
    if(this.props.location.pathname !== '/'){
      navColor = "black"
    }
    const navLinks = this.buildNavLinks();
    return (
      <div className="container-fluid nav">
        <div className="row">
          <nav className={navColor}>
            <div className="nav-wrapper">
              <Link
                to='/'
                className="left"
              >
                AirBnb
              </Link>
              {navLinks}                            
            </div>
          </nav>
        </div>
        <div 
          className="login-modal" 
          style={this.state.showModal 
          ? 
          {"display": "block"} 
          : 
          {}} 
        >
          <button 
            id="close-modal" 
            onClick={this.closeModal}
          >
            &Chi;
          </button>
          <div className="modal-content">
            {this.state.modalContent}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {  
  return {
    auth: state.auth,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    logout: logoutAction,
    aThunk: testThunkAction,
  },dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);