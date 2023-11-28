import React from 'react';
import {Link} from 'react-router-dom';

import {useParams} from 'react-router-dom';

const env = [
	{id: 1, topicId: 'np', topicName: 'National Parks'},
	{id: 2, topicId: 'tr', topicName: 'Tiger Reserves'},
	{id: 3, topicId: 'species', topicName: 'Species'},
];
const polity = [
	{id: 1, topicId: 'fr', topicName: 'Fundamental Rights'},
	{id: 2, topicId: 'fd', topicName: 'Fundamental Duties'},
];

const apHis = [
	{id: 1, topicId: 'printing', topicName: 'Printing'},
	{id: 2, topicId: 'socialReforms', topicName: 'Social Reforms'},
	{id: 3, topicId: 'reformersTitles', topicName: 'Social Reformers Titles'},
	{id: 4, topicId: 'reformersBooks', topicName: 'Social Reformers Books'},
	{id: 5, topicId: 'kvlEra', topicName: 'Era of KVL'},
	{id: 6, topicId: 'laterKvl', topicName: 'Later Kvl'},
];

const geo = [
	{id: 1, topicId: 'lakes_dams_falls', topicName: 'Dams, Lakes, Waterfalls'},
];
const eco = [
	{id: 1, topicId: 'banking', topicName: 'Banking'},
	{id: 2, topicId: 'banking2', topicName: 'Banking: Part 2'},
	{id: 3, topicId: 'basel', topicName: 'Banking: Part 3'},
	{id: 4, topicId: 'monetarypolicy', topicName: 'Monetary Policy'},
];
const st = [
	{
		id: 1, topicId: 'energy', topicName: 'Energy',
	},
	{
		id: 2, topicId: 'ecogen', topicName: 'Economy General',
	},
];
const subjects = [
	{
		id: 'env',
		data: env,
	},
	{
		id: 'polity',
		data: polity,
	},
	{
		id: 'apHis',
		data: apHis,
	},
	{
		id: 'geo',
		data: geo,
	},
	{
		id: 'eco',
		data: eco,
	},
	{
		id: 'st',
		data: st,
	},
];
const SubtopicList = props => {
	// Replace with your subtopic data
	console.log(props);
	const {subjectId} = useParams();
	console.log('subjectId', subjectId);

	const subtopicObject = subjects.find(subject => subject.id === subjectId);
	console.log(subtopicObject);
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

export default SubtopicList;
