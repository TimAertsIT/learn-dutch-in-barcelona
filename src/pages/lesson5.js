import { StyledQuestion, LessonContainer, Separator, TitleText, GrammarBox, GrammarParagraph, GrammarTitle, Highlight, GrammarListItem, StyledLink, CenteredContainer, StyledStory } from '../pages/lesson1.styles';
import Vocabulary from '../components/Vocabulary/Vocabulary';
import VocabularySimple from '../components/Exercises/Vocabulary/VocabularySimple';
import VocabularyQuiz from '../components/Exercises/Vocabulary/VocabularyQuiz';
import ImageCollage from '../components/ImageCollage/ImageCollage';
import boot from "../images/5boot.jpg";
import fietsen from "../images/5fietsen.jpeg";
import luchthaven from "../images/5luchthaven.jpg";
import perron from "../images/5perron.jpeg";
import wandelen from "../images/5wandelen.jpg";
import zeilen from "../images/5zeilen.jpg";
import GoedBezig from '../components/GoedBezig/GoedBezig';
import Verbs from '../components/Verbs/Verbs';
import VerbExercise from '../components/Exercises/Grammar/VerbExercise';
import FillInTheBlankExercise from '../components/Exercises/Vocabulary/FillintheBlankExercise';
import Translate from '../components/Exercises/Grammar/Translate';
import allowedEmails from '../pages/allowedEmails';
import { useState, useEffect } from 'react';
import lieveheersbeestje from '../images/lieveheersbeestje.jpg';
import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import Introduction from '../components/Introduction/Introduction';
import VocabularyTime from '../components/Exercises/Vocabulary/VocabularyTime';
import { StyledAbout } from './about.styles';

function Lesson5() {
    const lessonId = 5;
    const words = [
        { dutch: 'De trein', english: 'The train' },
        { dutch: 'De bus', english: 'The bus' },
        { dutch: 'De auto', english: 'The car' },
        { dutch: 'Te voet', english: 'By foot' },
        { dutch: 'De fiets', english: 'De fiets' },
        { dutch: 'De elektrische step', english: 'The e-step' },
        { dutch: 'De boot', english: 'The boat' },
        { dutch: 'Het schip', english: 'The ship' },
        { dutch: 'Het vliegtuig', english: 'The airplane' },
        { dutch: 'Rijden', english: 'Drive' },
        { dutch: 'Wandelen', english: 'Walking' },
        { dutch: 'Lopen', english: 'Running' },
        { dutch: 'Varen', english: 'Sailing' },
        { dutch: 'Zeilen', english: 'Sailing' },
        { dutch: 'Vliegen', english: 'Flying' },
        { dutch: 'De luchthaven', english: 'The airport' },
        { dutch: 'Het kaartje', english: 'The ticket' },
        { dutch: 'De bestemming', english: 'The destination' },
        { dutch: 'Het vertrek', english: 'The departure' },
        { dutch: 'De aankomst', english: 'The arrival' },
        { dutch: 'Het perron', english: 'The platform' },
        { dutch: 'De vertraging', english: 'The delay' },
        { dutch: 'Traag', english: 'Slow' },
        { dutch: 'Snel', english: 'Fast' },
        { dutch: 'De snelheid', english: 'The speed' },
        { dutch: 'Het spoor', english: 'The railway track' },
        { dutch: 'Overstappen', english: 'To transfer' },
        { dutch: 'Het abonnement', english: 'The subscription' },
        { dutch: 'De uurregeling', english: 'The timetable' },
        { dutch: 'Het tarief', english: 'The fare' }
    ];
    const images = [
        { src: boot, caption: 'De boot' },
        { src: fietsen, caption: 'Fietsen' },
        { src: perron, caption: 'Het perron' },
        { src: wandelen, caption: 'Wandelen' },
        { src: zeilen, caption: 'Zeilen' },
        { src: luchthaven, caption: 'De luchthaven' },
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
        'Eerst moet je de trein naar Brugge nemen en dan moet je _ op de trein naar Gent.',
        'Ik ben net aangekomen in de _ van Zaventem.',
        'Ik wil een _ kopen, heen en terug naar Amsterdam.',
        'Om hoe _ vertrekt de boot naar Oostende?',
        'De fiets vind ik veel te _, ik ga wel met de auto.',
        'Op welk _ komt de trein naar Luik aan?',
        'Ben je zeker dat je met de _ wil gaan? Je kan zeeziek worden.',
        'Sorry dat ik te laat ben. Er was een _ op de snelweg.',
        '120km/u is de _ hier.',
        'Het _ is beter voor het milieu dan de auto.'
    ];

    const blanks = ['kaartje', 'overstappen', 'perron', 'boot', 'openbaar vervoer', 'luchthaven', 'file', 'laat', 'maximumsnelheid', 'traag'];
    return (
        <div>
            <Navigation />
            <Introduction lessonId={lessonId} />
            <ImageCollage images={images.slice(0, 3)} />
            <StyledQuestion data-translation=" How much does a ticket to Groningen cost?">Hoeveel kost een kaartje naar Groningen?</StyledQuestion>
            <StyledQuestion data-translation=" On which platform does the train arrive?">Op welk spoor komt de trein aan?</StyledQuestion>
            <StyledQuestion data-translation=" At what time does the plane to Barcelona leave?">Om hoe laat vertrekt het vliegtuig naar Barcelona?</StyledQuestion>
            <StyledQuestion data-translation=" Do you want to walk or go by car?">Wil je te voet gaan of met de auto?</StyledQuestion>
            <StyledQuestion data-translation=" What is the maximum speed on the highway?">Wat is de maximumsnelheid op de snelweg?</StyledQuestion>
            <StyledQuestion data-translation=" What is the destination of your travels?">Wat is de bestemming van jouw reis?</StyledQuestion>
            <StyledQuestion data-translation=" What time is it?">Hoe laat is het?</StyledQuestion>
            <ImageCollage images={images.slice(3)} />
            <Vocabulary words={words} />
            <StyledAbout>
                <h1>De treinreis van Meneer Jansen</h1>
                <p>Meneer Jansen was een rustige man die elke dag met de trein naar zijn werk ging. Hij stapte op in het station in zijn woonplaats en reisde naar de stad. Op een dag besloot hij om iets anders te proberen en nam de bus naar zijn werk. De auto liet hij thuis, want hij wilde eens een andere manier van reizen ervaren.</p>
                <p>Hij stapte uit de bus en ging te voet verder. Het was een mooie dag, dus hij genoot van het wandelen. Onderweg kwam hij een vriend tegen die op zijn fiets naar het werk ging. Ze begroetten elkaar en Meneer Jansen dacht: “Misschien moet ik ook eens een fiets kopen.”</p>
                <p>Op het werk hoorde hij collega’s praten over hun avonturen met de elektrische step. Ze zoeften door de stad en hadden de grootste lol. Meneer Jansen was nieuwsgierig en besloot er ook een te huren. Hij voelde zich net een kind dat voor het eerst op een step stond.</p>
                <p>In het weekend ging hij met zijn gezin een dagje uit. Ze huurden een boot en voeren over de rivier. Meneer Jansen vond het heerlijk om op het water te zijn. Zijn vrouw zei: “Laten we volgende keer een schip huren en een langere tocht maken.”</p>
                <p>Op vakantie ging hij met het vliegtuig naar een exotische bestemming. Hij had een ticket geboekt en keek uit naar de aankomst op het paradijselijke eiland. Helaas was er een vertraging en moest hij uren wachten op de luchthaven. Gelukkig had hij een goed boek bij zich.</p>
                <p>Terug in Nederland nam hij de trein naar huis. Hij zat in de coupé en keek uit het raam. Het spoor leidde hem door groene weilanden en langs kleine dorpjes. Hij dacht aan al zijn reizen en besefte dat elke manier van reizen zijn charme had.</p>
                <p>En zo eindigt het verhaal van Meneer Jansen, de man die van rijden, wandelen, varen, zeilen, vliegen en alles daartussenin hield. Hij had geen favoriete manier van reizen, want elke reis bracht hem iets bijzonders. Misschien was dat wel het mooiste abonnement dat hij ooit had gehad: het abonnement op avontuur.</p>
            </StyledAbout>
            <VocabularyQuiz words={words} />
            <VocabularySimple words={words} />
            <FillInTheBlankExercise sentences={sentences} blanks={blanks} />
            <GoedBezig
                text={{ dutch: 'Het lieveheersbeestje', english: '"The dear Lord`s small beast"' }}
                image={lieveheersbeestje}
            />
            <CenteredContainer>
                <StyledLink href="https://www.belgiantrain.be/nl">
                    Hoeveel kost een senior ticket voor een treinreis van Mol naar Brugge, heen en terug?
                </StyledLink>
                <StyledLink href="https://www.belgiantrain.be/nl">
                    Arno wants to buy a train ticket for the train from Hasselt to Oostende. Write a dialogue between him and the sales desk.
                </StyledLink>
            </CenteredContainer>
            <Separator></Separator>
            <TitleText>Grammatica / Grammar</TitleText>
            <LessonContainer>
                <Verbs
                    verb="rijden"
                    translation="to drive"
                    conjugations={["rijd", "rijdt", "rijdt", "rijden", "rijden", "rijden"]}
                />
                <Verbs
                    verb="wandelen"
                    translation="to walk"
                    conjugations={["wandel", "wandelt", "wandelt", "wandelen", "wandelen", "wandelen"]}
                />
                <Verbs
                    verb="lopen"
                    translation="to run"
                    conjugations={["loop", "loopt", "loopt", "lopen", "lopen", "lopen"]}
                />
                <Verbs
                    verb="varen"
                    translation="to sail"
                    conjugations={["vaar", "vaart", "vaart", "varen", "varen", "varen"]}
                />
                <Verbs
                    verb="zeilen"
                    translation="to sail"
                    conjugations={["zeil", "zeilt", "zeilt", "zeilen", "zeilen", "zeilen"]}
                />
                <Verbs
                    verb="vliegen"
                    translation="to fly"
                    conjugations={["vlieg", "vliegt", "vliegt", "vliegen", "vliegen", "vliegen"]}
                />
            </LessonContainer>
            <VerbExercise verbs={[
                { verb: "wandelen", conjugations: ["wandel", "wandelt", "wandelt", "wandelen", "wandelen", "wandelen"] },
                { verb: "lopen", conjugations: ["loop", "loopt", "loopt", "lopen", "lopen", "lopen"] },
                { verb: "varen", conjugations: ["vaar", "vaart", "vaart", "varen", "varen", "varen"] },
                { verb: "zeilen", conjugations: ["zeil", "zeilt", "zeilt", "zeilen", "zeilen", "zeilen"] },
                { verb: "vliegen", conjugations: ["vlieg", "vliegt", "vliegt", "vliegen", "vliegen", "vliegen"] },
                { verb: "rijden", conjugations: ["rijd", "rijdt", "rijdt", "rijden", "rijden", "rijden"] }
            ]} />
            <Translate sentences={[
                { english: "He drives the car", translation: "Hij rijdt met de auto" },
                { english: "I walk in the forest", translation: "Ik wandel in het bos" },
                { english: "We fly to Rome", translation: "Wij vliegen naar Rome" },
                { english: "I buy a ticket", translation: "Ik koop een kaartje" },
                { english: "Quick, you have to run", translation: "Snel, jij moet lopen" },
                { english: "120km/h is the maximum speed here", translation: "120km/u is de maximumsnelheid hier" },
                { english: "The train arrives on platform 2", translation: "De trein komt aan op perron 2" },
                { english: "The plane flies to New York", translation: "Het vliegtuig vliegt naar New York" },
                { english: "The boat sails to Zeeland", translation: "De boot vaart naar Zeeland" },
                { english: "We ride the train", translation: "Wij rijden met de trein" }
            ]} />
            <GrammarBox>
                <GrammarTitle>📚 Vraagwoorden 📚</GrammarTitle>
                <GrammarParagraph>
                    Wie (who), wat (what), waar (where), wanneer (when), waarom (why), hoe (how), welk(e) (which), hoeveel (how many) are some of the most used question words.</GrammarParagraph>
                <br />
                <GrammarParagraph> <Highlight>Let's do the exercise in the Google Drive </Highlight> </GrammarParagraph>
            </GrammarBox>
            <GrammarBox>
                <GrammarTitle>📚 Modale hulpwerkwoorden (modal helping verbs) 📚</GrammarTitle>
                <GrammarParagraph>Modal verbs such as "kunnen" and "moeten" come together with another verb. They add a probability, an obligation, a wish, a possibility, etc. to the other verb. The modal verb normally comes right after the subject. Whereas the matching infinite verb comes at the end of the sentence. Let's check some more information <a href="https://uilentaal.wordpress.com/2015/03/04/modale-werkwoorden/">here</a></GrammarParagraph>
                <br />
                <GrammarParagraph> <Highlight>Let's do the exercise in the Google Drive </Highlight></GrammarParagraph>
            </GrammarBox>
            <Separator></Separator>
            <TitleText>Lezen / reading</TitleText>
            <CenteredContainer>
                <StyledLink href="https://www.nedbox.be/teaser/met-de-bus">
                    "Riding the bus?" Check the article in the link and let's answer the related questions.
                </StyledLink>
                <StyledLink href="https://www.nedbox.be/teaser/elektrische-auto">
                    "The electric car." Check the article in the link and let's answer the related questions.
                </StyledLink>
            </CenteredContainer>

            <Separator></Separator>
            <TitleText>Huiswerk / Homework</TitleText>
            <GrammarBox>
                <GrammarParagraph>
                    - Wat is jouw favoriete plaats in de stad? Maak zinnen (vb. Ik hou van het stadspark, want daar is het rustig. Je kan er wandelen, fietsen en ijsjes eten. Het stadspark ligt in het midden van de stad Antwerpen.)</GrammarParagraph>
                <br />
                <GrammarParagraph>

                    - Wat is er te doen in Gent deze week (in zinnen). <a href="https://www.wattedoen.be/gent">https://www.wattedoen.be/gent </a>
                    (vb. In Gent is er een markt op donderdag. Er is deze week ook een concert van de muziekgroep Absynthe Minded. Woensdag is er een theatervoorstelling voor kinderen.).

                </GrammarParagraph>
            </GrammarBox>
            <Footer />
        </div>
    );
}

export default Lesson5;