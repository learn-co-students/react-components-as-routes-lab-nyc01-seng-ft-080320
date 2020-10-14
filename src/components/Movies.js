import React from 'react';
import { movies } from '../data';

const Movies = () => {
  function renderMovies() {
    return movies.map(movie => {
      return (
        <div>
          <h2>Title: {movie.title}</h2>
          <h4>Time: {movie.time}</h4>
          Genres:
          <ul>
            {movie.genres.map(genre => <li>{genre}</li>)}
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
