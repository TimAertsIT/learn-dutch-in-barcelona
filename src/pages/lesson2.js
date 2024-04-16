import { StyledQuestion, LessonContainer, Separator, TitleText, GrammarBox, GrammarParagraph, GrammarTitle, Highlight, GrammarListItem, StyledLink, CenteredContainer } from '../pages/lesson1.styles';
import Vocabulary from '../components/Vocabulary/Vocabulary';
import VocabularySimple from '../components/Exercises/Vocabulary/VocabularySimple';
import VocabularyQuiz from '../components/Exercises/Vocabulary/VocabularyQuiz';
import ImageCollage from '../components/ImageCollage/ImageCollage';
import work1 from "../images/work1.JPG";
import work2 from "../images/work2.jpg";
import work3 from "../images/work3.jpeg";
import work4 from "../images/work4.jpg";
import work5 from "../images/work5.jpg";
import work6 from "../images/work6.jpg";
import GoedBezig from '../components/GoedBezig/GoedBezig';
import Verbs from '../components/Verbs/Verbs';
import VerbExercise from '../components/Exercises/Grammar/VerbExercise';
import Translate from '../components/Exercises/Grammar/Translate';
import allowedEmails from '../pages/allowedEmails';
import { useState, useEffect } from 'react';
// Import the gif and image
import goedBezigGif from '../images/goedbezig.mp4';
import goedBezigImage from '../images/goedbezig.jpg';
import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import Introduction from '../components/Introduction/Introduction';
import VocabularyTime from '../components/Exercises/Vocabulary/VocabularyTime';

function Lesson2() {
    const lessonId = 2;
    const words = [
        { dutch: 'Het loon', english: 'The wage' },
        { dutch: 'De verpleger', english: 'The nurse' },
        { dutch: 'De journalist', english: 'The journalist' },
        { dutch: 'De politicus', english: 'The politician' },
        { dutch: 'De vertegenwoordiger', english: 'The representative' },
        { dutch: 'De bakker', english: 'The baker' },
        { dutch: 'De ingenieur', english: 'The engineer' },
        { dutch: 'Het werk', english: 'The work' },
        { dutch: 'De werknemer', english: 'The employee' },
        { dutch: 'De werkgever', english: 'The employer' },
        { dutch: 'De baas', english: 'The boss' },
        { dutch: 'De ober', english: 'The waiter' },
        { dutch: 'De ambtenaar', english: 'The civil servant' },
        { dutch: 'De winkel', english: 'The shop' },
        { dutch: 'De winkelier', english: 'The shopkeeper' },
        { dutch: 'De aardrijkskunde', english: 'The geography' },
        { dutch: 'Afstuderen', english: 'To graduate' },
        { dutch: 'Leren', english: 'To learn' },
        { dutch: 'Studeren', english: 'To study' },
        { dutch: 'De les', english: 'The lesson' },
        { dutch: 'De wiskunde', english: 'Mathematics' },
        { dutch: 'De taal', english: 'The language' },
        { dutch: 'Het Nederlands', english: 'Dutch' },
        { dutch: 'Het Engels', english: 'English' },
        { dutch: 'De geschiedenis', english: 'The history' },
        { dutch: 'De biologie', english: 'The biology' },
        { dutch: 'De universiteit', english: 'The university' },
        { dutch: 'De leerkracht', english: 'The teacher' },
        { dutch: 'De economie', english: 'The economics' },
        { dutch: 'Het klaslokaal', english: 'The classroom' }
    ];
    const wordArray = [
        { dutch: 'Het loon', english: 'The wage' },
        { dutch: 'De verpleger', english: 'The nurse' },
        { dutch: 'De journalist', english: 'The journalist' },
        { dutch: 'De politicus', english: 'The politician' },
        { dutch: 'De vertegenwoordiger', english: 'The representative' },
        { dutch: 'De bakker', english: 'The baker' },
        { dutch: 'De ingenieur', english: 'The engineer' },
        { dutch: 'Het werk', english: 'The work' },
        { dutch: 'De werknemer', english: 'The employee' },
        { dutch: 'De werkgever', english: 'The employer' },
        { dutch: 'De baas', english: 'The boss' },
        { dutch: 'De ober', english: 'The waiter' },
        { dutch: 'De ambtenaar', english: 'The civil servant' },
        { dutch: 'De winkel', english: 'The shop' },
        { dutch: 'De winkelier', english: 'The shopkeeper' },
        { dutch: 'De aardrijkskunde', english: 'The geography' },
        { dutch: 'Afstuderen', english: 'To graduate' },
        { dutch: 'Leren', english: 'To learn' },
        { dutch: 'Studeren', english: 'To study' },
        { dutch: 'De les', english: 'The lesson' },
        { dutch: 'De wiskunde', english: 'Mathematics' },
        { dutch: 'De taal', english: 'The language' },
        { dutch: 'Het Nederlands', english: 'Dutch' },
        { dutch: 'Het Engels', english: 'English' },
        { dutch: 'De geschiedenis', english: 'The history' },
        { dutch: 'De biologie', english: 'The biology' },
        { dutch: 'De universiteit', english: 'The university' },
        { dutch: 'De leerkracht', english: 'The teacher' },
        { dutch: 'De economie', english: 'The economics' },
        { dutch: 'Het klaslokaal', english: 'The classroom' },
        { dutch: 'De kaaswinkel', english: 'The cheese shop' },
        { dutch: 'De universiteit', english: 'The university' },
        { dutch: 'De bakkerij', english: 'The bakery' },
        { dutch: 'Het schoolbord', english: 'The blackboard' },
        { dutch: 'Het restaurant', english: 'The restaurant' },
        { dutch: 'Het diploma', english: 'The diploma' },
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
        { dutch: 'De muziek', english: 'The music' },
        { dutch: 'Het dorp', english: 'The town' },
        { dutch: 'De stad', english: 'The city' },
        { dutch: 'De kat', english: 'The cat' },
        { dutch: 'De hond', english: 'The dog' },
        { dutch: 'Het huis', english: 'The house' },
        { dutch: 'De straat', english: 'The street' }
    ];

    const images = [
        { src: work1, caption: 'De kaaswinkel' },
        { src: work2, caption: 'De universiteit' },
        { src: work3, caption: 'De bakkerij' },
        { src: work4, caption: 'Het schoolbord' },
        { src: work5, caption: 'Het restaurant' },
        { src: work6, caption: 'Het diploma' },
    ];
    const [email, setEmail] = useState(null);
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
    return (
        <div>
            <Navigation />
            <Introduction lessonId={lessonId} />
            <ImageCollage images={images.slice(0, 3)} />
            <StyledQuestion data-translation=" What do you study?">Wat studeer jij?</StyledQuestion>
            <StyledQuestion data-translation=" What is your profession?">Wat is jouw beroep?</StyledQuestion>
            <StyledQuestion data-translation=" Do you work full-time?">Werk jij fulltime?</StyledQuestion>
            <StyledQuestion data-translation=" Which school do you go to?">Naar wellke school ga jij?</StyledQuestion>
            <StyledQuestion data-translation=" Do you like to study?">Hou je van studeren?</StyledQuestion>
            <StyledQuestion data-translation=" Do you have to work hard?">Moet je hard werken?</StyledQuestion>
            <StyledQuestion data-translation=" When are you allowed to retire?">Wanneer mag je op pensioen gaan?</StyledQuestion>
            <ImageCollage images={images.slice(3)} />
            <Vocabulary words={words} />
            <VocabularySimple words={words} />
            <VocabularyQuiz words={words} />
            <VocabularyTime wordArray={wordArray} />
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

export default Lesson2;