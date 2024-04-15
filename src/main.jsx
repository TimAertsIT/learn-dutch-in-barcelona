import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Homepage from './pages/homepage';
import About from './pages/about';
import Lesson1 from './pages/lesson1';
import Lesson2 from './pages/lesson2';
import Lesson3 from './pages/lesson3';

function Main() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route path="/lesson1-introduce-yourself-in-dutch" element={<Lesson1 />} />
                <Route path="/lesson2-professions-school-subjects-in-dutch" element={<Lesson2 />} />
                <Route path="//lesson3-culture-and-health-subjects-in-flemish" element={<Lesson3 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Main;



