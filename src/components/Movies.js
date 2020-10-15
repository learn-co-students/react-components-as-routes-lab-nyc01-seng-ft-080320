import React from 'react';
import { movies } from '../data';

const Movies = () => {
    return (
        <div>
            <h1>Movies Page</h1>
            {movies.map((movie,indx) => {
                return (
                    <div key={indx}>
                        <h3>Name: {movie.title}</h3>
                        <p>Time: {movie.time}</p>
                        <p>Genres:</p> 
                        <ul>{movie.genres.map((genre, i) => <li key={i}>{genre}</li>)}</ul>
                    </div>
                )
            })}
        </div>
    );
};

export default Movies;
