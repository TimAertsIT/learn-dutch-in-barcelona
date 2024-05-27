import { StyledQuestion, LessonContainer, Separator, TitleText, GrammarBox, GrammarParagraph, GrammarTitle, Highlight, GrammarListItem, StyledLink, CenteredContainer } from '../pages/lesson1.styles';
import Vocabulary from '../components/Vocabulary/Vocabulary';
import VocabularySimple from '../components/Exercises/Vocabulary/VocabularySimple';
import VocabularyQuiz from '../components/Exercises/Vocabulary/VocabularyQuiz';
import ImageCollage from '../components/ImageCollage/ImageCollage';
import museum from "../images/museum.jpg.webp";
import dokter from "../images/dokter.jpg";
import muzikant from "../images/muzikant.jpg";
import dierenziekenhuis from "../images/dierenziekenhuis.jpg";
import theater from "../images/theater.jpg";
import dans from "../images/dans.jpg";
import GoedBezig from '../components/GoedBezig/GoedBezig';
import Verbs from '../components/Verbs/Verbs';
import VerbExercise from '../components/Exercises/Grammar/VerbExercise';
import FillInTheBlankExercise from '../components/Exercises/Vocabulary/FillintheBlankExercise';
import Translate from '../components/Exercises/Grammar/Translate';
import allowedEmails from '../pages/allowedEmails';
import { useState, useEffect } from 'react';
import beatrix from '../images/beatrix.avif';
import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import Introduction from '../components/Introduction/Introduction';
import VocabularyTime from '../components/Exercises/Vocabulary/VocabularyTime';
import Conversation from '../components/Conversation/Conversation';
import { StyledAbout } from './about.styles';
import { ExtraInformation } from './lesson1.styles';

function Lesson3() {
    const lessonId = 3;
    const words = [
        { dutch: 'De dokter', english: 'The doctor' },
        { dutch: 'Het ziekenhuis', english: 'The hospital' },
        { dutch: 'Ziek', english: 'Ill' },
        { dutch: 'De pijn', english: 'The pain' },
        { dutch: 'De koorts', english: 'The fever' },
        { dutch: 'De spier', english: 'The muscle' },
        { dutch: 'Het hoofd', english: 'The head' },
        { dutch: 'De arm', english: 'The arm' },
        { dutch: 'De buik', english: 'The belly' },
        { dutch: 'Het been', english: 'The leg' },
        { dutch: 'De voet', english: 'The foot' },
        { dutch: 'Het medicijn', english: 'The medicine' },
        { dutch: 'De apotheek', english: 'The pharmacy' },
        { dutch: 'Het voorschrift', english: 'The prescription' },
        { dutch: 'De gezondheid', english: 'The health' },
        { dutch: 'De hoest', english: 'The cough' },
        { dutch: 'Het oor', english: 'The ear' },
        { dutch: 'Naar', english: 'To(wards)' },
        { dutch: 'Tegen', english: 'Against' },
        { dutch: 'Met', english: 'With' },
        { dutch: 'De muzikant', english: 'The musician' },
        { dutch: 'Het theater', english: 'The theatre' },
        { dutch: 'Het museum', english: 'The museum' },
        { dutch: 'De dans', english: 'The dance' },
        { dutch: 'Het atelier', english: 'The workshop' },
        { dutch: 'De film', english: 'The movie' },
        { dutch: 'De bioscoop', english: 'The cinema' },
        { dutch: 'Het feest', english: 'The party' },
        { dutch: 'De religie', english: 'The religion' },
        { dutch: 'Het talent', english: 'The talent' }
    ];
    const images = [
        { src: dierenziekenhuis, caption: 'Het dierenziekenhuis' },
        { src: dokter, caption: 'De dokter' },
        { src: muzikant, caption: 'De muzikant' },
        { src: museum, caption: 'Het museum' },
        { src: dans, caption: 'De dans' },
        { src: theater, caption: 'Het theater' },
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
        'Ik ga naar de dokter want ik voel me _.',
        'Auwch, ik heb zoveel hoofd_.',
        'De dokter gaf me een _ voor medicijnen.',
        'Kuch kuch, ik heb al de hele dag een _',
        'Mijn _ zijn om goed te kunnen luisteren',
        'Dit weekend voetbalt Club Brugge _ Anderlecht',
        'Ik ben onderweg, ik ga _ het theater',
        'Wij gaan naar de bioscoop, er speelt een mooie _',
        'Met mijn _ kan ik heel goed kijken',
        'De verpleger werkt in het _'
    ];

    const blanks = ['voorschrift', 'tegen', 'ogen', 'ziekenhuis', 'oren', 'film', 'pijn', 'naar', 'ziek', 'hoest'];
    return (
        <div>
            <Navigation />
            <Introduction lessonId={lessonId} />
            <Conversation
                belgianMessages={["Hallo dokter! Ik voel me een beetje ziek.", "Ik heb hoofdpijn en mijn buik doet raar.", "Nee, ik neem geen medicijnen.", "Dankuwel.", "En wat moet ik nu doen?", "Ok dat zal ik doen, alvast bedankt."]}
                dutchMessages={["Dag patiënt. Wat heb je?", "Oh, dat zou een griep kunnen zijn. Neem je medicijnen?", "Ik zal even een onderzoek doen.", "Ik heb je lichaam onderzocht en het lijkt een griep.", "Ik geef je een voorschrift en dan moet je naar de apotheek.", "Veel beterschap!!"]}
            />
            <ImageCollage images={images.slice(0, 3)} />
            <StyledQuestion onClick={() => setShowExtraInfo(!showExtraInfo)} data-translation=" Do you like to watch movies?">Kijk jij graag films?</StyledQuestion>
            {showExtraInfo && <div>
                <ExtraInformation>Nee, ik hou niet van films. Ik kijk liever naar series op Netflix.</ExtraInformation>
                <ExtraInformation>Ja, ik kijk graag films, vooral romantische komedies.</ExtraInformation>
                <ExtraInformation>Ja, en het allerliefst kijk ik films in de bioscoop.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo2(!showExtraInfo2)} data-translation=" Do you listen to music?">Luister jij naar muziek?</StyledQuestion>
            {showExtraInfo2 && <div>
                <ExtraInformation>Nee, ik haat muziek. Muziek is lawaai en ik wil stilte.</ExtraInformation>
                <ExtraInformation>Ja, maar niet zo vaak. Enkel wanneer ik met de auto rijd.</ExtraInformation>
                <ExtraInformation>Ja, heel veel. Ik ben een grote fan van de groep Queen.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo3(!showExtraInfo3)} data-translation=" Do you act in the theatre?">Speel jij toneel in het theater?</StyledQuestion>
            {showExtraInfo3 && <div>
                <ExtraInformation>Nee, ik kan niet goed doen alsof.</ExtraInformation>
                <ExtraInformation>Ja, ik ben echt een goede acteur.</ExtraInformation>
                <ExtraInformation>Ja, acteren en toneelspelen helpen me bij het uiten van mijn emoties.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo4(!showExtraInfo4)} data-translation=" Do you like walking?">Houd jij van wandelen?</StyledQuestion>
            {showExtraInfo4 && <div>
                <ExtraInformation>Nee, ik wandel niet graag. Ik neem voor alles de auto.</ExtraInformation>
                <ExtraInformation>Ja, ik hou vooral van een beetje kuieren in de stad.</ExtraInformation>
                <ExtraInformation>Ja, ik maak graag grote wandelingen in de natuur.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo5(!showExtraInfo5)} data-translation=" Do you feel ill?">Voel jij je ziek?</StyledQuestion>
            {showExtraInfo5 && <div>
                <ExtraInformation>Vandaag niet nee. Maar ik heb wel vaak hoofdpijn.</ExtraInformation>
                <ExtraInformation>Nee, ik ben kerngezond.</ExtraInformation>
                <ExtraInformation>Ja, ik heb een ontsteking in mijn knie. Die ontsteking doet pijn.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo6(!showExtraInfo6)} data-translation=" Do you have pain?">Heb je pijn?</StyledQuestion>
            {showExtraInfo6 && <div>
                <ExtraInformation>Ja, ik heb pijn aan mijn hand.</ExtraInformation>
                <ExtraInformation>Ja, ik heb hoofdpijn.</ExtraInformation>
                <ExtraInformation>Nee, ik heb nergens pijn.</ExtraInformation>
            </div>}
            <StyledQuestion onClick={() => setShowExtraInfo7(!showExtraInfo7)} data-translation=" Where is the hospital?">Waar is het ziekenhuis?</StyledQuestion>
            {showExtraInfo7 && <div>
                <ExtraInformation>Er is een universitair ziekenhuis in deze buurt.</ExtraInformation>
                <ExtraInformation>Het ziekenhuis is in het volgende dorp, in dit dorp is er geen ziekenhuis.</ExtraInformation>
                <ExtraInformation>Welk ziekenhuis bedoel je?</ExtraInformation>
            </div>}

            <ImageCollage images={images.slice(3)} />
            <Vocabulary words={words} />
            <VocabularyQuiz words={words} />
            <StyledAbout>
                <h1>De dansende dokter</h1>

                <p>De dokter liep door het ziekenhuis, zijn witte jas wapperend achter hem aan. Hij was een beetje ziek en had last van de pijn in zijn hoofd. Zijn arm deed ook zeer, waarschijnlijk van al dat schrijven van voorschriften voor medicijnen. Hij wreef over zijn buik en mompelde iets over koorts.</p>
                <p>Op een dag besloot de dokter dat hij wat afleiding nodig had. Hij ging naar het theater om een muzikant te zien optreden. De muzikant speelde prachtige melodieën op zijn gitaar en de dokter vergat even al zijn gezondheidsproblemen.</p>
                <p>Na het concert ging de dokter naar het museum. Hij keek naar schilderijen en beelden en voelde zich geïnspireerd. Misschien moest hij zijn atelier inrichten en zelf gaan schilderen!
                    De volgende dag ging de dokter naar de bioscoop. Hij zag een grappige film en lachte zo hard dat zijn buikpijn verdween. Hij voelde zich beter dan ooit.</p>
                <p> En zo ontdekte de dokter dat naast medicijnen, kunst en cultuur ook goed waren voor zijn gezondheid. Hij begon zelfs te dansen in zijn vrije tijd. De mensen in het dorp noemden hem nu “de dansende dokter”. En hij was gelukkiger dan ooit tevoren!</p>
            </StyledAbout>
            <VocabularySimple words={words} />
            <FillInTheBlankExercise sentences={sentences} blanks={blanks} />
            <GoedBezig
                text={{ dutch: 'Het Beatrixkapsel', english: '"The Beatrix haircut"' }}
                image={beatrix}
            />
            <CenteredContainer>
                <StyledLink href="https://www.abconcerts.be/nl/">
                    Check the website of the AB. 1. What is a "solidair ticket"? 2. What are some of the charities that the AB supports? 3. How does the AB support sustainability?
                </StyledLink>
                <StyledLink href="https://kinepolis.be/nl/bioscopen/kinepolis-antwerpen/info/">
                    Check the website of Kinepolis Antwerpen. 1. When did the complex start its business? 2. How much do you pay for a discount ticket? 3. Name 3 movie genres that are currently playing at Kinepolis Antwerpen. 4. Which movie would you prefer to watch and why?
                </StyledLink>
            </CenteredContainer>
            <Separator></Separator>
            <TitleText>Grammatica / Grammar</TitleText>
            <LessonContainer>
                <Verbs
                    verb="kijken"
                    translation="to look"
                    conjugations={["kijk", "kijkt", "kijkt", "kijken", "kijken", "kijken"]}
                />
                <Verbs
                    verb="luisteren"
                    translation="to listen"
                    conjugations={["luister", "luistert", "luistert", "luisteren", "luisteren", "luisteren"]}
                />
                <Verbs
                    verb="voelen"
                    translation="to feel"
                    conjugations={["voel", "voelt", "voelt", "voelen", "voelen", "voelen"]}
                />
                <Verbs
                    verb="spelen"
                    translation="to play"
                    conjugations={["speel", "speelt", "speelt", "spelen", "spelen", "spelen"]}
                />
                <Verbs
                    verb="dansen"
                    translation="to dance"
                    conjugations={["dans", "danst", "danst", "dansen", "dansen", "dansen"]}
                />
                <Verbs
                    verb="wandelen"
                    translation="to walk"
                    conjugations={["wandel", "wandelt", "wandelt", "wandelen", "wandelen", "wandelen"]}
                />
            </LessonContainer>
            <VerbExercise verbs={[
                { verb: "kijken", conjugations: ["kijk", "kijkt", "kijkt", "kijken", "kijken", "kijken"] },
                { verb: "luisteren", conjugations: ["luister", "luistert", "luistert", "luisteren", "luisteren", "luisteren"] },
                { verb: "voelen", conjugations: ["voel", "voelt", "voelt", "voelen", "voelen", "voelen"] },
                { verb: "spelen", conjugations: ["speel", "speelt", "speelt", "spelen", "spelen", "spelen"] },
                { verb: "dansen", conjugations: ["dans", "danst", "danst", "dansen", "dansen", "dansen"] },
                { verb: "wandelen", conjugations: ["wandel", "wandelt", "wandelt", "wandelen", "wandelen", "wandelen"] }
            ]} />
            <Translate sentences={[
                { english: "We go to the cinema", translation: "Wij gaan naar de bioscoop" },
                { english: "I listen to music", translation: "Ik luister naar muziek" },
                { english: "I play football with my friend", translation: "Ik speel voetbal met mijn vriend" },
                { english: "He walks in the city", translation: "Hij wandelt in de stad" },
                { english: "I feel ill", translation: "Ik voel me ziek" },
                { english: "They dance", translation: "Zij dansen" },
                { english: "A medicine against headache", translation: "Een medicijn tegen hoofdpijn" },
                { english: "He walks to the hospital", translation: "Hij wandelt naar het ziekenhuis" },
                { english: "I watch a movie", translation: "Ik kijk een film" },
                { english: "The musician plays music", translation: "De muzikant speelt muziek" }
            ]} />
            <GrammarBox>
                <GrammarTitle>📚 Numbers (getallen) 📚</GrammarTitle>
                <GrammarParagraph> 1: één</GrammarParagraph>
                <GrammarParagraph> 2: twee</GrammarParagraph>
                <GrammarParagraph> 3: drie</GrammarParagraph>
                <GrammarParagraph> 4: vier</GrammarParagraph>
                <GrammarParagraph> 5: vijf</GrammarParagraph>
                <GrammarParagraph> 6: zes</GrammarParagraph>
                <GrammarParagraph> 7: zeven</GrammarParagraph>
                <GrammarParagraph> 8: acht</GrammarParagraph>
                <GrammarParagraph> 9: negen</GrammarParagraph>
                <GrammarParagraph> 10: tien</GrammarParagraph>
                <GrammarParagraph> 11: elf</GrammarParagraph>
                <GrammarParagraph> 12: twaalf</GrammarParagraph>
                <GrammarParagraph> 13: dertien</GrammarParagraph>
                <GrammarParagraph> 14: veertien</GrammarParagraph>
                <GrammarParagraph> 15: vijftien</GrammarParagraph>
                <GrammarParagraph> 16: zestien</GrammarParagraph>
                <GrammarParagraph> ...</GrammarParagraph>
                <GrammarParagraph> 20: twintig</GrammarParagraph>
                <GrammarParagraph> 21: eenentwintig</GrammarParagraph>
                <GrammarParagraph> 22: tweeëntwintig</GrammarParagraph>
                <GrammarParagraph> ...</GrammarParagraph>
                <GrammarParagraph> 30: dertig</GrammarParagraph>
                <GrammarParagraph> 40: veertig</GrammarParagraph>
                <GrammarParagraph> 50: vijftig</GrammarParagraph>
                <GrammarParagraph> 60: zestig</GrammarParagraph>
                <GrammarParagraph> 70: zeventig</GrammarParagraph>
                <GrammarParagraph> 80: tachtig</GrammarParagraph>
                <GrammarParagraph> 90: negentig</GrammarParagraph>
                <GrammarParagraph> 100: honderd</GrammarParagraph>
                <GrammarParagraph> 101: honderdeneen </GrammarParagraph>
                <GrammarParagraph> ...</GrammarParagraph>
                <GrammarParagraph> 200: tweehonderd </GrammarParagraph>
                <GrammarParagraph> ...</GrammarParagraph>
                <GrammarParagraph> 1000: duizend</GrammarParagraph>
                <GrammarParagraph> 1000000: een miljoen </GrammarParagraph>
                <br />
                <br />
                <GrammarParagraph> <Highlight>Exercise: pronounce 7, 19, 33, 47, 52, 88, 14, 102, 394, 586 </Highlight> </GrammarParagraph>
            </GrammarBox>
            <GrammarBox>
                <GrammarTitle>📚 Wederkerend voornaamwoord 📚</GrammarTitle>
                <GrammarParagraph>In some of the sentences you might have noticed words like "me" or "zich". They are reflexive pronouns, referring back to the subject. I feel (ik voel) or I feel myself (ik voel me) have very different meanings. Let's check this link with an explanation and two exercises <a href="https://www.jufmelis.nl/woordsoorten/wederkerend-voornaamwoord-(reflexief-pronomen)">here</a></GrammarParagraph>
                <GrammarParagraph> <Highlight>Let's do the exercise in the Google Drive </Highlight> </GrammarParagraph>
            </GrammarBox>
            <GrammarBox>
                <GrammarTitle>📚 Second singular verbs in questions? 📚</GrammarTitle>
                <GrammarParagraph>We say "jij werkt". But when asking if you work we say "Werk jij" without the T? How is that?</GrammarParagraph>
                <br />
                <GrammarParagraph>Let's check <a href="https://www.vlaanderen.be/team-taaladvies/spellingregels/werkwoorden-vervoegen/werkwoorden-vervoegen-1-spelling-van-de-stam-en-de-tegenwoordige-tijd-ott">this explanation</a></GrammarParagraph>
                <br />
                <GrammarParagraph> <Highlight>Let's do the exercise in the Google Drive </Highlight> </GrammarParagraph>
            </GrammarBox>
            <Separator></Separator>
            <TitleText>Lezen / reading</TitleText>
            <CenteredContainer>
                <StyledLink href="https://www.nedbox.be/teaser/praat-met-elkaar">
                    "Talk to eachother." Check the article in the link and let's answer the related questions.
                </StyledLink>
                <StyledLink href="https://www.nedbox.be/teaser/breakdance">
                    "Breakdance." Check the article in the link and let's answer the related questions.
                </StyledLink>
            </CenteredContainer>

            <Separator></Separator>
            <TitleText>Huiswerk / Homework</TitleText>
            <GrammarBox>
                <GrammarParagraph>
                    Wat is jouw favoriete culture activiteit? Write 5-10 sentences (try to use the verbs that we learned so far) about your favorite culture activity, what it is, why you like it, which genre you prefer, where you usually do/watch it, etc.
                </GrammarParagraph>
            </GrammarBox>
            <Footer />
        </div>
    );
}

export default Lesson3;