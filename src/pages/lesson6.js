import { StyledQuestion, LessonContainer, Separator, TitleText, GrammarBox, GrammarParagraph, GrammarTitle, Highlight, GrammarListItem, StyledLink, CenteredContainer, StyledStory } from '../pages/lesson1.styles';
import Vocabulary from '../components/Vocabulary/Vocabulary';
import VocabularySimple from '../components/Exercises/Vocabulary/VocabularySimple';
import VocabularyQuiz from '../components/Exercises/Vocabulary/VocabularyQuiz';
import MultipleChoice from '../components/Exercises/Grammar/MultipleChoice';
import ImageCollage from '../components/ImageCollage/ImageCollage';
import reisgids from "../images/reisgids.jpg";
import hotel from "../images/hotel.jpg.webp";
import hotelkamer from "../images/hotelkamer.jpg";
import bagage from "../images/bagage.jpg";
import strand from "../images/strand.jpg";
import zeezicht from "../images/zeezicht.jpg";
import GoedBezig from '../components/GoedBezig/GoedBezig';
import Verbs from '../components/Verbs/Verbs';
import VerbExercise from '../components/Exercises/Grammar/VerbExercise';
import FillInTheBlankExercise from '../components/Exercises/Vocabulary/FillintheBlankExercise';
import Translate from '../components/Exercises/Grammar/Translate';
import allowedEmails from '../pages/allowedEmails';
import { useState, useEffect } from 'react';
import zeehond from '../images/zeehond.jpg';
import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import Introduction from '../components/Introduction/Introduction';
import VocabularyTime from '../components/Exercises/Vocabulary/VocabularyTime';
import { StyledAbout } from './about.styles';

function Lesson6() {
    const lessonId = 6;
    const words = [
        { dutch: 'Het hotel', english: 'The hotel' },
        { dutch: 'De toerist', english: 'The tourist' },
        { dutch: 'De reis', english: 'The travel' },
        { dutch: 'Reizen', english: 'To travel' },
        { dutch: 'Bezoeken', english: 'To visit' },
        { dutch: 'De kamer', english: 'The room' },
        { dutch: 'Het centrum', english: 'The center' },
        { dutch: 'Verkennen', english: 'To explore' },
        { dutch: 'Het ontbijt', english: 'The breakfast' },
        { dutch: 'Het zicht', english: 'The view' },
        { dutch: 'Zien', english: 'To see' },
        { dutch: 'De gids', english: 'The guide' },
        { dutch: 'De reisgids', english: 'The travel guide' },
        { dutch: 'Reserveren', english: 'To book' },
        { dutch: 'De bagage', english: 'The luggage' },
        { dutch: 'Het strand', english: 'The beach' },
        { dutch: 'De kaart', english: 'The map' },
        { dutch: 'De excursie', english: 'The excursion' },
        { dutch: 'De openingsuren', english: 'The opening hours' },
        { dutch: 'Open', english: 'Open' },
        { dutch: 'Gesloten', english: 'Closed' },
        { dutch: 'De informatie', english: 'The information' },
        { dutch: 'De receptie', english: 'The reception' },
        { dutch: 'De badkamer', english: 'The bathroom' },
        { dutch: 'Inchecken', english: 'To check-in' },
        { dutch: 'Uitchecken', english: 'To check-out' },
        { dutch: 'Vrij', english: 'Vacant' },
        { dutch: 'Storen', english: 'To disturb' },
        { dutch: 'De kluis', english: 'The safe' },
        { dutch: 'De trap', english: 'The stairs' }
    ];
    const images = [
        { src: reisgids, caption: 'De reisgids' },
        { src: hotel, caption: 'Het hotel' },
        { src: zeezicht, caption: 'Het zeezicht' },
        { src: strand, caption: 'Het strand' },
        { src: bagage, caption: 'De bagage' },
        { src: hotelkamer, caption: 'De hotelkamer' },
    ];

    const questions = [
        { question: 'Ik wil _ naar school gaan.', options: ['niet', 'geen'] },
        { question: 'Ik vind dat _ mooie broek.', options: ['niet', 'geen'] },
        { question: 'Hij heeft _ geld.', options: ['niet', 'geen'] },
        { question: 'Je doet dat beter _.', options: ['niet', 'geen'] },
        { question: 'Deze mevrouw is _ leuk.', options: ['niet', 'geen'] },
        { question: 'Deze meneer is _ gentleman.', options: ['niet', 'geen'] },
        { question: 'Een politicus zwijgt _ graag.', options: ['niet', 'geen'] },
        { question: 'Een leerkracht werkt _ in het weekend.', options: ['niet', 'geen'] },
        { question: 'Ik weet het _.', options: ['niet', 'geen'] },
        { question: 'De bakker is _ open vandaag.', options: ['niet', 'geen'] },
        { question: 'Het restaurant is _ speeltuin.', options: ['niet', 'geen'] },
        { question: 'De blauwe muren in het restaurant vind ik _ mooi.', options: ['niet', 'geen'] },
        { question: 'Ik ga _ naar het feest.', options: ['niet', 'geen'] },
        { question: 'Hij is _ dom.', options: ['niet', 'geen'] },
        { question: 'Ik heb _ geld.', options: ['niet', 'geen'] }
    ];


    const correctAnswers = ['niet', 'geen', 'geen', 'niet', 'niet', 'geen', 'niet', 'niet', 'niet', 'niet', 'geen', 'niet', 'niet', 'niet', 'geen'];

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
        'Morgen is er een _ en zullen we vanalle bezienswaardigheden bezoeken.',
        'Heb jij een _ van de stad? Ik weet niet waar ik ben.',
        'We moeten het museum vandaag bezoeken, want morgen is het _.',
        'Ik verken een plek het liefst met een _, omdat ik dan veel leer.',
        'Laat de kinderen maar een kasteel bouwen op het _.',
        'Ik wil graag koffie bij het _.',
        'Dit jaar ga ik op _ naar Texel.',
        'Wij willen heel lang slapen, dus gelieve niet te _ voor 11uur.',
        'Dag receptioniste, wij hebben een kamer geboekt met zee_.',
        'Ga je op vakantie aan de Belgische kust of ga je toch naar het _?'
    ];

    const blanks = ['buitenland', 'excursie', 'zicht', 'kaart', 'ontbijt', 'reis', 'gesloten', 'gids', 'strand', 'storen'];
    return (
        <div>
            <Navigation />
            <Introduction lessonId={lessonId} />
            <ImageCollage images={images.slice(0, 3)} />
            <StyledQuestion data-translation=" What is your favorite travel destination">Wat is jouw favoriete reisbestemming?</StyledQuestion>
            <StyledQuestion data-translation=" Do you prefer to go to a hotel or to a camping?">Verkies je een hotel of een camping?</StyledQuestion>
            <StyledQuestion data-translation=" When will you travel?">Wanneer ga je op reis?</StyledQuestion>
            <StyledQuestion data-translation=" Do you travel in the holiday seasons?">Ga je op reis in de vakantieperiodes?</StyledQuestion>
            <StyledQuestion data-translation=" What do you consider when booking a hotel?">Waar let je op bij het reserveren van een hotel?</StyledQuestion>
            <StyledQuestion data-translation=" How do you choose your travel destination?">Hoe kies je jouw reisbestemming?</StyledQuestion>
            <StyledQuestion data-translation=" Do you prefer holidays at home or abroad?">Verkies je een vakantie in het binnenland of in het buitenland?</StyledQuestion>
            <ImageCollage images={images.slice(3)} />
            <Vocabulary words={words} />
            <StyledAbout>
                <h1>De speciale kamer</h1>
                <p>De toerist, die net was aangekomen in het bruisende centrum van Amsterdam, sleepte zijn bagage naar Het hotel. "Ik zou graag willen inchecken," zei hij tegen de receptioniste. "En ik heb een speciaal verzoek. Ik wil graag een kamer waar ik zicht heb op het strand."</p>

                <p>De receptioniste knikte begrijpend en gaf hem de sleutel van kamer 404. "Maar meneer," waarschuwde ze, "in kamer 404 zult u misschien meer vinden dan u had verwacht."</p>

                <p>Verward maar nieuwsgierig ging de toerist naar zijn kamer. Toen hij de deur opende, zag hij tot zijn verbazing dat de kamer geen muren had, alleen een gigantisch schilderij van een strand. "Welkom bij onze nieuwste attractie," riep een stem van achter het schilderij. "Het is een kamer met een 360-graden zicht, waar u kunt reizen zonder te reizen!"</p>

                <p>De toerist lachte. "Dit is fantastisch! Maar hoe zit het met mijn privacy?"
                    "Wees niet bang," zei de stem. "Als u privacy wilt, zeg dan gewoon 'Gesloten' en het schilderij wordt een muur. En als u wilt uitchecken, roep dan 'Vrij' en een glijbaan brengt u rechtstreeks naar de receptie!"</p>

                <p>De toerist besloot dat dit de beste reiservaring was die hij ooit had gehad, zelfs beter dan de excursie die hij had gepland. Hij besloot de rest van de dag te besteden aan het verkennen van zijn kamer, die elke keer dat hij 'Verkennen' zei, veranderde in een nieuwe bestemming.</p>

            </StyledAbout>
            <VocabularyQuiz words={words} />
            <VocabularySimple words={words} />
            <FillInTheBlankExercise sentences={sentences} blanks={blanks} />
            <GoedBezig
                text={{ dutch: 'De zeehond', english: '"The sea dog"' }}
                image={zeehond}
            />
            <CenteredContainer>
                <StyledLink href="https://www.roccofortehotels.com/nl/hotels-and-resorts/hotel-amigo/">
                    Er is een nieuwe wet die reserveringsplatformen verbiedt. Maar je wilt dit hotel in Brussel reserveren! Schrijf een e-mail naar het hotel en vraag hen naar de kamers, faciliteiten en geef je persoonlijke voorkeuren aan.
                </StyledLink>
            </CenteredContainer>
            <Separator></Separator>
            <TitleText>Grammatica / Grammar</TitleText>
            <LessonContainer>
                <Verbs
                    verb="bezoeken"
                    translation="to visit"
                    conjugations={["bezoek", "bezoekt", "bezoekt", "bezoeken", "bezoeken", "bezoeken"]}
                />
                <Verbs
                    verb="zien"
                    translation="to see"
                    conjugations={["zie", "ziet", "ziet", "zien", "zien", "zien"]}
                />
                <Verbs
                    verb="inchecken"
                    translation="to check-in"
                    conjugations={["check in", "checkt in", "checkt in", "checken in", "checken in", "checken in"]}
                />
                <Verbs
                    verb="storen"
                    translation="to disturb"
                    conjugations={["stoor", "stoort", "stoort", "storen", "storen", "storen"]}
                />
                <Verbs
                    verb="verkennen"
                    translation="to explore"
                    conjugations={["verken", "verkent", "verkent", "verkennen", "verkennen", "verkennen"]}
                />
                <Verbs
                    verb="reserveren"
                    translation="to book"
                    conjugations={["reserveer", "reserveert", "reserveert", "reserveren", "reserveren", "reserveren"]}
                />
            </LessonContainer>
            <VerbExercise verbs={[
                { verb: "bezoeken", conjugations: ["bezoek", "bezoekt", "bezoekt", "bezoeken", "bezoeken", "bezoeken"] },
                { verb: "zien", conjugations: ["zie", "ziet", "ziet", "zien", "zien", "zien"] },
                { verb: "inchecken", conjugations: ["check in", "checkt in", "checkt in", "checken in", "checken in", "checken in"] },
                { verb: "storen", conjugations: ["stoor", "stoort", "stoort", "storen", "storen", "storen"] },
                { verb: "verkennen", conjugations: ["verken", "verkent", "verkent", "verkennen", "verkennen", "verkennen"] },
                { verb: "reserveren", conjugations: ["reserveer", "reserveert", "reserveert", "reserveren", "reserveren", "reserveren"] }
            ]} />
            <Translate sentences={[
                { english: "He visits the city", translation: "Hij bezoekt de stad" },
                { english: "Do not disturb", translation: "Niet storen" },
                { english: "We explore the small streets", translation: "Wij verkennen de kleine straten" },
                { english: "I book a hotel room", translation: "Ik reserveer een hotelkamer" },
                { english: "Shall we visit the center?", translation: "Zullen wij het centrum bezoeken?" },
                { english: "I go on holiday to Jamaica", translation: "Ik ga op reis naar Jamaica" },
                { english: "A room for 2 with breakfast", translation: "Een kamer voor 2 met ontbijt" },
                { english: "Can you book it?", translation: "Kan jij het reserveren?" },
                { english: "The door is closed", translation: "De deur is gesloten" },
                { english: "When will you travel?", translation: "Wanneer ga jij op reis?" }
            ]} />
            <GrammarBox>
                <GrammarTitle>📚 Niet of geen 📚</GrammarTitle>
                <GrammarParagraph>
                    Niet wordt gebruikt om het gezegde van een zin of een hele zin te ontkennen.
                    <br />
                    <br />
                    <GrammarListItem>Ze draagt niet graag oorbellen. (niet ontkent graag oorbellen dragen)</GrammarListItem>
                    <GrammarListItem>Aarzel niet een zinvolle bijdrage te leveren. (niet ontkent aarzelen een zinvolle bijdrage te leveren)</GrammarListItem>
                    <GrammarListItem>Ik ben niet dom. (niet ontkent dom zijn)</GrammarListItem>
                    <br />
                    Geen wordt gebruikt om een onbepaald zelfstandig naamwoord te ontkennen.
                    <br />
                    <br />
                    <GrammarListItem>Ik wil geen hond. (geen ontkent een hond)</GrammarListItem>
                    <GrammarListItem>Ik heb geen geld. (geen ontkent geld)</GrammarListItem>
                    <GrammarListItem>Ze draagt geen oorbellen. (geen ontkent oorbellen)</GrammarListItem>
                    <br />
                    In een aantal gevallen is zowel geen als niet mogelijk, omdat de ontkenning zowel op het zelfstandig naamwoord als op het gezegde of de hele zin kan slaan.
                    <br />
                    <br />
                    <GrammarListItem>Waarom zou je geen tweedehandsauto kopen? (geen hoort bij tweedehandsauto)</GrammarListItem>
                    <GrammarListItem>Waarom zou je niet een tweedehandsauto kopen? (niet hoort bij een tweedehandsauto kopen)</GrammarListItem></GrammarParagraph>
                <br />
            </GrammarBox>
            <MultipleChoice questions={questions} correctAnswers={correctAnswers} />
            <Separator></Separator>
            <GrammarBox>
                <GrammarTitle>📚 De klok lezen (reading the clock) 📚</GrammarTitle>
                <GrammarParagraph>Let's check the theory <a href="https://zichtbaarnederlands.nl/nl/woorden/tijd">here</a>
                    <br /> And let's do some exercises <a href="https://nt2taalmenu.nl/nt2-a1-woordinbeeld-test4klokkijken2/">here</a></GrammarParagraph>
            </GrammarBox>
            <Separator></Separator>
            <TitleText>Lezen / reading</TitleText>
            <CenteredContainer>
                <StyledLink href="https://www.nedbox.be/teaser/vakantie">
                    "Holidays!" Check the article in the link and let's answer the related questions.
                </StyledLink>
                <StyledLink href="https://www.nedbox.be/teaser/een-reis-boeken">
                    "Booking a trip" Check the article in the link and let's answer the related questions.
                </StyledLink>
            </CenteredContainer>

            <Separator></Separator>
            <TitleText>Huiswerk / Homework</TitleText>
            <GrammarBox>
                <GrammarParagraph>
                    Je bent op vakantie in Scheveningen. Schrijf een kaartje aan je familie met vakantiegroeten.

                </GrammarParagraph>
            </GrammarBox>
            <Footer />
        </div>
    );
}

export default Lesson6;