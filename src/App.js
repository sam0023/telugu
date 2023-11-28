import React from 'react';
import {Route, Routes} from 'react-router-dom'; // Import 'Switch' from 'react-router'

import CommonQuiz from './CommonQuiz';
import Home from './Home';
import SubtopicList from './SubtopicList';

// Const App = () => <Animalquiz />;
const App = () => (
	<Routes>
		<Route exact path='/:subjectId' element={<SubtopicList />} />

		<Route exact path='/:subjectId/:subtopicId' element={<CommonQuiz />} />
		<Route exac path='/' element={<Home />} />
	</Routes>
);
export default App;
