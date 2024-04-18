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
import FillInTheBlankExercise from '../components/Exercises/Vocabulary/FillintheBlankExercise';
import Translate from '../components/Exercises/Grammar/Translate';
import allowedEmails from '../pages/allowedEmails';
import { useState, useEffect } from 'react';
import handschoen from '../images/handschoen.jpg';
import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import Introduction from '../components/Introduction/Introduction';
import VocabularyTime from '../components/Exercises/Vocabulary/VocabularyTime';

function Lesson2() {
    const lessonId = 3;
    const words = [
        { dutch: 'De dokter', english: 'The doctor' },
        { dutch: 'Het ziekenhuis', english: 'The hospital' },
        { dutch: 'Ziek', english: 'Ill' },
        { dutch: 'De pijn', english: 'The pain' },
        { dutch: 'De koorts', english: 'The fever' },
        { dutch: 'De spier', english: 'The muscle' },
        { dutch: 'Het hoofd', english: 'The head' },
        { dutch: 'De arm', english: 'The arm' },
        { dutch: 'De buik', english: 'The belly' },
        { dutch: 'Het been', english: 'The leg' },
        { dutch: 'De voet', english: 'The foot' },
        { dutch: 'Het medicijn', english: 'The medicine' },
        { dutch: 'De apotheek', english: 'The pharmacy' },
        { dutch: 'Het voorschrift', english: 'The prescription' },
        { dutch: 'De gezondheid', english: 'The health' },
        { dutch: 'De hoest', english: 'The cough' },
        { dutch: 'Het oor', english: 'The ear' },
        { dutch: 'To', english: 'Towards' },
        { dutch: 'Tegen', english: 'Against' },
        { dutch: 'Met', english: 'With' },
        { dutch: 'De muzikant', english: 'The musician' },
        { dutch: 'Het theater', english: 'The theatre' },
        { dutch: 'Het museum', english: 'The museum' },
        { dutch: 'De dans', english: 'The dance' },
        { dutch: 'Het atelier', english: 'The workshop' },
        { dutch: 'De film', english: 'The movie' },
        { dutch: 'De bioscoop', english: 'The cinema' },
        { dutch: 'Het feest', english: 'The party' },
        { dutch: 'De religie', english: 'The religion' },
        { dutch: 'Het talent', english: 'The talent' }
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

    const sentences = [
        'Ik ga naar de dokter want ik voel me _.',
        'Auwch, ik heb zoveel hoofd_.',
        'De dokter gaf me een _ voor medicijnen.',
        'Kuch kuch, ik heb al de hele dag een _',
        'Mijn _ zijn om goed te kunnen luisteren',
        'Dit weekend voetbalt Club Brugge _ Anderlecht',
        'Ik ben onderweg, ik ga _ het theater',
        'Wij gaan naar de bioscoop, er speelt een mooie _',
        'Met mijn _ kan ik heel goed kijken',
        'De verpleger werkt in het _'
    ];

    const blanks = ['voorschrift', 'tegen', 'ogen', 'ziekenhuis', 'oren', 'film', 'pijn', 'naar', 'ziek', 'hoest'];
    return (
        <div>
            <Navigation />
            <Introduction lessonId={lessonId} />
            <ImageCollage images={images.slice(0, 3)} />
            <StyledQuestion data-translation=" Do you like to watch movies?">Kijk jij graag films?</StyledQuestion>
            <StyledQuestion data-translation=" Do you listen to music?">Luister jij naar muziek?</StyledQuestion>
            <StyledQuestion data-translation=" Do you act in the theatre?">Speel jij toneel in het theater?</StyledQuestion>
            <StyledQuestion data-translation=" Do you like walking?">Houd jij van wandelen?</StyledQuestion>
            <StyledQuestion data-translation=" Do you feel ill?">Voel jij je ziek?</StyledQuestion>
            <StyledQuestion data-translation=" Do you have pain?">Heb je pijn?</StyledQuestion>
            <StyledQuestion data-translation=" Where is the hospital?">Waar is het ziekenhuis?</StyledQuestion>
            <ImageCollage images={images.slice(3)} />
            <Vocabulary words={words} />
            <VocabularyQuiz words={words} />
            <VocabularySimple words={words} />
            <FillInTheBlankExercise sentences={sentences} blanks={blanks} />
            <GoedBezig
                text={{ dutch: 'Handschoen', english: '"Hand shoe"' }}
                image={handschoen}
            />
            <Separator></Separator>
            <TitleText>Grammatica / Grammar</TitleText>
            <LessonContainer>
                <Verbs
                    verb="kijken"
                    translation="to look"
                    conjugations={["kijk", "kijkt", "kijkt", "kijken", "kijken", "kijken"]}
                />
                <Verbs
                    verb="luisteren"
                    translation="to listen"
                    conjugations={["luister", "luistert", "luistert", "luisteren", "luisteren", "luisteren"]}
                />
                <Verbs
                    verb="voelen"
                    translation="to feel"
                    conjugations={["voel", "voelt", "voelt", "voelen", "voelen", "voelen"]}
                />
                <Verbs
                    verb="spelen"
                    translation="to play"
                    conjugations={["speel", "speelt", "speelt", "spelen", "spelen", "spelen"]}
                />
                <Verbs
                    verb="dansen"
                    translation="to dance"
                    conjugations={["dans", "danst", "danst", "dansen", "dansen", "dansen"]}
                />
                <Verbs
                    verb="wandelen"
                    translation="to walk"
                    conjugations={["wandel", "wandelt", "wandelt", "wandelen", "wandelen", "wandelen"]}
                />
            </LessonContainer>
            <VerbExercise verbs={[
                { verb: "gaan", conjugations: ["ga", "gaat", "gaat", "gaan", "gaan", "gaan"] },
                { verb: "komen", conjugations: ["kom", "komt", "komt", "komen", "komen", "komen"] },
                { verb: "willen", conjugations: ["wil", "wilt", "wilt", "willen", "willen", "willen"] },
                { verb: "zitten", conjugations: ["zit", "zit", "zit", "zitten", "zitten", "zitten"] },
                { verb: "nemen", conjugations: ["neem", "neemt", "neemt", "nemen", "nemen", "nemen"] },
                { verb: "zullen", conjugations: ["zal", "zult", "zal", "zullen", "zullen", "zullen"] }
            ]} />
            <Translate sentences={[
                { english: "I am the boss", translation: "Ik ben de baas" },
                { english: "We will study", translation: "Wij zullen studeren" },
                { english: "She takes cheese", translation: "Zij neemt kaas" },
                { english: "He comes to school", translation: "Hij komt naar school" },
                { english: "I want to learn Dutch", translation: "Ik wil Nederlands leren" },
                { english: "He will graduate", translation: "Hij zal afstuderen" },
                { english: "I go to the restaurant", translation: "Ik ga naar het restaurant" },
                { english: "He wants to work", translation: "Hij wil werken" },
                { english: "The economy goes well", translation: "De economie gaat goed" },
                { english: "I study history, mathematics and Dutch", translation: "Ik studeer geschiedenis, wiskunde en Nederlands" }
            ]} />
            <GrammarBox>
                <GrammarTitle>📚 The future tense (onvoltooid tegenwoordige toekomende tijd) 📚</GrammarTitle>
                <GrammarParagraph>In Dutch we use a "helping verb" to talk about the future. This "helping verb" (hulpwerkwoord) is "zullen". To that we add the infinite of the verb we will "do" in the future. </GrammarParagraph>
                <br />
                <GrammarParagraph>
                    For <Highlight>"to work"</Highlight> that would be: </GrammarParagraph>
                <br />
                <GrammarListItem>Ik zal werken. </GrammarListItem>
                <GrammarListItem>Jij zult werken. * </GrammarListItem>
                <GrammarListItem>Hij/zij zal werken. </GrammarListItem>
                <GrammarListItem>Wij zullen werken.</GrammarListItem>
                <GrammarListItem>Jullie zullen werken.</GrammarListItem>
                <GrammarListItem>Zij zullen werken.</GrammarListItem>
                <br />
                <GrammarParagraph>* "Zult" and "zal" are both valid here, but "zal" is more informal.</GrammarParagraph>
            </GrammarBox>
            <GrammarBox>
                <GrammarTitle>📚 When to pronounce an open or closed vowel? 📚</GrammarTitle>
                <GrammarParagraph>It can be tricky to know when to pronounce an open/clear vowel and when to use a closed one. Bakken or baken are pronounced very different (and have different meanings). The same for kakken or kaken, mannen or manen, etc. To learn it, dividing the words into syllables can help a lot. Let's look at some examples <a href="http://www.valley-trail.com/Syllables.htm#:~:text=Always%3A%20When%20the%20last%20letter,meaning%3A%20water)%20is%20wa">here</a></GrammarParagraph>
            </GrammarBox>
            <GrammarBox>
                <GrammarTitle>📚 When to to add an e to an adjective? 📚</GrammarTitle>
                <GrammarParagraph>Pronouncing or writing the extra "e" in an adjective when it should, makes a big difference in how people perceive your Dutch level. There are quite clear rules on when there should or shouldn't be an extra "e". There are 2 cases in which no extra "e" is added to an adjective.</GrammarParagraph>
                <br />
                <GrammarParagraph>1. When there is no noun after the adjective. (e.g. Het huis is mooi. De straat is lang. De stad is druk. De hond is ziek.)</GrammarParagraph>
                <GrammarParagraph>2. When you use the indefinite (een) version of a het-word. (e.g. Een mooi huis. Een leuk beroep. Een klein dorp. Een saai werk.)</GrammarParagraph>
                <br />
                <GrammarParagraph>In all other cases we add an "e" to the adjective. (e.g. De mooie man. Het mooie meisje. Een lelijke straat. Een grote stad.)</GrammarParagraph>
                <br />
                <br />
                <GrammarParagraph>Let's try <a href="https://thedutchonlineacademy.com/en/grammar/adjectives-with-or-without-e">this exercise</a></GrammarParagraph>
            </GrammarBox>
            <Separator></Separator>
            <TitleText>Lezen / reading</TitleText>
            <CenteredContainer>
                <StyledLink href="https://www.nedbox.be/teaser/koffie-maken">
                    "Making coffee." Check the article in the link and let's answer the related questions.
                </StyledLink>
                <StyledLink href="https://www.nedbox.be/teaser/de-stille-kapper">
                    "The quiet hairdresser." Check the article in the link and let's answer the related questions.
                </StyledLink>
            </CenteredContainer>

            <Separator></Separator>
            <TitleText>Huiswerk / Homework</TitleText>
            <GrammarBox>
                <GrammarParagraph>
                    Fill in the 15 sentences in the Google Drive with the correct adjective.
                </GrammarParagraph>
            </GrammarBox>
            <Footer />
        </div>
    );
}

export default Lesson2;