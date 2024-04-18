import React, { useState } from 'react';
import { ExerciseContainer, Question, Input, Button, StickyDiv } from './FillintheBlankExercise.styles';

const FillInTheBlankExercise = ({ sentences, blanks }) => {
    const [selectedBlanks, setSelectedBlanks] = useState(Array(sentences.length).fill(''));
    const [availableBlanks, setAvailableBlanks] = useState(blanks);
    const [highlightedBlanks, setHighlightedBlanks] = useState(Array(blanks.length).fill(false));

    const handleInput = (index, value) => {
        const newSelectedBlanks = [...selectedBlanks];
        const newHighlightedBlanks = [...highlightedBlanks];
        const blankIndex = blanks.indexOf(newSelectedBlanks[index]);

        if (blankIndex !== -1) {
            newHighlightedBlanks[blankIndex] = false;
        }

        const exactMatchIndex = blanks.findIndex(blank => blank === value);

        if (exactMatchIndex !== -1) {
            newHighlightedBlanks[exactMatchIndex] = true;
        }

        newSelectedBlanks[index] = value;
        setSelectedBlanks(newSelectedBlanks);
        setHighlightedBlanks(newHighlightedBlanks);
    };


    return (
        <ExerciseContainer>
            <StickyDiv>
                {availableBlanks.map((blank, index) => (
                    <Button key={index} style={{ backgroundColor: highlightedBlanks[index] ? 'lightblue' : '#FF8C3F' }}>
                        {blank}
                    </Button>
                ))}
            </StickyDiv>
            {sentences.map((sentence, index) => (
                <div key={index}>
                    <Question>{sentence}</Question>
                    <Input
                        value={selectedBlanks[index]}
                        onChange={(e) => handleInput(index, e.target.value)}
                        placeholder="Type the missing word here"
                    />
                </div>
            ))}
        </ExerciseContainer>

    );
};

export default FillInTheBlankExercise;



