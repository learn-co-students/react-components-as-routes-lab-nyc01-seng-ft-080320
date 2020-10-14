import React from 'react';
import { movies } from '../data';

const Movies = () => {
  function everyMovie(){
  return    movies.map(movie=> {
      return(<div>
        <p>Title: {movie.title}</p>
        <p>Time: {movie.time}</p>
        
          Genres
          <ul>
          {movie.genres.map(genre => <li>{genre}</li>)}
          </ul>
        
      </div>)
    })
  }
  return (
    <div>
      <h1>Movies Page</h1>
        {everyMovie()}
    </div>
  );
};

export default Movies;
