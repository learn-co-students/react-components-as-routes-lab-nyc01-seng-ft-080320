import React from 'react';
import { movies } from '../data';

const Movies = () => {
	const renderMovies = () => {
		return movies.map((movie) => {
			const genres = () => {
				return movie.genres.map((genre) => {
					return <li>{genre}</li>;
				});
			};
			return (
				<div key={movie.id}>
					<h3>Name: {movie.title}</h3>
					<h4>Time: {movie.time}</h4>
					<h4>Genres:</h4>
					<ul>{genres()}</ul>
				</div>
			);
		});
	};
	return (
		<div>
			<h1>Movies Page</h1>
            {renderMovies()}
			{/*{code here}*/}
		</div>
	);
};

export default Movies;
