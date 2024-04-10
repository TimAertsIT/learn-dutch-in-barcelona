import React, { useState, useEffect } from 'react';
import { QuizContainer, Word, Option, Message, NextButton } from '../../Exercises/Vocabulary/VocabularyQuiz.styles';

const VocabularyQuiz = ({ words }) => {
    const [index, setIndex] = useState(Math.floor(Math.random() * words.length));
    const [options, setOptions] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const correct = words[index].dutch;
        const incorrect = words
            .filter((_, i) => i !== index)
            .sort(() => 0.5 - Math.random())
            .slice(0, 3)
            .map(word => word.dutch);
        setOptions([correct, ...incorrect].sort(() => 0.5 - Math.random()));
    }, [index, words]);

    const checkAnswer = (option) => {
        if (option === words[index].dutch) {
            setMessage({ text: 'Correct! 👏', isCorrect: true });
        } else {
            setMessage({ text: `Incorrect 😞 The correct answer is "${words[index].dutch}"`, isCorrect: false });
        }
    };

    const nextWord = () => {
        setIndex(Math.floor(Math.random() * words.length));
        setMessage('');
    };

    return (
        <QuizContainer>
            <h1>Quiz Time!</h1>
            <p>Guess the Dutch translation of the following English word:</p>
            <Word>{words[index].english}</Word>
            {options.map((option, i) => (
                <Option key={i} onClick={() => checkAnswer(option)}>
                    {option}
                </Option>
            ))}
            {message && <Message isCorrect={message.isCorrect}>{message.text}</Message>}
            <NextButton onClick={nextWord}>Next</NextButton>
        </QuizContainer>
    );
};

export default VocabularyQuiz;
