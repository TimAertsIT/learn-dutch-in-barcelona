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
        { dutch: 'To', english: 'Towards' },
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
            <ImageCollage images={images.slice(0, 3)} />
            <StyledQuestion data-translation=" Do you like to watch movies?">Kijk jij graag films?</StyledQuestion>
            <StyledQuestion data-translation=" Do you listen to music?">Luister jij naar muziek?</StyledQuestion>
            <StyledQuestion data-translation=" Do you act in the theatre?">Speel jij toneel in het theater?</StyledQuestion>
            <StyledQuestion data-translation=" Do you like walking?">Houd jij van wandelen?</StyledQuestion>
            <StyledQuestion data-translation=" Do you feel ill?">Voel jij je ziek?</StyledQuestion>
            <StyledQuestion data-translation=" Do you have pain?">Heb je pijn?</StyledQuestion>
            <StyledQuestion data-translation=" Where is the hospital?">Waar is het ziekenhuis?</StyledQuestion>
            <ImageCollage images={images.slice(3)} />
            <Vocabulary words={words} />
            <VocabularyQuiz words={words} />
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