import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const renderDirectors = () => {
    return directors.map(el => 
    <div>
      <h3>{el.name}</h3>
      <p>Movies:</p>
      <ul>
        {el.movies.map(movie => <li>{movie}</li>)}
      </ul>
    </div>)
  }

  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors()}
    </div>
  );
}

export default Directors
