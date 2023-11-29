import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import chess from '../chess.mp3';
import VengiTopicData from '../Chapters/Vengi/VengiTopicData';
import './index.css';

const subjects = {
	vengi: VengiTopicData,
};

const questionsList = (subjectId, subtopicId) => {
	// Find the matching subtopic based on subjectId and subtopicId:

	const subject = subjects[subjectId];

	const topic = subject.find(t => t.topicId === subtopicId);
	return topic ? topic.questions : [];
};

const CommonQuiz = () => {
	const {subjectId, subtopicId} = useParams();

	const questions = questionsList(subjectId, subtopicId);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [showAnswer, setShowAnswer] = useState(false);
	const [questionNo, setQuestionNo] = useState(1);
	const [isDarkMode, setDarkMode] = useState(false);
	const audioRef = React.createRef();

	// UseEffect to apply theme on initial render
	useEffect(() => {
		applyTheme();
	}, [isDarkMode]);

	const applyTheme = () => {
		const {body} = document;
		body.classList.toggle('dark-mode', isDarkMode);
	};

	const toggleDarkMode = () => {
		setDarkMode(!isDarkMode);
	};

	// Function to get a random question
	function getRandomQuestion() {
		audioRef.current.play();
		setQuestionNo(questionNo + 1);
		const randomIndex = Math.floor(Math.random() * questions.length);
		setCurrentQuestionIndex(randomIndex);
		setShowAnswer(false);
	}

	// Function to show the answer for the current question
	function showAnswerForCurrentQuestion() {
		audioRef.current.play();
		setShowAnswer(true);
	}

	// Function to move to the next random question
	function moveToNextQuestion() {
		getRandomQuestion();
	}

	// Ensure that there are questions available
	if (questions.length === 0) {
		return <div>No questions available.</div>;
	}

	return (
		<div className='quizcontainer'>
			<h2>Quiz-Total question:{questions.length}</h2>
			<button onClick={toggleDarkMode}>
				{isDarkMode ? 'Light Mode' : 'Dark Mode'}
			</button>
			<p>Question {questionNo}</p>
			<p>{questions[currentQuestionIndex].questionText}</p>

			<button onClick={showAnswerForCurrentQuestion}>Show Answer</button>
			<button onClick={moveToNextQuestion}>Next Question</button>

			{showAnswer && (
				<div>
					<h3>Answer:</h3>
					{questions[currentQuestionIndex].ans.map((answer, index) => (
						<p key={index}>{answer}</p>
					))}
				</div>
			)}

			<audio ref={audioRef}>
				<source src={chess} type='audio/mpeg' />
			</audio>
		</div>
	);
};

export default CommonQuiz;
