import { StyledQuestion, LessonContainer, Separator, TitleText, GrammarBox, GrammarParagraph, GrammarTitle, Highlight, GrammarListItem, StyledLink, CenteredContainer, ExtraInformation } from '../pages/lesson1.styles';
import Vocabulary from '../components/Vocabulary/Vocabulary';
import VocabularySimple from '../components/Exercises/Vocabulary/VocabularySimple';
import VocabularyQuiz from '../components/Exercises/Vocabulary/VocabularyQuiz';
import ImageCollage from '../components/ImageCollage/ImageCollage';
import beroemdheid from "../images/12beroemdheid.jpg.webp";
import haven from "../images/12haven.jpg";
import landbouw from "../images/12landbouw.jpeg";
import muziekfestival from "../images/12muziekfestival.jpg.webp";
import regering from "../images/12regering.jpg";
import wafel from "../images/12wafel.jpeg";
import GoedBezig from '../components/GoedBezig/GoedBezig';
import Verbs from '../components/Verbs/Verbs';
import VerbExercise from '../components/Exercises/Grammar/VerbExercise';
import FillInTheBlankExercise from '../components/Exercises/Vocabulary/FillintheBlankExercise';
import Translate from '../components/Exercises/Grammar/Translate';
import allowedEmails from '../pages/allowedEmails';
import { useState, useEffect } from 'react';
import melkhoning from '../images/melkhoning.jpeg';
import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import Introduction from '../components/Introduction/Introduction';
import VocabularyTime from '../components/Exercises/Vocabulary/VocabularyTime';
import Conversation from '../components/Conversation/Conversation';
import { StyledAbout } from './about.styles';

function Lesson12() {
    const lessonId = 12;
    const words = [
        { dutch: 'De hoofdstad', english: 'The capital' },
        { dutch: 'Het koninkrijk', english: 'The kingdom' },
        { dutch: 'De republiek', english: 'The republic' },
        { dutch: 'De grens', english: 'The border' },
        { dutch: 'De inwoner', english: 'The inhabitant' },
        { dutch: 'De regering', english: 'The government' },
        { dutch: 'Het staatshoofd', english: 'The head of state' },
        { dutch: 'De oppervlakte', english: 'The surface' },
        { dutch: 'Het volkslied', english: 'The anthem' },
        { dutch: 'De feestdag', english: 'The bank holiday' },
        { dutch: 'De geografie', english: 'The geography' },
        { dutch: 'De bevolking', english: 'The population' },
        { dutch: 'Het bestuur', english: 'The directorship' },
        { dutch: 'De economie', english: 'The economy' },
        { dutch: 'De cultuur', english: 'The culture' },
        { dutch: 'Het milieu', english: 'The environment' },
        { dutch: 'De rivier', english: 'The river' },
        { dutch: 'De kust', english: 'The seaside' },
        { dutch: 'De landbouw', english: 'The agriculture' },
        { dutch: 'De regio', english: 'The region' },
        { dutch: 'De provincie', english: 'The province' },
        { dutch: 'De demografie', english: 'The demographics' },
        { dutch: 'Het parlement', english: 'The parliament' },
        { dutch: 'De politieke partij', english: 'The political party' },
        { dutch: 'De politie', english: 'The police' },
        { dutch: 'De dienst', english: 'The service' },
        { dutch: 'De industrie', english: 'The industry' },
        { dutch: 'Het bedrijf', english: 'The enterprise' },
        { dutch: 'De energie', english: 'The energy' },
        { dutch: 'Het verkeer', english: 'The traffic' }
    ];
    const images = [
        { src: beroemdheid, caption: 'De beroemdheid' },
        { src: haven, caption: 'De haven' },
        { src: landbouw, caption: 'De landbouw' },
        { src: muziekfestival, caption: 'Het muziekfestival' },
        { src: regering, caption: 'De regering' },
        { src: wafel, caption: 'De wafel' },
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
        'De _ van België is Brussel, bekend om zijn prachtige Grote Markt.',
        'België is een _, met koning Filip als het huidige staatshoofd.',
        'De _ tussen België en Nederland is bekend om het dorp Baarle, dat een ingewikkelde enclavesituatie heeft.',
        'Een gemiddelde _ van België eet ongeveer 15kg chocolade per jaar.',
        'Er zijn meer dan 4 _ in België.',
        'Het _ is de koning, maar de macht ligt bij de premier en de regering.',
        'De _ van Belgë is ongeveer 30.688 vierkante kilometer.',
        'Het _ van België is "La Brabançonne.',
        'De nationale _ wordt gevierd op 21 juli.',
        'De _ omvat de Ardennen in het zuidoosten en de kustvlakte in het noordwesten.'
    ];

    const blanks = ['inwoner', 'geografie', 'hoofdstad', 'feestdag', 'koninkrijk', 'grens', 'regeringen', 'staatshoofd', 'volkslied', 'oppervlakte'];



    return (
        <div>
            <Navigation />
            <Introduction lessonId={lessonId} />
            <Conversation
                belgianMessages={["Hey Maaike! Wanneer kom je naar België?", "Onze eetcultuur is wel apart, onze mooie oude steden, en het is een klein land, maar dichtbevolkt.", "We eten graag en veel, misschien niet altijd gezond. En natuurlijk een Belgisch biertje erbij!", "Er zijn zeker honderden biersoorten. En zowel qua drank als eten zijn er ook nog regionale specialiteiten.", "Brugge, Gent, Leuven, Antwerpen, Mechelen, Luik, Namen, de Ardennen, te veel om op te noemen.", "Kom maar af en dan toon ik je ons vlakke land."]}
                dutchMessages={["Hey Sam, ik hoop snel. Vertel me nu eens, wat maakt België zo speciaal?", "Wat houdt die eetcultuur precies in?", "Ja, die ken ik. Ik hou van de trappisten!", "En welke bestemmingen kan je aanraden?", "Dan moet ik maar eens snel een uitje inplannen.", "Ik kijk er naar uit!"]}
            />
            <ImageCollage images={images.slice(0, 3)} />
            <StyledQuestion onClick={() => setShowExtraInfo(!showExtraInfo)} data-translation=" Where in Belgium have you been already?">Waar in België ben je al geweest?</StyledQuestion>
            {showExtraInfo && <div>
                <ExtraInformation>Ik ben nog nergens in België geweest, dat zal voor de toekomst zijn.</ExtraInformation>
                <ExtraInformation>Ik ben al in Brugge en in Brussel geweest.</ExtraInformation>
                <ExtraInformation>Ik heb in België gewoond, dus bijna overal.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo2(!showExtraInfo2)} data-translation=" Do you know some Belgian celebrities?">Ken je enkele Belgische beroemdheden?</StyledQuestion>
            {showExtraInfo2 && <div>
                <ExtraInformation>Ik ken Kevin de Bruyne, Dani Klein, Stromae en Jean-Claude Van Damme.</ExtraInformation>
                <ExtraInformation>Ja, ik ken Guy Verhofstadt, want ik hou van politiek.</ExtraInformation>
                <ExtraInformation>Ik kijk graag naar films en dus ken ik Matthias Schoenaerts.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo3(!showExtraInfo3)} data-translation=" What can you tell about the Belgian economy?">Wat kan je vertellen over de Belgische economie?</StyledQuestion>
            {showExtraInfo3 && <div>
                <ExtraInformation>Het is een diensteneconomie.</ExtraInformation>
                <ExtraInformation>De havens van Antwerpen en Zeebrugge zijn erg belangrijk.</ExtraInformation>
                <ExtraInformation>Er is heel weinig werkloosheid, ze hebben extra werkkrachten nodig.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo4(!showExtraInfo4)} data-translation=" What do you know about Belgian politics?">Wat weet je over de Belgische politiek?</StyledQuestion>
            {showExtraInfo4 && <div>
                <ExtraInformation>Ik weet dat de Belgische politiek erg ingewikkeld is!</ExtraInformation>
                <ExtraInformation>Er zijn drie gewesten en vijf regeringen en ze maken vaak ruzie.</ExtraInformation>
                <ExtraInformation>Heel weinig, ik hou sowieso niet van politiek en al zeker niet van de Belgische.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo5(!showExtraInfo5)} data-translation=" Where in Belgium can you find the most beautiful nature?">Waar in België vind je de mooiste natuur?</StyledQuestion>
            {showExtraInfo5 && <div>
                <ExtraInformation>In de Ardennen is het erg groen en heuvelachtig, met mooie bossen en rivieren.</ExtraInformation>
                <ExtraInformation>Er zijn verschillende nationale parken, onder andere in Limburg.</ExtraInformation>
                <ExtraInformation>De kust is volgebouwd, maar er zijn nog enkele mooie duinenlandschappen.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo6(!showExtraInfo6)} data-translation=" What do you know about the Belgian culture?">Wat weet je over de Belgische cultuur?</StyledQuestion>
            {showExtraInfo6 && <div>
                <ExtraInformation>Muziek vormt een belangrijk deel van de cultuur, met festivals in de zomer zoals Tomorrowland.</ExtraInformation>
                <ExtraInformation>Voetbal is de nationale sport, maar ook wielrennen is erg populair.</ExtraInformation>
                <ExtraInformation>Lekker eten en op café gaan maken zeker deel uit van de cultuur.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo7(!showExtraInfo7)} data-translation=" How would you describe the inhabitants of Belgium?">Hoe zou je de inwoners van België omschrijven?</StyledQuestion>
            {showExtraInfo7 && <div>
                <ExtraInformation>Misschien een beetje introvert, je hebt tijd nodig om ze te leren kennen.</ExtraInformation>
                <ExtraInformation>Het zijn vreselijke mensen, altijd maar zeuren en klagen, onder andere over het weer.</ExtraInformation>
                <ExtraInformation>Ik vind het moeilijk om te veralgemenen, iedereen is anders.</ExtraInformation>
            </div>}
            <ImageCollage images={images.slice(3)} />
            <Vocabulary words={words} />
            <StyledAbout>
                <h1>Het Koninkrijk België</h1>
                <p>België, officieel bekend als het Koninkrijk België, is een land in West-Europa. Het staat bekend om zijn middeleeuwse oude steden, Vlaamse renaissanceschilderkunst, en, natuurlijk, wafels en chocolade. Maar er zijn ook enkele grappige feiten over België die je misschien niet weet.</p>
                <p>België heeft meer kastelen per vierkante kilometer dan enig ander land ter wereld. Dus als je van kastelen houdt, is België de plek voor jou!</p>
                <p> Het land is beroemd om zijn bier. Er zijn meer dan 1.600 verschillende soorten Belgisch bier. Dat is veel bier om te proeven!</p>
                <p>De langste tramlijn ter wereld bevindt zich in België. De Kusttram rijdt langs de gehele Belgische kust, van de Franse grens tot aan de Nederlandse grens.</p>
                <p>België is de grootste exporteur van wafels ter wereld. Ze nemen hun wafels zeer serieus!</p>
                <p>En tot slot, de snelste lift ter wereld bevindt zich in de Belgische stad Brussel, in het gebouw van de Europese Unie.</p>


            </StyledAbout>
            <VocabularyQuiz words={words} />
            <VocabularySimple words={words} />
            <FillInTheBlankExercise sentences={sentences} blanks={blanks} />
            <GoedBezig
                text={{ dutch: 'Een land van melk en honing', english: '"A country of milk and honey"' }}
                image={melkhoning}
            />
            <CenteredContainer>
                <StyledLink href="https://www.demorgen.be/nieuws/de-10-meest-bizarre-belgische-wetten-die-wel-echt-bestaan~bb19daa2/?referrer=https://www.google.com/">
                    Lees het artikel en schrijf een samenvatting.
                </StyledLink>
                <StyledLink href="https://www.elle.be/nl/219880-lol-dit-vinden-buitenlanders-de-raarste-gewoontes-van-belgen.html">
                    Luister naar dit artikel en probeer het verhaal opnieuw te vertellen in 5 zinnen.
                </StyledLink>
            </CenteredContainer>
            <Separator></Separator>
            <TitleText>Grammatica / Grammar</TitleText>
            <LessonContainer>
                <Verbs
                    verb="weten"
                    translation="to know"
                    conjugations={["weet", "weet", "weet", "weten", "weten", "weten"]}
                    vd="geweten"
                />
                <Verbs
                    verb="proeven"
                    translation="to taste"
                    conjugations={["proef", "proeft", "proeft", "proeven", "proeven", "proeven"]}
                    vd="geproefd"
                />
                <Verbs
                    verb="vertellen"
                    translation="to tell"
                    conjugations={["vertel", "vertelt", "vertelt", "vertellen", "vertellen", "vertellen"]}
                    vd="verteld"
                />
                <Verbs
                    verb="vinden"
                    translation="to find"
                    conjugations={["vind", "vindt", "vindt", "vinden", "vinden", "vinden"]}
                    vd="gevonden"
                />
                <Verbs
                    verb="bouwen"
                    translation="to build"
                    conjugations={["bouw", "bouwt", "bouwt", "bouwen", "bouwen", "bouwen"]}
                    vd="gebouwd"
                />
                <Verbs
                    verb="vormen"
                    translation="to form"
                    conjugations={["vorm", "vormt", "vormt", "vormen", "vormen", "vormen"]}
                    vd="gevormd"
                />
            </LessonContainer>
            <VerbExercise verbs={[
                { verb: "weten", conjugations: ["weet", "weet", "weet", "weten", "weten", "weten"] },
                { verb: "proeven", conjugations: ["proef", "proeft", "proeft", "proeven", "proeven", "proeven"] },
                { verb: "vertellen", conjugations: ["vertel", "vertelt", "vertelt", "vertellen", "vertellen", "vertellen"] },
                { verb: "vinden", conjugations: ["vind", "vindt", "vindt", "vinden", "vinden", "vinden"] },
                { verb: "bouwen", conjugations: ["bouw", "bouwt", "bouwt", "bouwen", "bouwen", "bouwen"] },
                { verb: "vormen", conjugations: ["vorm", "vormt", "vormt", "vormen", "vormen", "vormen"] }
            ]} />
            <Translate sentences={[
                { english: "The politicians form a government", translation: "De politici vormen een regering" },
                { english: "I have built a house", translation: "Ik heb een huis gebouwd" },
                { english: "Where have you been already?", translation: "Waar ben je al geweest?" },
                { english: "What can you tell about the Belgian economy?", translation: "Wat kan je vertellen over de Belgische economie?" },
                { english: "What do you know about Belgian politics?", translation: "Wat weet je over de Belgische politiek?" },
                { english: "I have tasted it", translation: "Ik heb het geproefd" },
                { english: "I have formed my opinion", translation: "Ik heb mijn mening gevormd" },
                { english: "She has told him a story", translation: "Zij heeft hem een verhaal verteld" },
                { english: "I have known that", translation: "Ik heb dat geweten" },
                { english: "They have built a country", translation: "Zij hebben een land bebouwd" }
            ]} />
            <GrammarBox>
                <GrammarTitle>📚 De onvoltooid verleden tijd 📚</GrammarTitle>
                <GrammarParagraph>
                    Net zoals bij de voltooid verleden tijd zijn er verschillen tussen zwakke en sterke werkwoorden en lopen deze erg gelijk. Voor de zwakke werkwoorden zoeken we de stam, waarna we, afhankelijk van 't kofschip, een "te/ten" of "de/den" toevoegen.</GrammarParagraph>
                <br />
                <GrammarParagraph> <Highlight>Laten we even verder bekijken wat dat juist betekent: <a href="https://www.braint.nl/taalgids/werkwoordspelling/verleden-tijd.html#:~:text=Je%20kunt%20de%20persoonsvorm%20in,dubbel%20t%20of%20dubbel%20d">hier</a> </Highlight></GrammarParagraph>
                <GrammarParagraph> <Highlight>En laten we enkele oefeningen maken met: <a href="http://www.talenwijzer.com/nederlandse-werkwoorden-ovt.html">sterke en zwakke werkwoorden</a> </Highlight></GrammarParagraph>
            </GrammarBox>
            <GrammarBox>
                <GrammarTitle>📚 Plaatsbepalingen 📚</GrammarTitle>
                <GrammarListItem>Op = on</GrammarListItem>
                <GrammarListItem>Onder = underneath</GrammarListItem>
                <GrammarListItem>Naast/langs = next to</GrammarListItem>
                <GrammarListItem>Tegenover = opposite</GrammarListItem>
                <GrammarListItem>Boven = above</GrammarListItem>
                <GrammarListItem>Tussen = between</GrammarListItem>
                <GrammarListItem>Voor = in front of</GrammarListItem>
                <GrammarListItem>Achter = behind</GrammarListItem>
                <br />
                <GrammarParagraph> <Highlight>Laten we enkele oefeningen maken: <a href="https://nt2taalmenu.nl/nt2-a1-woordenleren-voorzetsels-oefening4/">1</a> en <a href="https://nt2taalmenu.nl/nt2-a1-grammatica-voorzetsels-oefening2/">2</a>
                </Highlight></GrammarParagraph>
            </GrammarBox>
            <Separator></Separator>
            <TitleText>Lezen / reading</TitleText>
            <CenteredContainer>
                <StyledLink href="https://www.nedbox.be/teaser/nederland-versus-belgie-wonen">
                    "Nederland versus België": bekijk het artikel via de link en beantwoord de vragen.
                </StyledLink>
                <StyledLink href="https://www.nedbox.be/teaser/belgie-een-speciaal-land">
                    "België, een speciaal land": bekijk het artikel via de link en beantwoord de vragen.
                </StyledLink>
            </CenteredContainer>

            <Separator></Separator>
            <TitleText>Huiswerk / Homework</TitleText>
            <GrammarBox>
                <GrammarParagraph>
                    Wat heb je vorige week allemaal gedaan? Schrijf een tekst van ongeveer 15 zinnen en gebruik de juiste werkwoordsvorm in de verleden tijd.</GrammarParagraph>
            </GrammarBox>
            <Footer />
        </div >
    );
}

export default Lesson12;