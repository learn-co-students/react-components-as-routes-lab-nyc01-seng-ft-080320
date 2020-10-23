import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, id) => (
        <div key={id}>
          <h3>{director.name}</h3>
          <span>Movies:
            <ul>  
              {director.movies.map((movie, id) => (
                <li key={id}>{movie}</li>
              ))}
            </ul>
          </span>
        </div>
      ))}
    </div>
  );
}

export default Directors
