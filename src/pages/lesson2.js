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
import MultipleChoice from '../components/Exercises/Grammar/MultipleChoice';
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

    const questions = [
        { question: 'Dit is een _ meisje.', options: ['mooi', 'mooie'] },
        { question: 'Dit is een _ jongen.', options: ['mooi', 'mooie'] },
        { question: 'De _ straat.', options: ['lelijk', 'lelijke'] },
        { question: 'Het _ dorp.', options: ['klein', 'kleine'] },
        { question: 'Deze mevrouw is _.', options: ['leuk', 'leuke'] },
        { question: 'Deze meneer is _.', options: ['dun', 'dunne'] },
        { question: 'Een _ politicus.', options: ['slim', 'slimme'] },
        { question: 'Een _ leerkracht.', options: ['tof', 'toffe'] },
        { question: 'Een _ schoolbord.', options: ['vuil', 'vuile'] },
        { question: 'De bakker is _.', options: ['blij', 'blije'] },
        { question: 'Het restaurant is _.', options: ['mooi', 'mooie'] },
        { question: 'Het _ restaurant.', options: ['mooi', 'mooie'] },
        { question: 'Ik ga naar een _ restaurant.', options: ['mooi', 'mooie'] },
        { question: 'Hij gaat naar een _ universiteit.', options: ['groot', 'grote'] },
        { question: 'Dat is een _ winkel.', options: ['klein', 'kleine'] }
    ];


    const correctAnswers = ['mooi', 'mooie', 'lelijke', 'kleine', 'leuk', 'dun', 'slimme', 'toffe', 'vuil', 'blij', 'mooi', 'mooie', 'mooi', 'grote', 'kleine'];

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
            <StyledQuestion data-translation=" Which school do you go to?">Naar welke school ga jij?</StyledQuestion>
            <StyledQuestion data-translation=" Do you like to study?">Hou je van studeren?</StyledQuestion>
            <StyledQuestion data-translation=" Do you have to work hard?">Moet je hard werken?</StyledQuestion>
            <StyledQuestion data-translation=" When are you allowed to retire?">Wanneer mag je op pensioen gaan?</StyledQuestion>
            <ImageCollage images={images.slice(3)} />
            <Vocabulary words={words} />
            <VocabularySimple words={words} />
            <VocabularyQuiz words={words} />
            <VocabularyTime wordArray={wordArray} />
            <GoedBezig
                text={{ dutch: 'Handschoen', english: '"Hand shoe"' }}
                image={handschoen}
            />
            <Separator></Separator>
            <TitleText>Grammatica / Grammar</TitleText>
            <LessonContainer>
                <Verbs
                    verb="gaan"
                    translation="to go"
                    conjugations={["ga", "gaat", "gaat", "gaan", "gaan", "gaan"]}
                />
                <Verbs
                    verb="komen"
                    translation="to come"
                    conjugations={["kom", "komt", "komt", "komen", "komen", "komen"]}
                />
                <Verbs
                    verb="willen"
                    translation="to want"
                    conjugations={["wil", "wilt", "wilt", "willen", "willen", "willen"]}
                />
                <Verbs
                    verb="zitten"
                    translation="to sit"
                    conjugations={["zit", "zit", "zit", "zitten", "zitten", "zitten"]}
                />
                <Verbs
                    verb="nemen"
                    translation="to take"
                    conjugations={["neem", "neemt", "neemt", "nemen", "nemen", "nemen"]}
                />
                <Verbs
                    verb="zullen"
                    translation="will"
                    conjugations={["zal", "zult", "zal", "zullen", "zullen", "zullen"]}
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
            <MultipleChoice questions={questions} correctAnswers={correctAnswers} />
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
                    - Fill in the 15 sentences in the Google Drive with the correct adjective.
                </GrammarParagraph>
                <GrammarParagraph>
                    - Find a song in Dutch that you like and explain us in the next lesson what it is about and why you like it.
                </GrammarParagraph>
            </GrammarBox>
            <Footer />
        </div>
    );
}

export default Lesson2;