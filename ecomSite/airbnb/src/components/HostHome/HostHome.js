import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HostHome.css';
import axios from 'axios';
// import { bindActionCreators } from 'redux';


class HostHome extends Component{
  constructor(props){
    super(props);
    this.state = {
      title: '',
      location: '',
      price: 0,
      amenities: '',
      details: '',
      guests: 0,
      image: '',
    }
  }

    componentDidMount(){
      if(!this.props.auth.token){
        localStorage.setItem('preLoginPage', this.props.location.pathname);// = '/host/homes';
        this.props.history.push('/login');
      }
      const elems = document.querySelectorAll('select');
      const instances = window.M.FormSelect.init(elems);
      console.log('ignore this', instances);
    }
    
    changeTitle = ({ target: { value : title}}) => this.setState({ title });
    changeLocation = ({ target: { value : location }}) => this.setState({ location });
    changePrice = ({ target: { value : price }}) => this.setState({ price });
    changeAmenities = ({ target: { value: amenities}}) => this.setState({ amenities });
    changeDetails = ({ target: { value: details }}) => this.setState({ details })
    changeGuests = ({ target: { value: guests }}) => this.setState({ guests })
    changeImage = ({ target: { value: image }}) => this.setState({ image })
    
    submitHome = async (e) => {
      e.preventDefault();
      const file = document.getElementById('location-image').files[0];
      const headerConfig = {
        headers: {
          'content-type': 'multipart/form-data',
        }
      }
      const data = new FormData();// creates a form with the type multipart/form-data
      data.append('locationImage', file)
      for(let key in this.state){
        data.append(key, this.state[key]);
      }
      // console.dir(file);
      // let data =  {...this.state};
      data.append('token', this.props.auth.token);
      console.log('HostHome data for axios', data);
      const url = `${window.apiHost}/host/homes`;
      const axiosREsponse =  await axios.post(url, data, headerConfig);
      console.log(axiosREsponse);
    }

    render(){
        return(
            <div className="row host-home">
                <form 
                  onSubmit={this.submitHome} 
                  className="col s8 offset-s2"
                >
                    <div className="row">
                        <div className="input-field col s6">
                            <input 
                              id="title" 
                              type="text" 
                              className="validate"
                              onChange={this.changeTitle}
                              value={this.state.title} 
                            />
                            <label htmlFor="title">Title</label>
                        </div>
                        <div className="input-field col s6">
                            <input 
                              id="location" 
                              type="text" 
                              className="validate"
                              onChange={this.changeLocation} 
                              value={this.state.location}
                            />
                            <label htmlFor="location">Location</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <select 
                              onChange={this.changeGuests}
                              value={this.state.guests}
                            >
                            <option value="">Choose your option</option>
                            <option value="1">1 Guest</option>
                            <option value="2">2 Guest</option>
                            <option value="3">3 Guests</option>
                            <option value="4">4 Guests</option>
                            <option value="5">5 Guests</option>
                            <option value="6">6 Guests</option>
                            <option value="7">7 Guests</option>
                            <option value="8">8 Guests</option>
                            <option value="9">9 Guests</option>
                            </select>
                            <label># of guests</label>
                        </div>                    
                        <div className="input-field col s6">
                        <input 
                          id="price" 
                          type="number" 
                          className="validate" 
                          onChange={this.changePrice}
                          value={this.state.price}
                        />
                        <label htmlFor="price">Price/night</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <textarea 
                          id="details" 
                          className="materialize-textarea"
                          onChange={this.changeDetails}
                          value={this.state.details}
                        ></textarea>
                        <label htmlFor="details">Details (be descriptive!)</label>
                    </div>
              </div>
              <div className="row">
                    <div className="col s6"> 
                        <input 
                          type="file"
                          id="location-image"
                          onChange={this.changeImage}  
                        />Upload image
                    </div>
                    <div className="input-field col s6">
                        <input 
                          id="amenities" 
                          type="text" 
                          className="validate" 
                          onChange={this.changeAmenities}
                          value={this.state.amenities}
                        />
                        <label htmlFor="amenities">Amenities</label>
                    </div>
                </div>
                <button>Send Home</button>
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

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({

//   }, dispatch)
// }

export default connect(mapStateToProps)(HostHome);