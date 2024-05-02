import { StyledQuestion, LessonContainer, Separator, TitleText, GrammarBox, GrammarParagraph, GrammarTitle, Highlight, GrammarListItem, StyledLink, CenteredContainer, StyledStory } from '../pages/lesson1.styles';
import Vocabulary from '../components/Vocabulary/Vocabulary';
import VocabularySimple from '../components/Exercises/Vocabulary/VocabularySimple';
import VocabularyQuiz from '../components/Exercises/Vocabulary/VocabularyQuiz';
import MultipleChoice from '../components/Exercises/Grammar/MultipleChoice';
import ImageCollage from '../components/ImageCollage/ImageCollage';
import bier from "../images/7bier.png";
import bitterbal from "../images/7bitterbal.jpg";
import boterham from "../images/7boterham.jpeg";
import friet from "../images/7friet.jpg";
import kaas from "../images/7kaas.png";
import poffertje from "../images/7poffertje.jpg";
import GoedBezig from '../components/GoedBezig/GoedBezig';
import Verbs from '../components/Verbs/Verbs';
import VerbExercise from '../components/Exercises/Grammar/VerbExercise';
import FillInTheBlankExercise from '../components/Exercises/Vocabulary/FillintheBlankExercise';
import Translate from '../components/Exercises/Grammar/Translate';
import allowedEmails from '../pages/allowedEmails';
import { useState, useEffect } from 'react';
import pindakaas from '../images/pindakaas.jpg';
import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import Introduction from '../components/Introduction/Introduction';
import VocabularyTime from '../components/Exercises/Vocabulary/VocabularyTime';
import { StyledAbout } from './about.styles';

function Lesson7() {
    const lessonId = 7;
    const words = [
        { dutch: 'Het eten', english: 'The food' },
        { dutch: 'Het menu', english: 'The menu' },
        { dutch: 'Bestellen', english: 'To order' },
        { dutch: 'De drank', english: 'The drink' },
        { dutch: 'Het water', english: 'The water' },
        { dutch: 'Het bier', english: 'The beer' },
        { dutch: 'De wijn', english: 'The wine' },
        { dutch: 'De koffie', english: 'The coffee' },
        { dutch: 'De thee', english: 'The tea' },
        { dutch: 'De soep', english: 'The soup' },
        { dutch: 'De salade', english: 'The salad' },
        { dutch: 'Het brood', english: 'The bread' },
        { dutch: 'De kaas', english: 'The cheese' },
        { dutch: 'Het vlees', english: 'The meat' },
        { dutch: 'De vis', english: 'The fish' },
        { dutch: 'De groente', english: 'The vegetable' },
        { dutch: 'Het dessert', english: 'The dessert' },
        { dutch: 'De rekening', english: 'The bill' },
        { dutch: 'De fooi', english: 'The tip' },
        { dutch: 'De keuken', english: 'The kitchen' },
        { dutch: 'De tafel', english: 'The table' },
        { dutch: 'De stoel', english: 'The chair' },
        { dutch: 'De lepel', english: 'The spoon' },
        { dutch: 'De vork', english: 'The fork' },
        { dutch: 'Het mes', english: 'The knife' },
        { dutch: 'Meenemen', english: 'To take away/to bring along' },
        { dutch: 'Betalen', english: 'To pay' },
        { dutch: 'Koken', english: 'To cook' },
        { dutch: 'Eten', english: 'To eat' },
        { dutch: 'Drinken', english: 'To drink' }
    ];
    const images = [
        { src: bitterbal, caption: 'De bitterbal' },
        { src: bier, caption: 'Het bier' },
        { src: boterham, caption: 'De boterham' },
        { src: friet, caption: 'De friet' },
        { src: kaas, caption: 'De kaas' },
        { src: poffertje, caption: 'Het poffertje' },
    ];

    const questions = [
        { question: 'Van wie is die fiets? Dat is de _', options: ['mij', 'mijne'] },
        { question: 'Is dat _ moeder?', options: ['jou', 'jouw'] },
        { question: '_ huis staat in de straat.', options: ['ons', 'onze'] },
        { question: 'Is dat jouw of _ drankje?', options: ['mijn', 'mijne'] },
        { question: 'Die trui is de _.', options: ['haar', 'hare'] },
        { question: 'Dat is _ trui.', options: ['haar', 'hare'] },
        { question: 'Dit is _ broek.', options: ['mijne', 'mijn'] },
        { question: 'Deze broek is de _.', options: ['mijne', 'mijn'] },
        { question: 'Dat huis is het _.', options: ['ons', 'onze'] },
        { question: 'Is dat _ huis?', options: ['jullie', 'hunne'] },
        { question: 'Nee, dat huis is het _', options: ['hunne', 'uw'] },
        { question: 'Ik vind _ ogen mooi.', options: ['uw', 'uwe'] },
        { question: '_ school is niet ver weg.', options: ['mij', 'mijn'] },
        { question: 'Het is _ huis', options: ['mijne', 'mijn'] },
        { question: 'Dat is _ boek.', options: ['ons', 'onze'] }
    ];


    const correctAnswers = ['mijne', 'jouw', 'ons', 'mijn', 'hare', 'haar', 'mijn', 'mijne', 'onze', 'jullie', 'hunne', 'uw', 'mijn', 'mijn', 'ons'];

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
        'Ik wil graag betalen. Mag ik de _?',
        'Hebben wij nog eten in huis? Want ik heb _.',
        'Voor mijn geen _ aub, ik ben vegetariër.',
        'Als je _ hebt moet je drinken.',
        'In elke salade zitten er wel _.',
        'Wij hebben een _ gereserveerd voor 4 personen.',
        'Ork ork ork, soep eet je met een _.',
        'Ik ben een onthouder. Heb je ook alcoholvrij _?',
        'Ik drink geen _ na 15uur want dan kan ik niet goed slapen.',
        'Je bent om op te _.'
    ];

    const blanks = ['vlees', 'groenten', 'rekening', 'koffie', 'honger', 'dorst', 'tafel', 'eten', 'lepel', 'bier'];
    return (
        <div>
            <Navigation />
            <Introduction lessonId={lessonId} />
            <ImageCollage images={images.slice(0, 3)} />
            <StyledQuestion data-translation=" What do you like to eat">Wat eet jij graag?</StyledQuestion>
            <StyledQuestion data-translation=" What is your favorite food?">Wat is jouw lievelingseten?</StyledQuestion>
            <StyledQuestion data-translation=" Do you want to order?">Wil je bestellen?</StyledQuestion>
            <StyledQuestion data-translation=" Do you often go to a restaurant?">Ga je vaak op restaurant?</StyledQuestion>
            <StyledQuestion data-translation=" What is your favorite type of food?">Wat is je favoriete keuken?</StyledQuestion>
            <StyledQuestion data-translation=" Can I have the bill please?">Mag ik de rekening alstublieft?</StyledQuestion>
            <StyledQuestion data-translation=" Did it taste good?">Heeft het gesmaakt?</StyledQuestion>
            <ImageCollage images={images.slice(3)} />
            <Vocabulary words={words} />
            <StyledAbout>
                <h1>Het dure restaurant</h1>
                <p>Er was eens een man die naar een restaurant ging en zei: "Ik wil bestellen". De ober gaf hem de menukaart. De man keek naar het menu en zei: "Ik wil één van alles!" De ober was verbaasd en vroeg: "Zelfs van de drank?" De man knikte en zei: "Ja, zelfs van de drank. Ik wil water, bier, wijn, koffie en thee!"</p>

                <p>Toen het eten kwam, was er zoveel dat het niet op de tafel paste. De man keek naar het eten en zei: "Ik denk dat ik mijn ogen groter dan mijn maag heb gemaakt!" Maar hij probeerde toch alles op te eten, van de soep tot het dessert.</p>

                <p>Aan het einde van de maaltijd, toen hij de rekening kreeg, zei hij: "Ik denk dat ik de volgende keer gewoon een salade zal bestellen!"</p>


            </StyledAbout>
            <VocabularyQuiz words={words} />
            <VocabularySimple words={words} />
            <FillInTheBlankExercise sentences={sentences} blanks={blanks} />
            <GoedBezig
                text={{ dutch: 'Helaas pindakaas', english: '"Unfortunately peanut cheese" / "Too bad"' }}
                image={pindakaas}
            />
            <CenteredContainer>
                <StyledLink href="https://www.vrt.be/vrtnws/nl/2023/07/27/amerikaanse-vlogger-eet-twee-reuzeburgers-van-restaurant-in-dilb/">
                    Lees het artikel en beantwoord de volgende vragen: 1. Hoeveel tijd had Katina nodig om haar burger op te eten? 2. Heeft Stijn ook een record? 3. Hoeveel weegt de burger?
                </StyledLink>
            </CenteredContainer>
            <Separator></Separator>
            <TitleText>Grammatica / Grammar</TitleText>
            <LessonContainer>
                <Verbs
                    verb="bezoeken"
                    translation="to visit"
                    conjugations={["bezoek", "bezoekt", "bezoekt", "bezoeken", "bezoeken", "bezoeken"]}
                />
                <Verbs
                    verb="zien"
                    translation="to see"
                    conjugations={["zie", "ziet", "ziet", "zien", "zien", "zien"]}
                />
                <Verbs
                    verb="inchecken"
                    translation="to check-in"
                    conjugations={["check in", "checkt in", "checkt in", "checken in", "checken in", "checken in"]}
                />
                <Verbs
                    verb="storen"
                    translation="to disturb"
                    conjugations={["stoor", "stoort", "stoort", "storen", "storen", "storen"]}
                />
                <Verbs
                    verb="verkennen"
                    translation="to explore"
                    conjugations={["verken", "verkent", "verkent", "verkennen", "verkennen", "verkennen"]}
                />
                <Verbs
                    verb="reserveren"
                    translation="to book"
                    conjugations={["reserveer", "reserveert", "reserveert", "reserveren", "reserveren", "reserveren"]}
                />
            </LessonContainer>
            <VerbExercise verbs={[
                { verb: "bezoeken", conjugations: ["bezoek", "bezoekt", "bezoekt", "bezoeken", "bezoeken", "bezoeken"] },
                { verb: "zien", conjugations: ["zie", "ziet", "ziet", "zien", "zien", "zien"] },
                { verb: "inchecken", conjugations: ["check in", "checkt in", "checkt in", "checken in", "checken in", "checken in"] },
                { verb: "storen", conjugations: ["stoor", "stoort", "stoort", "storen", "storen", "storen"] },
                { verb: "verkennen", conjugations: ["verken", "verkent", "verkent", "verkennen", "verkennen", "verkennen"] },
                { verb: "reserveren", conjugations: ["reserveer", "reserveert", "reserveert", "reserveren", "reserveren", "reserveren"] }
            ]} />
            <Translate sentences={[
                { english: "He visits the city", translation: "Hij bezoekt de stad" },
                { english: "Do not disturb", translation: "Niet storen" },
                { english: "We explore the small streets", translation: "Wij verkennen de kleine straten" },
                { english: "I book a hotel room", translation: "Ik reserveer een hotelkamer" },
                { english: "Shall we visit the center?", translation: "Zullen wij het centrum bezoeken?" },
                { english: "I go on holiday to Jamaica", translation: "Ik ga op reis naar Jamaica" },
                { english: "A room for 2 with breakfast", translation: "Een kamer voor 2 met ontbijt" },
                { english: "Can you book it?", translation: "Kan jij het reserveren?" },
                { english: "The door is closed", translation: "De deur is gesloten" },
                { english: "When will you travel?", translation: "Wanneer ga jij op reis?" }
            ]} />
            <GrammarBox>
                <GrammarTitle>📚 Het bezittelijk voornaamwoord 📚</GrammarTitle>
                <GrammarParagraph> Het bezittelijk voornaamwoord geeft de bezittelijke relatie weer met een persoon, dier of organisatie.
                    <br></br>
                    <br></br>
                    Van wie is dat boek? Dat is <Highlight>mijn boek</Highlight>. Dat is <Highlight>het mijne</Highlight>. Als je bijvoorbeeld zegt: “Dat is zijn fiets”, vertelt het woord ‘zijn’ van wie de fiets is.
                    <br></br>
                    <br></br>
                    Let's check the table <a href="https://onzetaal.nl/taalloket/bezittelijk-voornaamwoord">here</a></GrammarParagraph>
                <br />
            </GrammarBox>
            <MultipleChoice questions={questions} correctAnswers={correctAnswers} />
            <Separator></Separator>
            <GrammarBox>
                <GrammarTitle>📚 Gesloten vragen 📚</GrammarTitle>
                <GrammarParagraph> Gesloten vragen zijn vragen die we enkel met ja/nee kunnen beantwoorden. In een gewone zin is de normale volgorde het <Highlight>onderwerp </Highlight> (vb. "ik") gevolgd door het <Highlight>werkwoord</Highlight> (vb. "werk") gevolgd door de rest van de zin. Bijvoorbeeld: "Ik werk in een fabriek."
                    <br />
                    <br />
                    Bij gesloten vragen draaien we deze volgorde om. Daarbij komt dan eerst het <Highlight>werkwoord</Highlight> (vb. "werk") gevolgd door het <Highlight>onderwerp</Highlight> (vb. "jij") gevolgd door de rest van de zin. Bijvoorbeeld: "Werk jij in een fabriek?"
                    <br />
                    <br></br>
                    <br></br> Let's check this explanation on word positioning <a href="https://www.braint.nl/taalgids/zinsontleding/woordvolgorde.html#:~:text=De%20gebruikelijke%20woordvolgorde%20in%20een,zin%20je%20nadruk%20wilt%20geven">here</a>.
                    And let's do some exercises <a href="https://nt2taalmenu.nl/nt2-a1-grammatica-geslotenvragen-oefening1/">here</a>.</GrammarParagraph>
            </GrammarBox>
            <Separator></Separator>
            <TitleText>Lezen / reading</TitleText>
            <CenteredContainer>
                <StyledLink href="https://www.nedbox.be/teaser/vakantie">
                    "Holidays!" Check the article in the link and let's answer the related questions.
                </StyledLink>
                <StyledLink href="https://www.nedbox.be/teaser/een-reis-boeken">
                    "Booking a trip" Check the article in the link and let's answer the related questions.
                </StyledLink>
            </CenteredContainer>

            <Separator></Separator>
            <TitleText>Huiswerk / Homework</TitleText>
            <GrammarBox>
                <GrammarParagraph>
                    Je bent op vakantie in Scheveningen. Schrijf een kaartje aan je familie met vakantiegroeten.

                </GrammarParagraph>
            </GrammarBox>
            <Footer />
        </div>
    );
}

export default Lesson7;