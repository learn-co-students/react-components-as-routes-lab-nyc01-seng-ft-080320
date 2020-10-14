import React from 'react';
import { actors } from '../data';

const Actors = () => {
	const renderActors = () => {
		return actors.map((actor) => {
			const movies = () => {
				return actor.movies.map((movie) => <li>{movie}</li>);
			};
			return (
				<div>
					<h3>Name: {actor.name}</h3>
					<h2>Movies:</h2>
					<ul>{movies()}</ul>
				</div>
			);
		});
	};
	return (
		<div>
			<h1>Actors Page</h1>
			{renderActors()}
		</div>
	);
};

export default Actors;
