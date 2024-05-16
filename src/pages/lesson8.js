import { StyledQuestion, LessonContainer, Separator, TitleText, GrammarBox, GrammarParagraph, GrammarTitle, Highlight, GrammarListItem, StyledLink, CenteredContainer, ExtraInformation } from '../pages/lesson1.styles';
import Vocabulary from '../components/Vocabulary/Vocabulary';
import VocabularySimple from '../components/Exercises/Vocabulary/VocabularySimple';
import VocabularyQuiz from '../components/Exercises/Vocabulary/VocabularyQuiz';
import ImageCollage from '../components/ImageCollage/ImageCollage';
import bloem from "../images/8bloem.jpeg";
import boom from "../images/8boom.jpg";
import brievenbus from "../images/8brievenbus.jpg";
import dak from "../images/8dak.jpg";
import slaapkamer from "../images/8slaapkamer.png";
import voordeur from "../images/8voordeur.jpg.webp";
import GoedBezig from '../components/GoedBezig/GoedBezig';
import Verbs from '../components/Verbs/Verbs';
import VerbExercise from '../components/Exercises/Grammar/VerbExercise';
import FillInTheBlankExercise from '../components/Exercises/Vocabulary/FillintheBlankExercise';
import Translate from '../components/Exercises/Grammar/Translate';
import allowedEmails from '../pages/allowedEmails';
import { useState, useEffect } from 'react';
import bloemetjes from '../images/bloemetjes.jpg.webp';
import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import Introduction from '../components/Introduction/Introduction';
import VocabularyTime from '../components/Exercises/Vocabulary/VocabularyTime';
import Conversation from '../components/Conversation/Conversation';
import { StyledAbout } from './about.styles';

function Lesson8() {
    const lessonId = 8;
    const words = [
        { dutch: 'De tuin', english: 'The garden' },
        { dutch: 'De bloem', english: 'The flower' },
        { dutch: 'De plant', english: 'The plant' },
        { dutch: 'Het gras', english: 'The grass' },
        { dutch: 'De boom', english: 'The tree' },
        { dutch: 'De keuken', english: 'The kitchen' },
        { dutch: 'De slaapkamer', english: 'The bedroom' },
        { dutch: 'De badkamer', english: 'The bathroom' },
        { dutch: 'Het toilet', english: 'The toilet' },
        { dutch: 'De woonkamer', english: 'The living room' },
        { dutch: 'De gang', english: 'The corridor' },
        { dutch: 'De garage', english: 'The garage' },
        { dutch: 'De berging', english: 'The storage room' },
        { dutch: 'De inkomhal', english: 'The entrance hall' },
        { dutch: 'De deur', english: 'The door' },
        { dutch: 'De voordeur', english: 'The frontdoor' },
        { dutch: 'De brievenbus', english: 'The postbox' },
        { dutch: 'Het raam', english: 'The window' },
        { dutch: 'Dun', english: 'Thin' },
        { dutch: 'Dik', english: 'Fat' },
        { dutch: 'Groot', english: 'Big' },
        { dutch: 'Klein', english: 'Small' },
        { dutch: 'Terug', english: 'Back' },
        { dutch: 'Druk', english: 'Busy' },
        { dutch: 'Rustig', english: 'Calm' },
        { dutch: 'Veel', english: 'Many' },
        { dutch: 'Weinig', english: 'Few' },
        { dutch: 'Mooi', english: 'Beautiful' },
        { dutch: 'Lelijk', english: 'Ugly' },
        { dutch: 'Het dak', english: 'The roof' }
    ];
    const images = [
        { src: dak, caption: 'Het dak' },
        { src: boom, caption: 'De boom' },
        { src: voordeur, caption: 'De voordeur' },
        { src: brievenbus, caption: 'De brievenbus' },
        { src: bloem, caption: 'De bloem' },
        { src: slaapkamer, caption: 'De slaapkamer' },
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
        'Mijn auto parkeer ik in de _.',
        'Ik hou van de bloemen en planten in de _.',
        'Ik heb een heel _ huis, met 6 slaapkamers.',
        'Om energie te besparen hebben we zonnepanelen op ons _.',
        'Kan jij even in de _ kijken? Ik verwacht een kaartje.',
        'Mijn balkon is erg _. Slechts 1 vierkante meter.',
        'De straat waar ik woon is erg _, er rijden heel veel auto´s',
        'Je moet niet aanbellen bij de _, kom maar gewoon binnen.',
        'Blauwe muren vind ik echt _.',
        'Ik hou van de grote _, ze geven veel licht in de kamer.'
    ];

    const blanks = ['dak', 'tuin', 'druk', 'voordeur', 'garage', 'groot', 'brievenbus', 'lelijk', 'klein', 'ramen'];



    return (
        <div>
            <Navigation />
            <Introduction lessonId={lessonId} />
            <Conversation
                belgianMessages={["Hallo! Ik kom naar je feestje vanavond hé! Waar woon je?", "Hoe kan ik jouw huis herkennen?", "Is het een rijhuis?", "Fijn! Dan kunnen we misschien in de tuin tussen de bloemen en planten zitten?", "En heb je nog een extra slaapkamer voor indien ik te veel drink vanavond?", "Prima, dan zien we elkaar vanavond op het feest!"]}
                dutchMessages={["Prima, ik woon in de Lindelaan nummer 46.", "Het is een groot huis met blauwe muren.", "Nee, een alleenstaand huis met een grote tuin.", "Ja, dat kan. Maar ik heb ook een heel grote woonkamer.", "Ja, ik heb 4 slaapkamers, dus dat kan zeker.", "Tot straks!"]}
            />
            <ImageCollage images={images.slice(0, 3)} />
            <StyledQuestion onClick={() => setShowExtraInfo(!showExtraInfo)} data-translation=" In what kind of house do you live?">In wat voor woning woon jij?</StyledQuestion>
            {showExtraInfo && <div>
                <ExtraInformation>Ik woon in een alleenstaand huis.</ExtraInformation>
                <ExtraInformation>Ik woon in een appartement, op de derde verdieping.</ExtraInformation>
                <ExtraInformation>Ik woon in een rijhuis, in Amsterdam.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo2(!showExtraInfo2)} data-translation=" Do you have a big garden?">Heb jij een grote tuin?</StyledQuestion>
            {showExtraInfo2 && <div>
                <ExtraInformation>Nee, enkel een balkon en een terras.</ExtraInformation>
                <ExtraInformation>Ja, ik heb een grote tuin, vol met bloemen en planten.</ExtraInformation>
                <ExtraInformation>Nee, ik heb een klein maar fijn tuintje.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo3(!showExtraInfo3)} data-translation=" How big is your house?">Hoe groot is jouw woning?</StyledQuestion>
            {showExtraInfo3 && <div>
                <ExtraInformation>Mijn huis heeft 4 slaapkamers en 2 badkamers.</ExtraInformation>
                <ExtraInformation>De vloeroppervlakte is 200 vierkante meter.</ExtraInformation>
                <ExtraInformation>Redelijk groot, maar ik ken de details niet.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo4(!showExtraInfo4)} data-translation=" What's your favorite spot in your house?">Wat is je favoriete plek in huis?</StyledQuestion>
            {showExtraInfo4 && <div>
                <ExtraInformation>De tuin, ik hou van de rust.</ExtraInformation>
                <ExtraInformation>Mijn slaapkamer, ik wil altijd slapen.</ExtraInformation>
                <ExtraInformation>De keuken, ik hou van de geur van eten.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo5(!showExtraInfo5)} data-translation=" What makes your house a home?">Wat maakt jouw huis tot een thuis?</StyledQuestion>
            {showExtraInfo5 && <div>
                <ExtraInformation>Samen zijn met familie.</ExtraInformation>
                <ExtraInformation>Dat mijn lievelingsspullen er zijn.</ExtraInformation>
                <ExtraInformation>Ik voel me overal thuis.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo6(!showExtraInfo6)} data-translation=" Did you move house often?">Ben je al vaak verhuisd?</StyledQuestion>
            {showExtraInfo6 && <div>
                <ExtraInformation>Nee, ik woon hier al levenslang.</ExtraInformation>
                <ExtraInformation>Enkele keren, maar steeds binnen dezelfde stad.</ExtraInformation>
                <ExtraInformation>Ja, ik heb vaak nood aan verandering.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo7(!showExtraInfo7)} data-translation=" What would be your dream house?">Wat is jouw droomwoning?</StyledQuestion>
            {showExtraInfo7 && <div>
                <ExtraInformation>Mijn droomwoning is een grote villa met zwembad.</ExtraInformation>
                <ExtraInformation>Een klein huisje in de natuur met een vijver.</ExtraInformation>
                <ExtraInformation>Mijn droomwoning is een penthouse in New York.</ExtraInformation>
            </div>}
            <ImageCollage images={images.slice(3)} />
            <Vocabulary words={words} />
            <StyledAbout>
                <h1>De kleine bloem</h1>
                <p>Er was eens een bloem die in de tuin stond. Op een dag zei de bloem tegen de boom: “Ik ben zo klein, ik kan niet eens over het gras heen kijken!”</p>
                <p>De boom lachte en zei: “Maar je hebt wel het beste uitzicht op de voordeur. Je kunt altijd zien wie er binnenkomt en vertrekt!”</p>
                <p>De bloem dacht even na en zei toen: “Dat is waar, ik heb het beste uitzicht op de voordeur. Maar ik kan nog steeds niet zien wat er in de keuken gebeurt!”</p>
                <p>En de boom antwoordde lachend: “Maak je geen zorgen, je mist niets. Het enige dat ze in de keuken doen, is water geven aan de planten!”</p>
            </StyledAbout>
            <VocabularyQuiz words={words} />
            <VocabularySimple words={words} />
            <FillInTheBlankExercise sentences={sentences} blanks={blanks} />
            <GoedBezig
                text={{ dutch: 'De bloemetjes buiten zetten', english: '"Putting the flowers outside"' }}
                image={bloemetjes}
            />
            <CenteredContainer>
                <StyledLink href="https://nl.pinterest.com/pin/319051954842717912/">
                    Beschrijf jouw woning in detail. Vertel over de kamers, de tuin en andere bijzonderheden.
                </StyledLink>
                <StyledLink href="https://www.nt2.nl/documenten/van_start/herhalingsoefeningen/van_start-herh.oef.thema_7.pdf">
                    Laten we enkele extra oefeningen doen.
                </StyledLink>
            </CenteredContainer>
            <Separator></Separator>
            <TitleText>Grammatica / Grammar</TitleText>
            <LessonContainer>
                <Verbs
                    verb="wonen"
                    translation="to live"
                    conjugations={["woon", "woont", "woont", "wonen", "wonen", "wonen"]}
                />
                <Verbs
                    verb="zitten"
                    translation="to sit"
                    conjugations={["zit", "zit", "zit", "zitten", "zitten", "zitten"]}
                />
                <Verbs
                    verb="staan"
                    translation="to stand"
                    conjugations={["sta", "staat", "staat", "staan", "staan", "staan"]}
                />
                <Verbs
                    verb="hangen"
                    translation="to hang"
                    conjugations={["hang", "hangt", "hangt", "hangen", "hangen", "hangen"]}
                />
                <Verbs
                    verb="maken"
                    translation="to make"
                    conjugations={["maak", "maakt", "maakt", "maken", "maken", "maken"]}
                />
                <Verbs
                    verb="herkennen"
                    translation="to recognise"
                    conjugations={["herken", "herkent", "herkent", "herkennen", "herkennen", "herkennen"]}
                />
            </LessonContainer>
            <VerbExercise verbs={[
                { verb: "wonen", conjugations: ["woon", "woont", "woont", "wonen", "wonen", "wonen"] },
                { verb: "zitten", conjugations: ["zit", "zit", "zit", "zitten", "zitten", "zitten"] },
                { verb: "staan", conjugations: ["sta", "staat", "staat", "staan", "staan", "staan"] },
                { verb: "hangen", conjugations: ["hang", "hangt", "hangt", "hangen", "hangen", "hangen"] },
                { verb: "maken", conjugations: ["maak", "maakt", "maakt", "maken", "maken", "maken"] },
                { verb: "herkennen", conjugations: ["herken", "herkent", "herkent", "herkennen", "herkennen", "herkennen"] }
            ]} />
            <Translate sentences={[
                { english: "I live in a house", translation: "Ik woon in een huis" },
                { english: "The flowers stand in the garden", translation: "De bloemen staan in de tuin" },
                { english: "My house has 4 bedrooms", translation: "Mijn huis heeft 4 slaapkamers" },
                { english: "The grass is always green", translation: "Het gras is altijd groen" },
                { english: "We live on the third floor", translation: "Wij wonen op de derde verdieping" },
                { english: "He sits on the toilet", translation: "Hij zit op het toilet" },
                { english: "Letters come in the postbox", translation: "Brieven komen in de brievenbus" },
                { english: "She is nog big, but small", translation: "Zij is niet groot, maar klein" },
                { english: "It is way too busy here", translation: "Het is veel te druk hier" },
                { english: "Flowers are not ugly, but beautiful", translation: "Bloemen zijn niet lelijk, maar mooi" }
            ]} />
            <GrammarBox>
                <GrammarTitle>📚 Meewerkend voorwerp 📚</GrammarTitle>
                <GrammarParagraph>
                    Het meewerkend voorwerp is de persoon aan wie iets gericht, gegeven, .. wordt. Dus is het meewerkend voorwerp de ontvanger. Het is niet perse nodig dat hij zelf ook "meewerkt". Vaak staat het woord "aan" of "voor" vóór het meewerkend voorwerp. Bijvoorbeeld "ik geef een cadeau aan jou", of "dat drankje is voor haar".</GrammarParagraph>
                <br />
                <GrammarParagraph>
                    De meewerkende voorwerpen zijn: </GrammarParagraph>
                <GrammarListItem>Mij</GrammarListItem>
                <GrammarListItem>Jou</GrammarListItem>
                <GrammarListItem>Hem/haar/u</GrammarListItem>
                <GrammarListItem>Ons</GrammarListItem>
                <GrammarListItem>Jullie</GrammarListItem>
                <GrammarListItem>Hen</GrammarListItem>
                <br />
                <GrammarParagraph> <Highlight>Let's do these exercises: <a href="https://www.taal-oefenen.nl/taal-groep-8/zinsontleding/meewerkend-voorwerp/klik-het-meewerkend-voorwerp-aan-2">1</a> and <a href="https://www.cambiumned.nl/zinsdelen/meewerkend-voorwerp/">2</a> </Highlight></GrammarParagraph>
            </GrammarBox>
            <GrammarBox>
                <GrammarTitle>📚 Trappen van vergelijking 📚</GrammarTitle>
                <GrammarParagraph>To compare the value of an adjective to another one, we can use "trappen van vergelijking (degrees of comparison)". I consider that house to be beautiful (mooi), more beautiful (mooier) or the most beautiful (mooist).

                    Let's check some information <a href="https://onzetaal.nl/taalloket/trappen-van-vergelijking">here</a></GrammarParagraph>
                <br />
                <GrammarParagraph> <Highlight>Let's do these exercises: <a href="https://www.jufmelis.nl/woordenschat/trappen-van-vergelijking/trappen-van-vergelijking-1">1</a> and <a href="https://www.taal-oefenen.nl/instruction/taal/spelling/regelwoorden-1/trappen-van-vergelijking-regelmatige-woorden">2</a> </Highlight></GrammarParagraph>
            </GrammarBox>
            <Separator></Separator>
            <TitleText>Lezen / reading</TitleText>
            <CenteredContainer>
                <StyledLink href="https://www.nedbox.be/teaser/een-huis-gent">
                    "Een speciaal huis in Gent?" Check the article in the link and let's answer the related questions.
                </StyledLink>
                <StyledLink href="https://www.nedbox.be/teaser/hoe-groot-je-huis">
                    "How big is your house?" Check the article in the link and let's answer the related questions.
                </StyledLink>
            </CenteredContainer>

            <Separator></Separator>
            <TitleText>Huiswerk / Homework</TitleText>
            <GrammarBox>
                <GrammarParagraph>
                    Let's make the exercises in the Google Drive</GrammarParagraph>

            </GrammarBox>
            <Footer />
        </div>
    );
}

export default Lesson8;