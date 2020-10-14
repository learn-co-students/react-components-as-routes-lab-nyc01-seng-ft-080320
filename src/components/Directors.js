import React from 'react';
import { directors } from '../data';

const Directors = () => {
	const renderDirectors = () => {
		return directors.map((director) => {
			const movies = () => {
				return director.movies.map((movie) => {
					return <li>{movie}</li>;
				});
			};
			return (
				<div>
					<h3>Name: {director.name}</h3>
					<ul>{movies()}</ul>
				</div>
			);
		});
	};
	return (
		<div>
			<h1>Directors Page</h1>
			{renderDirectors()}
		</div>
	);
};

export default Directors;
