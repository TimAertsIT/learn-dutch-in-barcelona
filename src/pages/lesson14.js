import { StyledQuestion, LessonContainer, Separator, TitleText, GrammarBox, GrammarParagraph, GrammarTitle, Highlight, GrammarListItem, StyledLink, CenteredContainer, ExtraInformation } from '../pages/lesson1.styles';
import Vocabulary from '../components/Vocabulary/Vocabulary';
import VocabularySimple from '../components/Exercises/Vocabulary/VocabularySimple';
import VocabularyQuiz from '../components/Exercises/Vocabulary/VocabularyQuiz';
import ImageCollage from '../components/ImageCollage/ImageCollage';
import broers from "../images/14broers.jpeg";
import familie from "../images/14familie.jpg.webp";
import gezin from "../images/14gezin.jpg";
import tante from "../images/14tante.jpeg";
import tweeling from "../images/14tweeling.jpg";
import vader from "../images/14vader.jpeg";
import GoedBezig from '../components/GoedBezig/GoedBezig';
import Verbs from '../components/Verbs/Verbs';
import VerbExercise from '../components/Exercises/Grammar/VerbExercise';
import FillInTheBlankExercise from '../components/Exercises/Vocabulary/FillintheBlankExercise';
import Translate from '../components/Exercises/Grammar/Translate';
import allowedEmails from '../pages/allowedEmails';
import { useState, useEffect } from 'react';
import appelboom from '../images/appelboom.jpg';
import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import Introduction from '../components/Introduction/Introduction';
import VocabularyTime from '../components/Exercises/Vocabulary/VocabularyTime';
import Conversation from '../components/Conversation/Conversation';
import { StyledAbout } from './about.styles';

function Lesson14() {
    const lessonId = 14;
    const words = [
        { dutch: 'De familie', english: 'The family' },
        { dutch: 'De broer', english: 'The brother' },
        { dutch: 'De zus', english: 'The sister' },
        { dutch: 'De vader', english: 'The father' },
        { dutch: 'De moeder', english: 'The mother' },
        { dutch: 'De zoon', english: 'The son' },
        { dutch: 'De dochter', english: 'The daughter' },
        { dutch: 'Het kleinkind', english: 'The grandchild' },
        { dutch: 'De ouders', english: 'The parents' },
        { dutch: 'De grootouders', english: 'The grandparents' },
        { dutch: 'De tante', english: 'The aunt' },
        {
            dutch: 'De oom', english: "The uncle"
        },
        { dutch: 'De schoonmoeder', english: 'The mother in law' },
        { dutch: 'Het karakter', english: 'The character' },
        { dutch: 'De eigenschap', english: 'The trait' },
        { dutch: 'De karaktereigenschap', english: 'The character trait' },
        { dutch: 'Humoristisch', english: 'Humorous' },
        { dutch: 'Nieuwsgierig', english: 'Curious' },
        { dutch: 'Geduldig', english: 'Patient' },
        { dutch: 'Vriendelijk', english: 'Friendly' },
        { dutch: 'Zelfverzekerd', english: 'Selfconfident' },
        { dutch: 'Bescheiden', english: 'Modest' },
        { dutch: 'De gemoedstoestand', english: 'The mood' },
        { dutch: 'Blij', english: 'Happy' },
        { dutch: 'Teleurgesteld', english: 'Disappointed' },
        { dutch: 'Boos', english: 'Angry' },
        { dutch: 'Ontspannen', english: 'Relaxed' },
        { dutch: 'Bezorgd', english: 'Worried' },
        { dutch: 'Eenzaam', english: 'Lonely' },
        { dutch: 'Moe', english: 'Tired' }
    ];
    const images = [
        { src: broers, caption: 'De broers' },
        { src: familie, caption: 'De familie' },
        { src: gezin, caption: 'Het gezin' },
        { src: tante, caption: 'De tante' },
        { src: tweeling, caption: 'De tweeling' },
        { src: vader, caption: 'De vader' },
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
                belgianMessages={["Hey Caroline! Hoe zou je je karakter omschrijven?", "Ik ben vaker gestrest. Maar over het algemeen ben ik ook wel nieuwsgierig.", "Mijn moeder is ook zo, maar mijn vader is eerder nors en pessimistisch. En bij jou?", "Dat is grappig. Ik kom ook erg goed overeen met mijn schoonzus, wij zijn 2 handen op één buik.", "Ja, mijn schoonzus is zwanger!", "Dat zal ik doen, tot binnenkort."]}
                dutchMessages={["Hey Sam, ik ben erg geduldig en ontspannen. En jij?", "Zit dat in je familie?", "Ja, ik lijk erg op mijn grootmoeder en gek genoeg, ook op mijn zwager.", "En heb je ondertussen al neven en nichtjes?", "Oh leuk, dan komt er een fijne tijd aan. Wens haar veel succes!"]}
            />
            <ImageCollage images={images.slice(0, 3)} />
            <StyledQuestion onClick={() => setShowExtraInfo(!showExtraInfo)} data-translation=" How would you describe your character?">Hoe zou je je karakter omschrijven?</StyledQuestion>
            {showExtraInfo && <div>
                <ExtraInformation>Ik ben erg punctueel, moedig en gul.</ExtraInformation>
                <ExtraInformation>Ik vind mezelf creatief, betrouwbaar en humoristisch.</ExtraInformation>
                <ExtraInformation>Ik zou mezelf omschrijven als nieuwsgierig, geduldig en respectvol.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo2(!showExtraInfo2)} data-translation=" What is your mood today?">Wat is je gemoedstoestand vandaag?</StyledQuestion>
            {showExtraInfo2 && <div>
                <ExtraInformation>Ik voel me verdrietig, boos en bang.</ExtraInformation>
                <ExtraInformation>Ik ben blij, opgewonden en ontspannen.</ExtraInformation>
                <ExtraInformation>Ik ben een beetje verward, maar ook verbaasd en bezorgd.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo3(!showExtraInfo3)} data-translation=" Do you have a big family?">Heb je een grote familie?</StyledQuestion>
            {showExtraInfo3 && <div>
                <ExtraInformation>Ik heb één broer, een tante, twee zwagers en 4 grootouders.</ExtraInformation>
                <ExtraInformation>Ik heb een kleine familie, ook ons gezin is erg klein, ik ben enig kind.</ExtraInformation>
                <ExtraInformation>Mijn moeder heeft twee broers, mijn vader is enig kind en mijn grootouders zijn gestorven.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo4(!showExtraInfo4)} data-translation=" How would you describe the character of your mother?">Hoe zou je het karakter van je moeder omschrijven?</StyledQuestion>
            {showExtraInfo4 && <div>
                <ExtraInformation>Mijn moeder is punctueel, optimistisch en verantwoordelijk!</ExtraInformation>
                <ExtraInformation>Zij is erg zelfverzekerd, ambitieus en bescheiden.</ExtraInformation>
                <ExtraInformation>Mijn moeder is erg lief, idealistisch, nieuwsgierig en geduldig.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo5(!showExtraInfo5)} data-translation=" Do you have a partner?">Heb je een partner?</StyledQuestion>
            {showExtraInfo5 && <div>
                <ExtraInformation>Ja, ik ben al een hele tijd samen met mijn vriend.</ExtraInformation>
                <ExtraInformation>Nee, ik ben alleenstaand. Ik was wel ooit verloofd maar dan zijn we uit elkaar gegaan.</ExtraInformation>
                <ExtraInformation>Ja, ik ben zelfs al getrouwd. Mijn vrouw en ik zijn gelukkig getrouwd.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo6(!showExtraInfo6)} data-translation=" What do you like to do with your friends?">Wat doe je graag met je vriendin?</StyledQuestion>
            {showExtraInfo6 && <div>
                <ExtraInformation>Wij gaan graag uit, de bloemetjes buiten zetten.</ExtraInformation>
                <ExtraInformation>Met mijn vrienden ga ik graag op reis.</ExtraInformation>
                <ExtraInformation>Alles, als mijn vrienden er zijn ben ik gelukkig.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo7(!showExtraInfo7)} data-translation=" Do your friends have the same character as you?">Hebben je vrienden hetzelfde karakter als jij?</StyledQuestion>
            {showExtraInfo7 && <div>
                <ExtraInformation>Nee, zij zijn altijd onbezorgd. Ik maak me vaker zorgen.</ExtraInformation>
                <ExtraInformation>Nee, zij zijn erg ontspannen en ik ben altijd gestrest.</ExtraInformation>
                <ExtraInformation>Ja, we zijn allemaal optimistisch.</ExtraInformation>
            </div>}
            <ImageCollage images={images.slice(3)} />
            <Vocabulary words={words} />
            <StyledAbout>
                <h1>Familie en karakter</h1>
                <p>Wist je dat in Nederland, als iemand jarig is, je niet alleen de jarige feliciteert, maar ook de hele familie? Het is een unieke Nederlandse traditie!</p>
                <p>Nederlanders staan bekend om hun directheid. Ze zeggen wat ze denken en denken wat ze zeggen. Dit kan soms grappig zijn voor mensen uit andere culturen die dit niet gewend zijn.</p>
                <p>In veel Nederlandse gezinnen is het gebruikelijk om op vrijdagavond "patatavond" te houden. Dit betekent dat het avondeten bestaat uit frietjes, vaak met een bijgerecht zoals een kroket of frikandel.</p>
                <p>Nederlanders zijn over het algemeen erg punctueel. Ze waarderen het als je op tijd bent voor afspraken. Als je te laat komt, kan dat als onbeleefd worden beschouwd.</p>
                <p>Het weer in Nederland kan erg veranderlijk zijn, en dit heeft vaak invloed op de gemoedstoestand van de mensen. Het is niet ongewoon om iemand te horen zeggen: “Ik voel me vandaag een beetje regenachtig”, wat betekent dat ze zich een beetje somber voelen.</p>


            </StyledAbout>
            <VocabularyQuiz words={words} />
            <VocabularySimple words={words} />
            <FillInTheBlankExercise sentences={sentences} blanks={blanks} />
            <GoedBezig
                text={{ dutch: 'De appel valt niet ver van de boom', english: '"To apple does not fall far from the tree"' }}
                image={appelboom}
            />
            <CenteredContainer>
                <StyledLink href="https://www.nieuwsblad.be/cnt/dmf20210117_93694378">
                    Lees het artikel en beschrijf de gemoedstoestand van deze man.
                </StyledLink>
                <StyledLink href="https://www.vrt.be/vrtnws/nl/2017/05/29/boze_man_had_beterzijnogenopdeweggehouden-1-2991931/.">
                    Lees dit artikel en geef een korte samenvatting.
                </StyledLink>
            </CenteredContainer>
            <Separator></Separator>
            <TitleText>Grammatica / Grammar</TitleText>
            <LessonContainer>
                <Verbs
                    verb="beginnen"
                    translation="to begin"
                    conjugations={["begin", "begint", "begint", "beginnen", "beginnen", "beginnen"]}
                    vd="begonnen"
                    ovt="begon"
                />
                <Verbs
                    verb="vragen"
                    translation="to ask"
                    conjugations={["vraag", "vraagt", "vraagt", "vragen", "vragen", "vragen"]}
                    vd="gevraagd"
                    ovt="vroeg"
                />
                <Verbs
                    verb="zetten"
                    translation="to put"
                    conjugations={["zet", "zet", "zet", "zetten", "zetten", "zetten"]}
                    vd="gezet"
                    ovt="zette"
                />
                <Verbs
                    verb="antwoorden"
                    translation="to answer"
                    conjugations={["antwoord", "antwoordt", "antwoordt", "antwoorden", "antwoorden", "antwoorden"]}
                    vd="geantwoord"
                    ovt="antwoordde"
                />
                <Verbs
                    verb="hopen"
                    translation="to hope"
                    conjugations={["hoop", "hoopt", "hoopt", "hopen", "hopen", "hopen"]}
                    vd="gehoopt"
                    ovt="hoopte"
                />
                <Verbs
                    verb="horen"
                    translation="to hear"
                    conjugations={["hoor", "hoort", "hoort", "horen", "horen", "horen"]}
                    vd="gehoord"
                    ovt="hoorde"
                />
            </LessonContainer>
            <VerbExercise verbs={[
                { verb: "beginnen", conjugations: ["begin", "begint", "begint", "beginnen", "beginnen", "beginnen"] },
                { verb: "vragen", conjugations: ["vraag", "vraagt", "vraagt", "vragen", "vragen", "vragen"] },
                { verb: "zetten", conjugations: ["zet", "zet", "zet", "zetten", "zetten", "zetten"] },
                { verb: "antwoorden", conjugations: ["antwoord", "antwoordt", "antwoordt", "antwoorden", "antwoorden", "antwoorden"] },
                { verb: "hopen", conjugations: ["hoop", "hoopt", "hoopt", "hopen", "hopen", "hopen"] },
                { verb: "horen", conjugations: ["hoor", "hoort", "hoort", "horen", "horen", "horen"] }
            ]} />
            <Translate sentences={[
                { english: "When I was a kid, I always answered", translation: "Toen ik een kind was, antwoordde ik altijd" },
                { english: "I have answered", translation: "Ik heb geantwoord" },
                { english: "We began", translation: "Wij begonnen" },
                { english: "They asked us something", translation: "Zij vroegen ons iets" },
                { english: "I have put the custard on the table", translation: "Ik heb de vla op de tafel gezet" },
                { english: "I hoped for a cozy king's day", translation: "Ik hoopte op een gezellige koningsdag" },
                { english: "We answered you already", translation: "Wij hebben jou al geantwoord" },
                { english: "She asked him herring", translation: "Zij vroeg hem haring" },
                { english: "He put the king next to the queen", translation: "Hij zet de koning naast de koningin" },
                { english: "I heard you talking", translation: "Ik hoorde jou praten" }
            ]} />
            <GrammarBox>
                <GrammarTitle>📚 Het meervoud 📚</GrammarTitle>
                <GrammarParagraph>
                    Meestal gebruiken we <a href="https://nt2taalmenu.nl/nt2-a1-grammatica-menumeervoud/">-en of -s</a> om het meervoud te maken. Maar er zijn ook nog enkele uitzonderingen.</GrammarParagraph>
                <br />
                <GrammarParagraph> <Highlight>Laten we deze eens verder bekijken: <a href="https://nt2taalmenu.nl/nt2-a2-grammatica-menumeervoud/">hier</a> </Highlight></GrammarParagraph>
                <GrammarParagraph> <Highlight>En laten we enkele oefeningen maken: <a href="https://nt2taalmenu.nl/nt2-a2-grammatica-menumeervoud/">hier</a> </Highlight></GrammarParagraph>
            </GrammarBox>
            <GrammarBox>
                <GrammarTitle>📚 Werkwoorden van positie 📚</GrammarTitle>
                <GrammarParagraph>We kunnen objecten van één plaats naar een andere doen verhuizen. Zo <Highlight>leg</Highlight> ik mijn sleutel op de tafel. En <Highlight>liggen</Highlight> mijn sleutels dan op tafel.</GrammarParagraph>
                <br />
                <GrammarParagraph> <Highlight>Laten we dit even verder bekijken: <a href="https://nt2taalmenu.nl/nt2-a2-grammatica-menuwwvpos/">hier</a> </Highlight></GrammarParagraph>
                <GrammarParagraph> <Highlight>En laten we enkele oefeningen maken: <a href="https://nt2taalmenu.nl/nt2-a2-grammatica-menuwwvpos/">hier</a> </Highlight></GrammarParagraph>
            </GrammarBox>
            <Separator></Separator>
            <TitleText>Lezen / reading</TitleText>
            <CenteredContainer>
                <StyledLink href="https://www.nedbox.be/teaser/zoutelande">
                    "Zoutelande": bekijk het artikel via de link en beantwoord de vragen.
                </StyledLink>
                <StyledLink href="https://www.nedbox.be/teaser/iedereen-zingt-het-nederlands">
                    "Iedereen zingt in het Nederlands": bekijk het artikel via de link en beantwoord de vragen.
                </StyledLink>
            </CenteredContainer>

            <Separator></Separator>
            <TitleText>Huiswerk / Homework</TitleText>
            <GrammarBox>
                <GrammarParagraph>
                    Schrijf de woorden uit de woordenschatlijst van dit hoofdstuk in het meervoud.</GrammarParagraph>
            </GrammarBox>
            <Footer />
        </div >
    );
}

export default Lesson14;