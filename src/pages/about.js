import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import LearnDutch from '../images/learn-dutch-with-tim-online-lessons.jpg';
import PrivateClasses from '../images/Private-dutch-classes-levels.jpg';
import { StyledAbout } from './about.styles';

function About() {
    return (
        <div>
            <Navigation />
            <StyledAbout>
                <h1>Private online Dutch courses for all levels</h1>
                <img src={LearnDutch} alt="Learn Dutch with Tim" />
                <p>Do you want to learn Dutch? Do you prefer private classes of Dutch so that you get the chance to speak a lot and get the most out of the lessons? Do you prefer an online course (or presential in Barcelona)? Then you came to the right spot. When you learn Dutch with Tim it means you get a Dutch course that is tailored to your needs, from absolute beginner to intermediate or expert levels. Focussed on speaking, reading, writing and listening, the aim is to help you on the way with Dutch as quick as possible.</p>
                <img src={PrivateClasses} alt="Private Dutch classes for beginners" />
                <p>I'm Tim, a native Belgian that is residing in Barcelona (Catalonia/Spain). I've always had a passion for languages, which made me learn English, Spanish, Catalan and French. After graduating I started as a teacher in several subjects and also took some teacher courses in Belgium. Since moving to Barcelona I have been working on various language (interpreting) jobs, making me very aware of all the regional varieties of Dutch. By offering Dutch courses I want to transmit my love for this language and make you as enthusiastic about it as I am. Dutch can be difficult, unfortunately, but also very beautiful! :) </p>
                <p>So if you are up for the challenge don't hesitate to contact me (timaertsbcn@gmail.com) so we can look at your specific needs and wishes and start building up your knowledge and confidence.</p>
                <p>Tot binnenkort?</p>
            </StyledAbout>
            <Footer />
        </div>
    );
}

export default About;