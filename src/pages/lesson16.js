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
import klerenman from '../images/klerenman.jpg';
import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import Introduction from '../components/Introduction/Introduction';
import VocabularyTime from '../components/Exercises/Vocabulary/VocabularyTime';
import Conversation from '../components/Conversation/Conversation';
import { StyledAbout } from './about.styles';

function Lesson16() {
    const lessonId = 16;
    const words = [
        { dutch: 'Het tussendoortje', english: 'The snack' },
        { dutch: 'Winkelen', english: 'To shop' },
        { dutch: 'De prijs', english: 'The price' },
        { dutch: 'De coupon', english: 'The coupon' },
        { dutch: 'Het gangpad', english: 'The aisle' },
        { dutch: 'De tas', english: 'The bag' },
        { dutch: 'De winkelwagen', english: 'The shopping cart' },
        { dutch: 'De drank', english: 'The beverage' },
        { dutch: 'De boodschappenmand', english: 'The shopping basket' },
        { dutch: 'De conserven', english: 'The canned food' },
        { dutch: 'De diepvries', english: 'The freezer' },
        { dutch: 'De kassa', english: "The till" },
        { dutch: 'De zuivel', english: 'The dairy' },
        { dutch: 'De vleeswaren', english: 'The meats' },
        { dutch: 'De kruiden', english: 'The spices' },
        { dutch: 'Het brood', english: 'The bread' },
        { dutch: 'Het snoep', english: 'The candy' },
        { dutch: 'Het fruit', english: 'The fruit' },
        { dutch: 'De noot', english: 'The nut' },
        { dutch: 'De chocolade', english: 'The chocolate' },
        { dutch: 'De koffie', english: 'The coffee' },
        { dutch: 'De thee', english: 'The tea' },
        { dutch: 'De frisdrank', english: 'The soft drink' },
        { dutch: 'De rijst', english: 'The rice' },
        { dutch: 'De koek', english: 'The cookie' },
        { dutch: 'Het sap', english: 'The juice' },
        { dutch: 'Zoeken', english: 'To search' },
        { dutch: 'Nodig', english: 'Needed' },
        { dutch: 'Rekenen', english: 'To count' },
        { dutch: 'Leggen', english: 'To lay' }
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
        'Om te sporten heb je _ nodig.',
        'Ik ga zwemmen. Waar is mijn _?',
        'In de zomer veranderen er velen van een lange naar een korte _.',
        'Ik heb het _, maar ik heb een andere maat nodig.',
        'We moeten vertrekken, ga je eens snel _.',
        'Die dikke jas kan je in de zomer best _.',
        'Jouw _ moeten qua stijl wel passen bij jouw schoenen.',
        'Ik _ een jurk van een bekende modeontwerper.',
        'Ofwel ben ik te groot, ofwel is de broek te _.',
        'Hele chique kleren zijn gewoonweg niet mijn _.'
    ];

    const blanks = ['gepast', 'aankleden', 'uitdoen', 'sportkleding', 'sokken', 'zwembroek', 'draag', 'stijl', 'kort', 'broek'];



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
                <h1>Mode in België en Nederland</h1>
                <p>In Nederland bestaat er een “Modepolitie” televisieprogramma waarin stylisten mensen op straat aanspreken op hun kledingkeuzes en hen voorzien van stijladvies. Gelukkig zijn er geen boetes!
                </p>
                <p>
                    In België en Nederland zijn kledingruilfeestjes populair. Mensen brengen hun ongewenste kleding mee en ruilen die met anderen. Het is een duurzame manier om je garderobe te vernieuwen.</p>
                <p>
                    Fietsen is een integraal onderdeel van het dagelijks leven in beide landen. Daarom zijn er speciale fietsvriendelijke kledingmerken die stijlvolle én praktische outfits aanbieden voor fietsers.</p>
                <p>
                    Tijdens Koningsdag in Nederland (27 april) kleurt het hele land oranje. Mensen dragen oranje kleding, accessoires en zelfs oranje pruiken om hun koninklijke trots te tonen.</p>


            </StyledAbout>
            <VocabularyQuiz words={words} />
            <VocabularySimple words={words} />
            <FillInTheBlankExercise sentences={sentences} blanks={blanks} />
            <GoedBezig
                text={{ dutch: 'De kleren maken de man', english: '"The clothes make the man"' }}
                image={klerenman}
            />
            <CenteredContainer>
                <StyledLink href="https://www.hln.be/mode-en-beauty/niet-nerdy-maar-trendy-zo-draag-je-sokken-in-sandalen-2-000-jaar-geleden-liepen-de-romeinen-ook-zo-rond~ad5f3e9d/">
                    Lees het artikel en geef een korte samenvatting.
                </StyledLink>
                <StyledLink href="https://www.libelle.nl/actueel/deze-bizarre-nieuwe-trend-voor-huisdieren-is-een-hit-op-internet~b4eb12bf/?referrer=https://www.google.com/">
                    Lees dit artikel en geef een korte samenvatting.
                </StyledLink>
            </CenteredContainer>
            <Separator></Separator>
            <TitleText>Grammatica / Grammar</TitleText>
            <LessonContainer>
                <Verbs
                    verb="passen"
                    translation="to fit"
                    conjugations={["pas", "past", "past", "passen", "passen", "passen"]}
                    vd="gepast"
                    ovt="paste"
                />
                <Verbs
                    verb="dragen"
                    translation="to wear"
                    conjugations={["draag", "draagt", "draagt", "dragen", "dragen", "dragen"]}
                    vd="gedragen"
                    ovt="droeg"
                />
                <Verbs
                    verb="aantrekken"
                    translation="to pull on"
                    conjugations={["trek aan", "trekt aan", "trekt aan", "trekken aan", "trekken aan", "trekken aan"]}
                    vd="aangetrokken"
                    ovt="trok aan"
                />
                <Verbs
                    verb="uitdoen"
                    translation="to take off"
                    conjugations={["doe uit", "doet uit", "doet uit", "doen uit", "doen uit", "doen uit"]}
                    vd="uitgedaan"
                    ovt="deed uit"
                />
                <Verbs
                    verb="aankleden"
                    translation="to get dressed"
                    conjugations={["kleed aan", "kleedt aan", "kleedt aan", "kleden aan", "kleden aan", "kleden aan"]}
                    vd="aangekleed"
                    ovt="kleedde aan"
                />
                <Verbs
                    verb="meten"
                    translation="to measure"
                    conjugations={["meet", "meet", "meet", "meten", "meten", "meten"]}
                    vd="gemeten"
                    ovt="meette"
                />
            </LessonContainer>
            <VerbExercise verbs={[
                { verb: "passen", conjugations: ["pas", "past", "past", "passen", "passen", "passen"] },
                { verb: "dragen", conjugations: ["draag", "draagt", "draagt", "dragen", "dragen", "dragen"] },
                { verb: "aantrekken", conjugations: ["trek aan", "trekt aan", "trekt aan", "trekken aan", "trekken aan", "trekken aan"] },
                { verb: "uitdoen", conjugations: ["doe uit", "doet uit", "doet uit", "doen uit", "doen uit", "doen uit"] },
                { verb: "aankleden", conjugations: ["kleed aan", "kleedt aan", "kleedt aan", "kleden aan", "kleden aan", "kleden aan"] },
                { verb: "meten", conjugations: ["meet", "meet", "meet", "meten", "meten", "meten"] }
            ]} />
            <Translate sentences={[
                { english: "I took off my clothes", translation: "Ik deed mijn kleding uit" },
                { english: "I measure the pants", translation: "Ik meet de broek" },
                { english: "He measured the dress", translation: "Hij meette de jurk" },
                { english: "You have measured the swimming trunks", translation: "Jij hebt de zwembroek gemeten" },
                { english: "I pull on my socks", translation: "Ik trek mijn sokken aan" },
                { english: "I take off my coat", translation: "Ik doe mijn jas uit" },
                { english: "I wore fashion of a brand", translation: "Ik droeg mode van een merk" },
                { english: "I fitted the trousers, but I need another size", translation: "Ik paste de borek, maar ik heb een andere maat nodig" },
                { english: "We have measured the fitting room", translation: "Wij hebben de paskamer gemeten" },
                { english: "Which sizes do they have?", translation: "Welke maten hebben zij?" }
            ]} />
            <GrammarBox>
                <GrammarTitle>📚 Verwijswoorden 📚</GrammarTitle>
                <GrammarParagraph>
                    Verwijswoorden zijn (vaak kleine) woorden die terugwijzen naar andere woorden in de zin of in de tekst.
                    Er zijn verwijswoorden voor een plaats  (er, daar),
                    voor een persoon (hem, haar, ze),
                    voor een ding (het, dit, dat),
                    of voor een tijd (toen, dan).
                    Je gebruikt ze om de zinnen korter te maken. </GrammarParagraph>
                <br />
                <GrammarParagraph> <Highlight>Laten we deze eens verder bekijken: <a href="https://nt2taalmenu.nl/wat-zijn-verwijswoorden/">hier</a> </Highlight></GrammarParagraph>
                <GrammarParagraph> <Highlight>En laten we enkele oefeningen maken: <a href="https://nt2taalmenu.nl/nt2-a2-grammatica-menuverwijswoorden/">hier</a> </Highlight></GrammarParagraph>
            </GrammarBox>
            <GrammarBox>
                <GrammarTitle>📚 Zinsbouw 📚</GrammarTitle>
                <GrammarParagraph>Laten we nog enkele oefeningen maken met "omdat", "als" en "om... te...".</GrammarParagraph>
                <br />
                <GrammarParagraph> <Highlight>Oefening: <a href="https://nt2taalmenu.nl/nt2-a2-grammatica-menuzinnenmetomdat/">1</a> </Highlight></GrammarParagraph>
                <GrammarParagraph> <Highlight><a href="https://nt2taalmenu.nl/nt2-a2-grammatica-menuzinnenmetals/">2</a> </Highlight></GrammarParagraph>
                <GrammarParagraph><Highlight><a href="https://nt2taalmenu.nl/nt2-a2-grammatica-menuzinnenmetomte/">3</a> </Highlight></GrammarParagraph>

            </GrammarBox>
            <Separator></Separator>
            <TitleText>Lezen / reading</TitleText>
            <CenteredContainer>
                <StyledLink href="https://www.nedbox.be/teaser/tweedehands-trouwen">
                    "Tweedehands trouwen": bekijk het artikel via de link en beantwoord de vragen.
                </StyledLink>
                <StyledLink href="https://www.nedbox.be/teaser/regels-over-kleding">
                    "Regels over kleding": bekijk het artikel via de link en beantwoord de vragen.
                </StyledLink>
            </CenteredContainer>

            <Separator></Separator>
            <TitleText>Huiswerk / Homework</TitleText>
            <GrammarBox>
                <GrammarParagraph>
                    Maak <a href="https://nt2taalmenu.nl/nt2-a2-grammatica-menuzinnenmetwant/">deze oefeningen</a>.</GrammarParagraph>
            </GrammarBox>
            <Footer />
        </div >
    );
}

export default Lesson16;