import React from 'react';
import {Link} from 'react-router-dom';

import {useParams} from 'react-router-dom';

// Const env = [
// 	{id: 1, topicId: 'np', topicName: 'National Parks'},

// ];

const Vishnukundins = [
	{id: 1, topicId: 'inscriptions', topicName: 'Inscriptions'},
	{id: 2, topicId: 'literature', topicName: 'Literarture'},
	{id: 3, topicId: 'society', topicName: 'Society'},
	{id: 4, topicId: 'terminology', topicName: 'Terminology'},
];

const vengi = [
	{id: 1, topicId: 'intro', topicName: 'Intro'},
	{id: 2, topicId: 'titles', topicName: 'Titles'},
	{id: 3, topicId: 'inscriptions', topicName: 'Inscriptions'},
	{id: 4, topicId: 'terminology', topicName: 'Terminology'},
	{id: 5, topicId: 'literature', topicName: 'Literature'},
];

const Kakatiyas = [
	{id: 1, topicId: 'terminology', topicName: 'Terminology'},
	{id: 2, topicId: 'literarysources', topicName: 'Literary Sources'},
	{id: 3, topicId: 'inscriptions', topicName: 'Inscriptions'},
	{id: 4, topicId: 'l&t', topicName: 'Lakes and Temples'},
];

const vijayanagara = [
	{id: 1, topicId: 'general', topicName: 'General'},
	{id: 2, topicId: 'terminology', topicName: 'Terminology'},

];

const subjects = [

	{
		id: 'vengi',
		data: vengi,
	},
	{
		id: 'vishnukundins',
		data: Vishnukundins,
	},
	{
		id: 'kakatiyas',
		data: Kakatiyas,
	},
	{
		id: 'vijayanagara',
		data: vijayanagara,
	},

];
const ChapterTopicList = () => {
	// Replace with your subtopic data

	const {subjectId} = useParams();

	const subtopicObject = subjects.find(subject => subject.id === subjectId);

	const subtopic = subtopicObject.data;
	// Get subjectId from route parameters

	// Filter subtopics based on the subjectId

	return (
		<div>
			<h2>Subtopics for Subject ID {subjectId}</h2>
			<ul>
				{subtopic.map(subtopic => (
					<li key={subtopic.id}>
						<Link to={`/${subjectId}/${subtopic.topicId}`}>
							{subtopic.topicName}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ChapterTopicList;
