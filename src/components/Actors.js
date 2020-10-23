import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
        {actors.map((actor, id) => (
        <div key={id}>
          <h3>{actor.name}</h3>
          <span>
            <ul>
              {actor.movies.map((movie, id) => (
                <li key={id}>{movie}</li>
              ))}
            </ul>
          </span>
        </div>
         ))}
    </div>
  );
};

export default Actors;
