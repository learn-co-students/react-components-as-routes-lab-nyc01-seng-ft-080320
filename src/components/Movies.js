import React from 'react';
import { movies } from '../data';

const Movies = () => {

  function renderMovies() {
    return movies.map((movie, i) => {
      return(
        <div key={i}>
          <h3>Title: {movie.title}</h3>
          <p>Time: {movie.time}</p>
          Genres:
          <ul>
            {movie.genres.map((genre,index) => <li key={index}>{genre}</li>)}
          </ul>
        </div>
      )
    })
  }

  return (
    <div>
        <h1>Movies Page</h1>
        {renderMovies()}
    </div>
  );
};

export default Movies;
