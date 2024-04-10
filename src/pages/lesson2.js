import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import Introduction from '../components/Introduction/Introduction';

function Lesson2() {
    const lessonId = 2;
    return (
        <div>
            < Navigation />
            < Introduction lessonId={lessonId} />
        </div>
    );
}

export default Lesson2;