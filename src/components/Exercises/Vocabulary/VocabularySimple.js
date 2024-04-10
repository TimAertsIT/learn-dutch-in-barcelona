import React, { useState } from 'react';
import { ExerciseContainer, Word, Input, Button } from '../../Exercises/Vocabulary/VocabularySimple.styles';

const VocabularySimple = ({ words }) => {
    const [index, setIndex] = useState(Math.floor(Math.random() * words.length));
    const [input, setInput] = useState('');
    const [message, setMessage] = useState('');

    const checkAnswer = () => {
        if (input.toLowerCase() === words[index].dutch.toLowerCase()) {
            setMessage('Correct! 👏');
        } else {
            setMessage(`Incorrect 😞 The correct answer is "${words[index].dutch}"`);
        }
    };

    const nextWord = () => {
        setIndex(Math.floor(Math.random() * words.length));
        setInput('');
        setMessage('');
    };

    return (
        <ExerciseContainer>
            <Word>{words[index].english}</Word>
            <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type the Dutch translation here"
            />
            <Button onClick={checkAnswer}>Check</Button>
            <p>{message}</p>
            <Button onClick={nextWord}>Next</Button>
        </ExerciseContainer>
    );
};

export default VocabularySimple;
