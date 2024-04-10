import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import Introduction from '../components/Introduction/Introduction';

function Lesson3() {
    const lessonId = 3;
    return (
        <div>
            < Navigation />
            < Introduction lessonId={lessonId} />
            <p>This is lesson 3</p>
        </div>
    );
}

export default Lesson3;