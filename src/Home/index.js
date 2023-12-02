import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
	const subjects = [
		{id: 1, chapter: 'Satavahana', code: 'satavahana'},
		{id: 2, chapter: 'Vengi', code: 'vengi'},
		{id: 2, chapter: 'Vishnukundins', code: 'vishnukundins'},
		// Add more subjects here
	];

	return (
		<div>
			<h1>Quiz App</h1>
			<h2>Subjects</h2>
			<ul>
				{subjects.map(subject => (
					<li key={subject.id}>
						<Link to={`/${subject.code}`}>{subject.chapter}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Home;
