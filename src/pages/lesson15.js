import { StyledQuestion, LessonContainer, Separator, TitleText, GrammarBox, GrammarParagraph, GrammarTitle, Highlight, GrammarListItem, StyledLink, CenteredContainer, ExtraInformation } from '../pages/lesson1.styles';
import Vocabulary from '../components/Vocabulary/Vocabulary';
import VocabularySimple from '../components/Exercises/Vocabulary/VocabularySimple';
import VocabularyQuiz from '../components/Exercises/Vocabulary/VocabularyQuiz';
import ImageCollage from '../components/ImageCollage/ImageCollage';
import broek from "../images/15broek.jpg.webp";
import jurk from "../images/15jurk.jpg.avif";
import modeshow from "../images/15modeshow.jpg";
import muts from "../images/15muts.jpg";
import pashokje from "../images/15pashokje.jpeg";
import sportkledij from "../images/15sportkledij.jpg.webp";
import GoedBezig from '../components/GoedBezig/GoedBezig';
import Verbs from '../components/Verbs/Verbs';
import VerbExercise from '../components/Exercises/Grammar/VerbExercise';
import FillInTheBlankExercise from '../components/Exercises/Vocabulary/FillintheBlankExercise';
import Translate from '../components/Exercises/Grammar/Translate';
import allowedEmails from '../pages/allowedEmails';
import { useState, useEffect } from 'react';
import klerenman from '../images/klerenman.jpg';
import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import Introduction from '../components/Introduction/Introduction';
import VocabularyTime from '../components/Exercises/Vocabulary/VocabularyTime';
import Conversation from '../components/Conversation/Conversation';
import { StyledAbout } from './about.styles';

function Lesson15() {
    const lessonId = 15;
    const words = [
        { dutch: 'De kleding', english: 'The clothes' },
        { dutch: 'De mode', english: 'The fashion' },
        { dutch: 'De maat', english: 'The size' },
        { dutch: 'De broek', english: 'The trousers' },
        { dutch: 'Het ondergoed', english: 'The underwear' },
        { dutch: 'De pet', english: 'The cap' },
        { dutch: 'De muts', english: 'The wooly hat' },
        { dutch: 'Het t-shirt', english: 'The t-shirt' },
        { dutch: 'Het hemd', english: 'The blouse' },
        { dutch: 'De trui', english: 'The jumper' },
        { dutch: 'De sok', english: 'The sock' },
        { dutch: 'De jurk', english: "The dress" },
        { dutch: 'De rok', english: 'The skirt' },
        { dutch: 'Passen', english: 'To fit' },
        { dutch: 'Het pashokje', english: 'The fitting room' },
        { dutch: 'De jas', english: 'The coat' },
        { dutch: 'De zwembroek', english: 'The swimming trunk' },
        { dutch: 'De korte broek', english: 'The shorts' },
        { dutch: 'Lang', english: 'Long' },
        { dutch: 'De taille', english: 'The waist' },
        { dutch: 'Dragen', english: 'To wear' },
        { dutch: 'Aantrekken', english: 'To pull on' },
        { dutch: 'Uitdoen', english: 'To take off' },
        { dutch: 'Aankleden', english: 'To get dressed' },
        { dutch: 'De modeshow', english: 'The fashion show' },
        { dutch: 'De stijl', english: 'The style' },
        { dutch: 'Het model', english: 'The fashion' },
        { dutch: 'Het merk', english: 'The brand' },
        { dutch: 'De kledingkast', english: 'The wardrobe' },
        { dutch: 'De modetrend', english: 'The fashion trend' }
    ];
    const images = [
        { src: broek, caption: 'De broek' },
        { src: jurk, caption: 'De jurk' },
        { src: muts, caption: 'De muts' },
        { src: pashokje, caption: 'Het pashokje' },
        { src: modeshow, caption: 'De modeshow' },
        { src: sportkledij, caption: 'De sportkledij' },
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
        'De vrouw van mijn zus is mijn _.',
        'De dochter van mijn zus is mijn _.',
        'Hij windt zich niet snel op, hij is erg _.',
        'Mijn buurman is erg _, hij zegt altijd goededag.',
        'Ook al heb ik alles gewonnen, ik wil _ blijven.',
        'Je moet niet zo aan jezelf twijfelen, je mag meer _ zijn.',
        'Wij gaan straks naar een spa om te _.',
        'Veel oudere mensen zijn vaak _, ga daarom zeker eens op bezoek.',
        'Een _ noemen ze in België een nonkel.',
        'Het _ is kleiner dan de familie.'
    ];

    const blanks = ['eenzaam', 'geduldig', 'nicht', 'vriendelijk', 'schoonzus', 'bescheiden', 'zelfverzekerd', 'gezin', 'oom', 'ontspannen'];



    return (
        <div>
            <Navigation />
            <Introduction lessonId={lessonId} />
            <Conversation
                belgianMessages={["Hey Caroline! Wanneer gaan we nog eens winkelen?", "Ik heb zomerkleding nodig. Korte broeken, zwembroeken, een t-shirt, ... En jij?", "In welke winkelstraat wil je gaan?", "Dat is prima. Is daar ook een winkel voor sportkledij?", "Prima. Ik ga alvast even bekijken wat mijn maten zijn!", "Tot morgen!"]}
                dutchMessages={["Hey Sam, morgen als je wil. Wat heb je nodig?", "Een leuk jurkje kan er altijd nog wel bij.", "Misschien op De Meir? Daar zijn enkele merken die ik graag heb.", "Volgens mij wel, er is daar een Decathlon als ik me niet vergis.", "Anders pas je toch gewoon in de winkel. Tot morgen."]}
            />
            <ImageCollage images={images.slice(0, 3)} />
            <StyledQuestion onClick={() => setShowExtraInfo(!showExtraInfo)} data-translation=" Do you like fashion?">Hou je van mode?</StyledQuestion>
            {showExtraInfo && <div>
                <ExtraInformation>Ja, ik volg de trends op de voet.</ExtraInformation>
                <ExtraInformation>Nee, voor mij moet kleding vooral comfortabel zijn.</ExtraInformation>
                <ExtraInformation>Een beetje, ik koop meestal wel dingen die in de mode zijn.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo2(!showExtraInfo2)} data-translation=" Can I try this?">Kan ik dit passen?</StyledQuestion>
            {showExtraInfo2 && <div>
                <ExtraInformation>Ja natuurlijk, daar is de paskamer.</ExtraInformation>
                <ExtraInformation>Jazeker, ga je gang.</ExtraInformation>
                <ExtraInformation>Nee, ondergoed mag je nooit uitproberen hier. Maar je kan het wel terugbrengen als het niet zou passen.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo3(!showExtraInfo3)} data-translation=" Where is the changing room?">Waar is de paskamer/het pashokje?</StyledQuestion>
            {showExtraInfo3 && <div>
                <ExtraInformation>Het is daar, naast de kassa.</ExtraInformation>
                <ExtraInformation>Volg de borden naar de paskamers.</ExtraInformation>
                <ExtraInformation>Wij hebben geen paskamers, u bent op de rommelmarkt.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo4(!showExtraInfo4)} data-translation=" Which sizes do you have?">Welke maten hebben jullie?</StyledQuestion>
            {showExtraInfo4 && <div>
                <ExtraInformation>We hebben groot, medium en klein.</ExtraInformation>
                <ExtraInformation>We hebben alle maten, ook extra grote maten.</ExtraInformation>
                <ExtraInformation>De standaardmaten. Let op, dit zijn Amerikaanse maten, die kunnen groter uitvallen.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo5(!showExtraInfo5)} data-translation=" Do you have it in another color?">Heb je het in een andere kleur?</StyledQuestion>
            {showExtraInfo5 && <div>
                <ExtraInformation>Ja, we hebben het ook in het blauw.</ExtraInformation>
                <ExtraInformation>Jazeker, welke kleur had je graag gewild?</ExtraInformation>
                <ExtraInformation>Nee helaas, enkel in deze kleur.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo6(!showExtraInfo6)} data-translation=" Where can I find a bathing suit?">Waar kan ik een zwempak vinden?</StyledQuestion>
            {showExtraInfo6 && <div>
                <ExtraInformation>Bij de badkledingafdeling, achterin de winkel.</ExtraInformation>
                <ExtraInformation>Volg de borden naar de zwemkleding.</ExtraInformation>
                <ExtraInformation>Voor badpakken bij de vrouwenafdeling, voor zwembroeken bij de mannenafdeling.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo7(!showExtraInfo7)} data-translation=" Could you show me some shirts?">Kunt u mij een paar shorts laten zien?</StyledQuestion>
            {showExtraInfo7 && <div>
                <ExtraInformation>Natuurlijk, hier zijn een paar opties.</ExtraInformation>
                <ExtraInformation>Uiteraard. Wat is uw maat?</ExtraInformation>
                <ExtraInformation>Ja, hier zijn ze. Deze zijn erg populair dit seizoen.</ExtraInformation>
            </div>}
            <ImageCollage images={images.slice(3)} />
            <Vocabulary words={words} />
            <StyledAbout>
                <h1>Mode in België en Nederland</h1>
                <p>In Nederland bestaat er een “Modepolitie” televisieprogramma waarin stylisten mensen op straat aanspreken op hun kledingkeuzes en hen voorzien van stijladvies. Gelukkig zijn er geen boetes!
                </p>
                <p>
                    In België en Nederland zijn kledingruilfeestjes populair. Mensen brengen hun ongewenste kleding mee en ruilen die met anderen. Het is een duurzame manier om je garderobe te vernieuwen.</p>
                <p>
                    Fietsen is een integraal onderdeel van het dagelijks leven in beide landen. Daarom zijn er speciale fietsvriendelijke kledingmerken die stijlvolle én praktische outfits aanbieden voor fietsers.</p>
                <p>
                    Tijdens Koningsdag in Nederland (27 april) kleurt het hele land oranje. Mensen dragen oranje kleding, accessoires en zelfs oranje pruiken om hun koninklijke trots te tonen.</p>


            </StyledAbout>
            <VocabularyQuiz words={words} />
            <VocabularySimple words={words} />
            <FillInTheBlankExercise sentences={sentences} blanks={blanks} />
            <GoedBezig
                text={{ dutch: 'De kleren maken de man', english: '"The clothes make the man"' }}
                image={klerenman}
            />
            <CenteredContainer>
                <StyledLink href="https://www.hln.be/mode-en-beauty/niet-nerdy-maar-trendy-zo-draag-je-sokken-in-sandalen-2-000-jaar-geleden-liepen-de-romeinen-ook-zo-rond~ad5f3e9d/">
                    Lees het artikel en geef een korte samenvatting.
                </StyledLink>
                <StyledLink href="https://www.libelle.nl/actueel/deze-bizarre-nieuwe-trend-voor-huisdieren-is-een-hit-op-internet~b4eb12bf/?referrer=https://www.google.com/">
                    Lees dit artikel en geef een korte samenvatting.
                </StyledLink>
            </CenteredContainer>
            <Separator></Separator>
            <TitleText>Grammatica / Grammar</TitleText>
            <LessonContainer>
                <Verbs
                    verb="haten"
                    translation="to haat"
                    conjugations={["haat", "haat", "haat", "haten", "haten", "haten"]}
                    vd="gehaat"
                    ovt="haatte"
                />
                <Verbs
                    verb="huilen"
                    translation="to cry"
                    conjugations={["huil", "huilt", "huilt", "huilen", "huilen", "huilen"]}
                    vd="gehuild"
                    ovt="huilde"
                />
                <Verbs
                    verb="vertrouwen"
                    translation="to trust"
                    conjugations={["vertrouw", "vertrouwt", "vertrouwt", "vertrouwen", "vertrouwen", "vertrouwen"]}
                    vd="vertrouwd"
                    ovt="vertrouwde"
                />
                <Verbs
                    verb="twijfelen"
                    translation="to doubt"
                    conjugations={["twijfel", "twijfelt", "twijfelt", "twijfelen", "twijfelen", "twijfelen"]}
                    vd="getwijfeld"
                    ovt="twijfelde"
                />
                <Verbs
                    verb="vergeten"
                    translation="to forget"
                    conjugations={["vergeet", "vergeet", "vergeet", "vergeten", "vergeten", "vergeten"]}
                    vd="vergeten"
                    ovt="vergat"
                />
                <Verbs
                    verb="verwachten"
                    translation="to expect"
                    conjugations={["verwacht", "verwacht", "verwacht", "verwachten", "verwachten", "verwachten"]}
                    vd="verwacht"
                    ovt="verwachtte"
                />
            </LessonContainer>
            <VerbExercise verbs={[
                { verb: "haten", conjugations: ["haat", "haat", "haat", "haten", "haten", "haten"] },
                { verb: "huilen", conjugations: ["huil", "huilt", "huilt", "huilen", "huilen", "huilen"] },
                { verb: "vertrouwen", conjugations: ["vertrouw", "vertrouwt", "vertrouwt", "vertrouwen", "vertrouwen", "vertrouwen"] },
                { verb: "twijfelen", conjugations: ["twijfel", "twijfelt", "twijfelt", "twijfelen", "twijfelen", "twijfelen"] },
                { verb: "vergeten", conjugations: ["vergeet", "vergeet", "vergeet", "vergeten", "vergeten", "vergeten"] },
                { verb: "verwachten", conjugations: ["verwacht", "verwacht", "verwacht", "verwachten", "verwachten", "verwachten"] }
            ]} />
            <Translate sentences={[
                { english: "I hated her", translation: "Ik haatte haar" },
                { english: "We have hated her", translation: "Wij hebben haar gehaat" },
                { english: "He expected more", translation: "Hij verwachtte meer" },
                { english: "I forgot the game", translation: "Ik vergat de wedstrijd" },
                { english: "He always cries", translation: "Hij huilt altijd" },
                { english: "We forgot our grandmother in the train station", translation: "Wij vergaten onze grootmoeder in het treinstation" },
                { english: "I have trusted him too much", translation: "Ik heb hem te veel vertrouwd" },
                { english: "Forgiven and forgotten", translation: "Vergeven en vergeten" },
                { english: "He doubted, but then he did it", translation: "Hij twijfelde, maar dan deed hij het" },
                { english: "My cat cried and my dog expected food", translation: "Mijn kat huilde en mijn hond verwachtte eten" }
            ]} />
            <GrammarBox>
                <GrammarTitle>📚 Voegwoorden 📚</GrammarTitle>
                <GrammarParagraph>
                    Voegwoorden zijn woorden die 2 zinnen met elkaar verbinden. De zin die je via voegwoorden maakt heet een samengestelde zin.</GrammarParagraph>
                <br />
                <GrammarParagraph> <Highlight>Laten we deze eens verder bekijken: <a href="https://www.braint.nl/taalgids/woordsoorten/voegwoorden.html">hier</a> </Highlight></GrammarParagraph>
                <GrammarParagraph> <Highlight>En laten we enkele oefeningen maken: <a href="https://nt2taalmenu.nl/nt2-a2-grammatica-voegwoorden-oefening1/">hier</a> </Highlight></GrammarParagraph>
            </GrammarBox>
            <GrammarBox>
                <GrammarTitle>📚 Voorzetsels 📚</GrammarTitle>
                <GrammarParagraph>Een voorzetsel legt een verband tussen de woordgroep waar het deel van uitmaakt (zoals aan de muur) en een ander element in de zin, zoals een werkwoord (bijvoorbeeld hangt: 'Het schilderij hangt aan de muur'). Voorzetsels zijn bijna altijd onderdeel van een woordgroep waarin het hoofdwoord een zelfstandig naamwoord is.</GrammarParagraph>
                <br />
                <GrammarParagraph> <Highlight>Laten we dit even verder bekijken: <a href="https://onzetaal.nl/taalloket/voorzetsel">hier</a> </Highlight></GrammarParagraph>
                <GrammarParagraph> <Highlight>En laten we enkele oefeningen maken: <a href="https://nt2taalmenu.nl/nt2-a2-grammatica-menuvoorzetsels/">hier</a> </Highlight></GrammarParagraph>
            </GrammarBox>
            <Separator></Separator>
            <TitleText>Lezen / reading</TitleText>
            <CenteredContainer>
                <StyledLink href="https://www.nedbox.be/teaser/tweedehands-trouwen">
                    "Tweedehands trouwen": bekijk het artikel via de link en beantwoord de vragen.
                </StyledLink>
                <StyledLink href="https://www.nedbox.be/teaser/regels-over-kleding">
                    "Regels over kleding": bekijk het artikel via de link en beantwoord de vragen.
                </StyledLink>
            </CenteredContainer>

            <Separator></Separator>
            <TitleText>Huiswerk / Homework</TitleText>
            <GrammarBox>
                <GrammarParagraph>
                    Maak <a href="https://nt2taalmenu.nl/nt2-a2-grammatica-menuzinnenmetmaar/">deze oefeningen</a>.</GrammarParagraph>
            </GrammarBox>
            <Footer />
        </div >
    );
}

export default Lesson15;