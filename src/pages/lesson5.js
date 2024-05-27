import { StyledQuestion, LessonContainer, Separator, TitleText, GrammarBox, GrammarParagraph, GrammarTitle, Highlight, GrammarListItem, StyledLink, CenteredContainer, StyledStory } from '../pages/lesson1.styles';
import Vocabulary from '../components/Vocabulary/Vocabulary';
import VocabularySimple from '../components/Exercises/Vocabulary/VocabularySimple';
import VocabularyQuiz from '../components/Exercises/Vocabulary/VocabularyQuiz';
import MultipleChoice from '../components/Exercises/Grammar/MultipleChoice';
import ImageCollage from '../components/ImageCollage/ImageCollage';
import boot from "../images/5boot.jpg";
import fietsen from "../images/5fietsen.jpeg";
import luchthaven from "../images/5luchthaven.jpg";
import perron from "../images/5perron.jpeg";
import wandelen from "../images/5wandelen.jpg";
import zeilen from "../images/5zeilen.jpg";
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
import Conversation from '../components/Conversation/Conversation';
import { ExtraInformation } from './lesson1.styles';

function Lesson5() {
    const lessonId = 5;
    const words = [
        { dutch: 'De trein', english: 'The train' },
        { dutch: 'De bus', english: 'The bus' },
        { dutch: 'De auto', english: 'The car' },
        { dutch: 'Te voet', english: 'By foot' },
        { dutch: 'De fiets', english: 'De fiets' },
        { dutch: 'De elektrische step', english: 'The e-step' },
        { dutch: 'De boot', english: 'The boat' },
        { dutch: 'Het schip', english: 'The ship' },
        { dutch: 'Het vliegtuig', english: 'The airplane' },
        { dutch: 'Rijden', english: 'Drive' },
        { dutch: 'Wandelen', english: 'Walking' },
        { dutch: 'Lopen', english: 'Running' },
        { dutch: 'Varen', english: 'Sailing' },
        { dutch: 'Zeilen', english: 'Sailing' },
        { dutch: 'Vliegen', english: 'Flying' },
        { dutch: 'De luchthaven', english: 'The airport' },
        { dutch: 'Het kaartje', english: 'The ticket' },
        { dutch: 'De bestemming', english: 'The destination' },
        { dutch: 'Het vertrek', english: 'The departure' },
        { dutch: 'De aankomst', english: 'The arrival' },
        { dutch: 'Het perron', english: 'The platform' },
        { dutch: 'De vertraging', english: 'The delay' },
        { dutch: 'Traag', english: 'Slow' },
        { dutch: 'Snel', english: 'Fast' },
        { dutch: 'De snelheid', english: 'The speed' },
        { dutch: 'Het spoor', english: 'The railway track' },
        { dutch: 'Overstappen', english: 'To transfer' },
        { dutch: 'Het abonnement', english: 'The subscription' },
        { dutch: 'De uurregeling', english: 'The timetable' },
        { dutch: 'Het tarief', english: 'The fare' }
    ];
    const images = [
        { src: boot, caption: 'De boot' },
        { src: fietsen, caption: 'Fietsen' },
        { src: perron, caption: 'Het perron' },
        { src: wandelen, caption: 'Wandelen' },
        { src: zeilen, caption: 'Zeilen' },
        { src: luchthaven, caption: 'De luchthaven' },
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
            <Conversation
                belgianMessages={["Hey Anne! Gaan we naar het station?", "Weet jij op welk spoor hij vertrekt?", "Is dat de trein met bestemming Oostende?", "Ok, dan is het niet de hogesnelheidstrein.", "Ik moet wel nog een kaartje kopen. Kom, we vertrekken.", "Dat is handig!"]}
                dutchMessages={["Dag Toon. Ja, de trein vertrekt over een half uur.", "Ik denk op spoor drie.", "Ja, met haltes in Gent en Brugge.", "Nee klopt, dit is de stoptrein.", "Ik niet, ik heb een abonnement.", "En duur."]}
            />
            <ImageCollage images={images.slice(0, 3)} />
            <StyledQuestion onClick={() => setShowExtraInfo(!showExtraInfo)} data-translation=" How much does a ticket to Groningen cost?">Hoeveel kost een kaartje naar Groningen?</StyledQuestion>
            {showExtraInfo && <div>
                <ExtraInformation>Een kaartje kost 5 euro voor een enkele reis.</ExtraInformation>
                <ExtraInformation>Een heen-en-terug ticket kost 10 euro.</ExtraInformation>
                <ExtraInformation>Als je een abonnement hebt kost het niets.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo2(!showExtraInfo2)} data-translation=" On which platform does the train arrive?">Op welk spoort komt de trein aan?</StyledQuestion>
            {showExtraInfo2 && <div>
                <ExtraInformation>De trein komt aan op spoor 5.</ExtraInformation>
                <ExtraInformation>Je bent te optimistisch, de trein komt niet aan.</ExtraInformation>
                <ExtraInformation>De trein komt aan op spoor 7 of spoor 8.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo3(!showExtraInfo3)} data-translation=" At what time does the plane to Barcelona leave?">Om hoe laat vertrekt het vliegtuig naar Barcelona?</StyledQuestion>
            {showExtraInfo3 && <div>
                <ExtraInformation>Het vliegtuig vertrekt om acht uur.</ExtraInformation>
                <ExtraInformation>De vlucht is om negen uur.</ExtraInformation>
                <ExtraInformation>Het vliegtuig stijgt op om één uur.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo4(!showExtraInfo4)} data-translation=" Do you want to walk or go by car?">Wil je te voet gaan of met de auto?</StyledQuestion>
            {showExtraInfo4 && <div>
                <ExtraInformation>Laten we de auto nemen.</ExtraInformation>
                <ExtraInformation>Ik ga liever te voet.</ExtraInformation>
                <ExtraInformation>Ik wil wandelen.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo5(!showExtraInfo5)} data-translation=" What is the maximum speed on the highway?">Wat is de maximumsnelheid op de snelweg?</StyledQuestion>
            {showExtraInfo5 && <div>
                <ExtraInformation>In België is de maximumsnelheid 120 km/uur.</ExtraInformation>
                <ExtraInformation>De snelheidslimiet in Nederland is 130 km/uur.</ExtraInformation>
                <ExtraInformation>In de buurt van een school mag je niet sneller dan 30 km/uur rijden.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo6(!showExtraInfo6)} data-translation=" What is the destination of your travels?">Wat is de bestemming van jouw reis?</StyledQuestion>
            {showExtraInfo6 && <div>
                <ExtraInformation>Ik ga op reis naar Guatemala.</ExtraInformation>
                <ExtraInformation>Ik ga op vakantie in Spanje.</ExtraInformation>
                <ExtraInformation>Mijn reisbestemming dit jaar is Nederland.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo7(!showExtraInfo7)} data-translation=" What time is it?">Hoe laat is het?</StyledQuestion>
            {showExtraInfo7 && <div>
                <ExtraInformation>Het is twaalf uur.</ExtraInformation>
                <ExtraInformation>Het is kwart over twee.</ExtraInformation>
                <ExtraInformation>Het is halfdrie.</ExtraInformation>
            </div>}

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

export default Lesson5;