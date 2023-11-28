import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
	const subjects = [
		{id: 1, name: 'Environment', code: 'env'},
		{id: 2, name: 'Polity', code: 'polity'},
		{id: 3, name: 'Ap history', code: 'apHis'},
		{id: 4, name: 'Geography', code: 'geo'},
		{id: 5, name: 'Economy', code: 'eco'},
		{id: 6, name: 'Science and Technology', code: 'st'},
		// Add more subjects here
	];

	return (
		<div>
			<h1>Quiz App</h1>
			<h2>Subjects</h2>
			<ul>
				{subjects.map(subject => (
					<li key={subject.id}>
						<Link to={`/${subject.code}`}>{subject.name}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Home;
