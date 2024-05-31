import { StyledQuestion, LessonContainer, Separator, TitleText, GrammarBox, GrammarParagraph, GrammarTitle, Highlight, GrammarListItem, StyledLink, CenteredContainer, ExtraInformation } from '../pages/lesson1.styles';
import Vocabulary from '../components/Vocabulary/Vocabulary';
import VocabularySimple from '../components/Exercises/Vocabulary/VocabularySimple';
import VocabularyQuiz from '../components/Exercises/Vocabulary/VocabularyQuiz';
import ImageCollage from '../components/ImageCollage/ImageCollage';
import gezelschapsspel from "../images/10gezelsschapsspel.png.webp";
import podium from "../images/10podium.jpeg";
import sporthal from "../images/10sporthal.jpg";
import tennisveld from "../images/10tennisveld.jpg";
import publiek from "../images/10publiek.jpeg";
import schaatsen from "../images/10schaatsen.png";
import GoedBezig from '../components/GoedBezig/GoedBezig';
import Verbs from '../components/Verbs/Verbs';
import VerbExercise from '../components/Exercises/Grammar/VerbExercise';
import FillInTheBlankExercise from '../components/Exercises/Vocabulary/FillintheBlankExercise';
import Translate from '../components/Exercises/Grammar/Translate';
import allowedEmails from '../pages/allowedEmails';
import { useState, useEffect } from 'react';
import schaatsbelg from '../images/schaatsbelg.jpg';
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
        { src: schaatsen, caption: 'Schaatsen' },
        { src: publiek, caption: 'Het publiek' },
        { src: tennisveld, caption: 'Het tennisveld' },
        { src: podium, caption: 'Het podium' },
        { src: gezelschapsspel, caption: 'Het gezelschapsspel' },
        { src: sporthal, caption: 'De sporthal' },
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
        'De spelers lopen het _ op.',
        'Het _ roept en applaudiseert.',
        'De _ fluit de wedstrijd op gang.',
        'Een speler maakt een _, het is een penalty.',
        'De _ zegt dat zijn ploeg meer moet bewegen.',
        'De spelers beginnen met de _ richting het doel van de tegenstander.',
        'Maar ze mogen niet vergeten te _, anders verliezen ze.',
        'Wanneer de ploeg wint zijn hun _ erg blij.',
        'In het tennis moet de bal altijd over het _.',
        'Goed kunnen _ is erg belangrijk wanneer je aan atletiek doet.'
    ];

    const blanks = ['verdedigen', 'aanval', 'veld', 'supporters', 'fout', 'publiek', 'trainer', 'net', 'scheidsrechter', 'springen'];



    return (
        <div>
            <Navigation />
            <Introduction lessonId={lessonId} />
            <Conversation
                belgianMessages={["Hallo Marieke! Is de tenniswedstrijd vandaag?", "Ok prima, op welk veld spelen we?", "Ja, zeker. Ik ben een beetje zenuwachtig. Komt er veel publiek?", "En hebben we een bepaalde tactiek?", "Ja, laten we wat eerder afspreken dan.", "Ach, deelnemen is belangrijker dan winnen."]}
                dutchMessages={["Hey Bart, ja, je moet er om 3uur zijn.", "De achterste baan. Ga je het vinden?", "Nee joh, enkel mijn kindjes en mijn zus.", "Mijn enige tactiek is plezier maken, maar we kunnen het er nog over hebben.", "Ja doen we, zodat we niet verliezen.", "Dat klopt, tot straks!"]}
            />
            <ImageCollage images={images.slice(0, 3)} />
            <StyledQuestion onClick={() => setShowExtraInfo(!showExtraInfo)} data-translation=" Do you play sports?">Doe jij aan sport?</StyledQuestion>
            {showExtraInfo && <div>
                <ExtraInformation>Ja, ik speel voetbal.</ExtraInformation>
                <ExtraInformation>Nee, maar ik beweeg wel veel.</ExtraInformation>
                <ExtraInformation>Nee, ik hou echt niet van sport.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo2(!showExtraInfo2)} data-translation=" What is your favorite sport?">Wat is jouw favoriete sport?</StyledQuestion>
            {showExtraInfo2 && <div>
                <ExtraInformation>Ik kijk heel graag naar voetbal, die sfeer vind ik leuk.</ExtraInformation>
                <ExtraInformation>Ik vind schaatsen erg leuk in de winter en zwemmen in de zomer.</ExtraInformation>
                <ExtraInformation>Mijn favoriete sport is boksen.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo3(!showExtraInfo3)} data-translation=" Do you like board games?">Hou je van gezelschapsspellen?</StyledQuestion>
            {showExtraInfo3 && <div>
                <ExtraInformation>Ja, met fijn gezelschap is dat super tof.</ExtraInformation>
                <ExtraInformation>Niet echt, maar ik speel wel heel graag kaart.</ExtraInformation>
                <ExtraInformation>Ja, ik hou van allerhande spellen.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo4(!showExtraInfo4)} data-translation=" Do you sometimes watch a game in a stadium or on the tv?">Kijk je soms naar een wedstrijd in het stadion of op de tv?</StyledQuestion>
            {showExtraInfo4 && <div>
                <ExtraInformation>Tijdens de Olympische Spelen kijk ik wel veel atletiek.</ExtraInformation>
                <ExtraInformation>Ja, ik ga graag naar voetbalwedstrijden.</ExtraInformation>
                <ExtraInformation>Nee, ik vind dat allemaal veel te saai.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo5(!showExtraInfo5)} data-translation=" Do you have a sports idol?">Heb je een sportidool?</StyledQuestion>
            {showExtraInfo5 && <div>
                <ExtraInformation>Ja, ik ben erg fan van Lionel Messi.</ExtraInformation>
                <ExtraInformation>Niet echt, ik supporter voor iedereen van mijn land.</ExtraInformation>
                <ExtraInformation>Ja, de Belgische hockeyvrouwen vind ik geweldig.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo6(!showExtraInfo6)} data-translation=" Which sports would you like to try once?">Welke sport zou je ooit eens willen proberen?</StyledQuestion>
            {showExtraInfo6 && <div>
                <ExtraInformation>Ik zou eens willen muurklimmen, maar ik heb hoogtevrees.</ExtraInformation>
                <ExtraInformation>Ik wil padel eens uitproberen.</ExtraInformation>
                <ExtraInformation>Geen enkele, ik haat sport, laat mij maar rustig thuis zitten.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo7(!showExtraInfo7)} data-translation=" What are the most popular sports in your country?">Wat zijn de populairste sporten in jouw land?</StyledQuestion>
            {showExtraInfo7 && <div>
                <ExtraInformation>Dat moeten zeker voetbal en wielrennen zijn.</ExtraInformation>
                <ExtraInformation>In mijn land kijkt iedereen naar baseball.</ExtraInformation>
                <ExtraInformation>Onze nationale sport is turnen, daar zijn we heel goed in.</ExtraInformation>
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
                text={{ dutch: 'De schaatsbelg', english: '"The skating belgian"' }}
                image={schaatsbelg}
            />
            <CenteredContainer>
                <StyledLink href="https://www.vi.nl/nieuws/fans-van-real-madrid-vliegen-in-barcelona-vliegtuig-naar-engeland">
                    Lees het artikel en probeer het verhaal opnieuw te vertellen in 5 zinnen.
                </StyledLink>
                <StyledLink href="https://www.hln.be/het-leukste-van-het-web/kijk-meest-bizarre-wintersport-ter-wereld-gaat-over-de-tongen-op-tiktok~aa6162dd/">
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
                { verb: "winnen", conjugations: ["win", "wint", "wint", "winnen", "winnen", "winnen"] },
                { verb: "verliezen", conjugations: ["verlies", "verliest", "verliest", "verliezen", "verliezen", "verliezen"] },
                { verb: "bewegen", conjugations: ["beweeg", "beweegt", "beweegt", "bewegen", "bewegen", "bewegen"] },
                { verb: "aanvallen", conjugations: ["val aan", "valt aan", "valt aan", "vallen aan", "vallen aan", "vallen aan"] },
                { verb: "verdedigen", conjugations: ["verdedig", "verdedigt", "verdedigt", "verdedigen", "verdedigen", "verdedigen"] },
                { verb: "springen", conjugations: ["spring", "springt", "springt", "springen", "springen", "springen"] }
            ]} />
            <Translate sentences={[
                { english: "He plays tennis", translation: "Hij speelt tennis" },
                { english: "The players move a lot", translation: "De spelers bewegen veel" },
                { english: "I defended the ball", translation: "Ik heb de bal verdedigd" },
                { english: "He has jumped", translation: "Hij heeft gesprongen" },
                { english: "We attacked", translation: "Wij hebben aangevallen" },
                { english: "We won the game", translation: "Wij hebben de wedstrijd gewonnen" },
                { english: "I like climbing", translation: "Ik hou van klimmen" },
                { english: "Dutch people have a long tradition of ice skating", translation: "Nederlanders hebben een lange traditie van schaatsen" },
                { english: "Football is war", translation: "Voetbal is oorlog" },
                { english: "Dutch people are born on a bike", translation: "Nederlanders zijn geboren op een fiets" }
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

export default Lesson10;