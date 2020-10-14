import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const renderMovies = () => {
    return movies.map(el => 
    <div>
      <h3>Name: {el.title}</h3>
      <p>Time: {el.time}</p>
      <p>Genres:</p>
      <ul>
        {el.genres.map(genre => <li>{genre}</li>)}
      </ul>
    </div>)
  }

  return (
    <div>
        <h1>Movies Page</h1>
        {renderMovies()}
    </div>
  );
};

export default Movies;
