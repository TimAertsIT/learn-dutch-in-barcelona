import React, { useState, useEffect } from 'react';
import { Button, ExerciseContainer, Word, Input } from './VocabularyTime.styles'; // Import your styled components here

const DutchEnglishVocabularyQuiz = ({ wordArray }) => {
    const [remainingWords, setRemainingWords] = useState(wordArray);
    const [currentWord, setCurrentWord] = useState('');
    const [userInput, setUserInput] = useState('');
    const [correctCount, setCorrectCount] = useState(0);
    const [timer, setTimer] = useState(null); // Timer will start when user presses "Start"
    const [isTimerRunning, setIsTimerRunning] = useState(false); // Flag to track timer status
    const [feedback, setFeedback] = useState(null); // Feedback for each word

    useEffect(() => {
        if (remainingWords.length > 0) {
            setCurrentWord(remainingWords[0].english); // Display English translation
        }
    }, [remainingWords]);

    const handleInputChange = (e) => {
        if (isTimerRunning) {
            setUserInput(e.target.value);
        }
    };

    const handleStartTimer = () => {
        setTimer(120); // Set timer to 2 minutes (in seconds)
        setIsTimerRunning(true);
    };

    useEffect(() => {
        if (timer > 0 && isTimerRunning) {
            const interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
            return () => clearInterval(interval);
        } else if (timer === 0 && isTimerRunning) {
            // Timer is over, display funny message
            setIsTimerRunning(false);
            console.log(`You got ${correctCount} correct words! 🎉`);
        }
    }, [timer, correctCount, isTimerRunning]);

    const handleNextWord = () => {
        const isCorrect = userInput.toLowerCase() === remainingWords[0].dutch.toLowerCase();
        if (isCorrect) {
            setCorrectCount(correctCount + 1);
            setFeedback('correct');
        } else {
            setFeedback('incorrect');
        }
        setRemainingWords(remainingWords.slice(1));
        setUserInput('');
    };

    return (
        <ExerciseContainer>
            <Word>{currentWord}</Word>
            <Input
                type="text"
                placeholder="Enter Dutch translation"
                value={userInput}
                onChange={handleInputChange}
                disabled={!isTimerRunning} // Disable input when timer is not running
            />
            <Button onClick={handleStartTimer}>Start</Button>
            <Button onClick={handleNextWord} disabled={!isTimerRunning}>Next Word</Button>
            <p>Time remaining: {timer} seconds</p>
            {feedback && (
                <p>
                    {feedback === 'correct' ? (
                        <span style={{ color: 'green' }}>✓ Correct!</span>
                    ) : (
                        <span style={{ color: 'red' }}>✗ Incorrect!</span>
                    )}
                </p>
            )}
            {timer === 0 && !isTimerRunning && (
                <p>You got {correctCount} correct words! 🎉</p>
            )}
        </ExerciseContainer>
    );
};

export default DutchEnglishVocabularyQuiz;





