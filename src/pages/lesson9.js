import { StyledQuestion, LessonContainer, Separator, TitleText, GrammarBox, GrammarParagraph, GrammarTitle, Highlight, GrammarListItem, StyledLink, CenteredContainer, ExtraInformation } from '../pages/lesson1.styles';
import Vocabulary from '../components/Vocabulary/Vocabulary';
import VocabularySimple from '../components/Exercises/Vocabulary/VocabularySimple';
import VocabularyQuiz from '../components/Exercises/Vocabulary/VocabularyQuiz';
import ImageCollage from '../components/ImageCollage/ImageCollage';
import boerderij from "../images/9boerderij.jpg";
import koe from "../images/9koe.jpg.webp";
import konijn from "../images/9konijn.jpeg";
import natuurgebied from "../images/9natuurgebied.jpg";
import rivier from "../images/9rivier.jpg";
import waterval from "../images/9waterval.jpg";
import GoedBezig from '../components/GoedBezig/GoedBezig';
import Verbs from '../components/Verbs/Verbs';
import VerbExercise from '../components/Exercises/Grammar/VerbExercise';
import FillInTheBlankExercise from '../components/Exercises/Vocabulary/FillintheBlankExercise';
import Translate from '../components/Exercises/Grammar/Translate';
import allowedEmails from '../pages/allowedEmails';
import { useState, useEffect } from 'react';
import feestvarken from '../images/feestvarken.webp';
import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import Introduction from '../components/Introduction/Introduction';
import VocabularyTime from '../components/Exercises/Vocabulary/VocabularyTime';
import Conversation from '../components/Conversation/Conversation';
import { StyledAbout } from './about.styles';

function Lesson9() {
    const lessonId = 9;
    const words = [
        { dutch: 'De vogel', english: 'The bird' },
        { dutch: 'De koe', english: 'The cow' },
        { dutch: 'Het paard', english: 'The horse' },
        { dutch: 'De vis', english: 'The fish' },
        { dutch: 'Het varken', english: 'The pig' },
        { dutch: 'De kip', english: 'The chicken' },
        { dutch: 'Het insect', english: 'The insect' },
        { dutch: 'De muis', english: 'The mouse' },
        { dutch: 'De kikker', english: 'The frog' },
        { dutch: 'Het schaap', english: 'The sheep' },
        { dutch: 'De geit', english: 'The goat' },
        { dutch: 'De vos', english: 'The fox' },
        { dutch: 'De spin', english: 'The spider' },
        { dutch: 'De beer', english: 'The bear' },
        { dutch: 'De wolf', english: 'The wolf' },
        { dutch: 'Het bos', english: 'The forest' },
        { dutch: 'De heuvel', english: 'The hill' },
        { dutch: 'De berg', english: 'The mountain' },
        { dutch: 'Het meer', english: 'The lake' },
        { dutch: 'De wolk', english: 'The cloud' },
        { dutch: 'De lucht', english: 'The sky' },
        { dutch: 'De wind', english: 'De wind' },
        { dutch: 'De aarde', english: 'The earth' },
        { dutch: 'De steen', english: 'The rock' },
        { dutch: 'De bron', english: 'The spring' },
        { dutch: 'De waterval', english: 'The waterfall' },
        { dutch: 'De grot', english: 'The cave' },
        { dutch: 'Het milieu', english: 'The environment' },
        { dutch: 'De biodiversiteit', english: 'The biodiversity' },
        { dutch: 'De natuurwandeling', english: 'The nature walk' }
    ];
    const images = [
        { src: boerderij, caption: 'De boerderij' },
        { src: koe, caption: 'De koe' },
        { src: konijn, caption: 'Het konijn' },
        { src: natuurgebied, caption: 'Het natuurgebied' },
        { src: rivier, caption: 'De rivier' },
        { src: waterval, caption: 'De waterval' },
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
        'Soms staan koeien in een stal, maar meestal op een _.',
        'Ik hou erg van het kijken naar een _ aan de kust.',
        '_ zijn geen insecten, want ze hebben meer poten.',
        'Apen, olifanten en honden zijn allemaal _.',
        'Ik wou dat ik kon vliegen, net zoals _',
        'Ik voel me goed vandaag, als een _ in het water.',
        'We moeten ons afval beperken en aan het _ denken.',
        'Vele bomen maken een _.',
        'Sommige _ krijgen de status van nationaal park.',
        'Dat diersoorten overleven is belangrijk voor de _.'
    ];

    const blanks = ['vogels', 'vis', 'natuurgebieden', 'zonsondergang', 'weide', 'milieu', 'biodiversiteit', 'spinnen', 'bos', 'zoogdieren'];



    return (
        <div>
            <Navigation />
            <Introduction lessonId={lessonId} />
            <Conversation
                belgianMessages={["Hallo Marieke! Een vraagje: heb jij huisdieren?", "In een weide? Doe je ook aan paardrijden?", "Leuk zeg, ik heb een beetje angst voor paarden.", "Ja, ik heb honden. Ik vind het heerlijk om met hen naar een nationaal park te gaan.", "Ja dat klopt, anders rennen ze achter de konijnen aan.", "Ja, laten we de bergen intrekken! We spreken nog!"]}
                dutchMessages={["Hey Bart, ja, ik heb 2 paarden.", "Ja, ik doe aan paardrijden, ik hou ervan om in de duinen te galopperen.", "Maar jij hebt 3 honden, toch?", "Ja, leuk, maar dan moet je ze aan de leiband houden, zodat ze de wilde dieren niet verstoren.", "Misschien kunnen we samen eens een dagje gaan wandelen in de natuur?", "Prima, tot binnenkort!"]}
            />
            <ImageCollage images={images.slice(0, 3)} />
            <StyledQuestion onClick={() => setShowExtraInfo(!showExtraInfo)} data-translation=" Do you have pets?">Heb jij huisdieren?</StyledQuestion>
            {showExtraInfo && <div>
                <ExtraInformation>Ja, ik heb 3 katten en een hond.</ExtraInformation>
                <ExtraInformation>Nee, ik haat dieren.</ExtraInformation>
                <ExtraInformation>Nee, maar ik zou wel graag huisdieren hebben.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo2(!showExtraInfo2)} data-translation=" What is the highest mountain of the Benelux?">Wat is de hoogste berg van de Benelux?</StyledQuestion>
            {showExtraInfo2 && <div>
                <ExtraInformation>Er zijn geen bergen in de Benelux, enkel heuvels.</ExtraInformation>
                <ExtraInformation>Volgens mij is dat een heuvel in de Ardennen.</ExtraInformation>
                <ExtraInformation>Dat is de Signal de Botrange, met slechts 694 meter.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo3(!showExtraInfo3)} data-translation=" Would you like to live on a farm?">Zou jij graag op een boerderij wonen?</StyledQuestion>
            {showExtraInfo3 && <div>
                <ExtraInformation>Ja, dat lijkt me erg gezellig.</ExtraInformation>
                <ExtraInformation>Zeker, een rustig leven tussen de dieren lijkt me wel wat.</ExtraInformation>
                <ExtraInformation>Nee, ik zou de geur van mest niet kunnen harden.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo4(!showExtraInfo4)} data-translation=" Which natural area in the Benelux would you like to visit?">Welk natuurgebied in de Benelux zou je graag eens bezoeken?</StyledQuestion>
            {showExtraInfo4 && <div>
                <ExtraInformation>De Hoge Veluwe natuurlijk! Dat lijkt me prachtig.</ExtraInformation>
                <ExtraInformation>Ik zou graag eens logeren in het Nationaal Park De Hoge Kempen.</ExtraInformation>
                <ExtraInformation>Allemaal! Ik krijg nooit genoeg van mooie natuur.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo5(!showExtraInfo5)} data-translation=" Do you fear climate change?">Vrees jij de klimaatsverandering?</StyledQuestion>
            {showExtraInfo5 && <div>
                <ExtraInformation>Nee, helemaal niet. Dat is één groot complot.</ExtraInformation>
                <ExtraInformation>Ja, vooral voor generaties die na ons komen.</ExtraInformation>
                <ExtraInformation>Ja, ik probeer mijn steentje bij te dragen aan het verhinderen ervan.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo6(!showExtraInfo6)} data-translation=" Have you been camping often? Where was it really beautiful?">Ben je al vaak gaan kamperen? Waar was het erg mooi?</StyledQuestion>
            {showExtraInfo6 && <div>
                <ExtraInformation>Ja al heel vaak. In Slovenië was er prachtige natuur.</ExtraInformation>
                <ExtraInformation>Nee, nog nooit. Ik heb comfort nodig en verkies dus een hotel.</ExtraInformation>
                <ExtraInformation>Ja, ik heb al mooie plaatsen ontdekt in bijna elk land.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo7(!showExtraInfo7)} data-translation=" Do you know some Belgian or Dutch rivers?">Ken je enkele Belgische of Nederlandse rivieren?</StyledQuestion>
            {showExtraInfo7 && <div>
                <ExtraInformation>Zeker. De Maas, de Waal en de Rijn.</ExtraInformation>
                <ExtraInformation>Ik ken enkel de Lesse, omdat ik er al ben gaan kajakken.</ExtraInformation>
                <ExtraInformation>Ja, ik ken de Schelde, want ik werk in de haven.</ExtraInformation>
            </div>}
            <ImageCollage images={images.slice(3)} />
            <Vocabulary words={words} />
            <StyledAbout>
                <h1>Dierenweetjes</h1>
                <p>Mierenkolonies kunnen enorme aantallen bereiken. Sommige kolonies bevatten miljoenen individuen en kunnen hele ecosystemen beïnvloeden.</p>
                <p>De blauwe vinvis is het grootste dier dat ooit op aarde heeft geleefd. Hij kan tot wel 30 meter lang worden en weegt meer dan 200 ton!</p>
                <p>Kolibries zijn de enige vogels die achteruit kunnen vliegen. Hun vleugels bewegen zo snel dat ze een soort helikopterachtige beweging maken.</p>
                <p>Kameleons hebben ogen die onafhankelijk van elkaar kunnen bewegen. Hierdoor kunnen ze twee verschillende dingen tegelijkertijd in de gaten houden.</p>
                <p> Bijen communiceren met elkaar door middel van een dans. Ze kunnen andere bijen vertellen waar ze voedsel hebben gevonden door te dansen in een specifiek patroon.</p>
                <p>Pinguïns hebben een unieke manier om elkaar te herkennen. Ze herkennen elkaar aan de roep van hun partner, vergelijkbaar met een wachtwoord.</p>
                <p>Krokodillen kunnen hun adem tot wel twee uur inhouden. Dit maakt ze zeer efficiënte jagers onder water.</p>
                <p>Zeeschildpadden hebben een ingebouwd kompas. Ze kunnen de magnetische velden van de aarde gebruiken om hun weg te vinden tijdens lange migraties.</p>
                <p>Vleermuizen zijn de enige zoogdieren die echt kunnen vliegen. Ze gebruiken echolocatie om prooien te vinden in het donker.</p>
                <p>Koraalriffen zijn eigenlijk levende dieren. Ze bestaan uit kleine poliepen die samenwerken om enorme structuren te bouwen.</p>
            </StyledAbout>
            <VocabularyQuiz words={words} />
            <VocabularySimple words={words} />
            <FillInTheBlankExercise sentences={sentences} blanks={blanks} />
            <GoedBezig
                text={{ dutch: 'Het feestvarken', english: '"The party pig"' }}
                image={feestvarken}
            />
            <CenteredContainer>
                <StyledLink href="https://www.ad.nl/bizar/commotie-over-geblurde-koeienkop-op-google-streetview~acfc8014/">
                    Lees het artikel en probeer het verhaal opnieuw te vertellen in 5 zinnen.
                </StyledLink>
                <StyledLink href="https://www.ad.nl/nieuws/door-bijen-gestoken-en-achtergelaten-pitbull-blijft-knuffelen~a8cceb6c/">
                    Lees het artikel en probeer het verhaal opnieuw te vertellen in 5 zinnen.
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

export default Lesson9;