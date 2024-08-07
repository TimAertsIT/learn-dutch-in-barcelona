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
import Conversation from '../components/Conversation/Conversation';
import { ExtraInformation } from './lesson1.styles';

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
        { question: 'Van wie is die fiets? Dat is de _', options: ['mij', 'mijne'] },
        { question: 'Is dat _ moeder?', options: ['jou', 'jouw'] },
        { question: '_ huis staat in de straat.', options: ['ons', 'onze'] },
        { question: 'Is dat jouw of _ drankje?', options: ['mijn', 'mijne'] },
        { question: 'Die trui is de _.', options: ['haar', 'hare'] },
        { question: 'Dat is _ trui.', options: ['haar', 'hare'] },
        { question: 'Dit is _ broek.', options: ['mijne', 'mijn'] },
        { question: 'Deze broek is de _.', options: ['mijne', 'mijn'] },
        { question: 'Dat huis is het _.', options: ['ons', 'onze'] },
        { question: 'Is dat _ huis?', options: ['jullie', 'hunne'] },
        { question: 'Nee, dat huis is het _', options: ['hunne', 'uw'] },
        { question: 'Ik vind _ ogen mooi.', options: ['uw', 'uwe'] },
        { question: '_ school is niet ver weg.', options: ['mij', 'mijn'] },
        { question: 'Het is _ huis', options: ['mijne', 'mijn'] },
        { question: 'Dat is _ boek.', options: ['ons', 'onze'] }
    ];


    const correctAnswers = ['mijne', 'jouw', 'ons', 'mijn', 'hare', 'haar', 'mijn', 'mijne', 'onze', 'jullie', 'hunne', 'uw', 'mijn', 'mijn', 'ons'];

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
            <Conversation
                belgianMessages={["Hallo! Ik wil op vakantie gaan in Nederland.", "Zijn er in jullie hotel nog kamers vrij?", "Ik zoek een tweepersoonskamer voor 3 nachten.", "Vanaf de volgende zaterdag al.", "Met ontbijt. Is het een kamer met zeezicht?", "Prima, hoe kan ik de kamer reserveren?", "Ok, dat zal ik doen. Bedankt voor de informatie!", "Tot ziens!"]}
                dutchMessages={["Hallo! Van harte welkom!", "Ja, wij hebben nog enkele kamers vrij. Een kamer voor hoeveel personen?", "Dat kan, wanneer willen jullie komen?", "Dat kan zeker, met ontbijt of zonder ontbijt?", "Ja, al onze kamers hebben zeezicht.", "Je kan mij een mail sturen en dan is het in orde.", "Graag gedaan, tot binnenkort!"]}
            />
            <ImageCollage images={images.slice(0, 3)} />
            <StyledQuestion onClick={() => setShowExtraInfo(!showExtraInfo)} data-translation=" What is your favorite travel destination?">Wat is jouw favoriete reisbestemming?</StyledQuestion>
            {showExtraInfo && <div>
                <ExtraInformation>Ik ga het liefst op reis naar plaatsen die ik nog niet ken.</ExtraInformation>
                <ExtraInformation>Mijn favoriete reisbestemming is Portugal.</ExtraInformation>
                <ExtraInformation>Ik heb geen favoriete reisbestemming, ik wil de hele wereld zien.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo2(!showExtraInfo2)} data-translation=" Do you prefer to go to a hotel or to a camping?">Verkies je een hotel of een camping?</StyledQuestion>
            {showExtraInfo2 && <div>
                <ExtraInformation>Ik vind zowel een hotel als een camping erg leuk.</ExtraInformation>
                <ExtraInformation>Ik verblijf het liefst in een hotel, ik heb luxe nodig.</ExtraInformation>
                <ExtraInformation>Geen van de twee, ik verkies een bed & breakfast.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo3(!showExtraInfo3)} data-translation=" When will you travel?">Wanneer ga je op reis?</StyledQuestion>
            {showExtraInfo3 && <div>
                <ExtraInformation>Dit jaar ga ik op reis in de zomervakantie.</ExtraInformation>
                <ExtraInformation>Ik ga 4 keer per jaar op reis.</ExtraInformation>
                <ExtraInformation>Ik ga binnenkort op reis, ik heb verlof genomen op het werk.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo4(!showExtraInfo4)} data-translation=" Do you travel in the holiday seasons?">Ga je op reis in de vakantieperiodes?</StyledQuestion>
            {showExtraInfo4 && <div>
                <ExtraInformation>Ja, want dan hebben mijn kinderen ook vakantie.</ExtraInformation>
                <ExtraInformation>Dat hangt er vanaf. Soms wel, soms niet.</ExtraInformation>
                <ExtraInformation>Nee, liever in andere periodes, dan is het goedkoper.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo5(!showExtraInfo5)} data-translation=" What do you consider when booking a hotel?">Waar let je op bij het reserveren van een hotel?</StyledQuestion>
            {showExtraInfo5 && <div>
                <ExtraInformation>Ik vind het erg belangrijk dat er een zwembad is.</ExtraInformation>
                <ExtraInformation>Ik wil een grote kamer en het ontbijt is ook erg belangrijk.</ExtraInformation>
                <ExtraInformation>Ik let op de ligging van het hotel, ik wil dat het overal dicht bij is.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo6(!showExtraInfo6)} data-translation=" How do you choose your travel destination?">Hoe kies je jouw reisbestemming?</StyledQuestion>
            {showExtraInfo6 && <div>
                <ExtraInformation>Ik zoek altijd naar een combinatie van stad, cultuur en strand.</ExtraInformation>
                <ExtraInformation>Ik kies telkens voor plekken waar ik nog niet geweest ben.</ExtraInformation>
                <ExtraInformation>Ik let vooral op het weer, ik hou niet van koude bestemmingen.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo7(!showExtraInfo7)} data-translation=" Do you prefer holidays at home or abroad?">Verkies je een vakantie in het binnenland of in het buitenland?</StyledQuestion>
            {showExtraInfo7 && <div>
                <ExtraInformation>Beiden kunnen erg leuk zijn, ik heb geen voorkeur.</ExtraInformation>
                <ExtraInformation>Ik ga het liefst op vakantie in het buitenland, ik hou van andere culturen.</ExtraInformation>
                <ExtraInformation>Ik heb vliegangst en rij niet graag met de auto, dus in het binnenland.</ExtraInformation>
            </div>}

            <ImageCollage images={images.slice(3)} />
            <Vocabulary words={words} />
            <StyledAbout>
                <h1>Het grote hotel</h1>
                <p>Er was eens een toerist genaamd Kees. Kees hield van reizen en besloot een reis te maken naar Spanje. Hij reserveerde een kamer in een mooi hotel in het centrum van Barcelona.</p>

                <p>Op de dag van zijn aankomst ging Kees inchecken bij de receptie van het hotel. De receptioniste gaf hem een plattegrond van het hotel en zei: "Uw kamer is nummer 101, op de eerste verdieping. U kunt de trap nemen."</p>

                <p>Kees nam zijn bagage en begon de trap op te gaan. Maar elke keer als hij dacht dat hij bij zijn kamer was, was er weer een nieuwe gang! Het hotel was zo groot en verwarrend dat Kees verdwaalde.</p>

                <p>Uiteindelijk vond Kees een gids in het hotel. De gids lachte en zei: "Dit hotel is gigantisch! Maar maak je geen zorgen, ik zal je naar je kamer brengen."</p>

                <p> Na een lange reis door het hotel, kwam Kees eindelijk in zijn kamer. Hij keek uit het raam en zag een prachtig zicht op het strand. Hij lachte en dacht: "Dit gaat een geweldige vakantie worden!"</p>

                <p>De volgende ochtend ging Kees naar beneden voor het ontbijt. Hij vroeg de receptioniste waar het restaurant was. Ze gaf hem een kaart en zei: "Ons restaurant is altijd open, maar het kan even duren voor je het kan vinden!"</p>

                <p>Kees keek naar de kaart en zag dat het een kaart was van de hele wereld! Hij lachte en zei: "Hoe ga ik het restaurant hiermee ooit kunnen vinden?"</p>

                <p>De receptioniste lachte ook en zei: "Nee, het restaurant is daar het hoekje om. Maar we houden ervan om onze gasten een beetje te plagen. Het ontbijt is klaar, geniet ervan!"</p>

                <p>Kees lachte en dacht: "Dit is het grappigste hotel waar ik ooit ben geweest!"</p>

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
                <GrammarTitle>📚 Het bezittelijk voornaamwoord 📚</GrammarTitle>
                <GrammarParagraph> Het bezittelijk voornaamwoord geeft de bezittelijke relatie weer met een persoon, dier of organisatie.
                    <br></br>
                    <br></br>
                    Van wie is dat boek? Dat is <Highlight>mijn boek</Highlight>. Dat is <Highlight>het mijne</Highlight>. Als je bijvoorbeeld zegt: “Dat is zijn fiets”, vertelt het woord ‘zijn’ van wie de fiets is.
                    <br></br>
                    <br></br>
                    Let's check the table <a href="https://onzetaal.nl/taalloket/bezittelijk-voornaamwoord">here</a></GrammarParagraph>
                <br />
            </GrammarBox>
            <MultipleChoice questions={questions} correctAnswers={correctAnswers} />
            <Separator></Separator>
            <GrammarBox>
                <GrammarTitle>📚 Gesloten vragen 📚</GrammarTitle>
                <GrammarParagraph> Gesloten vragen zijn vragen die we enkel met ja/nee kunnen beantwoorden. In een gewone zin is de normale volgorde het <Highlight>onderwerp </Highlight> (vb. "ik") gevolgd door het <Highlight>werkwoord</Highlight> (vb. "werk") gevolgd door de rest van de zin. Bijvoorbeeld: "Ik werk in een fabriek."
                    <br />
                    <br />
                    Bij gesloten vragen draaien we deze volgorde om. Daarbij komt dan eerst het <Highlight>werkwoord</Highlight> (vb. "werk") gevolgd door het <Highlight>onderwerp</Highlight> (vb. "jij") gevolgd door de rest van de zin. Bijvoorbeeld: "Werk jij in een fabriek?"
                    <br />
                    <br></br>
                    <br></br> Let's check this explanation on word positioning <a href="https://www.braint.nl/taalgids/zinsontleding/woordvolgorde.html#:~:text=De%20gebruikelijke%20woordvolgorde%20in%20een,zin%20je%20nadruk%20wilt%20geven">here</a>.
                    And let's do some exercises <a href="https://nt2taalmenu.nl/nt2-a1-grammatica-geslotenvragen-oefening1/">here</a>.</GrammarParagraph>
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