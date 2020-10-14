import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const renderActors = () => {
    return actors.map(el => 
    <div>
      <h3>Name: {el.name}</h3>
      <p>Movies:</p>
      <ul>
      {el.movies.map(movie => <li>{movie}</li>)}
      </ul>
    </div>)
  }

  return (
    <div>
      <h1>Actors Page</h1>
        {renderActors()}
    </div>
  );
};

export default Actors;
