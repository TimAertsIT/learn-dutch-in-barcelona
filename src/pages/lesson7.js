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
        { question: 'Een boek. Twee _', options: ['boeken', 'boeks'] },
        { question: 'De straat. _', options: ['de straten', 'het straten'] },
        { question: 'Het huis. De _', options: ['huisen', 'huizen'] },
        { question: 'De kamer. Drie _', options: ['kamer', 'kamers'] },
        { question: 'De tafel. Veel _', options: ['tafelen', 'tafels'] },
        { question: 'Een friet. De _', options: ['frieten', 'friets'] },
        { question: 'Een fiets. Twee _', options: ['fietss', 'fietsen'] },
        { question: 'De lepel. Drie _.', options: ['lepelen', 'lepels'] },
        { question: 'De vork. Twee _.', options: ['vorken', 'vorks'] },
        { question: 'De stoel. Vijf _', options: ['stoels', 'stoelen'] },
        { question: 'De drank. Drie _', options: ['dranks', 'dranken'] },
        { question: 'De bitterbal. Twee _', options: ['bitterbalen', 'bitterballen'] },
        { question: 'De rekening. Vijf _', options: ['rekeningen', 'rekenings'] },
        { question: 'De vis. Vier _', options: ['vissen', 'visen'] },
        { question: 'Het wijntje. De wijntjes. De wijn. De _ ', options: ['wijns', 'wijnen'] }
    ];


    const correctAnswers = ['boeken', 'de straten', 'huizen', 'kamers', 'tafels', 'frieten', 'fietsen', 'lepels', 'vorken', 'stoelen', 'dranken', 'bitterballen', 'rekeningen', 'vissen', 'wijnen'];

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
                    verb="eten"
                    translation="to eat"
                    conjugations={["eet", "eet", "eet", "eten", "eten", "eten"]}
                />
                <Verbs
                    verb="drinken"
                    translation="to drink"
                    conjugations={["drink", "drinkt", "drinkt", "drinken", "drinken", "drinken"]}
                />
                <Verbs
                    verb="koken"
                    translation="to cook"
                    conjugations={["kook", "kookt", "kookt", "koken", "koken", "koken"]}
                />
                <Verbs
                    verb="meenemen"
                    translation="to take away"
                    conjugations={["neem mee", "neemt mee", "neemt mee", "nemen mee", "nemen mee", "nemen mee"]}
                />
                <Verbs
                    verb="betalen"
                    translation="to pay"
                    conjugations={["betaal", "betaalt", "betaalt", "betalen", "betalen", "betalen"]}
                />
                <Verbs
                    verb="afrekenen"
                    translation="to check the bill"
                    conjugations={["reken af", "rekent af", "rekent af", "rekenen af", "rekenen af", "rekenen af"]}
                />
            </LessonContainer>
            <VerbExercise verbs={[
                { verb: "eten", conjugations: ["eet", "eet", "eet", "eten", "eten", "eten"] },
                { verb: "drinken", conjugations: ["drink", "drinkt", "drinkt", "drinken", "drinken", "drinken"] },
                { verb: "koken", conjugations: ["kook", "kookt", "kookt", "koken", "koken", "koken"] },
                { verb: "meenemen", conjugations: ["neem mee", "neemt mee", "neemt mee", "nemen mee", "nemen mee", "nemen mee"] },
                { verb: "betalen", conjugations: ["betaal", "betaalt", "betaalt", "betalen", "betalen", "betalen"] },
                { verb: "afrekenen", conjugations: ["reken af", "rekent af", "rekent af", "rekenen af", "rekenen af", "rekenen af"] }
            ]} />
            <Translate sentences={[
                { english: "I cook soup", translation: "Ik kook soep" },
                { english: "He pays the bill", translation: "Hij betaalt de rekening" },
                { english: "Can I have the bill please?", translation: "Mag ik de rekening alstublieft?" },
                { english: "Did it taste good?", translation: "Heeft het gesmaakt?" },
                { english: "We will take away the salad", translation: "Wij zullen de salade meenemen" },
                { english: "He gives a tip", translation: "Hij geeft een fooi" },
                { english: "We drink beer without alcohol", translation: "Wij drinken bier zonder alcohol" },
                { english: "I sit on a chair", translation: "Ik zit op een stoel" },
                { english: "We booked a table", translation: "Wij hebben een tafel gereserveerd" },
                { english: "I am vegetarian", translation: "Ik ben vegetariër" }
            ]} />
            <GrammarBox>
                <GrammarTitle>📚 Het meervoud 📚</GrammarTitle>
                <GrammarParagraph> Standaard gaan we in het meervoud +en achter het woord zetten. Een boek worden 2 boek<Highlight>en</Highlight>.
                    <br></br>
                    <br></br>
                    Laten we even de standaardregels bekijken. <a href="https://www.slimleren.nl/onderwerpen/nederlands/12.557/basisregels-meervoud-zelfstandig-naamwoord">hier</a>
                    <br></br>
                    <br></br>
                    Er zijn echter ook heel wat uitzonderingen. Vaak gerelateerd aan een bepaalde regel, maar soms moet je ze ook gewoon vanbuiten kennen. Laten we ze <a href="https://grammaticavoornt2docenten.nl/schrijfvaardigheid/het-meervoud-vormen-2/">hier</a> even bekijken.</GrammarParagraph>
                <br />
            </GrammarBox>
            <MultipleChoice questions={questions} correctAnswers={correctAnswers} />
            <Separator></Separator>
            <GrammarBox>
                <GrammarTitle>📚 Voorzetsels 📚</GrammarTitle>
                <GrammarParagraph> Voorzetsels worden normaal gebruikt om te verwijzen naar een tijd, plaats of middel. Ik ga naar school <Highlight>om</Highlight> 9uur. Ik zit dan <Highlight>in</Highlight> de klas. Ik ga naar school <Highlight>met</Highlight> de auto.
                    <br />
                    <br></br>
                    <br></br> Let's check this explanation  <a href="https://www.nt2.nl/documenten/focus_op_taal/focus_op_taal-oefenbladen-hfdst21.pdf">here</a>. </GrammarParagraph>
            </GrammarBox>
            <Separator></Separator>
            <TitleText>Lezen / reading</TitleText>
            <CenteredContainer>
                <StyledLink href="https://www.nedbox.be/teaser/restaurant-ínstroom">
                    "Restaurant instroom!" Check the article in the link and let's answer the related questions.
                </StyledLink>
                <StyledLink href="https://www.nedbox.be/teaser/op-restaurant-japan">
                    "Going to the restaurant in Japan" Check the article in the link and let's answer the related questions.
                </StyledLink>
            </CenteredContainer>

            <Separator></Separator>
            <TitleText>Huiswerk / Homework</TitleText>
            <GrammarBox>
                <GrammarParagraph>
                    Bekijk <a href="https://www.nt2.nl/documenten/praatplaat_vakantie_nt2.pdf">deze tekening</a>. Beschrijf 10 situaties en maak daarbij gebruik van voorzetsels. Vb. "De kat zit in het gras. Tessa staat naast de fiets."


                </GrammarParagraph>
            </GrammarBox>
            <Footer />
        </div>
    );
}

export default Lesson7;