import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import Header from '../components/Header/Header';
import Over from '../components/Over/Over';
import Lessons from '../components/Lessons/Lessons';
import Footer from '../components/Footer/Footer';

function Homepage() {

    return (
        <div>
            < Navigation />
            < Header />
            < Over />
            < Lessons />
            <Footer />
        </div>
    );
}

export default Homepage;