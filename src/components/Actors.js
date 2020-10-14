import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const mapActors = () => {
    return actors.map(actor => {
      return (
        <div>
          <p>{actor.name}</p>
          <ul>
            {mapMovies(actor.movies)}
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
      <h1>Actors Page</h1>
      {mapActors()}
    </div>
  );
};

export default Actors;
