// Lessons.js
import React from 'react';
import { Link } from 'react-router-dom';
import { lessonsData } from './lessonsData';
import { StyledCard, StyledReadMoreButton, StyledCardContainer } from './Lessons.styles';

const Lessons = () => {
    return (
        <StyledCardContainer>
            {lessonsData.lessons.map((lesson) => (
                <StyledCard key={lesson.id}>
                    <img src={lesson.image} alt={lesson.title} />
                    <h2>{lesson.title}</h2>
                    <p>{lesson.description}</p>
                    <StyledReadMoreButton>
                        <Link to={lesson.path}>
                            <button>Read More</button>
                        </Link>
                    </StyledReadMoreButton>
                </StyledCard>
            ))}
        </StyledCardContainer>
    );
};

export default Lessons;

