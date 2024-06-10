import { StyledQuestion, LessonContainer, Separator, TitleText, GrammarBox, GrammarParagraph, GrammarTitle, Highlight, GrammarListItem, StyledLink, CenteredContainer, ExtraInformation } from '../pages/lesson1.styles';
import Vocabulary from '../components/Vocabulary/Vocabulary';
import VocabularySimple from '../components/Exercises/Vocabulary/VocabularySimple';
import VocabularyQuiz from '../components/Exercises/Vocabulary/VocabularyQuiz';
import ImageCollage from '../components/ImageCollage/ImageCollage';
import brug from "../images/13brug.jpg";
import kroket from "../images/13kroket.jpg";
import pepernoot from "../images/13pepernoot.jpg";
import tulp from "../images/13tulp.webp";
import vla from "../images/13vla.jpg";
import rijsttafel from "../images/13rijsttafel.jpg";
import GoedBezig from '../components/GoedBezig/GoedBezig';
import Verbs from '../components/Verbs/Verbs';
import VerbExercise from '../components/Exercises/Grammar/VerbExercise';
import FillInTheBlankExercise from '../components/Exercises/Vocabulary/FillintheBlankExercise';
import Translate from '../components/Exercises/Grammar/Translate';
import allowedEmails from '../pages/allowedEmails';
import { useState, useEffect } from 'react';
import polderen from '../images/polderen.jpeg';
import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import Introduction from '../components/Introduction/Introduction';
import VocabularyTime from '../components/Exercises/Vocabulary/VocabularyTime';
import Conversation from '../components/Conversation/Conversation';
import { StyledAbout } from './about.styles';

function Lesson13() {
    const lessonId = 13;
    const words = [
        { dutch: 'De klomp', english: 'The wooden shoe' },
        { dutch: 'De tulp', english: 'The tulip' },
        { dutch: 'De windmolen', english: 'The windmill' },
        { dutch: 'De stroopwafel', english: 'The syrup waffle' },
        { dutch: 'De haring', english: 'The herring' },
        { dutch: 'Het poffertje', english: 'The small pancake' },
        { dutch: 'De gracht', english: 'The canal' },
        { dutch: 'De dijk', english: 'The dike' },
        { dutch: 'De koning', english: 'The king' },
        { dutch: 'De koningin', english: 'The queen' },
        { dutch: 'Oranje', english: 'Orange' },
        {
            dutch: 'De koningsdag', english: "The king's day"
        },
        { dutch: 'De pepernoot', english: 'The gingerbread-like cookie' },
        { dutch: 'De kruidnoot', english: 'The cookie similar to pepernoot' },
        { dutch: 'De drop', english: 'The licorice' },
        { dutch: 'De bitterbal', english: 'The deep-fried meatball' },
        { dutch: 'De vla', english: 'The custard' },
        { dutch: 'De hagelslag', english: 'The chocolate sprinkles' },
        { dutch: 'De rijsttafel', english: 'The rice table' },
        { dutch: 'Gezellig', english: 'Cozy' },
        { dutch: 'Gierig', english: 'Greedy' },
        { dutch: 'De brug', english: 'The bridge' },
        { dutch: 'De kroket', english: 'The croquette' },
        { dutch: 'De politieke partij', english: 'The political party' },
        { dutch: 'Beginnen', english: 'To begin' },
        { dutch: 'Vragen', english: 'To ask' },
        { dutch: 'Zetten', english: 'To put' },
        { dutch: 'Antwoorden', english: 'To answer' },
        { dutch: 'Hopen', english: 'To hope' },
        { dutch: 'Horen', english: 'To hear' }
    ];
    const images = [
        { src: kroket, caption: 'De kroket' },
        { src: brug, caption: 'De brug' },
        { src: pepernoot, caption: 'De pepernoot' },
        { src: rijsttafel, caption: 'De rijsttafel' },
        { src: tulp, caption: 'De tulp' },
        { src: vla, caption: 'De vla' },
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
        'Wanneer je iets niet weet, moet je het aan iemand anders _.',
        'Ik heb het gevraagd, maar ik wacht nog steeds op een _.',
        'Het woord _ is erg moeilijk te omschrijven, het gaat over leuk samen zijn, warmte en plezier.',
        'Iemand die niet graag geld spendeert kan je omschrijven als _.',
        'De dijk houdt het water tegen, via een _ ga je over het water.',
        '_ op een beschuit geven mensen vaak bij geboortes.',
        'Ik moet nog _ aan dit werkje, het einde is nog lang niet in zicht.',
        'Een _ kan zowel met een vlees- als een kaasvulling zijn.',
        'Ik hou meer van _ dan van grote pannenkoeken.',
        'Een _ is een soort kanaal.'
    ];

    const blanks = ['poffertjes', 'gezelligheid', 'gierig', 'vragen', 'brug', 'antwoord', 'gracht', 'beginnen', 'kroket', 'hagelslag'];



    return (
        <div>
            <Navigation />
            <Introduction lessonId={lessonId} />
            <Conversation
                belgianMessages={["Hey Caroline! Kan je mij eens vertellen: wat maakt Nederland zo speciaal?", "Wat voor dingen dan zoal?", "Wat voor lekkernijen zijn typisch Nederlands?", "En hoe zou je de Nederlanders omschrijven?", "Dat denk ik ook. Ik moet snel nog eens op bezoek komen. Welke stad kan je aanraden?", "Dat ga ik doen, ik bel je wanneer ik daar ben."]}
                dutchMessages={["Hey Sam, voor mij zijn dat onze gewoontes. De Nederlandse cultuur is echt iets apart.", "Hoe we koningsdag vieren, onze liefde voor oranje, onze gastronomie, ..", "De poffertjes, haring, hagelslag en natuurlijk onze kazen!", "We zijn direct, rechtuit, communicatief vaardig, maar ook met het hart op de juiste plaats.", "Iedereen gaat naar Amsterdam, maar ik zou zeker Rotterdam en Utrecht eens proberen."]}
            />
            <ImageCollage images={images.slice(0, 3)} />
            <StyledQuestion onClick={() => setShowExtraInfo(!showExtraInfo)} data-translation=" Have you been in the Netherlands already?">Ben je al eens in Nederland geweest?</StyledQuestion>
            {showExtraInfo && <div>
                <ExtraInformation>Ja, al heel vaak. Het is één van mijn favoriete landen.</ExtraInformation>
                <ExtraInformation>Ja, in Amsterdam, in Limburg, in Texel en in Den Bosch.</ExtraInformation>
                <ExtraInformation>Nee, nog nooit. Maar dat staat op mijn verlanglijstje.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo2(!showExtraInfo2)} data-translation=" What are the Netherlands' neighboring countries?">Wat zijn de buurlanden van Nederland?</StyledQuestion>
            {showExtraInfo2 && <div>
                <ExtraInformation>De buurlanden zijn België in het zuiden en Duitsland in het oosten.</ExtraInformation>
                <ExtraInformation>Ik heb geen flauw idee, misschien Spanje in het noorden en Frankrijk in het westen?</ExtraInformation>
                <ExtraInformation>België en Duitsland maar zeker ook Luxemburg!</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo3(!showExtraInfo3)} data-translation=" What can you tell about the Dutch gastronomy?">Wat kan je vertellen over de Nederlandse gastronomie?</StyledQuestion>
            {showExtraInfo3 && <div>
                <ExtraInformation>Die is heel raar! Heb je al eens een patatje oorlog gezien?</ExtraInformation>
                <ExtraInformation>De Nederlandse gastronomie is apart, maar interessant.</ExtraInformation>
                <ExtraInformation>Ik hou erg van poffertjes, kaas, bitterballen en rauwe haring.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo4(!showExtraInfo4)} data-translation=" What do you know about Dutch politics?">Wat weet je over de Nederlandse politiek?</StyledQuestion>
            {showExtraInfo4 && <div>
                <ExtraInformation>Ze hebben heel veel partijen in hun parlement!</ExtraInformation>
                <ExtraInformation>Er zijn altijd grote veranderingen bij de verkiezingen.</ExtraInformation>
                <ExtraInformation>Ik weet er niet zo veel over, zelfs niet wie de minister-president is.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo5(!showExtraInfo5)} data-translation=" What do you consider the most beautiful spot in the Netherlands?">Wat is voor jou de mooiste plaats in Nederland?</StyledQuestion>
            {showExtraInfo5 && <div>
                <ExtraInformation>Ik hou van natuur en dus kies ik voor de Hoge Veluwe.</ExtraInformation>
                <ExtraInformation>Eender welke plaats op het platteland met velden en een windmolen.</ExtraInformation>
                <ExtraInformation>Ik vind zowel Delft als Utrecht echt supermooi.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo6(!showExtraInfo6)} data-translation=" What do you know about the Dutch culture?">Wat weet je over de Nederlandse cultuur?</StyledQuestion>
            {showExtraInfo6 && <div>
                <ExtraInformation>Ik ken Joost Klein en Frans Bauer, de Nederlandse muziek is iets apart.</ExtraInformation>
                <ExtraInformation>Oranje is hun favoriete kleur, dat zie je zeker bij koningsdag.</ExtraInformation>
                <ExtraInformation>Ze houden erg van terrasjes doen wanneer de zon tevoorschijn komt.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo7(!showExtraInfo7)} data-translation=" How would you describe the inhabitants of the Netherlands?">Hoe zou je de inwoners van Nederland omschrijven?</StyledQuestion>
            {showExtraInfo7 && <div>
                <ExtraInformation>Ze houden van gezelligheid, zijn erg sociaal en vriendelijk.</ExtraInformation>
                <ExtraInformation>Het zijn een beetje de Amerikanen van Europa, ze zien het allemaal groots.</ExtraInformation>
                <ExtraInformation>Ze zijn erg direct en gierig. Maar wel heel leuke mensen.</ExtraInformation>
            </div>}
            <ImageCollage images={images.slice(3)} />
            <Vocabulary words={words} />
            <StyledAbout>
                <h1>Nederland</h1>
                <p>Fietsen: In Nederland zijn er meer fietsen dan mensen. Dat is juist, elke persoon kan twee fietsen hebben! </p>
                <p>Kaas: Nederlanders houden zoveel van kaas dat je zou denken dat het hun nationale voedsel is. Ze exporteren zoveel kaas dat je je afvraagt of er een geheime kaasberg ergens in Nederland is!</p>
                <p>Klompen: Dit zijn traditionele Nederlandse schoenen gemaakt van hout. Ze zijn misschien niet het meest comfortabele schoeisel, maar ze zijn zeker uniek!</p>
                <p>Tulpen: Tulpen zijn zo populair in Nederland dat je zou denken dat ze overal zijn. Maar verrassend genoeg is de nationale bloem van Nederland de leeuwenklauw!</p>
                <p>Koningsdag: Op Koningsdag kleurt heel Nederland oranje. </p>
                <p>Waterbeheer: Nederland staat bekend om zijn indrukwekkende waterbeheersystemen. Een groot deel van het land ligt onder zeeniveau en wordt beschermd door dijken. Het is alsof ze een eeuwigdurende strijd tegen het water voeren!</p>
                <p>Windmolens: Nederland is beroemd om zijn historische windmolens. Er zijn er nog steeds meer dan 1.000 in het land. Ze zijn niet alleen mooi om naar te kijken, maar ze speelden ook een cruciale rol in de Nederlandse geschiedenis.</p>
                <p> Vlak land: Nederland is een van de vlakste landen ter wereld. Het hoogste punt, de Vaalserberg, is slechts 322,7 meter hoog. Het is bijna alsof je overal in het land de horizon kunt zien!</p>
                <p>Kunst: Nederland heeft enkele van de beroemdste kunstenaars ter wereld voortgebracht, zoals Rembrandt en Van Gogh. Het land is echt een paradijs voor kunstliefhebbers.</p>
                <p>Vrijheid: Nederland staat bekend om zijn liberale beleid op gebieden zoals drugs en prostitutie. Het was ook het eerste land ter wereld dat het homohuwelijk legaliseerde.</p>


            </StyledAbout>
            <VocabularyQuiz words={words} />
            <VocabularySimple words={words} />
            <FillInTheBlankExercise sentences={sentences} blanks={blanks} />
            <GoedBezig
                text={{ dutch: 'Polderen', english: '"To polder"' }}
                image={polderen}
            />
            <CenteredContainer>
                <StyledLink href="https://hetvertaalcollectief.nl/de-leukste-weetjes-en-eigenaardigheden-over-nederland/">
                    Lees het artikel en schrijf een samenvatting.
                </StyledLink>
                <StyledLink href="https://ecoledelangues.be/nl/fun-facts-over-nederland/#:~:text=Het%20laagste%20punt%20van%20Nederland,de%20drooglegging%20van%20de%20zee.">
                    Lees dit artikel en vertel over enkele weetjes die je nog niet wist.
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

export default Lesson13;