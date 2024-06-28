import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import chess from '../chess.mp3';
import VengiTopicData from '../Chapters/Vengi/VengiTopicData';
import VishnukundinsTopicData from '../Chapters/Vishnukundins/VishnukundinsTopicsData';
import KakatiyaTopicsData from '../Chapters/Kakatiyas/KakatiyaTopicsData';
import VijayanagaraTopicsData from '../Chapters/Vijayanagara/VijayanagaraTopicsData';
import LiteratureInMedivalData from '../Chapters/LiteratureInMedival/LiteratureInMedivalData';
import SathavahanaData from '../Chapters/Sathavahana/SathavahanaData';
import RevisionQuestionBox from '../RevisionQuestionBox';
import NationalMomentsTopics from '../Chapters/NationalMovements/NationalMovementsTopics';
import './index.css';

const subjects = {
	vengi: VengiTopicData,
	vishnukundins: VishnukundinsTopicData,
	kakatiyas: KakatiyaTopicsData,
	vijayanagara: VijayanagaraTopicsData,
	LiteratureInMedivalData,
	sathavahana: SathavahanaData,
	nationalMovement: NationalMomentsTopics,
};
const questionsList = (subjectId, subtopicId) => {
	// Find the matching subtopic based on subjectId and subtopicId:

	const subject = subjects[subjectId];
	// Console.log(subjectId);
	// console.log(subject);
	// console.log(subtopicId);
	const topic = subject.find(t => t.topicId === subtopicId);
	return topic ? topic.questions : [];
};

const CommonQuiz = () => {
	const {subjectId, subtopicId} = useParams();

	const questions = questionsList(subjectId, subtopicId);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [showAnswer, setShowAnswer] = useState(false);
	const [questionNo, setQuestionNo] = useState(1);
	// Const [isDarkMode, setDarkMode] = useState(false);
	const [isRandomPage, setRandomPage] = useState(true);
	// Const [showAnswerForRevisonButton, setShowAnswerForRevisonButton] = useState(false);
	const audioRef = React.createRef();

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
		if (showAnswer) {
			moveToNextQuestion();
		} else {
			setShowAnswer(true);
		}
	}

	// Function to move to the next random question
	function moveToNextQuestion() {
		getRandomQuestion();
	}

	// Ensure that there are questions w available
	if (questions.length === 0) {
		return <div>No questions available.</div>;
	}

	const revisionQuestion = (questionSet, index) => {
		const {questionText, ans} = questionSet;
		const qsetdata = {
			question: questionText,
			answers: ans,
			index,
		};

		return (
			<RevisionQuestionBox {...qsetdata}/>
		);
	};

	const toggleRandomPage = () => {
		setRandomPage(!isRandomPage);
	};

	const RevisionPage = (
		<div className='revisionQbox'>
			<h1 style={{textAlign: 'center', marginBottom: '60px'}}>Revision Topics</h1>

			{questions.map((questionSet, index) => (
				<div key={index}> { revisionQuestion(questionSet, index)}</div>
			))}

		</div>
	);

	const randomPage = (
		<div>
			<p>Question {questionNo}</p>
			<p>{questions[currentQuestionIndex].questionText}</p>

			<button className='button-1' onClick={showAnswerForCurrentQuestion}>Show Answer</button>
			<button className='button-1' onClick={moveToNextQuestion}>Next Question</button>

			{showAnswer && (
				<div>
					<h3>Answer:</h3>
					{questions[currentQuestionIndex].ans.map((answer, index) => (
						<p key={index}>{answer}</p>
					))}
				</div>
			)}
		</div>
	);

	return (

		<div className='quizcontainer'>

			<h2>Quiz-Total question:{questions.length}</h2>
			{/* <button className='button-64' onClick={toggleDarkMode}>
				{isDarkMode ? 'Light Mode' : 'Dark Mode'}
			</button> */}
			<button className='button-64' onClick={toggleRandomPage}>
				{isRandomPage ? 'RevisionPage' : 'RandomPage' }
			</button>
			{
				isRandomPage ? randomPage : RevisionPage
			}

			<audio ref={audioRef}>
				<source src={chess} type='audio/mpeg' />
			</audio>
		</div>
	);
};

export default CommonQuiz;
