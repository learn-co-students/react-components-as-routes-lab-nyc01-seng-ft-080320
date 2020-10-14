import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const mapDirectors = () => {
    return directors.map(director => {
      return (
        <div>
          <p>{director.name}</p>
          <ul>
            {mapMovies(director.movies)}
          </ul>
        </div>
      )
    })
  }

  const mapMovies = movies => {
    return movies.map(movie => {
      return <li>{movie}</li>
    })
  }

  return (
    <div>
      <h1>Directors Page</h1>
      {mapDirectors()}
    </div>
  );
}

export default Directors
