import React from 'react';
import { movies } from '../data';

const Movies = (props) => {

    
  return (
    <div>
      <h1>Movies Page</h1>
        {movies.map((movie, id) => (
          <div key={id}> 
            <h3>Title: {movie.title}</h3>
            <p>Time: {movie.time}</p>
            <span>Genres:
              <ul>
                {movie.genres.map((genre, id) => (
                  <li key={id}>{genre}</li>
                ))}
              </ul>
            </span>
            <br></br>
          </div>
        ))}
      </div>
  );
};

export default Movies;
