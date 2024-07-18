import { StyledQuestion, LessonContainer, Separator, TitleText, GrammarBox, GrammarParagraph, GrammarTitle, Highlight, GrammarListItem, StyledLink, CenteredContainer, ExtraInformation } from '../pages/lesson1.styles';
import Vocabulary from '../components/Vocabulary/Vocabulary';
import VocabularySimple from '../components/Exercises/Vocabulary/VocabularySimple';
import VocabularyQuiz from '../components/Exercises/Vocabulary/VocabularyQuiz';
import ImageCollage from '../components/ImageCollage/ImageCollage';
import hoofdkwartier from "../images/18hoofdkwartier.webp";
import minister from "../images/18ministers.jpg";
import parlement from "../images/18parlement.jpeg";
import vergadering from "../images/18vergadering.jpg.webp";
import verkiezing from "../images/18verkiezing.jpeg";
import voorzitter from "../images/18voorzitter.jpg";
import GoedBezig from '../components/GoedBezig/GoedBezig';
import Verbs from '../components/Verbs/Verbs';
import VerbExercise from '../components/Exercises/Grammar/VerbExercise';
import FillInTheBlankExercise from '../components/Exercises/Vocabulary/FillintheBlankExercise';
import Translate from '../components/Exercises/Grammar/Translate';
import allowedEmails from '../pages/allowedEmails';
import { useState, useEffect } from 'react';
import hondenbeen from '../images/hondenbeen.jpg';
import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import Introduction from '../components/Introduction/Introduction';
import VocabularyTime from '../components/Exercises/Vocabulary/VocabularyTime';
import Conversation from '../components/Conversation/Conversation';
import { StyledAbout } from './about.styles';

function Lesson18() {
    const lessonId = 18;
    const words = [
        { dutch: 'De politiek', english: 'The politics' },
        { dutch: 'De wet', english: 'The law' },
        { dutch: 'De verkiezing', english: 'The election' },
        { dutch: 'Stemmen', english: 'To vote' },
        { dutch: 'Het parlement', english: 'The parliament' },
        { dutch: 'De minister', english: 'The minister' },
        { dutch: 'De staatssecretaris', english: 'The state secretary' },
        { dutch: 'De president', english: 'The president' },
        { dutch: 'Het voorstel', english: 'The proposal' },
        { dutch: 'De procedure', english: 'The procedure' },
        { dutch: 'De goedkeuring', english: 'The approval' },
        { dutch: 'Het parlementslid', english: "The member of parliament" },
        { dutch: 'De aanvraag', english: 'The request' },
        { dutch: 'De meerderheid', english: 'The majority' },
        { dutch: 'De minderheid', english: 'The minority' },
        { dutch: 'De democratie', english: 'The democracy' },
        { dutch: 'De coalitie', english: 'The coalition' },
        { dutch: 'Tellen', english: 'To count' },
        { dutch: 'The vote', english: 'De stem' },
        { dutch: 'Maken', english: 'To make' },
        { dutch: 'Goedkeuren', english: 'To approve' },
        { dutch: 'Afkeuren', english: 'To disapprove' },
        { dutch: 'De zetel', english: 'The seat' },
        { dutch: 'Het hoofdkwartier', english: 'The headquarter' },
        { dutch: 'De vergadering', english: 'The meeting' },
        { dutch: 'Vergaderen', english: 'To meet' },
        { dutch: 'Beslissen', english: 'To decide' },
        { dutch: 'De vijand', english: 'The enemy' },
        { dutch: 'De verandering', english: 'The change' },
        { dutch: 'Het gebouw', english: 'The building' }
    ];
    const images = [
        { src: hoofdkwartier, caption: 'Het hoofdkwartier' },
        { src: minister, caption: 'De minister' },
        { src: parlement, caption: 'Het parlement' },
        { src: vergadering, caption: 'De vergadering' },
        { src: verkiezing, caption: 'De verkiezing' },
        { src: voorzitter, caption: 'De voorzitter' },
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
        'Wanneer 1 partij geen meerderheid heeft, vormen verschillen partijen een _.',
        'De eerste _ noemen we ook wel de premier.',
        'De wet is niet aangenomen, ze is _.',
        'In het Belgische parlement zijn er 175 _.',
        'Vergaderingen duren soms te lang, je moet uiteindelijk wel iets _.',
        'Ik ben deze regering echt beu. Ik ga stemmen voor _.',
        'Je mag dat niet doen, dat is tegen de _.',
        'Veel politici hebben _ binnen hun eigen partij.',
        'Ik heb de _ binnengebracht bij het gemeentehuis, nu is het wachten op de goedkeuring.',
        'De _ voor het parlement vindt plaats op 14 oktober.'
    ];

    const blanks = ['beslissen', 'minister', 'vijanden', 'coalitie', 'afgekeurd', 'aanvraag', 'parlementsleden', 'verkiezing', 'verandering', 'wet'];



    return (
        <div>
            <Navigation />
            <Introduction lessonId={lessonId} />
            <Conversation
                belgianMessages={["Hey Maaike! Weet jij al op wie je gaat stemmen bij de volgende verkiezing?", "Misschien wel ja. Heeft de regering het goed gedaan volgens jou?", "Dan kan je misschien specifiek op die personen stemmen?", "Ja, veel partijen denken niet aan de burger, maar enkel aan hun partij.", "Wat zou dan jouw standpunt zijn?", "Dat is een goed idee, ik ga er over nadenken!"]}
                dutchMessages={["Hey Sam, nee, ik heb nog geen idee. Ze lijken allemaal op elkaar.", "Sommige ministers wel, met enkele goede wetten.", "Ja, al mag er ook wel verandering komen. Ik vind hun partijen maar niets.", "Ja, misschien moeten we maar zelf een partij oprichten.", "Dat je enkel nog huisdieren mag kopen eenmaal alle asielen leeg zijn."]}
            />
            <ImageCollage images={images.slice(0, 3)} />
            <StyledQuestion onClick={() => setShowExtraInfo(!showExtraInfo)} data-translation=" Are you interested in politics?">Ben jiij geïnteresseerd in politiek?</StyledQuestion>
            {showExtraInfo && <div>
                <ExtraInformation>Ja, want zij bepalen een deel van ons leven.</ExtraInformation>
                <ExtraInformation>Ja, ooit wil ik zelf minister worden.</ExtraInformation>
                <ExtraInformation>Nee, ik vind politiek echt super saai.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo2(!showExtraInfo2)} data-translation=" What would you change if you were a politician?">Wat zou jij veranderen als je een politicus zou zijn?</StyledQuestion>
            {showExtraInfo2 && <div>
                <ExtraInformation>Ik zou minder belastingen heffen.</ExtraInformation>
                <ExtraInformation>Ik zou het klimaat meer beschermen.</ExtraInformation>
                <ExtraInformation>Ik zou ervoor zorgen dat we sneller beslissingen nemen.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo3(!showExtraInfo3)} data-translation=" Are you satisfied of the current government?">Ben je tevreden met de huidige regering?</StyledQuestion>
            {showExtraInfo3 && <div>
                <ExtraInformation>Over het algemeen wel, maar met sommige dingen minder natuurlijk.</ExtraInformation>
                <ExtraInformation>Nee, ze maken veel te vaak ruzie.</ExtraInformation>
                <ExtraInformation>Nee, ik kan niet wachten tot het weer verkiezingen zijn.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo4(!showExtraInfo4)} data-translation=" Do you know all the ministers of your country?">Ken jij alle ministers van jouw land?</StyledQuestion>
            {showExtraInfo4 && <div>
                <ExtraInformation>Ik denk het wel, maar ik twijfel over de minister van begroting.</ExtraInformation>
                <ExtraInformation>Ja, vraag maar raak.</ExtraInformation>
                <ExtraInformation>Nee, helemaal niet. Ik weet enkel wie de eerste minister is.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo5(!showExtraInfo5)} data-translation=" What would be the slogan if you would found a political party?">Als jij een politieke partij zou oprichten, wat zou de slogan zijn?</StyledQuestion>
            {showExtraInfo5 && <div>
                <ExtraInformation>Minder ruzie, meer wetten.</ExtraInformation>
                <ExtraInformation>Stilstaan is achteruitgaan.</ExtraInformation>
                <ExtraInformation>Voor de burgers en voor de omgeving.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo6(!showExtraInfo6)} data-translation=" For which party would you never vote?">Op welke partij zou je nooit stemmen?</StyledQuestion>
            {showExtraInfo6 && <div>
                <ExtraInformation>Op de extreem-rechtse partij, ik vind hen niet inclusief.</ExtraInformation>
                <ExtraInformation>Op de groenen, ik hou niet van te veel regeltjes.</ExtraInformation>
                <ExtraInformation>Op een centrumpartij, met hen veranderen er nooit dingen.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo7(!showExtraInfo7)} data-translation=" Who is for you the most powerful politician in the world?">Wie is voor jou de machtigste politicus ter wereld?</StyledQuestion>
            {showExtraInfo7 && <div>
                <ExtraInformation>Ik denk de president van de Verenigde Staten.</ExtraInformation>
                <ExtraInformation>De Chinese president, die heeft alsmaar meer macht.</ExtraInformation>
                <ExtraInformation>Misschien de voorzitter van het Europees parlement, onderschat haar maar niet.</ExtraInformation>
            </div>}
            <ImageCollage images={images.slice(3)} />
            <Vocabulary words={words} />
            <StyledAbout>
                <h1>Politiek</h1>
                <p>België heeft een complex politiek systeem met drie officiële talen: Nederlands, Frans en Duits. Dit leidt soms tot hilarische taalverwarringen in het parlement.</p>
                <p>De Belgische regering heeft vaak meer ministers dan een gemiddeld voetbalteam. Ze hebben zelfs een “minister van telecommunicatie en postzegels” gehad!</p>
                <p>Nederland staat bekend om zijn poldermodel, waarbij consensus en overleg centraal staan. Dit betekent dat politici vaak urenlang vergaderen over de kleur van een fietspad.</p>
                <p> De Nederlandse politiek heeft een traditie van paarse kabinetten, waarbij linkse en rechtse partijen samenwerken. </p>
                <p>In Nederland hebben we de “Partij voor de Dieren”. Hun belangrijkste standpunt? Dierenrechten natuurlijk!</p>
                <p>België heeft de “Lijst Dedecker”, opgericht door een voormalig judokampioen. Ze zijn niet bang om politieke tegenstanders in een houdgreep te nemen.</p>


            </StyledAbout>
            <VocabularyQuiz words={words} />
            <VocabularySimple words={words} />
            <FillInTheBlankExercise sentences={sentences} blanks={blanks} />
            <GoedBezig
                text={{ dutch: 'Als twee honden vechten om een been, loopt de derde ermee heen', english: '"When two dogs fight for a bone, the third one takes it"' }}
                image={hondenbeen}
            />
            <CenteredContainer>
                <StyledLink href="https://speld.nl/2024/07/17/burgemeester-parijs-zwemt-in-seine-hoopt-op-tijd-hersteld-te-zijn-voor-openingsceremonie/">
                    Lees het artikel en geef een korte samenvatting.
                </StyledLink>
                <StyledLink href="https://speld.nl/2024/06/28/kwaadaardige-bejaarde-maakt-betere-indruk-dan-verwarde-bejaarde/">
                    Lees dit artikel en geef een korte samenvatting.
                </StyledLink>
            </CenteredContainer>
            <Separator></Separator>
            <TitleText>Grammatica / Grammar</TitleText>
            <LessonContainer>
                <Verbs
                    verb="innoveren"
                    translation="to innovate"
                    conjugations={["innoveer", "innoveert", "innoveert", "innoveren", "innoveren", "innoveren"]}
                    vd="geïnnoveerd"
                    ovt="innoveerde"
                />
                <Verbs
                    verb="programmeren"
                    translation="to program"
                    conjugations={["programmeer", "programmeert", "programmeert", "programmeren", "programmeren", "programmeren"]}
                    vd="geprogrammeerd"
                    ovt="programmeerde"
                />
                <Verbs
                    verb="bewijzen"
                    translation="to prove"
                    conjugations={["bewijs", "bewijst", "bewijst", "bewijzen", "bewijzen", "bewijzen"]}
                    vd="bewezen"
                    ovt="bewees"
                />
                <Verbs
                    verb="ontkennen"
                    translation="to deny"
                    conjugations={["ontken", "ontkent", "ontkent", "ontkennen", "ontkennen", "ontkennen"]}
                    vd="ontkend"
                    ovt="ontkende"
                />
                <Verbs
                    verb="onderzoeken"
                    translation="to investigate"
                    conjugations={["onderzoek", "onderzoekt", "onderzoekt", "onderzoeken", "onderzoeken", "onderzoeken"]}
                    vd="onderzocht"
                    ovt="onderzocht"
                />
                <Verbs
                    verb="samenwerken"
                    translation="to collaborate"
                    conjugations={["werk samen", "werkt samen", "werkt samen", "werken samen", "werken samen", "werken samen"]}
                    vd="samengewerkt"
                    ovt="werkte samen"
                />
            </LessonContainer>
            <VerbExercise verbs={[
                { verb: "programmeren", conjugations: ["programmeer", "programmeert", "programmeert", "programmeren", "programmeren", "programmeren"] },
                { verb: "bewijzen", conjugations: ["bewijs", "bewijst", "bewijst", "bewijzen", "bewijzen", "bewijzen"] },
                { verb: "ontkennen", conjugations: ["ontken", "ontkent", "ontkent", "ontkennen", "ontkennen", "ontkennen"] },
                { verb: "innoveren", conjugations: ["innoveer", "innoveert", "innoveert", "innoveren", "innoveren", "innoveren"] },
                { verb: "onderzoeken", conjugations: ["onderzoek", "onderzoekt", "onderzoekt", "onderzoeken", "onderzoeken", "onderzoeken"] },
                { verb: "samenwerken", conjugations: ["werk samen", "werkt samen", "werkt samen", "werken samen", "werken samen", "werken samen"] }
            ]} />
            <Translate sentences={[
                { english: "That is proven", translation: "Dat is bewezen" },
                { english: "I have programmed an application", translation: "Ik heb een applicatie geprogrammeerd" },
                { english: "I denied the facts", translation: "Ik heb de feiten ontkend" },
                { english: "I investigate the behaviour of monkeys", translation: "Ik onderzoek het gedrag van apen" },
                { english: "We have collaborated", translation: "Wij hebben samengewerkt" },
                { english: "We collaborated", translation: "Wij werkten samen" },
                { english: "You innovated", translation: "Jij innoveerde" },
                { english: "I worked together with a scientist", translation: "I worked together with a scientist" },
                { english: "Do you deny that?", translation: "Ontken jij dat?" },
                { english: "Can you program that?", translation: "Kun jij dat programmeren?" }
            ]} />
            <GrammarBox>
                <GrammarTitle>📚 Het woordje "er" 📚</GrammarTitle>
                <GrammarParagraph>
                    Één van de moeilijkste woordjes in de Nederlandse taal is het woord "er". Mensen met het Nederlands als moedertaal gebruiken het zonder er bij na te denken.</GrammarParagraph>
                <br />
                <GrammarParagraph> <Highlight>Laten we even bekijken in welke gevallen je het woordje "er" kan gebruiken: <a href="https://www.niow.nl/blog/taalcursus/nt2-ers-en-het-lastige-woordje-er#:~:text=Gebruik%20van%20er&text=Dit%20kan%20zijn%20als%20verwijswoord,verzwakte%20vorm%20van%20dit%20woord.&text=Wanneer%20'er'%20als%20plaatsaanduiding%20wordt,over%20welke%20plaats%20het%20gaat.">hier</a> </Highlight></GrammarParagraph>
                <GrammarParagraph> <Highlight> <a href="https://zichtbaarnederlands.nl/nl/adverbium/er">hier</a> </Highlight></GrammarParagraph>
                <GrammarParagraph> <Highlight> <a href="https://www.jufmelis.nl/extra/er">en hier</a> </Highlight></GrammarParagraph>
                <GrammarParagraph> <Highlight>En laten we enkele oefeningen maken: <a href="https://nt2taalmenu.nl/wp-content/uploads/b2-grammatica/Er_en_daar_met_prepositie2.pdf">hier</a> </Highlight></GrammarParagraph>
            </GrammarBox>
            <Separator></Separator>
            <TitleText>Lezen / reading</TitleText>
            <CenteredContainer>
                <StyledLink href="https://www.nedbox.be/exercise/8bf45651-8386-4b36-9d6a-84398e94391b">
                    "Wat is ChatGPT": bekijk het artikel via de link en beantwoord de vragen.
                </StyledLink>
                <StyledLink href="https://www.nedbox.be/exercise/1f5e1026-94c0-47fc-8e40-5f94756ab859">
                    "Een auto op mierenzuur": bekijk het artikel via de link en beantwoord de vragen.
                </StyledLink>
            </CenteredContainer>

            <Separator></Separator>
            <TitleText>Huiswerk / Homework</TitleText>
            <GrammarBox>
                <GrammarParagraph>
                    Maak <a href="https://nt2taalmenu.nl/nt2-b1-grammatica-menu-er/">deze oefeningen</a>.</GrammarParagraph>
            </GrammarBox>
            <Footer />
        </div >
    );
}

export default Lesson18;