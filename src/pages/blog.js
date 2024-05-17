import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import LearnDutch from '../images/learn-dutch-with-tim-online-lessons.jpg';
import { StyledAbout } from './about.styles';
import { StyledReadMoreButton } from '../components/Over/Over.styles';
import bank from '../images/0bank.png';


function Blog() {
    return (
        <div>
            <Navigation />
            <StyledAbout>
                <h1>What are the differences between Dutch from Belgium and the Netherlands?</h1>
                <img src={bank} alt="bank of zetel" />
                <p>Many people wonder what the differences are between Dutch/Flemish from the Netherlands and Belgium. There are quite a few, let's have a look at them.</p>
                <StyledReadMoreButton>
                    <Link to="/differences-dutch-flemish-belgium">
                        <button>Read More</button>
                    </Link>
                </StyledReadMoreButton>
            </StyledAbout>
            <Footer />
        </div>
    );
}

export default Blog;
