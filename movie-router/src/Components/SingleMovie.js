import React from 'react';
import axios from 'axios';
import config from '../config';
import Spinner from './Spinner';

export default  class SingleMovie extends React.Component{
  constructor(){
    super();
    this.state = {
      movieData: {}
    }
  }

  async componentDidMount() {
    const movieId = this.props.match.params.movieId;
    console.log(movieId)
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${config.api_key}`;
    const resp = await axios.get(url)
    this.setState({
      movieData: resp.data
    })
  }

  render(){
    if(this.state.movieData.id === undefined){ //same as (!this.state.movieData.id)
      return(<Spinner />)
    }
    return (
      <div>
        <h1>{this.state.movieData.tagline}</h1>
        <h1>{this.state.movieData.overview}</h1>
      </div>
    )
  }
}
