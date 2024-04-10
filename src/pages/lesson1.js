import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import Introduction from '../components/Introduction/Introduction';
import { StyledQuestion } from '../pages/lesson1.styles';
import Vocabulary from '../components/Vocabulary/Vocabulary';
import VocabularySimple from '../components/Exercises/Vocabulary/VocabularySimple';
import VocabularyQuiz from '../components/Exercises/Vocabulary/VocabularyQuiz';
import ImageCollage from '../components/ImageCollage/ImageCollage';
import hetDorp from "../images/het-dorp.jpg";
import deStad from "../images/de-stad.jpg";
import deStraat from "../images/de-straat.jpg";
import deKat from "../images/de-kat.jpg";
import deHond from "../images/de-hond.jpg";
import hetHuis from "../images/het-huis.jpg";

function Lesson1() {
    const lessonId = 1;
    const words = [
        { dutch: 'Hallo', english: 'Hello' },
        { dutch: 'Goedemorgen', english: 'Good morning' },
        { dutch: 'Goedemiddag', english: 'Good midday' },
        { dutch: 'Goededag', english: 'Good day' },
        { dutch: 'De leeftijd', english: 'The age' },
        { dutch: 'De woonplaats / het adres', english: 'The address' },
        { dutch: 'Het land', english: 'The country' },
        { dutch: 'De stad', english: 'The city' },
        { dutch: 'Het dorp', english: 'The town' },
        { dutch: 'De straat', english: 'The street' },
        { dutch: 'De man', english: 'The man' },
        { dutch: 'De vrouw', english: 'The woman' },
        { dutch: 'Het kind', english: 'The child' },
        { dutch: 'Het beroep', english: 'The profession' },
        { dutch: 'De student', english: 'The student' },
        { dutch: 'De hobby', english: 'The hobby' },
        { dutch: 'De sport', english: 'Sports' },
        { dutch: 'De school', english: 'The school' },
        { dutch: 'De avond', english: 'The evening' },
        { dutch: 'De hond', english: 'The dog' },
        { dutch: 'De kat', english: 'The cat' },
        { dutch: 'Het dier', english: 'The animal' },
        { dutch: 'Het huis', english: 'The house' },
        { dutch: 'Het huisdier', english: 'The pet' },
        { dutch: 'Het jaar', english: 'The year' },
        { dutch: 'Het uur', english: 'The hour' },
        { dutch: 'De minuut', english: 'The minute' },
        { dutch: 'De week', english: 'The week' },
        { dutch: 'De dag', english: 'The day' },
        { dutch: 'De muziek', english: 'The music' }
    ];
    const images = [
        { src: hetDorp, caption: 'Het dorp' },
        { src: deStad, caption: 'De stad' },
        { src: deKat, caption: 'De kat' },
        { src: deHond, caption: 'De hond' },
        { src: hetHuis, caption: 'Het huis' },
        { src: deStraat, caption: 'De straat' },
    ];
    return (
        <div>
            <Navigation />
            <Introduction lessonId={lessonId} />
            <ImageCollage images={images.slice(0, 3)} />
            <StyledQuestion data-translation=" Hello. Good morning!">Hallo. Goedemorgen!</StyledQuestion>
            <StyledQuestion data-translation=" Who are you?">Wie ben jij?</StyledQuestion>
            <StyledQuestion data-translation=" What is your name?">Hoe heet jij? Wat is jouw naam?</StyledQuestion>
            <StyledQuestion data-translation=" Where do you live?">Waar woon je?</StyledQuestion>
            <StyledQuestion data-translation=" How old are you?">Hoe oud ben jij?</StyledQuestion>
            <ImageCollage images={images.slice(3)} />
            <Vocabulary words={words} />
            <VocabularySimple words={words} />
            <VocabularyQuiz words={words} />
            <p>5 minutes grammar</p>
            <p>10 minutes grammar exercise</p>
            <p>5 minutes listening</p>
            <p>10 minutes listening exercise</p>
            <p>5 minutes reading and writing exercises</p>
            <p>5 minutes summary</p>
            <Footer />
        </div>
    );
}

export default Lesson1;