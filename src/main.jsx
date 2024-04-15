import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import allowedEmails from './pages/allowedEmails'; // Import allowed emails

import Homepage from './pages/homepage';
import About from './pages/about';
import Lesson1 from './pages/lesson1';
import Lesson2 from './pages/lesson2';
import Lesson3 from './pages/lesson3';

function Main() {
    const [email, setEmail] = React.useState(null);

    React.useEffect(() => {
        if (!email) {
            const userEmail = prompt("Please enter your email to access the lessons:");
            if (allowedEmails.includes(userEmail)) {
                setEmail(userEmail);
            } else {
                alert("Access denied. Please enter a valid email.");
            }
        }
    }, [email]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                {email && (
                    <>
                        <Route path="/lesson1-introduce-yourself-in-dutch" element={<Lesson1 />} />
                        <Route path="/lesson2-professions-school-subjects-in-dutch" element={<Lesson2 />} />
                        <Route path="//lesson3-culture-and-health-subjects-in-flemish" element={<Lesson3 />} />
                    </>
                )}
            </Routes>
        </BrowserRouter>
    );
}

export default Main;



