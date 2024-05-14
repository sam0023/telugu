/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import chess from '../chess.mp3';
import './index.css';

const RevisionQuestionBox = props => {
	const {question, answers, index} = props;
	console.log('logging answers');
	console.log(answers);

	const [showAnswer, setShowAnswer] = useState(false);
	const audioRef = React.createRef();

	const tougleShowAnswer = () => {
		setShowAnswer(!showAnswer);
		audioRef.current.play();
	};

	return (
		<div style={{marginBottom: '50px'}}>
			<p className='question'> {index + 1}.{' '}{question}</p>
			<div>
				{showAnswer && (
					<div className='ans'>
						<p>Answer:</p>

						{answers.map((ans, index) => (
							<p key={index}>{ans}</p>
						))}
					</div>
				)}
				<button className='button-64 ans-b' onClick={tougleShowAnswer}>
                    Show Answer
				</button>

			</div>
			<audio ref={audioRef}>
				<source src={chess} type='audio/mpeg' />
			</audio>
		</div>

	);
};

export default RevisionQuestionBox;
