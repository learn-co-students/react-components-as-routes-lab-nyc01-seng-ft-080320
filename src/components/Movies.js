import React from 'react';
import { movies } from '../data';

const Movies = () => {


  return (
    <div>
      {movies.map((m) =>
        <div>
          <div> Title: {m.title}</div>
          <div> Time: {m.time}</div>
          <div>Genres:</div>
          <ul>
            {m.genres.map(g=><li>{g}</li>)}
          </ul>
        </div> 
        )}
    </div>
  );
};

export default Movies;
