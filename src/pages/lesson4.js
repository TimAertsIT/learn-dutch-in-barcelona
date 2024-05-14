import { StyledQuestion, LessonContainer, Separator, TitleText, GrammarBox, GrammarParagraph, GrammarTitle, Highlight, GrammarListItem, StyledLink, CenteredContainer, ExtraInformation } from '../pages/lesson1.styles';
import Vocabulary from '../components/Vocabulary/Vocabulary';
import VocabularySimple from '../components/Exercises/Vocabulary/VocabularySimple';
import VocabularyQuiz from '../components/Exercises/Vocabulary/VocabularyQuiz';
import ImageCollage from '../components/ImageCollage/ImageCollage';
import park from "../images/park.jpg";
import plein from "../images/plein.jpg";
import stadhuis from "../images/stadhuis.jpg";
import fietspad from "../images/fietspad.jpg";
import bezienswaardigheid from "../images/bezienswaardigheid.jpg";
import bibliotheek from "../images/bibliotheek.jpg";
import GoedBezig from '../components/GoedBezig/GoedBezig';
import Verbs from '../components/Verbs/Verbs';
import VerbExercise from '../components/Exercises/Grammar/VerbExercise';
import FillInTheBlankExercise from '../components/Exercises/Vocabulary/FillintheBlankExercise';
import Translate from '../components/Exercises/Grammar/Translate';
import allowedEmails from '../pages/allowedEmails';
import { useState, useEffect } from 'react';
import mieren from '../images/mieren.jpeg';
import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import Introduction from '../components/Introduction/Introduction';
import VocabularyTime from '../components/Exercises/Vocabulary/VocabularyTime';
import Conversation from '../components/Conversation/Conversation';
import { StyledAbout } from './about.styles';

function Lesson4() {
    const lessonId = 4;
    const words = [
        { dutch: 'De straat', english: 'The street' },
        { dutch: 'Het plein', english: 'The square' },
        { dutch: 'De kerk', english: 'The church' },
        { dutch: 'De moskee', english: 'The mosque' },
        { dutch: 'De kathedraal', english: 'The cathedral' },
        { dutch: 'Het station', english: 'The station' },
        { dutch: 'De laan', english: 'The avenue' },
        { dutch: 'De rivier', english: 'The river' },
        { dutch: 'Het hotel', english: 'The hotel' },
        { dutch: 'Het stadhuis', english: 'The city hall' },
        { dutch: 'De bibliotheek', english: 'The library' },
        { dutch: 'Het cultureel centrum', english: 'The cultural centre' },
        { dutch: 'De bushalte', english: 'The bus stop' },
        { dutch: 'Rechtdoor', english: 'Straigth ahead' },
        { dutch: 'Afslaan', english: 'Turn' },
        { dutch: 'Rechts', english: 'Right' },
        { dutch: 'Links', english: 'Left' },
        { dutch: 'Omkeren', english: 'Turn around' },
        { dutch: 'Voor', english: 'In front' },
        { dutch: 'Achter', english: 'Behind' },
        { dutch: 'Het fietspad', english: 'The bike path' },
        { dutch: 'Het voetpad', english: 'The walkway' },
        { dutch: 'Terug', english: 'Back' },
        { dutch: 'Hier', english: 'Here' },
        { dutch: 'Daar', english: 'There' },
        { dutch: 'De richting', english: 'The direction' },
        { dutch: 'Het kruispunt', english: 'The crossroads' },
        { dutch: 'Het monument', english: 'The monument' },
        { dutch: 'Het standbeeld', english: 'The statue' },
        { dutch: 'De bezienswaardigheid', english: 'The place of interest' }
    ];
    const images = [
        { src: plein, caption: 'Het plein' },
        { src: stadhuis, caption: 'Het stadhuis' },
        { src: park, caption: 'Het park' },
        { src: fietspad, caption: 'Het fietspad' },
        { src: bibliotheek, caption: 'De bibliotheek' },
        { src: bezienswaardigheid, caption: 'De bezienswaardigheid' },
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
        'Met de fiets moet je rijden op het _.',
        'Op een _ vind je normaal bankjes, bomen en soms ook een fontein.',
        'Ik wil graag boeken lezen. Waar is de _?',
        'Om te winkelen moet je in de winkel_ zijn.',
        'Dit is een _ van een oude koning. Het staat hier al 100 jaar.',
        'Meestal is een _ nog groter dan een kerk.',
        'Het is niet _, het is daar',
        'Aan het _ moet je stoppen bij de rode lichten.',
        'Val niet in de _ want dan ben je nat.',
        'De burgemeester werkt in het _'
    ];

    const blanks = ['bibliotheek', 'straat', 'fietspad', 'plein', 'rivier', 'stadhuis', 'standbeeld', 'kathedraal', 'hier', 'kruispunt'];



    return (
        <div>
            <Navigation />
            <Introduction lessonId={lessonId} />
            <Conversation
                belgianMessages={["Hallo! Mag ik je wat vragen?", "Waar is het treinstation?", "Dus hier naar rechts en dan naar links?", "Oh ok, duidelijk! Zijn er onderweg nog bezienswaardigheden te zien?", "Oh leuk, dan stop ik daar even. Wat is jouw favoriete plek in deze stad?", "Oh ik ook, dat ga ik zeker ook eens bezoeken dan. Bedankt voor je uitleg, een fijne dag nog!"]}
                dutchMessages={["Ja natuurlijk, wat wil je weten?", "Je moet deze straat volgen en dan kom je er.", "Nee, gewoon deze winkelstraat volgen tot op het einde.", "Ja, er zijn een museum en een kerk aan de rechterkant!", "Dat moet wel het groene plein zijn, ik hou van bomen en groen.", "Doei!"]}
            />
            <ImageCollage images={images.slice(0, 3)} />
            <StyledQuestion onClick={() => setShowExtraInfo(!showExtraInfo)} data-translation=" Where is the train station?">Waar is het treinstation?</StyledQuestion>
            {showExtraInfo && <div>
                <ExtraInformation>Het treinstation is op het einde van deze straat.</ExtraInformation>
                <ExtraInformation>Je moet deze straat volgen en dan zie je het treinstation.</ExtraInformation>
                <ExtraInformation>Het treinstation is in de groene buurt.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo2(!showExtraInfo2)} data-translation=" Do you like walking in the shopping street?">Wandel jij graag in de winkelstraat?</StyledQuestion>
            {showExtraInfo2 && <div>
                <ExtraInformation>Ik hou van wandelen in de winkelstraat.</ExtraInformation>
                <ExtraInformation>Ik wandel niet graag in de winkelstraat.</ExtraInformation>
                <ExtraInformation>Ik wandel liever in een park of in de natuur.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo3(!showExtraInfo3)} data-translation=" What are Bruges' places of interest?">Wat zijn de bezienswaardigheden van Brugge?</StyledQuestion>
            {showExtraInfo3 && <div>
                <ExtraInformation>Brugge heeft heel veel bezienswaardigheden.</ExtraInformation>
                <ExtraInformation>Een plek om te bezoeken is het centrum van Brugge.</ExtraInformation>
                <ExtraInformation>Het belfort van Brugge is een bezienswaardigheid.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo4(!showExtraInfo4)} data-translation=" How do I go from the library to the museum?">Hoe ga ik van de bibliotheek naar het museum?</StyledQuestion>
            {showExtraInfo4 && <div>
                <ExtraInformation>Je volgt deze straat en dan kom je er.</ExtraInformation>
                <ExtraInformation>Je moet de tweede straat rechts afslaan.</ExtraInformation>
                <ExtraInformation>Je moet omkeren.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo5(!showExtraInfo5)} data-translation=" What is happening in Brussels today?">Wat is er vandaag te doen in Brussel?</StyledQuestion>
            {showExtraInfo5 && <div>
                <ExtraInformation>Er is een groentenmarkt vandaag.</ExtraInformation>
                <ExtraInformation>Vandaag is er een festival in Brussel.</ExtraInformation>
                <ExtraInformation>Er is niets te doen in Brussel vandaag.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo6(!showExtraInfo6)} data-translation=" Can you show me the way to the city hall?">Kan je mij de weg wijzen naar het stadhuis?</StyledQuestion>
            {showExtraInfo6 && <div>
                <ExtraInformation>Nee, sorry. Ik ben niet van hier.</ExtraInformation>
                <ExtraInformation>Ja hoor, geen enkel probleem.</ExtraInformation>
                <ExtraInformation>Ja, ik wandel wel even met je mee tot daar.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo7(!showExtraInfo7)} data-translation=" What is your favorite spot in the city?">Wat is jouw favoriete plek in de stad?</StyledQuestion>
            {showExtraInfo7 && <div>
                <ExtraInformation>Mijn favoriete plek in de stad is het treinstation.</ExtraInformation>
                <ExtraInformation>Ik heb geen favoriete plek in de stad.</ExtraInformation>
                <ExtraInformation>Ik heb heel veel favoriete plekken in de stad, onder andere het stadspark, de grote markt en het museum.</ExtraInformation>
            </div>}
            <ImageCollage images={images.slice(3)} />
            <Vocabulary words={words} />
            <StyledAbout>
                <h1>De klunzige toerist</h1>
                <p>Er was eens een man genaamd Jan. Jan was een beetje een kluns. Op een dag besloot hij een wandeling te maken door de straat. Hij liep rechtdoor en kwam bij het plein. Daar zag hij de kerk, de moskee, de kathedraal, en zelfs het stadhuis. Hij was zo onder de indruk dat hij niet merkte dat hij zijn schoenen had verwisseld. Hij had een sandaal aan de ene voet en een laars aan de andere! Hij lachte en zei: “Ik lijk wel een Franse modeontwerper!”</p>
                <p>Jan liep verder en kwam bij de rivier. Hij wilde een foto maken van het monument aan de andere kant, maar hij liet zijn camera in het water vallen! Hij probeerde de camera te pakken, maar gleed uit en viel in de rivier. Gelukkig was hij een goede zwemmer. Hij zei: “Ik zwem beter dan een Franse eend!”</p>
                <p>Drijfnat en nog steeds met twee verschillende schoenen, liep Jan naar het hotel. Daar vroeg hij de weg naar de bibliotheek. Maar in plaats van links te afslaan zoals hem was verteld, sloeg hij rechts af en eindigde bij de bushalte. Hij grinnikte en zei: “Ik ben net zo verward als een Fransman die Nederlands probeert te spreken!”</p>
                <p>Uiteindelijk kwam Jan bij de bibliotheek aan. Hij was moe, nat en een beetje beschaamd, maar hij kon niet anders dan lachen om zijn eigen avonturen.</p>
            </StyledAbout>
            <VocabularyQuiz words={words} />
            <VocabularySimple words={words} />
            <FillInTheBlankExercise sentences={sentences} blanks={blanks} />
            <GoedBezig
                text={{ dutch: 'De mierenneuker', english: '"The ants fucker"' }}
                image={mieren}
            />
            <CenteredContainer>
                <StyledLink href="https://www.visitbruges.be/nl/wat-te-doen/bezienswaardigheden">
                    Choose your favorite city in the Benelux. Point out 5 places of interest and why one should visit them. For instance. "Brugge: 1. Het Belfort is heel interessant, het is een toren die je kan bezoeken."
                </StyledLink>
                <StyledLink href="https://www.google.nl/maps/@41.3794304,2.0905984,14z?hl=nl&entry=ttu">
                    Let's go to Google Maps and give directions from one place to another.
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

export default Lesson4;