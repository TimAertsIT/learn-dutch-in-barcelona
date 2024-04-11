// TranslationExercise.js
import React, { useState } from 'react';
import { ExerciseContainer, Question, Input, Button, Feedback } from './Translate.styles';

const Translate = ({ sentences }) => {
    const [index, setIndex] = useState(0);
    const [answer, setAnswer] = useState('');
    const [feedback, setFeedback] = useState(null);

    const checkAnswer = () => {
        if (answer.trim().toLowerCase() === sentences[index].translation.toLowerCase()) {
            setFeedback('Correct! 👍');
        } else {
            setFeedback('Incorrect. Try again! 👎');
        }
    };

    const nextQuestion = () => {
        setIndex((index + 1) % sentences.length);
        setAnswer('');
        setFeedback(null);
    };

    return (
        <ExerciseContainer>
            <Question>{sentences[index].english}</Question>
            <Input value={answer} onChange={e => setAnswer(e.target.value)} />
            <Button onClick={checkAnswer}>Check</Button>
            <Button onClick={nextQuestion}>Next</Button>
            {feedback && <Feedback>{feedback}</Feedback>}
        </ExerciseContainer>
    );
};

export default Translate;
