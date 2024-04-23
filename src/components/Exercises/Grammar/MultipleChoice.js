// Exercise.js
import React, { useState } from 'react';
import { ExerciseContainer, StickyDiv, Question, Input, Button, Feedback, OptionLabel, Title } from './MultipleChoice.styles';

const MultipleChoice = ({ questions, correctAnswers }) => {
    const [answers, setAnswers] = useState(Array(questions.length).fill(''));
    const [feedback, setFeedback] = useState('');

    const handleAnswerChange = (index, answer) => {
        const newAnswers = [...answers];
        newAnswers[index] = answer;
        setAnswers(newAnswers);
    };

    const handleSubmit = () => {
        const isCorrect = answers.every((answer, index) => answer === correctAnswers[index]);
        setFeedback(isCorrect ? 'Correct!' : 'Incorrect. Please try again.');
    };

    return (
        <ExerciseContainer>
            <Title>🎯 Exercise: choose the correct multiple choice option 🎯</Title> {/* Add your title here */}
            {questions.map((question, index) => (
                <div key={index}>
                    <Question>{question.question}</Question>
                    {question.options.map((option, i) => (
                        <OptionLabel key={i}>
                            <Input
                                type="radio"
                                value={option}
                                checked={answers[index] === option}
                                onChange={() => handleAnswerChange(index, option)}
                            />
                            {option}
                        </OptionLabel>
                    ))}
                </div>
            ))}
            <Button onClick={handleSubmit}>Submit</Button>
            <Feedback>{feedback}</Feedback>
        </ExerciseContainer>
    );
};

export default MultipleChoice;
