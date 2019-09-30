import React, { Component } from 'react'
const axios = require('axios');


export default class Atlanta extends Component {
  constructor(props) {
    super(props);
    this.state={
      icon: null,
      temp: null,
      temp_min: null,
      temp_max: null,
      desc: null,
    }
  }

  componentDidMount() {
    const url = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=30305,us&appid=482c145ce8edf1d69ea5168f9d06460c';
    axios.get(url)
      .then((response) => {
        console.log(response.data);
        const { icon, description } = response.data.weather[0];
        const { temp, temp_min, temp_max } = response.data.main;
        this.setState({
          temp,
          temp_max,
          temp_min,
          icon: `http://openweathermap.org/img/w/${icon}.png`,
          desc: description,
        })
      })
  }
  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <img src={this.state.icon} alt='weather icon'/>
        <p>{this.state.desc}</p>
        <h1>Current Temp: {this.state.temp}</h1>
        <h1>Today's Low: {this.state.temp_min}</h1>
        <h1>Today's High: {this.state.temp_max}</h1>
        
      </div>
    )
  }
}
