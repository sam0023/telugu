import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
	const subjects = [
		{id: 1, chapter: 'Sathavahana', code: 'sathavahana'},
		{id: 2, chapter: 'Vengi', code: 'vengi'},
		{id: 3, chapter: 'Vishnukundins', code: 'vishnukundins'},
		{id: 4, chapter: 'Kakatiyas', code: 'kakatiyas'},
		{id: 5, chapter: 'Vijayanagara', code: 'vijayanagara'},
		{id: 6, chapter: 'LiteratureInMedivalData', code: 'LiteratureInMedivalData'},
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
