import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page </h1>
        {directors.map((d) => 
          <div>
            <div> {d.name} </div>
            <div> {d.movies} </div>
          </div>
          
        )}

    </div>
  );
}

export default Directors
