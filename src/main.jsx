import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage';
import About from './pages/about';
import Blog from './pages/blog';
import Differences from './pages/differences';
import Lesson1 from './pages/lesson1';
import Lesson2 from './pages/lesson2';
import Lesson3 from './pages/lesson3';
import Lesson4 from './pages/lesson4';
import Lesson5 from './pages/lesson5';
import Lesson6 from './pages/lesson6';
import Lesson7 from './pages/lesson7';
import Lesson8 from './pages/lesson8';
import Lesson9 from './pages/lesson9';

function Main() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/lesson1-introduce-yourself-in-dutch" element={<Lesson1 />} />
                <Route path="/lesson2-professions-school-subjects-in-dutch" element={<Lesson2 />} />
                <Route path="/lesson3-culture-and-health-subjects-in-flemish" element={<Lesson3 />} />
                <Route path="/lesson4-city-vocabulary-dutch" element={<Lesson4 />} />
                <Route path="/lesson5-transport-mobility-dutch" element={<Lesson5 />} />
                <Route path="/lesson6-holidays-travels-dutch" element={<Lesson6 />} />
                <Route path="/lesson7-restaurant-food-dutch" element={<Lesson7 />} />
                <Route path="/lesson8-house-dutch" element={<Lesson8 />} />
                <Route path="/lesson9-animals-nature-dutch" element={<Lesson9 />} />
                <Route path="/differences-dutch-flemish-belgium" element={<Differences />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Main;



