// VerbExercise.js
import React, { useState } from 'react';
import { ExerciseContainer, Question, Input, Button, Feedback } from './VerbExercise.styles';

const pronouns = ["Ik", "Jij", "Hij/zij", "Wij", "Jullie", "Zij"];

const VerbExercise = ({ verbs }) => {
    const [verbIndex, setVerbIndex] = useState(Math.floor(Math.random() * verbs.length));
    const [pronounIndex, setPronounIndex] = useState(Math.floor(Math.random() * pronouns.length));
    const [answer, setAnswer] = useState('');
    const [feedback, setFeedback] = useState(null);

    const checkAnswer = () => {
        if (answer.trim() === verbs[verbIndex].conjugations[pronounIndex]) {
            setFeedback('Correct! 👍');
        } else {
            setFeedback('Incorrect. Try again! 👎');
        }
    };

    const nextQuestion = () => {
        setVerbIndex(Math.floor(Math.random() * verbs.length));
        setPronounIndex(Math.floor(Math.random() * pronouns.length));
        setAnswer('');
        setFeedback(null);
    };

    return (
        <ExerciseContainer>
            <Question>{pronouns[pronounIndex]} ({verbs[verbIndex].verb})</Question>
            <Input value={answer} onChange={e => setAnswer(e.target.value)} />
            <Button onClick={checkAnswer}>Check</Button>
            <Button onClick={nextQuestion}>Next</Button>
            {feedback && <Feedback>{feedback}</Feedback>}
        </ExerciseContainer>
    );
};

export default VerbExercise;


