import { StyledQuestion, LessonContainer, Separator, TitleText, GrammarBox, GrammarParagraph, GrammarTitle, Highlight, GrammarListItem, StyledLink, CenteredContainer, ExtraInformation } from '../pages/lesson1.styles';
import Vocabulary from '../components/Vocabulary/Vocabulary';
import VocabularySimple from '../components/Exercises/Vocabulary/VocabularySimple';
import VocabularyQuiz from '../components/Exercises/Vocabulary/VocabularyQuiz';
import ImageCollage from '../components/ImageCollage/ImageCollage';
import applicatie from "../images/17applicatie.jpg";
import filosofie from "../images/17filosofie.jpg";
import gedrag from "../images/17gedrag.jpg";
import innovatie from "../images/17innovatie.jpg";
import laboratorium from "../images/17laboratorium.jpg";
import wetenschapper from "../images/17wetenschapper.jpeg";
import GoedBezig from '../components/GoedBezig/GoedBezig';
import Verbs from '../components/Verbs/Verbs';
import VerbExercise from '../components/Exercises/Grammar/VerbExercise';
import FillInTheBlankExercise from '../components/Exercises/Vocabulary/FillintheBlankExercise';
import Translate from '../components/Exercises/Grammar/Translate';
import allowedEmails from '../pages/allowedEmails';
import { useState, useEffect } from 'react';
import stilstaan from '../images/stilstaan.jpeg';
import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import Introduction from '../components/Introduction/Introduction';
import VocabularyTime from '../components/Exercises/Vocabulary/VocabularyTime';
import Conversation from '../components/Conversation/Conversation';
import { StyledAbout } from './about.styles';

function Lesson17() {
    const lessonId = 17;
    const words = [
        { dutch: 'De wetenschap', english: 'The science' },
        { dutch: 'De technologie', english: 'The technology' },
        { dutch: 'De psychologie', english: 'The psychology' },
        { dutch: 'De filosofie', english: 'The philosophy' },
        { dutch: 'De proef', english: 'The test' },
        { dutch: 'De chemie', english: 'The chemistry' },
        { dutch: 'De fysica', english: 'The physics' },
        { dutch: 'De innovatie', english: 'The innovation' },
        { dutch: 'Het internet', english: 'The internet' },
        { dutch: 'De software', english: 'The software' },
        { dutch: 'De analyse', english: 'The analysis' },
        { dutch: 'Programmeren', english: "To program" },
        { dutch: 'Digitaal', english: 'Digital' },
        { dutch: 'Sociaal', english: 'Social' },
        { dutch: 'Het onderzoek', english: 'The investigation' },
        { dutch: 'Het bewijs', english: 'The proof' },
        { dutch: 'Bewijzen', english: 'To prove' },
        { dutch: 'Het gedrag', english: 'The behavior' },
        { dutch: 'Het feit', english: 'The fact' },
        { dutch: 'De statistiek', english: 'The statistics' },
        { dutch: 'De bevraging', english: 'The survey' },
        { dutch: 'Het resultaat', english: 'The result' },
        { dutch: 'Ontkennen', english: 'To deny' },
        { dutch: 'Ontkrachten', english: 'To proof wrong' },
        { dutch: 'Onderzoeken', english: 'To investigate' },
        { dutch: 'De samenwerking', english: 'The collaboration' },
        { dutch: 'De toekomst', english: 'The future' },
        { dutch: 'Het verleden', english: 'The past' },
        { dutch: 'De wetenschapper', english: 'The scientist' },
        { dutch: 'Het instituut', english: 'The institute' }
    ];
    const images = [
        { src: applicatie, caption: 'De applicatie' },
        { src: filosofie, caption: 'De filosofie' },
        { src: innovatie, caption: 'De innovatie' },
        { src: gedrag, caption: 'Het gedrag' },
        { src: laboratorium, caption: 'Het laboratorium' },
        { src: wetenschapper, caption: 'De wetenschapper' },
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
        'Een nieuwe technologie is een _.',
        'Sommige mensen zijn _ aan hun smartphone, ze spenderen wel 5 uur per dag online.',
        'Om een applicatie te ontwikkelen moet je een _taal kennen.',
        'Psychologie is een _ wetenschap.',
        'We hebben _ dat wat je zegt niet klopt.',
        'In het _ deden ze dat manueel, maar nu hebben we daar een robot voor.',
        'Iemand die onderzoek doet is een _.',
        'Het _ van apen lijkt erg op dat van ons.',
        'Actie-reactie is een wet uit de _.',
        'Een computer werkt met hardware en _.'
    ];

    const blanks = ['fysica', 'uitvinding', 'wetenschapper', 'programmeer', 'verleden', 'verslaafd', 'software', 'gedrag', 'bewijs', 'sociale'];



    return (
        <div>
            <Navigation />
            <Introduction lessonId={lessonId} />
            <Conversation
                belgianMessages={["Hey Maaike! Heb jij die nieuwe app van de bank al?", "Ja, daarmee kan je echt coole dingen doen en prijzen winnen.", "Maar deze is wel echt innovatief, het installeren op je gsm duurt maar 1 minuut.", "Wel interessant dat jouw gsm zo lang mee gaat, vele technologische snufjes zijn snel stuk.", "Dat denk ik ook. Dat is een jammere cultuur.", "Dat is een goed idee, ik ga er over nadenken!"]}
                dutchMessages={["Hey Sam, nee, heb ik die nodig?", "Ik zal het eens bekijken, maar technologie is niet zo mijn ding.", "Ja, al weet je met mijn oude mobieltje nooit of het werkt.", "Ja, daar zouden ze wetten over moeten maken, het lijkt vaak met opzet zo geprogrammeerd.", "Misschien moet je een app maken die dat kan veranderen?"]}
            />
            <ImageCollage images={images.slice(0, 3)} />
            <StyledQuestion onClick={() => setShowExtraInfo(!showExtraInfo)} data-translation=" Are you interested in science?">Ben jiij geïnteresseerd in wetenschap?</StyledQuestion>
            {showExtraInfo && <div>
                <ExtraInformation>Ja, ik wil altijd weten hoe dingen werken.</ExtraInformation>
                <ExtraInformation>Ja, ik heb ook wetenschappen gestudeerd.</ExtraInformation>
                <ExtraInformation>Nee, ik vind wetenschap en technologie te moeilijk, dat is niet mijn ding.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo2(!showExtraInfo2)} data-translation=" What's the best invention of the past century?">Wat is de beste uitvinding van de afgelopen eeuw?</StyledQuestion>
            {showExtraInfo2 && <div>
                <ExtraInformation>De smartphone heeft een grote impact op ons leven gehad.</ExtraInformation>
                <ExtraInformation>Windmolens en zonnepalenen, omdat ze het klimaat beschermen.</ExtraInformation>
                <ExtraInformation>Ik weet het niet, alle uitvindingen hebben voor- en nadelen.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo3(!showExtraInfo3)} data-translation=" Which application would you develop?">Welke applicatie zou jij ontwikkelen?</StyledQuestion>
            {showExtraInfo3 && <div>
                <ExtraInformation>Een applicatie die mensen weer meer met elkaar in contact brengt.</ExtraInformation>
                <ExtraInformation>Een applicatie die je helpt met tuinieren.</ExtraInformation>
                <ExtraInformation>Geen idee, volgens mij bestaat alles al.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo4(!showExtraInfo4)} data-translation=" What would you still like to study/investigate?">Wat zou je nog graag studeren/bestuderen?</StyledQuestion>
            {showExtraInfo4 && <div>
                <ExtraInformation>Als ik tijd zou hebben, zou ik nog psychologie willen studeren.</ExtraInformation>
                <ExtraInformation>Quantumfysica lijkt me iets heel boeiend om te studeren.</ExtraInformation>
                <ExtraInformation>Ik zou willen leren programmeren, dat lijkt me nuttig.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo5(!showExtraInfo5)} data-translation=" Which inventions will decide our future?">Welke uitvindingen zullen onze toekomst bepalen?</StyledQuestion>
            {showExtraInfo5 && <div>
                <ExtraInformation>Ik denk dat we in de toekomst kunnen vliegen op zonne-energie.</ExtraInformation>
                <ExtraInformation>Volgens mij gaan we in de toekomst vaak in een virtuele wereld leven.</ExtraInformation>
                <ExtraInformation>Ik hoop op een uitvinding die de oceanen kan schoonmaken.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo6(!showExtraInfo6)} data-translation=" Are you handy with computers?">Ben je handig met computers?</StyledQuestion>
            {showExtraInfo6 && <div>
                <ExtraInformation>Een beetje, de basisdingen kan ik wel.</ExtraInformation>
                <ExtraInformation>Nee, helemaal niet, dat is niet mijn wereld.</ExtraInformation>
                <ExtraInformation>Ja, ik probeer altijd mee te zijn met evoluties.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo7(!showExtraInfo7)} data-translation=" Are you addicted to certain technology?">Ben je verslaafd aan bepaalde technologie?</StyledQuestion>
            {showExtraInfo7 && <div>
                <ExtraInformation>Ja, ik ben verslaafd aan mijn smartphone.</ExtraInformation>
                <ExtraInformation>Ja, ik speel veel te vaak computerspelletjes.</ExtraInformation>
                <ExtraInformation>Nee, ik probeer het te beperken.</ExtraInformation>
            </div>}
            <ImageCollage images={images.slice(3)} />
            <Vocabulary words={words} />
            <StyledAbout>
                <h1>Technologie in ons dagelijkse leven</h1>
                <p>Emoji’s: Wist je dat er meer dan 3.000 emoji’s zijn? Ze zijn een vrolijke manier om emoties uit te drukken in digitale communicatie! 😄</p>
                <p>QR-codes: QR-codes (Quick Response-codes) werden oorspronkelijk ontwikkeld voor de auto-industrie om snel informatie te scannen. Nu zie je ze overal, van productverpakkingen tot concerttickets! 📱</p>
                <p>Selfies: De term “selfie” werd populair in 2013. Het verwijst naar het nemen van een foto van jezelf met je smartphone. 🤳</p>
                <p>Draadloos opladen: Sommige smartphones kunnen draadloos worden opgeladen door ze simpelweg op een speciale oplaadmat te leggen. Geen gedoe meer met kabels! 🔌</p>
                <p>Virtual Reality (VR): Met VR-brillen kun je jezelf onderdompelen in virtuele werelden. Het voelt alsof je echt ergens anders bent! 🌎</p>
                <p>Streamingdiensten: Netflix, Spotify en andere streamingdiensten hebben de manier waarop we films, muziek en tv-programma’s consumeren veranderd.</p>


            </StyledAbout>
            <VocabularyQuiz words={words} />
            <VocabularySimple words={words} />
            <FillInTheBlankExercise sentences={sentences} blanks={blanks} />
            <GoedBezig
                text={{ dutch: 'Stilstaan is achteruitgaan', english: '"Standing still is going backwards"' }}
                image={stilstaan}
            />
            <CenteredContainer>
                <StyledLink href="https://nos.nl/artikel/2526864-1-passagier-en-geen-bagage-elektrische-vlucht-vanaf-maastricht">
                    Lees het artikel en geef een korte samenvatting.
                </StyledLink>
                <StyledLink href="https://www.vrt.be/vrtnws/nl/2024/07/10/robot-maakt-kamers-uz-gent-in-20-minuten-schoon-in-plaats-van-2/">
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

export default Lesson17;