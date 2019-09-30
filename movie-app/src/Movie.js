import React from 'react'

export default function Movie(props) {
  const { poster_path, id, title } = props.movie;
  const imagePath = `http://image.tmdb.org/t/p/w300${poster_path}`;        
  const moviePath = `http://www.themoviedb.org/movie/${id}`;
  return (
    <div>
      <div className="container">
        <a href={moviePath}>
          <img src={imagePath} alt={title}/>
        </a>
        <div>
          {title}
        </div>
      </div>
    </div>
  )
}
