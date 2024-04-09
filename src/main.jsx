
import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import Routes here

// Import your route components (replace with actual components)
import Homepage from './pages/homepage'; // Example: Home component
import About from './pages/about';

function Main() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                {/* Add more routes as needed */}
            </Routes>
        </BrowserRouter>
    );
}

export default Main;


