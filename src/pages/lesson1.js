import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import Introduction from '../components/Introduction/Introduction';

function Lesson1() {
    const lessonId = 1;

    return (
        <div>
            < Navigation />
            <Introduction lessonId={lessonId} />
            <p>This is lesson 1</p>
            <p>5 minutes welcoming</p>
            <p>5 minutes vocabulary</p>
            <p>10 minutes vocabulary exercise</p>
            <p>5 minutes grammar</p>
            <p>10 minutes grammar exercise</p>
            <p>5 minutes listening</p>
            <p>10 minutes listening exercise</p>
            <p>5 minutes reading and writing exercises</p>
            <p>5 minutes summary</p>
            < Footer />
        </div>
    );
}

export default Lesson1;