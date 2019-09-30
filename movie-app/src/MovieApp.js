import React, { Component } from 'react';
import Movie from './Movie';
import Axios from 'axios';

export default class MovieApp extends Component {
  constructor(){
    super();
    console.log('Constructor Ran');
    this.state = { movieData: [], }
  }

  componentDidMount() {
    const url = "https://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5";
    console.log('Component Mounted');
    fetch(url).then((response) => {
      return response.json();
    }).then((movieJSON) => {
      console.log(movieJSON);
      this.setState({
        movieData: movieJSON.results,
      })
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('user submitted form')
    const movieTitle = document.querySelector('#search-term').value;
    console.log(movieTitle);
    const searchUrl = `http://api.themoviedb.org/3/search/movie?query=${movieTitle}&api_key=fec8b5ab27b292a68294261bb21b04a5`;
    const movieData = Axios.get(searchUrl)
    movieData.then((resp) => {
      console.log(resp.data)
      this.setState({
        movieData: resp.data.results,
      })
    })
  };

  render() {
    console.log('Component Rendered');
    console.log(this.state.movieData);

    const movies = this.state.movieData.map((movie, i) => {
      return (
        <Movie movie={movie} key={i} />
      )
    });

    return (
      <div className="col s2 center">
        <div className='row'>
          <form onSubmit={this.handleSubmit}>
            <input id='search-term' type='text' placeholder='Enter a movie tile'></input>
            <input type='submit' className='btn' value="Search!"></input>
          </form>
        </div>
        <div className='row'>
          {movies}
        </div>
      </div>
    )
  }
}

/*
//<div className='container'>
//<div className='row'>
// </div>
// </div>

*/


