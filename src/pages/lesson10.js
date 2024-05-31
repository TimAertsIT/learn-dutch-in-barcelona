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

function Lesson10() {
    const lessonId = 10;
    const words = [
        { dutch: 'Winnen', english: 'To win' },
        { dutch: 'Verliezen', english: 'To lose' },
        { dutch: 'Bewegen', english: 'To move' },
        { dutch: 'Aanvallen', english: 'To attack' },
        { dutch: 'Verdedigen', english: 'To defend' },
        { dutch: 'Springen', english: 'To jump' },
        { dutch: 'Staan', english: 'To stand' },
        { dutch: 'Liggen', english: 'To lay' },
        { dutch: 'Gooien', english: 'To throw' },
        { dutch: 'Klimmen', english: 'To climb' },
        { dutch: 'Het spel', english: 'The game' },
        { dutch: 'Het gezelschapsspel', english: 'The board game' },
        { dutch: 'De ploeg', english: 'The team' },
        { dutch: 'De winnaar', english: 'The winner' },
        { dutch: 'De verliezer', english: 'The loser' },
        { dutch: 'Het veld', english: 'The field' },
        { dutch: 'Het doel', english: 'The goal' },
        { dutch: 'De wedstrijd', english: 'The match' },
        { dutch: 'Schaken', english: 'To play chess' },
        { dutch: 'Oefenen', english: 'To practise' },
        { dutch: 'Boksen', english: 'To box' },
        { dutch: 'Roeien', english: 'To row' },
        { dutch: 'Schaatsen', english: 'To ice-skate' },
        { dutch: 'Skieën', english: 'To ski' },
        { dutch: 'De supporter', english: 'The fan' },
        { dutch: 'De trainer', english: 'The coach' },
        { dutch: 'De scheidsrechter', english: 'The referee' },
        { dutch: 'De fout', english: 'The fault' },
        { dutch: 'De tactiek', english: 'The strategy' },
        { dutch: 'Het net', english: 'The net' }
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
                <h1>Sportfanaten</h1>
                <p> Nederland is een land dat bekend staat om zijn liefde voor sport. Voetbal is de populairste sport in Nederland. Het Nederlands voetbalelftal, ook wel bekend als "Oranje", heeft internationaal succes behaald, waaronder het bereiken van de FIFA Wereldbekerfinale in 1974, 1978 en 2010.</p>

                <p>Naast voetbal zijn er andere sporten die populair zijn in Nederland, zoals schaatsen, wielrennen en hockey. Nederlanders hebben een lange traditie van schaatsen, zowel als een competitieve sport als als een recreatieve activiteit. Wielrennen is ook een belangrijk onderdeel van de Nederlandse cultuur, met evenementen zoals de Amstel Gold Race en de Ronde van Nederland.</p>

                <p>Als het gaat om spellen, zijn bordspellen zoals "dammen" en "schaken" populair in Nederland. Er zijn ook veel Nederlanders die genieten van videogames, met een groeiende e-sportscene in het land.</p>

                <p>Leren over sport en spel in Nederland kan een leuke en interessante manier zijn om de Nederlandse cultuur te begrijpen en de taal te leren.</p>
                <p>Wist je dat Nederlanders zo gepassioneerd zijn over fietsen dat ze soms zeggen dat ze zijn geboren op een fiets? Het is een grapje, natuurlijk, maar het toont wel aan hoe belangrijk fietsen is in de Nederlandse cultuur. Sterker nog, er zijn meer fietsen dan mensen in Nederland!</p>

                <p> En als het gaat om voetbal, hebben Nederlanders een gezegde: "Voetbal is oorlog". Maar maak je geen zorgen, het is niet zo serieus als het klinkt! Het betekent gewoon dat ze erg gepassioneerd zijn over het spel.</p>

                <p>Bij het spelen van bordspellen hebben Nederlanders een grappige traditie. Als iemand verliest, moeten ze de winnaar een "stroopwafel" geven, een populaire Nederlandse snack. Dus zelfs als je verliest, win je iets lekkers!</p>


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
                    verb="winnen"
                    translation="to win"
                    conjugations={["win", "wint", "wint", "winnen", "winnen", "winnen"]}
                    vd="gewonnen"
                />
                <Verbs
                    verb="verliezen"
                    translation="to lose"
                    conjugations={["verlies", "verliest", "verliest", "verliezen", "verliezen", "verliezen"]}
                    vd="verloren"
                />
                <Verbs
                    verb="bewegen"
                    translation="to move"
                    conjugations={["beweeg", "beweegt", "beweegt", "bewegen", "bewegen", "bewegen"]}
                    vd="bewogen"
                />
                <Verbs
                    verb="aanvallen"
                    translation="to attack"
                    conjugations={["val aan", "valt aan", "valt aan", "vallen aan", "vallen aan", "vallen aan"]}
                    vd="aangevallen"
                />
                <Verbs
                    verb="verdedigen"
                    translation="to defend"
                    conjugations={["verdedig", "verdedigt", "verdedigt", "verdedigen", "verdedigen", "verdedigen"]}
                    vd="verdedigd"
                />
                <Verbs
                    verb="springen"
                    translation="to jump"
                    conjugations={["spring", "springt", "springt", "springen", "springen", "springen"]}
                    vd="gesprongen"
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
                    Maak oefening 1, 2 en 3 <a href="https://leeronlinenederlands.nl/vul-het-voltooid-deelwoord-in-regelmatig-oefening-1/">hier</a>. </GrammarParagraph>

            </GrammarBox>
            <Footer />
        </div >
    );
}

export default Lesson10;