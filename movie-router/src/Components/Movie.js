import React from 'react'
import { Link } from 'react-router-dom';

export default function Movie(props) {
  return (
    <div className='col s4'>
      <Link to={`/movie/${props.movie.id}`}>
        <img alt="movie poster" src={`http://image.tmdb.org/t/p/w300${props.movie.poster_path}`} />
      </Link>
    </div>
  )
}
