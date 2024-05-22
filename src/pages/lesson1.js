import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import Introduction from '../components/Introduction/Introduction';
import { StyledQuestion, LessonContainer, Separator, TitleText, GrammarBox, GrammarParagraph, GrammarTitle, Highlight, GrammarListItem, StyledLink, CenteredContainer } from '../pages/lesson1.styles';
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
import GoedBezig from '../components/GoedBezig/GoedBezig';
import Verbs from '../components/Verbs/Verbs';
import VerbExercise from '../components/Exercises/Grammar/VerbExercise';
import Translate from '../components/Exercises/Grammar/Translate';
import allowedEmails from '../pages/allowedEmails';
import { useState, useEffect } from 'react';
// Import the gif and image
import goedBezigGif from '../images/goedbezig.mp4';
import goedBezigImage from '../images/goedbezig.jpg';
import Conversation from '../components/Conversation/Conversation';
import { ExtraInformation } from './lesson1.styles';
import { StyledAbout } from './about.styles';
import FillInTheBlankExercise from '../components/Exercises/Vocabulary/FillintheBlankExercise';

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
    const [email, setEmail] = useState(null);
    const [showExtraInfo, setShowExtraInfo] = useState(false);
    const [showExtraInfo2, setShowExtraInfo2] = useState(false);
    const [showExtraInfo3, setShowExtraInfo3] = useState(false);
    const [showExtraInfo4, setShowExtraInfo4] = useState(false);
    const [showExtraInfo5, setShowExtraInfo5] = useState(false);
    const [showExtraInfo6, setShowExtraInfo6] = useState(false);
    const [showExtraInfo7, setShowExtraInfo7] = useState(false);
    useEffect(() => {
        if (!email) {
            const userEmail = prompt("Please enter your email to access this lesson:");
            if (allowedEmails.includes(userEmail)) {
                setEmail(userEmail);
            } else {
                alert("Access denied. Please enter a valid email.");
            }
        }
    }, [email]);

    // If the email is not set, don't render anything
    if (!email) {
        return null;
    }

    const sentences = [
        'Alles _ met jou?',
        'Mijn _ is Sonja',
        'Het is al 19uur. Het is _.',
        'Ik heb 2 huisdieren. Een _ en een hond.',
        'Wat doe jij van werk? Wat is jouw _?',
        'Sport is mijn grootste _.',
        'Ik werk nog niet, ik ben nog een _.',
        'In een _ is het vaak erg druk.',
        'Spanje is een erg mooi _.',
        'Ik kom uit een heel klein _ in Nederland.'
    ];

    const blanks = ['hobby', 'avond', 'land', 'goed', 'kat', 'naam', 'beroep', 'student', 'stad', 'dorp'];
    return (
        <div>
            <Navigation />
            <Introduction lessonId={lessonId} />
            <Conversation
                belgianMessages={["Hallo! Goedemorgen!", "Met mij gaat het goed. En met jou?", "Ik heet Bart. Wat is jouw naam?", "Aangenaam, Marieke. Waar woon jij?", "Ik woon in de stad Antwerpen.", "Ik ben 38 jaar oud. En jij?"]}
                dutchMessages={["Hey, hoe gaat het?", "Ook goed, dankjewel. Hoe heet jij?", "Ik ben Marieke. Aangenaam.", "Ik woon in het centrum van Utrecht. En jij?", "En hoe oud ben jij?", "Ik ben nog maar 32 jaar oud."]}
            />
            <ImageCollage images={images.slice(0, 3)} />
            <StyledQuestion onClick={() => setShowExtraInfo(!showExtraInfo)} data-translation=" Hello. Good morning!">Hallo. Goedemorgen!</StyledQuestion>
            {showExtraInfo && <div>
                <ExtraInformation>Goedemorgen! Goededag.</ExtraInformation>
                <ExtraInformation>Hallo! Hey!</ExtraInformation>
                <ExtraInformation>Hoi hoi.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo2(!showExtraInfo2)} data-translation=" Who are you?">Wie ben jij?</StyledQuestion>
            {showExtraInfo2 && <div>
                <ExtraInformation>Ik ben Bart.</ExtraInformation>
                <ExtraInformation>Ik heet Bart.</ExtraInformation>
                <ExtraInformation>Mijn naam is Bart.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo3(!showExtraInfo3)} data-translation=" How are you doing?">Hoe gaat het met jou?</StyledQuestion>
            {showExtraInfo3 && <div>
                <ExtraInformation>Met mij gaat het goed.</ExtraInformation>
                <ExtraInformation>Alles in orde.</ExtraInformation>
                <ExtraInformation>Het gaat prima!</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo4(!showExtraInfo4)} data-translation=" What is your name?">Wat is jouw naam?</StyledQuestion>
            {showExtraInfo4 && <div>
                <ExtraInformation>Mijn naam is Bart.</ExtraInformation>
                <ExtraInformation>Ik heet Bart. Hoe heet jij?</ExtraInformation>
                <ExtraInformation>Ik ben Bart.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo5(!showExtraInfo5)} data-translation=" Where do you live?">Waar woon jij?</StyledQuestion>
            {showExtraInfo5 && <div>
                <ExtraInformation>Ik woon in de stad Antwerpen.</ExtraInformation>
                <ExtraInformation>Ik woon in het land Spanje.</ExtraInformation>
                <ExtraInformation>Ik woon in de Hoekstraat.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo6(!showExtraInfo6)} data-translation=" How old are you?">Hoe oud ben jij?</StyledQuestion>
            {showExtraInfo6 && <div>
                <ExtraInformation>Ik ben 35 jaar oud.</ExtraInformation>
                <ExtraInformation>Ik word volgende week 36 jaar oud.</ExtraInformation>
                <ExtraInformation>Mijn leeftijd is geheim.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo7(!showExtraInfo7)} data-translation=" What is your profession?">Wat is jouw beroep?</StyledQuestion>
            {showExtraInfo7 && <div>
                <ExtraInformation>Ik ben bioloog.</ExtraInformation>
                <ExtraInformation>Ik werk als magazijnier.</ExtraInformation>
                <ExtraInformation>Ik ben werk aan het zoeken.</ExtraInformation>
            </div>}
            <ImageCollage images={images.slice(3)} />
            <Vocabulary words={words} />
            <StyledAbout>
                <h1>De nieuwe buurman</h1>
                <p> Op een mooie dag verhuisde Jan naar een nieuw huis in Nederland. Hij wilde graag kennismaken met zijn buren.</p>
                <p>Hij klopte op de deur van zijn buurvrouw, Mevrouw Jansen. “Hallo,” zei Jan. “Ik ben Jan, je nieuwe buurman.”</p>

                <p>Mevrouw Jansen glimlachte. “Welkom, Jan! Ik ben blij dat je hier bent. Wil je een kopje koffie?”</p>
                <p>Jan knikte dankbaar. “Graag! Ik hou van koffie.”</p>
                <p>En zo begon Jan zijn nieuwe leven in Nederland, met een vriendelijke buurvrouw en een lekker kopje koffie.</p>
            </StyledAbout>
            <VocabularyQuiz words={words} />
            <VocabularySimple words={words} />
            <FillInTheBlankExercise sentences={sentences} blanks={blanks} />
            <GoedBezig
                gif={goedBezigGif}
                text={{ dutch: 'Luipaard', english: '"Lazy horse"' }}
                image={goedBezigImage}
            />
            <Separator></Separator>
            <TitleText>Grammatica / Grammar</TitleText>
            <LessonContainer>
                <Verbs
                    verb="werken"
                    translation="to work"
                    conjugations={["werk", "werkt", "werkt", "werken", "werken", "werken"]}
                />
                <Verbs
                    verb="zijn"
                    translation="to be"
                    conjugations={["ben", "bent", "is", "zijn", "zijn", "zijn"]}
                />
                <Verbs
                    verb="hebben"
                    translation="to have"
                    conjugations={["heb", "hebt", "heeft", "hebben", "hebben", "hebben"]}
                />
            </LessonContainer>
            <VerbExercise verbs={[
                { verb: "werken", conjugations: ["werk", "werkt", "werkt", "werken", "werken", "werken"] },
                { verb: "zijn", conjugations: ["ben", "bent", "is", "zijn", "zijn", "zijn"] },
                { verb: "hebben", conjugations: ["heb", "hebt", "heeft", "hebben", "hebben", "hebben"] }
            ]} />
            <Translate sentences={[
                { english: "I am Stromae", translation: "Ik ben Stromae" },
                { english: "I have a dog", translation: "Ik heb een hond" },
                { english: "He works hard", translation: "Hij werkt hard" },
                { english: "She has a hobby", translation: "Zij heeft een hobby" },
                { english: "You are a woman", translation: "Jij bent een vrouw" },
                { english: "Mark Rutte is a man", translation: "Mark Rutte is een man" },
                { english: "The city has a street", translation: "De stad heeft een straat" },
                { english: "The school is in the town", translation: "De school is in het dorp" },
                { english: "The students don't work", translation: "De studenten werken niet" },
                { english: "I have a profession", translation: "Ik heb een beroep" }
            ]} />
            <GrammarBox>
                <GrammarTitle>📚 When to use "de" or "het"? 📚</GrammarTitle>
                <GrammarParagraph>Masculine and feminine words all get "de". Gender neutral words "het". So "de man", "de vrouw", "het onzijdige woord". Unfortunately, there are almost no rules as to when it is "de" or "het", so you will need to rely on learning them one by one. However<Highlight> a few rules </Highlight> do exist!</GrammarParagraph>
                <br />
                <GrammarListItem>Diminutives are always with "het" - het huisje, het tuintje, het stadje, ...; </GrammarListItem>
                <GrammarListItem>Sports use always "het" - het voetbal, het basket, het ijshockey, ...; </GrammarListItem>
                <GrammarListItem>Words with 2 syllables that start with be-, ge-, ver- and ont-; - het belang, het geweer, het verstand, ...; </GrammarListItem>
                <GrammarListItem>In plural all words use "de".</GrammarListItem>
                <br />
                <GrammarParagraph>
                    For more information, check out <a href="https://www.vlaanderen.be/team-taaladvies/taaladviezen/lidwoord-taalkundige-term">this link</a></GrammarParagraph>
            </GrammarBox>
            <Separator></Separator>
            <TitleText>Luisteren / Listening</TitleText>
            <CenteredContainer>
                <StyledLink href="https://www.nedbox.be/teaser/cacao-wordt-duurder#">
                    "Cacao is becoming more expensive." Check the video in the link and let's answer the related questions.
                </StyledLink>
            </CenteredContainer>

            <Separator></Separator>
            <TitleText>Huiswerk / Homework</TitleText>
            <GrammarBox>
                <GrammarParagraph>
                    Kevin De Bruyne and Frenkie de Jong meet eachother.</GrammarParagraph>
                <GrammarParagraph> Write a dialogue of <Highlight>10 sentences</Highlight> where they introduce themselves to eachother.</GrammarParagraph>
                <GrammarParagraph> Aim not to use chatGPT or Google Translate, feel free to invent words if you don't know them.
                </GrammarParagraph>
            </GrammarBox>
            <Footer />
        </div>
    );
}

export default Lesson1;