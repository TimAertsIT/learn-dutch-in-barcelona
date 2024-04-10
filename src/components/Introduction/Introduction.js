import { lessonsData } from '../Lessons/lessonsData';
import { StyledIntroduction, StyledTitle, StyledDescription, StyledImage } from './Introduction.styles';

const Introduction = ({ lessonId }) => {
    const lesson = lessonsData.lessons.find(lesson => lesson.id === lessonId);
    if (!lesson) {
        return null; // or return a default component
    }

    return (
        <StyledIntroduction>
            <StyledTitle>{lesson.title}</StyledTitle>
            <StyledDescription>{lesson.description}</StyledDescription>
            <StyledImage src={lesson.image} alt={lesson.title} />
        </StyledIntroduction>
    );
};

export default Introduction;