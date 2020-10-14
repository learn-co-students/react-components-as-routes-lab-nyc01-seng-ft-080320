import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const directorMe = () => {
    return directors.map(director => {
      return(
        <div>
          {director.name}
          <ul>
            {director.movies.map(movie => <li>{movie}</li>)}
          </ul>
        </div>
      )

    })
  }
  return (
    <div>
      <h1>Directors Page</h1>
      {directorMe()}
    </div>
  );
}

export default Directors
