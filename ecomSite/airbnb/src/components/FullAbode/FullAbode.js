import React, { Component } from 'react';
import './FullAbode.css';
import axios from 'axios';

class FullAbode extends Component{

  state = {
      abode: {},
      date1: "",
      date2: ""
  }

  //this is the public key from Stripe who will be proccessing all of our payments
  makePayment = () => {
    const pKey = `pk_test_1Mdr34DUKspxQHL2LIG5LWcX00cTkuCJ5X`;
		const amount = this.state.abode.price;
        var handler = window.StripeCheckout.configure({
            key: pKey,
            locale: 'auto',
            image: `${window.apiHost}${this.state.abode.images}`,
            token: (token) => {
            	console.log(token);
            	console.log(this.props.auth.token);
                var theData = {
                    amount: Math.floor(amount * 100),
                    stripeToken: token.id,
                    userToken: this.props.auth.token,
                }
                axios({
                    method: 'POST',
                    url: `${window.apiHost}/payment/stripe`,
                    data: theData
                }).then((response) => {
                    console.log(response.data);
                    if (response.data.msg === 'paymentSuccess') {
                    	this.props.history.push('/thankyou')
                    }else if(response.data.msg === 'badToken'){
						this.props.history.push('/login')
                    }else if(response.data.msg === 'paymentFailed'){
                    	this.setState({
              msg: `Payment was unsuccessful. 
                    Please email this to support: ${response.data.stripeError}`
						})
						console.lo(response.data.stripeError)

					}
                });
            }
        });
        handler.open({
            name: "Pay Now",
            description: 'AirBnB Payment',
            amount: amount * 100 //the total is in pennies
        })
  }
  async componentDidMount(){
      const abodeId = this.props.match.params.abodeId;
      const url = `${window.apiHost}/abode/${abodeId}`
      const axiosResponse = await axios.get(url);
      this.setState({
          abode: axiosResponse.data
      })
  }

  changeDate1 = (e)=>{this.setState({date1:e.target.value})}
  changeDate2 = (e)=>{this.setState({date2:e.target.value})}

  render(){
    const {amenities, details, guests, price, title, location, images} = this.state.abode;

    return(
      <div className="row fullAbode">
          <div className="col s12">
              <img 
                src={`${window.apiHost}${images}`} 
                alt="abodes" 
              />
          </div>
          <div className="col s6 offset-s2">
          <div className="col s8">
              <div className="location">{location}</div>
              <div className="title">{title}</div>
              <div className="price-per-day">{price}</div>
              <div className="guests">{guests}</div>
              <div className="details">{details}</div>
              <div className="amenties">{amenities}</div>
          </div>
          <div className="col s4">
              <input 
                onChange={this.changeDate1} 
                value={this.state.date1} 
                type="date" 
              />
              <input 
                onChange={this.changeDate2} 
                value={this.state.date2} 
                type="date" 
              />
              <button 
                onClick={this.makePayment}
                className="btn"
              >
                Reserve 1 night
              </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FullAbode