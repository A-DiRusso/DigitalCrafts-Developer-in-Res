import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component{
  state = {
    submitName: false,
  }
  async componentDidMount(){
  }

  getDude = async () => {
    const getDudesUrl = `${window.apiUrl}/get-dudes`;
    const dudeInfo = await axios.post(getDudesUrl, {name: this.props.name}
    // const {data: { dudeInfo }} = await axios.post(getDudesUrl, {name: this.props.name} - maybe try this....
    );
    console.log(dudeInfo);
    this.props.setDudeInfo(dudeInfo.data);
  }

  submitNameHandler = (e) => {
    e.preventDefault();
    this.setState({
      submitName: true
    },this.getDude)
  }

  render(){
    console.log(this.props.dudeInfo);
    if(!this.state.submitName){
      const form =
        <form onSubmit={this.submitNameHandler}>
            <div className="form-group">
                <label htmlFor="name">What is your name?</label>
                <input 
                  type="text" 
                  value={this.props.name} 
                  onChange={this.props.changeName} 
                  className="form-control" 
                  id="name" 
                />
            </div>
            <button 
              type="submit" 
              className="btn btn-primary">
                Submit
            </button>

        </form>
        return(
          <div className='col col-sm-12'>
            <div>{form}</div>
          </div>
        )
    }
    return(
      <div className="col col-sm-12">
          <div className="total-budget">Total Budget: ${this.props.dudeInfo[0].budget}</div>
          <div className="total-spent">Total Spent: $1000</div>
      </div>
    )
  }
}

export default Home;