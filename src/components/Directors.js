import React from 'react';
import { directors } from '../data';

const Directors = () => {

  function renderDirectors() {
    return directors.map((dir, i) => {
      return (
        <div key={i}>
          <h3>Name: {dir.name}</h3>
          Movies:
          <ul>
            {dir.movies.map((movie, index) => <li key={index}>{movie}</li>)}
          </ul>
        </div>
      )
    })
  }

  return (
    <div>
      <h1>Directors Page</h1> 
      {renderDirectors()}   
    </div>
  );
}

export default Directors