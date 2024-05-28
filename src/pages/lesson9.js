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
                    verb="vliegen"
                    translation="to fly"
                    conjugations={["vlieg", "vliegt", "vliegt", "vliegen", "vliegen", "vliegen"]}
                    vd="gevlogen"
                />
                <Verbs
                    verb="zwemmen"
                    translation="to swim"
                    conjugations={["zwem", "zwemt", "zwemt", "zwemmen", "zwemmen", "zwemmen"]}
                    vd="gezwommen"
                />
                <Verbs
                    verb="beperken"
                    translation="to limit"
                    conjugations={["beperk", "beperkt", "beperkt", "beperken", "beperken", "beperken"]}
                    vd="beperkt"
                />
                <Verbs
                    verb="denken"
                    translation="to think"
                    conjugations={["denk", "denkt", "denkt", "denken", "denken", "denken"]}
                    vd="gedacht"
                />
                <Verbs
                    verb="krijgen"
                    translation="to get"
                    conjugations={["krijg", "krijgt", "krijgt", "krijgen", "krijgen", "krijgen"]}
                    vd="gekregen"
                />
                <Verbs
                    verb="overleven"
                    translation="to survive"
                    conjugations={["overleef", "overleeft", "overleeft", "overleven", "overleven", "overleven"]}
                    vd="overleefd"
                />
            </LessonContainer>
            <VerbExercise verbs={[
                { verb: "vliegen", conjugations: ["vlieg", "vliegt", "vliegt", "vliegen", "vliegen", "vliegen"] },
                { verb: "zwemmen", conjugations: ["zwem", "zwemt", "zwemt", "zwemmen", "zwemmen", "zwemmen"] },
                { verb: "beperken", conjugations: ["beperk", "beperkt", "beperkt", "beperken", "beperken", "beperken"] },
                { verb: "denken", conjugations: ["denk", "denkt", "denkt", "denken", "denken", "denken"] },
                { verb: "krijgen", conjugations: ["krijg", "krijgt", "krijgt", "krijgen", "krijgen", "krijgen"] },
                { verb: "overleven", conjugations: ["overleef", "overleeft", "overleeft", "overleven", "overleven", "overleven"] }
            ]} />
            <Translate sentences={[
                { english: "Birds fly", translation: "Vogels vliegen" },
                { english: "The pilot flies the airplane", translation: "De piloot vliegt met het vliegtuig" },
                { english: "I get a pet", translation: "Ik krijg een huisdier" },
                { english: "Animals survive the winter", translation: "Dieren overleven de winter" },
                { english: "Can animals think?", translation: "Kunnen dieren denken?" },
                { english: "Can fish swim?", translation: "Kunnen vissen zwemmen?" },
                { english: "Mammals can not swim", translation: "Zoogdieren kunnen niet zwemmen" },
                { english: "We must limit our impact", translation: "Wij moeten onze impact beperken" },
                { english: "Bees communicatie with eachother", translation: "Bijen communiceren met elkaar" },
                { english: "Would I like to live on a farm?", translation: "Zou ik graag op een boerderij wonen?" }
            ]} />
            <GrammarBox>
                <GrammarTitle>📚 Het lijdend voorwerp 📚</GrammarTitle>
                <GrammarParagraph>
                    Het lijdend voorwerp (the suffering object) is het voorwerp dat deelneemt aan de actie, zonder zelf iets te doen. Om het lijdend voorwerp te herkennen ga je eerst op zoek naar het onderwerp. Daarna zoek je het gezegde (alle werkwoorden). Als je bij die twee de vraag wie of wat plaatst, kom je tot het lijdend voorwerp.</GrammarParagraph>
                <br />
                <GrammarParagraph>
                    Laten we even het lijdend voorwerp in deze zinnen zoeken: </GrammarParagraph>
                <GrammarListItem>Ik koop een fiets.</GrammarListItem>
                <GrammarListItem>Hij stopt mij.</GrammarListItem>
                <GrammarListItem>Wij steunen haar.</GrammarListItem>
                <GrammarListItem>Hij draagt een zwaar dossier.</GrammarListItem>
                <GrammarListItem>Hij speelt gitaar.</GrammarListItem>
                <GrammarListItem>Ik stop.</GrammarListItem>
                <br />
                <GrammarParagraph> <Highlight>Let's do these exercises: <a href="https://www.cambiumned.nl/zinsdelen/lijdend-voorwerp/">on recognising the "lijdend voorwerp"</a>  </Highlight></GrammarParagraph>
            </GrammarBox>
            <GrammarBox>
                <GrammarTitle>📚 Voltooid tegenwoordige tijd 📚</GrammarTitle>
                <GrammarParagraph>De voltooid tegenwoordige tijd beschrijft acties die gestart zijn in het verleden en ondertussen voltooid zijn, maar nog steeds relevantie hebben. Gewoonlijk gaat het over acties uit een recent verleden. In tegenstelling tot andere verleden tijdsvormen, is de actie nu nog steeds relevant. Vb. 5 jaar geleden kocht ik een appel die rot was en toen ontstond er een discussie, .... VS Ik ben deze ochtend naar de winkel geweest en heb een appel gekocht.
                </GrammarParagraph>
                <br />
                <GrammarParagraph>
                    Om de voltooid tegenwoordige tijd te vormen vervoegen we "hebben" of "zijn" en dan voegen we er een voltooid deelwoord aan toe. Voor het voltooid deelwoord van zwakke werkwoorden voegen we "ge", "be" of "ver" toe vóór de stam. Daarna volgt de stam. Achter de stam voegen we "d" of "t" toe, afhankelijk van 't kofschip of 't fokschaap. (Komt de laatste letter van de stam voor in 't kofschip, dan voegen we een "t" toe, zoniet een "d").
                    <br />
                    <br />
                    Dus: ik poets het huis --- ik heb het huis ge-poets-t. (de "s" uit poets komt voor in 't kofschip, dus eindigt het op een "t").
                </GrammarParagraph>
                <br />
                <GrammarParagraph>
                    Hoe weten we nu of het met "hebben" of "zijn" is?
                </GrammarParagraph>
                <br />
                <GrammarParagraph>
                    Zinnen die een lijdend voorwerp hebben worden met "hebben" vervoegd, de rest met "zijn". (Als algemene regel, mits uitzonderingen. Daarom staat in de meeste woordenboeken bij elk werkwoord of het met hebben of zijn wordt gecombineerd.)</GrammarParagraph>

                <br />

                <GrammarParagraph>
                    Laten we van deze zinnen de voltooid tegenwoordige tijd maken: </GrammarParagraph>
                <GrammarListItem>Ik koop een fiets.</GrammarListItem>
                <GrammarListItem>Hij stopt mij.</GrammarListItem>
                <GrammarListItem>Wij steunen haar.</GrammarListItem>
                <GrammarListItem>Hij draagt een zwaar dossier.</GrammarListItem>
                <GrammarListItem>Hij speelt gitaar.</GrammarListItem>
                <GrammarListItem>Ik stop.</GrammarListItem>
                <br />

                <GrammarParagraph> <Highlight>Laten we <a href="https://www.jufmelis.nl/werkwoordspelling/regelmatige-werkwoorden-voltooid-deelwoord/zwakke-werkwoorden--vd-1">deze oefeningen maken</a> </Highlight></GrammarParagraph>
            </GrammarBox>
            <Separator></Separator>
            <TitleText>Lezen / reading</TitleText>
            <CenteredContainer>
                <StyledLink href="https://www.nedbox.be/teaser/onze-natuur">
                    "Onze natuur": bekijk het artikel via de link en beantwoord de vragen.
                </StyledLink>
                <StyledLink href="https://www.nedbox.be/teaser/speciaal-bezoek">
                    "Speciaal bezoek": bekijk het artikel via de link en beantwoord de vragen.
                </StyledLink>
            </CenteredContainer>

            <Separator></Separator>
            <TitleText>Huiswerk / Homework</TitleText>
            <GrammarBox>
                <GrammarParagraph>
                    Maak oefening 1, 2 en 3 <a href="https://leeronlinenederlands.nl/vul-het-voltooid-deelwoord-in-regelmatig-oefening-1/">hier</a>. </GrammarParagraph>

            </GrammarBox>
            <Footer />
        </div >
    );
}

export default Lesson9;