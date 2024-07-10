import { StyledQuestion, LessonContainer, Separator, TitleText, GrammarBox, GrammarParagraph, GrammarTitle, Highlight, GrammarListItem, StyledLink, CenteredContainer, ExtraInformation } from '../pages/lesson1.styles';
import Vocabulary from '../components/Vocabulary/Vocabulary';
import VocabularySimple from '../components/Exercises/Vocabulary/VocabularySimple';
import VocabularyQuiz from '../components/Exercises/Vocabulary/VocabularyQuiz';
import ImageCollage from '../components/ImageCollage/ImageCollage';
import diepvries from "../images/16diepvries.jpeg";
import gangpad from "../images/16gangpad.jpg";
import groenteafdeling from "../images/16groenteafdeling.jpg";
import kassa from "../images/16kassa.jpg";
import winkelmand from "../images/16winkelmand.jpg.webp";
import winkelwagen from "../images/16winkelwagen.jpg";
import GoedBezig from '../components/GoedBezig/GoedBezig';
import Verbs from '../components/Verbs/Verbs';
import VerbExercise from '../components/Exercises/Grammar/VerbExercise';
import FillInTheBlankExercise from '../components/Exercises/Vocabulary/FillintheBlankExercise';
import Translate from '../components/Exercises/Grammar/Translate';
import allowedEmails from '../pages/allowedEmails';
import { useState, useEffect } from 'react';
import supermarkt from '../images/supermarkt.jpg';
import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import Introduction from '../components/Introduction/Introduction';
import VocabularyTime from '../components/Exercises/Vocabulary/VocabularyTime';
import Conversation from '../components/Conversation/Conversation';
import { StyledAbout } from './about.styles';

function Lesson17() {
    const lessonId = 17;
    const words = [
        { dutch: 'De wetenschap', english: 'The science' },
        { dutch: 'De technologie', english: 'The technology' },
        { dutch: 'De psychologie', english: 'The psychology' },
        { dutch: 'De filosofie', english: 'The philosophy' },
        { dutch: 'De proef', english: 'The test' },
        { dutch: 'De chemie', english: 'The chemistry' },
        { dutch: 'De fysica', english: 'The physics' },
        { dutch: 'De innovatie', english: 'The innovation' },
        { dutch: 'Het internet', english: 'The internet' },
        { dutch: 'De software', english: 'The software' },
        { dutch: 'De analyse', english: 'The analysis' },
        { dutch: 'Programmeren', english: "To program" },
        { dutch: 'Digitaal', english: 'Digital' },
        { dutch: 'Sociaal', english: 'Social' },
        { dutch: 'Het onderzoek', english: 'The investigation' },
        { dutch: 'Het bewijs', english: 'The proof' },
        { dutch: 'Bewijzen', english: 'To proof' },
        { dutch: 'Het gedrag', english: 'The behavior' },
        { dutch: 'Het feit', english: 'The fact' },
        { dutch: 'De statistiek', english: 'The statistics' },
        { dutch: 'De bevraging', english: 'The survey' },
        { dutch: 'Het resultaat', english: 'The result' },
        { dutch: 'Ontkennen', english: 'To deny' },
        { dutch: 'Ontkrachten', english: 'To proof wrong' },
        { dutch: 'Onderzoeken', english: 'To investigate' },
        { dutch: 'De samenwerking', english: 'The collaboration' },
        { dutch: 'De toekomst', english: 'The future' },
        { dutch: 'Het verleden', english: 'The past' },
        { dutch: 'De wetenschapper', english: 'The scientist' },
        { dutch: 'Het instituut', english: 'The institute' }
    ];
    const images = [
        { src: diepvries, caption: 'De diepvries' },
        { src: gangpad, caption: 'Het gangpad' },
        { src: groenteafdeling, caption: 'De groenteafdeling' },
        { src: kassa, caption: 'De kassa' },
        { src: winkelmand, caption: 'De winkelmand' },
        { src: winkelwagen, caption: 'De winkelwagen' },
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
        'Voor melk moet je bij de _afdeling zijn.',
        'Pasta en rijst vind je bij het gangpad van de _ voeding.',
        'Ik ga geen cola kopen, ik heb al genoeg _ gedronken.',
        'Ik heb tomaten nodig, we moeten nog langs de _afdeling.',
        'Het _ ligt vaak bij de kassa, zodat kinderen het nog snel nemen.',
        'Heb je een muntstuk van 1 euro, voor de _?',
        'Kan jij de spullen _ aan de kassa?',
        'Heb je een _ nodig, of ga je het zo dragen?',
        'Ik _ nog noten, ik kan ze nergens vinden.',
        'Heb jij _ voor een korting op de prijs?'
    ];

    const blanks = ['winkelwagen', 'groente', 'snoep', 'zuivel', 'coupons', 'droge', 'inladen', 'frisdrank', 'tasje', 'zoek'];



    return (
        <div>
            <Navigation />
            <Introduction lessonId={lessonId} />
            <Conversation
                belgianMessages={["Hey Maaike! Ga je mee naar de supermarkt?", "Bijna alles, mijn koelkast is leeg.", "Zullen we naar de Carrefour gaan, of is die te duur?", "OK, laten we naar de Lidl gaan. Maar hebben ze daar alle frisdranken die ik nodig heb?", "Prima. Help me er aan denken dat we de diepvriesgroenten niet vergeten, aub!", "OK!"]}
                dutchMessages={["Hey Sam, graag. Wat heb je nodig?", "Prima, ik heb eieren, melk en yoghurt nodig, dus moeten we bij de zuivelproducten zijn.", "Ja, die is te duur, beter naar een goedkopere winkel.", "Volgens mij wel. En anders bezoeken we nog wel een andere winkel.", "Prima, doe ik! Kom, we vertrekken."]}
            />
            <ImageCollage images={images.slice(0, 3)} />
            <StyledQuestion onClick={() => setShowExtraInfo(!showExtraInfo)} data-translation=" What is your favourite supermarket and why?">Wat is jouw favoriete supermarkt en waarom?</StyledQuestion>
            {showExtraInfo && <div>
                <ExtraInformation>Ik winkel het liefst bij Aldi, omdat die goedkoop is.</ExtraInformation>
                <ExtraInformation>Voor mij is het belangrijkste dat er veel keuze is, dus Carrefour.</ExtraInformation>
                <ExtraInformation>Mijn favoriete supermarkt is Colruyt, omdat ze daar mijn winkelwagen inladen.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo2(!showExtraInfo2)} data-translation=" How often do you go to the supermarket?">Hoe vaak ga je naar de supermarkt?</StyledQuestion>
            {showExtraInfo2 && <div>
                <ExtraInformation>Ik ga 1 keer per week naar de supermarkt.</ExtraInformation>
                <ExtraInformation>Ik ga bijna elke dag, telkens om iets kleins bij te halen.</ExtraInformation>
                <ExtraInformation>Zo weinig mogelijk, ik vind winkelen echt niet tof.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo3(!showExtraInfo3)} data-translation=" Which products do you buy almost always?">Welke producten koop je bijna altijd?</StyledQuestion>
            {showExtraInfo3 && <div>
                <ExtraInformation>Vooral koffie, vlees zeker niet, dat koop ik bij de slager.</ExtraInformation>
                <ExtraInformation>Ik koop altijd de dagelijkse benodigdheden, zoals brood en pasta.</ExtraInformation>
                <ExtraInformation>Merkproducten, de rest koop ik liever op de markt.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo4(!showExtraInfo4)} data-translation=" Do you sometimes have a chat with the cashier?">Sla je soms een praatje met de kassierster?</StyledQuestion>
            {showExtraInfo4 && <div>
                <ExtraInformation>Nee, ik ben meestal gestrest om mijn spullen in te pakken.</ExtraInformation>
                <ExtraInformation>Af en toe, ik vind dat erg leuk.</ExtraInformation>
                <ExtraInformation>Nee, ik ben wel vriendelijk, maar probeer hen niet te storen.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo5(!showExtraInfo5)} data-translation=" With which transport mode do you go to the supermarket?">Met welk vervoersmiddel ga je naar de supermarkt?</StyledQuestion>
            {showExtraInfo5 && <div>
                <ExtraInformation>Meestal te voet, al is het dragen van de producten soms erg zwaar.</ExtraInformation>
                <ExtraInformation>Met de fiets, ik heb een fietstas voor zware spullen.</ExtraInformation>
                <ExtraInformation>Met de auto, zo kan ik veel dingen in 1 keer kopen.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo6(!showExtraInfo6)} data-translation=" What do you need from the supermarket at this very moment?">Wat heb je op dit moment nodig uit de supermarkt?</StyledQuestion>
            {showExtraInfo6 && <div>
                <ExtraInformation>Eigenlijk niets, ik heb alles al.</ExtraInformation>
                <ExtraInformation>Ik heb diepvriesproducten nodig, alsook wasmiddel.</ExtraInformation>
                <ExtraInformation>Groenten en fruit heb ik nodig, en koffie.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo7(!showExtraInfo7)} data-translation=" Do you sometimes let people go in front of you at the till?">Laat je mensen soms voor gaan aan de kassa?</StyledQuestion>
            {showExtraInfo7 && <div>
                <ExtraInformation>Ja, maar enkel als ze slechts enkele producten hebben.</ExtraInformation>
                <ExtraInformation>Als het oudere of minder mobiele mensen zijn wel ja.</ExtraInformation>
                <ExtraInformation>Nee, nooit. Iedereen moet wachten.</ExtraInformation>
            </div>}
            <ImageCollage images={images.slice(3)} />
            <Vocabulary words={words} />
            <StyledAbout>
                <h1>Supermarkten in België en Nederland</h1>
                <p>De grootste supermarktketen in België is Delhaize, met 830 winkels. Andere ketens zijn onder meer Colruyt, Carrefour, en Aldi.
                </p>
                <p>
                    In België is het gebruikelijk om frietjes te kopen in de supermarkt. Ja, je leest het goed: frietjes! Ze hebben zelfs speciale rekken voor diepvriesfrietjes.</p>
                <p>
                    Albert Heijn (AH) is één van de grootste en meest populaire supermarkten in Nederland. Ze hebben een breed scala aan producten en zijn bekend om hun bonuskaartprogramma.</p>
                <p>
                    De Nederlandse supermarkten hebben vaak een kaasafdeling die je versteld doet staan. Van jonge kaas tot oude kaas, ze hebben het allemaal!</p>


            </StyledAbout>
            <VocabularyQuiz words={words} />
            <VocabularySimple words={words} />
            <FillInTheBlankExercise sentences={sentences} blanks={blanks} />
            <GoedBezig
                text={{ dutch: 'Er is nog veel werk aan de winkel', english: '"There is still a lot of work on the shop"' }}
                image={supermarkt}
            />
            <CenteredContainer>
                <StyledLink href="https://www.hln.be/film/internet-in-de-ban-van-supermarktscene-home-alone-uit-1990-raad-eens-hoeveel-die-kar-van-kevin-vandaag-kost~a7c6735b/">
                    Lees het artikel en geef een korte samenvatting.
                </StyledLink>
                <StyledLink href="https://www.degroenemeisjes.nl/verpakkingsvrije-winkels/">
                    Lees dit artikel en geef een korte samenvatting.
                </StyledLink>
            </CenteredContainer>
            <Separator></Separator>
            <TitleText>Grammatica / Grammar</TitleText>
            <LessonContainer>
                <Verbs
                    verb="rekenen"
                    translation="to count"
                    conjugations={["reken", "rekent", "rekent", "rekenen", "rekenen", "rekenen"]}
                    vd="gerekend"
                    ovt="rekende"
                />
                <Verbs
                    verb="leggen"
                    translation="to lay"
                    conjugations={["leg", "legt", "legt", "leggen", "leggen", "leggen"]}
                    vd="gelegd"
                    ovt="legde"
                />
                <Verbs
                    verb="zoeken"
                    translation="to search"
                    conjugations={["zoek", "zoekt", "zoekt", "zoeken", "zoeken", "zoeken"]}
                    vd="gezocht"
                    ovt="zocht"
                />
                <Verbs
                    verb="winkelen"
                    translation="to shop"
                    conjugations={["winkel", "winkelt", "winkelt", "winkelen", "winkelen", "winkelen"]}
                    vd="gewinkeld"
                    ovt="winkelde"
                />
                <Verbs
                    verb="kopen"
                    translation="to buy"
                    conjugations={["koop", "koopt", "koopt", "kopen", "kopen", "kopen"]}
                    vd="gekocht"
                    ovt="kocht"
                />
                <Verbs
                    verb="praten"
                    translation="to talk"
                    conjugations={["praat", "praat", "praat", "praten", "praten", "praten"]}
                    vd="gepraat"
                    ovt="praatte"
                />
            </LessonContainer>
            <VerbExercise verbs={[
                { verb: "rekenen", conjugations: ["reken", "rekent", "rekent", "rekenen", "rekenen", "rekenen"] },
                { verb: "leggen", conjugations: ["leg", "legt", "legt", "leggen", "leggen", "leggen"] },
                { verb: "zoeken", conjugations: ["zoek", "zoekt", "zoekt", "zoeken", "zoeken", "zoeken"] },
                { verb: "winkelen", conjugations: ["winkel", "winkelt", "winkelt", "winkelen", "winkelen", "winkelen"] },
                { verb: "kopen", conjugations: ["koop", "koopt", "koopt", "kopen", "kopen", "kopen"] },
                { verb: "praten", conjugations: ["praat", "praat", "praat", "praten", "praten", "praten"] }
            ]} />
            <Translate sentences={[
                { english: "We have bought a car", translation: "Wij hebben een auto gekocht" },
                { english: "I searched milk", translation: "Ik zocht melk" },
                { english: "I have laid it back", translation: "Ik heb het terug gelegd" },
                { english: "I searched you", translation: "Ik zocht jou" },
                { english: "I talked with him", translation: "Ik praatte met hem" },
                { english: "We talked with you", translation: "Wij praatten met jou" },
                { english: "We bought candy", translation: "Wij kochten snoep" },
                { english: "We searched dairy products", translation: "Wij zochten zuivelproducten" },
                { english: "I count on you", translation: "Ik reken op jou" },
                { english: "The chicken has laid an egg", translation: "De kip heeft een ei gelegd" }
            ]} />
            <GrammarBox>
                <GrammarTitle>📚 Verkleinwoorden 📚</GrammarTitle>
                <GrammarParagraph>
                    Bij verkleinwoorden gebruiken we steeds het lidwoord "het". De verkleinwoorden zelf kunnen echter verschillende vormen hebben, zoals "je", "tje" of zelfs "etje". </GrammarParagraph>
                <br />
                <GrammarParagraph> <Highlight>Laten we deze eens verder bekijken: <a href="https://www.jufmelis.nl/spelling/verkleinwoorden-basisregels">hier</a> </Highlight></GrammarParagraph>
                <GrammarParagraph> <Highlight>En laten we enkele oefeningen maken: <a href="https://www.jufmelis.nl/extra/nt2-verkleinwoorden/nt2-verkleinwoorden-1">hier</a> </Highlight></GrammarParagraph>
            </GrammarBox>
            <Separator></Separator>
            <TitleText>Lezen / reading</TitleText>
            <CenteredContainer>
                <StyledLink href="https://www.nedbox.be/exercise/49ab9143-42d1-4994-98bf-76b120eff7ac">
                    "Tijd aan de kassa": bekijk het artikel via de link en beantwoord de vragen.
                </StyledLink>
                <StyledLink href="https://www.nedbox.be/exercise/46ee80f1-8d74-4e9f-9445-ec3fd1c0fb71">
                    "Werken in een supermarkt": bekijk het artikel via de link en beantwoord de vragen.
                </StyledLink>
            </CenteredContainer>

            <Separator></Separator>
            <TitleText>Huiswerk / Homework</TitleText>
            <GrammarBox>
                <GrammarParagraph>
                    Maak <a href="https://www.taal-oefenen.nl/instruction/taal/spelling/regelwoorden-1/verkleinwoorden-met-je-tje-pje-of-etje">deze oefeningen</a>.</GrammarParagraph>
            </GrammarBox>
            <Footer />
        </div >
    );
}

export default Lesson17;