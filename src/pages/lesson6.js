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
import lieveheersbeestje from '../images/lieveheersbeestje.jpg';
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
        'Eerst moet je de trein naar Brugge nemen en dan moet je _ op de trein naar Gent.',
        'Ik ben net aangekomen in de _ van Zaventem.',
        'Ik wil een _ kopen, heen en terug naar Amsterdam.',
        'Om hoe _ vertrekt de boot naar Oostende?',
        'De fiets vind ik veel te _, ik ga wel met de auto.',
        'Op welk _ komt de trein naar Luik aan?',
        'Ben je zeker dat je met de _ wil gaan? Je kan zeeziek worden.',
        'Sorry dat ik te laat ben. Er was een _ op de snelweg.',
        '120km/u is de _ hier.',
        'Het _ is beter voor het milieu dan de auto.'
    ];

    const blanks = ['kaartje', 'overstappen', 'perron', 'boot', 'openbaar vervoer', 'luchthaven', 'file', 'laat', 'maximumsnelheid', 'traag'];
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
                <h1>De treinreis van Meneer Jansen</h1>
                <p>Meneer Jansen was een rustige man die elke dag met de trein naar zijn werk ging. Hij stapte op in het station in zijn woonplaats en reisde naar de stad. Op een dag besloot hij om iets anders te proberen en nam de bus naar zijn werk. De auto liet hij thuis, want hij wilde eens een andere manier van reizen ervaren.</p>
                <p>Hij stapte uit de bus en ging te voet verder. Het was een mooie dag, dus hij genoot van het wandelen. Onderweg kwam hij een vriend tegen die op zijn fiets naar het werk ging. Ze begroetten elkaar en Meneer Jansen dacht: “Misschien moet ik ook eens een fiets kopen.”</p>
                <p>Op het werk hoorde hij collega’s praten over hun avonturen met de elektrische step. Ze zoeften door de stad en hadden de grootste lol. Meneer Jansen was nieuwsgierig en besloot er ook een te huren. Hij voelde zich net een kind dat voor het eerst op een step stond.</p>
                <p>In het weekend ging hij met zijn gezin een dagje uit. Ze huurden een boot en voeren over de rivier. Meneer Jansen vond het heerlijk om op het water te zijn. Zijn vrouw zei: “Laten we volgende keer een schip huren en een langere tocht maken.”</p>
                <p>Op vakantie ging hij met het vliegtuig naar een exotische bestemming. Hij had een ticket geboekt en keek uit naar de aankomst op het paradijselijke eiland. Helaas was er een vertraging en moest hij uren wachten op de luchthaven. Gelukkig had hij een goed boek bij zich.</p>
                <p>Terug in Nederland nam hij de trein naar huis. Hij zat in de coupé en keek uit het raam. Het spoor leidde hem door groene weilanden en langs kleine dorpjes. Hij dacht aan al zijn reizen en besefte dat elke manier van reizen zijn charme had.</p>
                <p>En zo eindigt het verhaal van Meneer Jansen, de man die van rijden, wandelen, varen, zeilen, vliegen en alles daartussenin hield. Hij had geen favoriete manier van reizen, want elke reis bracht hem iets bijzonders. Misschien was dat wel het mooiste abonnement dat hij ooit had gehad: het abonnement op avontuur.</p>
            </StyledAbout>
            <VocabularyQuiz words={words} />
            <VocabularySimple words={words} />
            <FillInTheBlankExercise sentences={sentences} blanks={blanks} />
            <GoedBezig
                text={{ dutch: 'Het lieveheersbeestje', english: '"The dear Lord`s small beast"' }}
                image={lieveheersbeestje}
            />
            <CenteredContainer>
                <StyledLink href="https://www.belgiantrain.be/nl">
                    Hoeveel kost een senior ticket voor een treinreis van Mol naar Brugge, heen en terug?
                </StyledLink>
                <StyledLink href="https://www.belgiantrain.be/nl">
                    Arno wants to buy a train ticket for the train from Hasselt to Oostende. Write a dialogue between him and the sales desk.
                </StyledLink>
            </CenteredContainer>
            <Separator></Separator>
            <TitleText>Grammatica / Grammar</TitleText>
            <LessonContainer>
                <Verbs
                    verb="rijden"
                    translation="to drive"
                    conjugations={["rijd", "rijdt", "rijdt", "rijden", "rijden", "rijden"]}
                />
                <Verbs
                    verb="wandelen"
                    translation="to walk"
                    conjugations={["wandel", "wandelt", "wandelt", "wandelen", "wandelen", "wandelen"]}
                />
                <Verbs
                    verb="lopen"
                    translation="to run"
                    conjugations={["loop", "loopt", "loopt", "lopen", "lopen", "lopen"]}
                />
                <Verbs
                    verb="varen"
                    translation="to sail"
                    conjugations={["vaar", "vaart", "vaart", "varen", "varen", "varen"]}
                />
                <Verbs
                    verb="zeilen"
                    translation="to sail"
                    conjugations={["zeil", "zeilt", "zeilt", "zeilen", "zeilen", "zeilen"]}
                />
                <Verbs
                    verb="vliegen"
                    translation="to fly"
                    conjugations={["vlieg", "vliegt", "vliegt", "vliegen", "vliegen", "vliegen"]}
                />
            </LessonContainer>
            <VerbExercise verbs={[
                { verb: "wandelen", conjugations: ["wandel", "wandelt", "wandelt", "wandelen", "wandelen", "wandelen"] },
                { verb: "lopen", conjugations: ["loop", "loopt", "loopt", "lopen", "lopen", "lopen"] },
                { verb: "varen", conjugations: ["vaar", "vaart", "vaart", "varen", "varen", "varen"] },
                { verb: "zeilen", conjugations: ["zeil", "zeilt", "zeilt", "zeilen", "zeilen", "zeilen"] },
                { verb: "vliegen", conjugations: ["vlieg", "vliegt", "vliegt", "vliegen", "vliegen", "vliegen"] },
                { verb: "rijden", conjugations: ["rijd", "rijdt", "rijdt", "rijden", "rijden", "rijden"] }
            ]} />
            <Translate sentences={[
                { english: "He drives the car", translation: "Hij rijdt met de auto" },
                { english: "I walk in the forest", translation: "Ik wandel in het bos" },
                { english: "We fly to Rome", translation: "Wij vliegen naar Rome" },
                { english: "I buy a ticket", translation: "Ik koop een kaartje" },
                { english: "Quick, you have to run", translation: "Snel, jij moet lopen" },
                { english: "120km/h is the maximum speed here", translation: "120km/u is de maximumsnelheid hier" },
                { english: "The train arrives on platform 2", translation: "De trein komt aan op perron 2" },
                { english: "The plane flies to New York", translation: "Het vliegtuig vliegt naar New York" },
                { english: "The boat sails to Zeeland", translation: "De boot vaart naar Zeeland" },
                { english: "We ride the train", translation: "Wij rijden met de trein" }
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
                <StyledLink href="https://www.nedbox.be/teaser/met-de-bus">
                    "Riding the bus?" Check the article in the link and let's answer the related questions.
                </StyledLink>
                <StyledLink href="https://www.nedbox.be/teaser/elektrische-auto">
                    "The electric car." Check the article in the link and let's answer the related questions.
                </StyledLink>
            </CenteredContainer>

            <Separator></Separator>
            <TitleText>Huiswerk / Homework</TitleText>
            <GrammarBox>
                <GrammarParagraph>
                    - Make exercise 1-3 here, practising with "niet" and "geen". <a href="https://nt2taalmenu.nl/nt2-a1-grammatica-menuontkennen/">hhttps://nt2taalmenu.nl/nt2-a1-grammatica-menuontkennen/ </a>

                </GrammarParagraph>
            </GrammarBox>
            <Footer />
        </div>
    );
}

export default Lesson6;