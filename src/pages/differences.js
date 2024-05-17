import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import amai from "../images/0amai.png";
import bank from "../images/0bank.png";
import goesting from "../images/0goesting.png";
import lekker from "../images/0lekker.png";
import lopen from "../images/0lopen.png";
import poepen from "../images/0poepen.png";
import tas from "../images/0tas.png";
import tosti from "../images/0tosti.png";
import vijgen from "../images/0vijgen.png";
import zeker from "../images/0zeker.png";

import { StyledAbout } from './about.styles';
import { LargeStyledImage } from './about.styles';

function Differences() {
    return (
        <div>
            <Navigation />
            <StyledAbout>
                <h1>What are the differences between Dutch from Belgium and the Netherlands? 10 examples.</h1>
                <p>Both in the Netherlands and the Flemish part of Belgium people speak Dutch. It is one and the same language with its standard version. Though in certain regions people do speak a dialect, public broadcasters, schools and institutions will focus on the standardized Dutch. But there are still regional varieties in its use. The best comparison would probably be between US English and UK English. </p>
                <p>The main difference between Dutch from Belgium and the Netherlands is its pronunciation. Speakers will mostly understand eachother, but might notice straight away that the other speak comes from another country. For instance, Belgians will say "tram" to a tram, with a Dutch "a", whereas Dutch people might pronounce it as "trem" with a more English-style pronunciation. And the pronunciation of the soft "g" versus the hard "g" can be giving away quickly where one comes from. Besides the pronunciation, there are some other differences, let's look at 10 examples.</p>
                <hr />
                <img src={zeker} alt="vast en zeker" />
                <p>Sometimes, the only difference is the word order, such as in "zeker en vast" and "vast en zeker" (which is a saying that means nothing more than "definitely").
                </p>
                <hr />
                <img src={vijgen} alt="vijgen na pasen" />
                <p>Certain sayings and expressions are completely different in Flanders and The Netherlands. When you want to say that something arrives too late in Flanders, you could say those are "vijgen na pasen (figs after easter)", while in The Netherlands that would be "mosterd na de maaltijd (mustard after the meal)".
                </p>
                <hr />
                <img src={amai} alt="amai of nou" />
                <p>A key word that many people in Belgium use, in its spoken variety, is "amai". Something similar in The Netherlands would be "nou". Both words have a wide variety of meanings and can be used in various situations and are not really used in the other region. One of its translations could be "wow", which can be used when one is positively surprised, negatively surprised or in various other situations.
                </p>
                <hr />
                <img src={lekker} alt="lekker of mooi" />
                <p>Certain words might be used more broadly in one of the countries than in the other. When people in Belgium use the word "lekker (tasty)" they will basically always refer to food. Whereas in the Netherlands "lekker" can refer to almost any nice situation, such as "lekker weer (nice weather)", "een lekker weekend (a nice weekend)", etc.
                </p>
                <hr />
                <img src={tas} alt="een tas of een kopje koffie" />
                <p>Sometimes, the standard Dutch sounds too formal for many people. Officially, it is "een kop koffie (a cup of coffee)". But many people in Belgium would consider it to sound too official and they will use the non-standardized "een tas koffie". In Netherlands "een kop koffie" is used more broadly, though "een bakje koffie" or "een bakkie" is gaining ground.
                </p>
                <hr />
                <img src={tosti} alt="tosti of croque-monsieur" />
                <p>Belgium, and mainly certain dialects, might have way more influences from the French language. Flemish people will say "croque-monsieur" to a grilled cheese sandwich, whereas Dutch people will say "tosti". But sometimes the roles are reversed and you might hear Dutch people call orange juice "jus d'orange", where Flemish people will say "sinaasappelsap".
                </p>
                <hr />
                <img src={bank} alt="bank of zetel" />
                <p>With particular words, the meaning might be very similar yet slightly different. When Dutch people refer to a "bank", they mean a comfy sofa. Whereas for Flemish people that might sound very uncomfy, as a bank is a wooden structure that you'd find in a park (a bench). For a comfy sofa, they will rather use "zetel".
                </p>
                <hr />
                <img src={lopen} alt="lopen of hardlopen of rennen" />
                <p>Confusion can exist when Flemish and Dutch people talk to eachother about walking and running. When Dutch people use the word "lopen", they mean "walking". Flemish people use "lopen" as well, but will mean "running". When Flemish people "walk", they'd rather say "wandelen". So how do Dutch people say "running"? Well, they will use "hardlopen" or "rennen". Do you already see the confusion arising?
                </p>
                <hr />
                <img src={goesting} alt="goesting of trek of zin" />
                <p>When someone fancies food or something else, a standardized way would be to say "zin hebben in". But in the Netherlands many people might say "ik heb trek". An expression with a similar meaning in Flanders will be "ik heb goesting in...". Speakers might probably understand eachother, but just use different words to express the same.
                </p>
                <hr />
                <img src={poepen} alt="poepen" />
                <p>Probably one of the most famous differences between Dutch from the Netherlands and Belgium is the word "poepen". Using it appropriately can make a very big difference in what you are saying. When you use "poepen" in the Netherlands it means "to poop". Whereas in Belgium the same word (though it's non-standardized Dutch) means "to have sex". In Belgium your "poep" is your behind. Whereas in the Netherlands it is your poo. So be very careful when using it!
                </p>
            </StyledAbout>
            <Footer />
        </div >
    );
}

export default Differences;