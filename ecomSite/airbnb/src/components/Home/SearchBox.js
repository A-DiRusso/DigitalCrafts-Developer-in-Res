import React, { Component } from 'react'
import './SearchBox.css';


export default class SearchBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      where: "",
      checkIn: "",
      checkOut: "",
      guest: 0,
    };

  }

  handleWhere = ({ target : { value : where } }) => this.setState({ where })
  handleCheckIn = ({ target : { value : checkIn }}) => this.setState({ checkIn })
  handleCheckOut = ({ target: { value : checkOut }}) => this.setState({ checkOut })
  handleGuests = ({ target : { value : guest }}) => this.setState({ guest })

  render() {
    return (
      <div className="home-search-box col m4">
      <h1>Book unique places to stay and things to do.</h1>
      
      <div className="form">
          <div className="col m12">
              <div className="input-field" id="where">
                  <input 
                    onChange={this.handleWhere} 
                    placeholder="Anywhere" 
                    value={this.state.where} 
                    type="text" 
                    className="validate" 
                  />
                  <label htmlFor="where">Where</label>
              </div>
          </div>

          <div className="col m6">
              <div className="input-field" id="check-in">
                  <input 
                    onChange={this.handleCheckIn} 
                    placeholder="Check-In" 
                    value={this.state.checkIn} 
                    type="date" 
                    className="validate" 
                  />
                  <label htmlFor="check-in">Check-In</label>
              </div>
          </div>
          <div className="col m6">
              <div className="input-field" id="check-out">
                  <input 
                    onChange={this.handleCheckOut} 
                    placeholder="Check-Out" 
                    value={this.state.checkOut} 
                    type="date" 
                    className="validate" 
                  />
                  <label htmlFor="check-out">Check-Out</label>
              </div>
          </div>
          <div className="col m12">
              <div className="input-field" id="guests">
                  <input 
                    onChange={this.handleGuests} 
                    placeholder="Guests" 
                    value={this.state.guests} 
                    type="number" 
                    className="validate" 
                  />
                  <label htmlFor="guests">Guests</label>
              </div>
          </div>
          <div className="col m12 submit-btn">
              <div className="input-field" id="submit-btn">
                  <input className="btn-large waves-effect waves-light red accent-2" type="submit" />
              </div>
          </div>
      </div>


  </div>
    )
  }
}
