import React from 'react';
import { actors } from '../data';

const Actors = () => {

  function renderActors() {
    return actors.map((actor, i) => {
      return (
        <div key={i}>
          <h3>Name: {actor.name}</h3>
          Movies:
          <ul>
            {actor.movies.map((movie, index) => <li key={index}>{movie}</li>)}
          </ul>
        </div>
      )
    })
  }

  return (
    <div>
        <h1>Actors Page</h1>
        {renderActors()}
    </div>
  );
};

export default Actors;