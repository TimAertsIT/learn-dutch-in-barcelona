import { StyledQuestion, LessonContainer, Separator, TitleText, GrammarBox, GrammarParagraph, GrammarTitle, Highlight, GrammarListItem, StyledLink, CenteredContainer, ExtraInformation } from '../pages/lesson1.styles';
import Vocabulary from '../components/Vocabulary/Vocabulary';
import VocabularySimple from '../components/Exercises/Vocabulary/VocabularySimple';
import VocabularyQuiz from '../components/Exercises/Vocabulary/VocabularyQuiz';
import ImageCollage from '../components/ImageCollage/ImageCollage';
import bliksem from "../images/11bliksem.jpeg";
import regen from "../images/11regen.jpg";
import sneeuw from "../images/11sneeuw.jpg";
import weerbericht from "../images/11weerbericht.jpg.webp";
import wolk from "../images/11wolk.jpeg";
import zonneschijn from "../images/11zonneschijn.jpg";
import GoedBezig from '../components/GoedBezig/GoedBezig';
import Verbs from '../components/Verbs/Verbs';
import VerbExercise from '../components/Exercises/Grammar/VerbExercise';
import FillInTheBlankExercise from '../components/Exercises/Vocabulary/FillintheBlankExercise';
import Translate from '../components/Exercises/Grammar/Translate';
import allowedEmails from '../pages/allowedEmails';
import { useState, useEffect } from 'react';
import zwaluw from '../images/zwaluw.jpg';
import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import Introduction from '../components/Introduction/Introduction';
import VocabularyTime from '../components/Exercises/Vocabulary/VocabularyTime';
import Conversation from '../components/Conversation/Conversation';
import { StyledAbout } from './about.styles';

function Lesson11() {
    const lessonId = 11;
    const words = [
        { dutch: 'Het weer', english: 'The weather' },
        { dutch: 'De wolk', english: 'The cloud' },
        { dutch: 'De zon', english: 'The zon' },
        { dutch: 'De zonneschijn', english: 'The sunshine' },
        { dutch: 'De regen', english: 'The rain' },
        { dutch: 'Nat', english: 'Wet' },
        { dutch: 'Droog', english: 'Dry' },
        { dutch: 'Bewolkt', english: 'Cloudy' },
        { dutch: 'De wind', english: 'The wind' },
        { dutch: 'Regenachtig', english: 'Rainy' },
        { dutch: 'Warm', english: 'Warm' },
        { dutch: 'Koud', english: 'Cold' },
        { dutch: 'De droogte', english: 'The drought' },
        { dutch: 'De hitte', english: 'The heat' },
        { dutch: 'De sneeuw', english: 'The snow' },
        { dutch: 'De donder', english: 'The thunder' },
        { dutch: 'De bliksem', english: 'The lightning' },
        { dutch: 'De neerslag', english: 'The precipitation' },
        { dutch: 'De weersverwachting', english: 'The weather forecast' },
        { dutch: 'Het weerbericht', english: 'The weather report' },
        { dutch: 'Tropisch', english: 'Tropical' },
        { dutch: 'De woestijn', english: 'The desert' },
        { dutch: 'De opwarming', english: 'The warming' },
        { dutch: 'De klimaatsverandering', english: 'The climate change' },
        { dutch: 'De duurzaamheid', english: 'The sustainability' },
        { dutch: 'De klimaatzone', english: 'The climate zone' },
        { dutch: 'Het ecosysteem', english: 'The ecosystem' },
        { dutch: 'Polair', english: 'Polar' },
        { dutch: 'Gematigd', english: 'Temperate' },
        { dutch: 'Het klimaat', english: 'The climate' }
    ];
    const images = [
        { src: bliksem, caption: 'De bliksem' },
        { src: regen, caption: 'De regen' },
        { src: wolk, caption: 'De wolk' },
        { src: sneeuw, caption: 'De sneeuw' },
        { src: weerbericht, caption: 'Het weerbericht' },
        { src: zonneschijn, caption: 'De zonneschijn' },
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
        'Het ontweert, er komt donder en _.',
        'Het regent hier bijna nooit, het is altijd _.',
        'Na overvloedige neerslag is alles _.',
        'Ook dieren kunnen last hebben van de _, ze zoeken dan schaduw.',
        'Wanneer de lucht bedekt is met wolken, is het _.',
        'De komende dagen gaat het _, het zal minder koud zijn dan nu.',
        'De zee zorgt vaak voor een _ klimaat, met milde temperaturen en neerslag.',
        'In de winter is het _ dan in de zomer.',
        'Wanneer het enkele dagen meer dan 30 graden is, spreken we van een _.',
        'Een _ komt altijd van pas. Ofwel om je te beschermen tegen de regen, of tegen de zon.'
    ];

    const blanks = ['nat', 'gematigd', 'bliksem', 'kouder', 'droog', 'hitte', 'hittegolf', 'opwarmen', 'bewolkt', 'paraplu'];



    return (
        <div>
            <Navigation />
            <Introduction lessonId={lessonId} />
            <Conversation
                belgianMessages={["Hallo Karolien! Hoe is het weer daar vandaag?", "Oei, regent het daar ook?", "Hier ook, soms een kleine opklaring, maar dan regent het weer verder.", "Ja, als er een straaltje zon verschijnt dan krijg je vaak een regenboog.", "Ik ga niets zoeken, het is geen weer om een hond door te jagen.", "Klopt, en hopen op een mooie zomer."]}
                dutchMessages={["Hey Sam, om droevig van te worden!", "Ja, het is al de hele week aan het regenen.", "Ik zag wel een mooie regenboog.", "Je moet dan een schat gaan zoeken aan de basis van de regenboog he.", "Ja klopt, beter binnen wat opwarmen.", "Die zal er wel snel zijn!"]}
            />
            <ImageCollage images={images.slice(0, 3)} />
            <StyledQuestion onClick={() => setShowExtraInfo(!showExtraInfo)} data-translation=" What kind of weather is it today where you live?">Wat voor weer is het vandaag waar jij woont?</StyledQuestion>
            {showExtraInfo && <div>
                <ExtraInformation>Het is al de hele dag aan het regenen.</ExtraInformation>
                <ExtraInformation>De zon schijnt, het is lekker warm.</ExtraInformation>
                <ExtraInformation>Afwisselend, soms een bui, soms wat zonneschijn.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo2(!showExtraInfo2)} data-translation=" What is your favorite kind of weather?">Wat is jouw favoriete weer?</StyledQuestion>
            {showExtraInfo2 && <div>
                <ExtraInformation>Ik hou echt van de zon, maar het moet ook niet te warm zijn.</ExtraInformation>
                <ExtraInformation>Geef mij maar sneeuw, dan kan ik skiën.</ExtraInformation>
                <ExtraInformation>Het maakt mij niet uit, ik maak overal het beste van.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo3(!showExtraInfo3)} data-translation=" What do you do when it snows?">Wat doe je als het sneeuwt?</StyledQuestion>
            {showExtraInfo3 && <div>
                <ExtraInformation>Dan maak ik een sneeuwman.</ExtraInformation>
                <ExtraInformation>Als het sneeuwt houd ik altijd een sneeuwballengevecht.</ExtraInformation>
                <ExtraInformation>Dan ga ik het liefst skiën of snowboarden.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo4(!showExtraInfo4)} data-translation=" What is your favorite activity when the sun shines?">Wat is je favoriete activiteit wanneer de zon schijnt?</StyledQuestion>
            {showExtraInfo4 && <div>
                <ExtraInformation>Van zodra de zon schijnt doe ik een terrasje in de stad.</ExtraInformation>
                <ExtraInformation>Mijn favoriete activiteit wanneer de zon schijnt is gaan zonnebaden op het strand.</ExtraInformation>
                <ExtraInformation>Ik hou erg van tuinieren, dus als de zon schijnt kan je me in de tuin vinden.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo5(!showExtraInfo5)} data-translation=" Did the climate already change where you live?">Is het klimaat al veranderd waar jij woont?</StyledQuestion>
            {showExtraInfo5 && <div>
                <ExtraInformation>Ja, het is droger en kouder.</ExtraInformation>
                <ExtraInformation>Ja, het is warmer en natter.</ExtraInformation>
                <ExtraInformation>Nee, ik heb nog geen effect gemerkt.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo6(!showExtraInfo6)} data-translation=" Do you prefer being too warm or too cold?">Heb je het liever te warm of te koud?</StyledQuestion>
            {showExtraInfo6 && <div>
                <ExtraInformation>Liever te koud, dan kan ik iets extra aantrekken.</ExtraInformation>
                <ExtraInformation>Liever te warm, dan hou ik me rustig en in stilte bezig.</ExtraInformation>
                <ExtraInformation>Geen van de twee, ik vind beiden echt vervelend.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo7(!showExtraInfo7)} data-translation=" In which climate zone would you never want to live?">In welke klimaatzone zou je nooit willen wonen?</StyledQuestion>
            {showExtraInfo7 && <div>
                <ExtraInformation>In de tropen, die luchtvochtigheid lijkt me erg zwaar.</ExtraInformation>
                <ExtraInformation>In de woestijn, ik hou echt van de zee en milde temperaturen.</ExtraInformation>
                <ExtraInformation>In een bergklimaat, dat lijkt me te koud en ruw.</ExtraInformation>
            </div>}
            <ImageCollage images={images.slice(3)} />
            <Vocabulary words={words} />
            <StyledAbout>
                <h1>Regen, regen en nog meer regen</h1>
                <p>België en Nederland hebben beiden een gematigd zeeklimaat, wat betekent dat ze relatief milde zomers en winters hebben. </p>
                <p>In België is het klimaat koel en nat, vooral beïnvloed door de Atlantische Oceaan. De gemiddelde temperatuur varieert van ongeveer 4°C in januari en februari tot 17,5°C in juli en augustus1. De neerslag is frequent, maar niet bijzonder overvloedig, met 800/850 millimeter regen per jaar in de vlaktes, terwijl er ongeveer 1.100 mm valt in de Ardennen1.</p>
                <p>Aan de andere kant wordt het klimaat van Nederland beïnvloed door de Noordzee en de Atlantische Oceaan, dus het is het grootste deel van het jaar koel, bewolkt en vochtig. De regens zijn niet zo overvloedig, variërend tussen 750/850 millimeter per jaar, maar ze zijn frequent gedurende het hele jaar. De zon in Nederland is zelden te zien van november tot februari, maar schijnt ook niet heel vaak in de zomer.</p>
                <p>Het is belangrijk om te weten dat het weer in beide landen behoorlijk kan variëren, afhankelijk van het seizoen en de specifieke regio. Dus of je nu in België of Nederland bent, het is altijd een goed idee om een paraplu bij de hand te hebben!</p>


            </StyledAbout>
            <VocabularyQuiz words={words} />
            <VocabularySimple words={words} />
            <FillInTheBlankExercise sentences={sentences} blanks={blanks} />
            <GoedBezig
                text={{ dutch: 'Eén zwaluw maakt de lente niet', english: '"One swallow does not make spring"' }}
                image={zwaluw}
            />
            <CenteredContainer>
                <StyledLink href="https://www.vrt.be/vrtnws/nl/services/weer/">
                    Bekijk de weersverwachtig en probeer deze uit te leggen in 5 zinnen.
                </StyledLink>
                <StyledLink href="https://www.hln.be/buitenland/weer-tijd-voor-manhattanhenge-spectaculaire-zonsondergang-tussen-de-wolkenkrabbers-van-new-york~a2d011e5/">
                    Lees het artikel en probeer het verhaal opnieuw te vertellen in 5 zinnen.
                </StyledLink>
            </CenteredContainer>
            <Separator></Separator>
            <TitleText>Grammatica / Grammar</TitleText>
            <LessonContainer>
                <Verbs
                    verb="regenen"
                    translation="to rain"
                    conjugations={["regen", "regent", "regent", "regenen", "regenen", "regenen"]}
                    vd="geregend"
                />
                <Verbs
                    verb="donderen"
                    translation="to thunder"
                    conjugations={["donder", "dondert", "dondert", "donderen", "donderen", "donderen"]}
                    vd="gedonderd"
                />
                <Verbs
                    verb="schijnen"
                    translation="to shine"
                    conjugations={["schijn", "schijnt", "schijnt", "schijnen", "schijnen", "schijnen"]}
                    vd="geschenen"
                />
                <Verbs
                    verb="hagelen"
                    translation="to hail"
                    conjugations={["hagel", "hagelt", "hagelt", "hagelen", "hagelen", "hagelen"]}
                    vd="gehageld"
                />
                <Verbs
                    verb="bliksemen"
                    translation="lightning"
                    conjugations={["bliksem", "bliksemt", "bliksemt", "bliksemen", "bliksemen", "bliksemen"]}
                    vd="gebliksemd"
                />
                <Verbs
                    verb="sneeuwen"
                    translation="to snow"
                    conjugations={["sneeuw", "sneeuwt", "sneeuwt", "sneeuwen", "sneeuwen", "sneeuwen"]}
                    vd="gesneeuwd"
                />
            </LessonContainer>
            <VerbExercise verbs={[
                { verb: "regenen", conjugations: ["regen", "regent", "regent", "regenen", "regenen", "regenen"] },
                { verb: "donderen", conjugations: ["donder", "dondert", "dondert", "donderen", "donderen", "donderen"] },
                { verb: "schijnen", conjugations: ["schijn", "schijnt", "schijnt", "schijnen", "schijnen", "schijnen"] },
                { verb: "hagelen", conjugations: ["hagel", "hagelt", "hagelt", "hagelen", "hagelen", "hagelen"] },
                { verb: "bliksemen", conjugations: ["bliksem", "bliksemt", "bliksemt", "bliksemen", "bliksemen", "bliksemen"] },
                { verb: "sneeuwen", conjugations: ["sneeuw", "sneeuwt", "sneeuwt", "sneeuwen", "sneeuwen", "sneeuwen"] }
            ]} />
            <Translate sentences={[
                { english: "It snows", translation: "Het sneeuwt" },
                { english: "It snowed", translation: "Het heeft gesneeuwd" },
                { english: "This morning it snowed", translation: "Deze ochtend heeft het gesneeuwd" },
                { english: "It snowed this morning", translation: "Het heeft gesneeuwd deze ochtend" },
                { english: "It rains", translation: "Het regent" },
                { english: "It rained", translation: "Het heeft geregend" },
                { english: "This evening it rained", translation: "Deze avond heeft het geregend" },
                { english: "It rained this evening", translation: "Het heeft geregend deze avond" },
                { english: "The sun shines", translation: "De zon schijnt" },
                { english: "The rain makes me wet", translation: "De regen maakt me nat" }
            ]} />
            <GrammarBox>
                <GrammarTitle>📚 Bijzinnen 📚</GrammarTitle>
                <GrammarParagraph>
                    Het verschil tussen een bijzin en een hoofdzin is dat een hoofdzin op zichzelf kan staan, maar een bijzin kan dat nooit. In een hoofdzin staan de persoonvorm en het onderwerp bij elkaar, terwijl dat in een bijzin niet zo hoeft te zijn.</GrammarParagraph>
                <br />
                <GrammarParagraph> <Highlight>Laten we even verder bekijken wat dat juist betekent: <a href="https://www.examenoverzicht.nl/nederlands/hoofdzinnen-en-bijzinnen">hier</a>  </Highlight></GrammarParagraph>
            </GrammarBox>
            <GrammarBox>
                <GrammarTitle>📚 Zinsbouw 📚</GrammarTitle>
                <GrammarParagraph>Met de informatie over zinsbouw in het Nederlands kan je een boek vullen! Er zijn zovele mogelijkheden, zovele uitzonderingen, .. Maar de basis, die kan je gemakkelijk leren.
                </GrammarParagraph>
                <br />
                <GrammarParagraph> <Highlight>Laten we het even visueel bekijken <a href="https://zichtbaarnederlands.nl/nl/zinsbouw/zinsbouw">hier</a>
                </Highlight></GrammarParagraph>
                <GrammarParagraph> <Highlight>En laten we enkele oefeningen maken: <a href="https://wordwall.net/nl/resource/17062217/maak-de-zin-af-hoofdzin-hoofdzin-met-inversie-bijzin">1</a>, <a href="https://wordwall.net/nl/resource/10366947/hoofdzin-met-zonder-inversie-bijzin">2</a> en <a href="https://wordwall.net/nl/resource/17553847/c4-h3-maak-de-zin-af-hoofdzin-hoofdzin-met-inversie-bijzin">3</a>
                </Highlight></GrammarParagraph>
            </GrammarBox>
            <Separator></Separator>
            <TitleText>Lezen / reading</TitleText>
            <CenteredContainer>
                <StyledLink href="https://www.nedbox.be/teaser/een-nieuwe-sport">
                    "Een nieuwe sport": bekijk het artikel via de link en beantwoord de vragen.
                </StyledLink>
                <StyledLink href="https://www.nedbox.be/teaser/beweeg-je-fit">
                    "Beweeg je fit": bekijk het artikel via de link en beantwoord de vragen.
                </StyledLink>
            </CenteredContainer>

            <Separator></Separator>
            <TitleText>Huiswerk / Homework</TitleText>
            <GrammarBox>
                <GrammarParagraph>
                    Schrijf 10 zinnen over je favoriete sport of sportclub. Gebruik hierbij hoofd- en bijzinnen en gebruik inversie waar nodig. </GrammarParagraph>

            </GrammarBox>
            <Footer />
        </div >
    );
}

export default Lesson11;