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
                    verb="bezoeken"
                    translation="to visit"
                    conjugations={["bezoek", "bezoekt", "bezoekt", "bezoeken", "bezoeken", "bezoeken"]}
                />
                <Verbs
                    verb="kunnen"
                    translation="to be able to"
                    conjugations={["kan", "kunt", "kan", "kunnen", "kunnen", "kunnen"]}
                />
                <Verbs
                    verb="volgen"
                    translation="to follow"
                    conjugations={["volg", "volgt", "volgt", "volgen", "volgen", "volgen"]}
                />
                <Verbs
                    verb="afslaan"
                    translation="to turn"
                    conjugations={["sla af", "slaat af", "slaat af", "slaan af", "slaan af", "slaan af"]}
                />
                <Verbs
                    verb="moeten"
                    translation="must"
                    conjugations={["moet", "moet", "moet", "moeten", "moeten", "moeten"]}
                />
                <Verbs
                    verb="drinken"
                    translation="to drink"
                    conjugations={["drink", "drinkt", "drinkt", "drinken", "drinken", "drinken"]}
                />
            </LessonContainer>
            <VerbExercise verbs={[
                { verb: "bezoeken", conjugations: ["bezoek", "bezoekt", "bezoekt", "bezoeken", "bezoeken", "bezoeken"] },
                { verb: "kunnen", conjugations: ["kan", "kunt", "kan", "kunnen", "kunnen", "kunnen"] },
                { verb: "volgen", conjugations: ["volg", "volgt", "volgt", "volgen", "volgen", "volgen"] },
                { verb: "afslaan", conjugations: ["sla af", "slaat af", "slaat af", "slaan af", "slaan af", "slaan af"] },
                { verb: "moeten", conjugations: ["moet", "moet", "moet", "moeten", "moeten", "moeten"] },
                { verb: "drinken", conjugations: ["drink", "drinkt", "drinkt", "drinken", "drinken", "drinken"] }
            ]} />
            <Translate sentences={[
                { english: "I visit the library", translation: "Ik bezoek de bibliotheek" },
                { english: "You can drink here", translation: "Jij kunt hier drinken" },
                { english: "They must follow", translation: "Zij moeten volgen" },
                { english: "He turns to the right", translation: "Hij slaat af naar rechts" },
                { english: "We visit the city", translation: "Wij bezoeken de stad" },
                { english: "They can visit the monument", translation: "Zij kunnen het monument bezoeken" },
                { english: "They can drink water", translation: "Zij kunnen water drinken" },
                { english: "You must turn", translation: "Jij moet afslaan" },
                { english: "You must turn left", translation: "Jij moet links afslaan" },
                { english: "I never drink tea", translation: "Ik drink nooit thee" }
            ]} />
            <GrammarBox>
                <GrammarTitle>📚 Vraagwoorden 📚</GrammarTitle>
                <GrammarParagraph>
                    Wie (who), wat (what), waar (where), wanneer (when), waarom (why), hoe (how), welk(e) (which), hoeveel (how many) are some of the most used question words.</GrammarParagraph>
                <br />
                <GrammarParagraph> <Highlight>Let's do the exercise in the Google Drive </Highlight> </GrammarParagraph>
            </GrammarBox>
            <GrammarBox>
                <GrammarTitle>📚 Modale hulpwerkwoorden (modal helping verbs) 📚</GrammarTitle>
                <GrammarParagraph>Modal verbs such as "kunnen" and "moeten" come together with another verb. They add a probability, an obligation, a wish, a possibility, etc. to the other verb. The modal verb normally comes right after the subject. Whereas the matching infinite verb comes at the end of the sentence. Let's check some more information <a href="https://uilentaal.wordpress.com/2015/03/04/modale-werkwoorden/">here</a></GrammarParagraph>
                <br />
                <GrammarParagraph> <Highlight>Let's do the exercise in the Google Drive </Highlight></GrammarParagraph>
            </GrammarBox>
            <Separator></Separator>
            <TitleText>Lezen / reading</TitleText>
            <CenteredContainer>
                <StyledLink href="https://www.nedbox.be/teaser/ken-je-leuven-al">
                    "Do you already know Leuven?" Check the article in the link and let's answer the related questions.
                </StyledLink>
                <StyledLink href="https://www.nedbox.be/teaser/mechelen">
                    "The city of Mechelen." Check the article in the link and let's answer the related questions.
                </StyledLink>
            </CenteredContainer>

            <Separator></Separator>
            <TitleText>Huiswerk / Homework</TitleText>
            <GrammarBox>
                <GrammarParagraph>
                    - Wat is jouw favoriete plaats in de stad? Maak zinnen (vb. Ik hou van het stadspark, want daar is het rustig. Je kan er wandelen, fietsen en ijsjes eten. Het stadspark ligt in het midden van de stad Antwerpen.)</GrammarParagraph>
                <br />
                <GrammarParagraph>

                    - Wat is er te doen in Gent deze week (in zinnen). <a href="https://www.wattedoen.be/gent">https://www.wattedoen.be/gent </a>
                    (vb. In Gent is er een markt op donderdag. Er is deze week ook een concert van de muziekgroep Absynthe Minded. Woensdag is er een theatervoorstelling voor kinderen.).

                </GrammarParagraph>
            </GrammarBox>
            <Footer />
        </div>
    );
}

export default Lesson8;