import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export const StyledQuestion = styled.p`
  font-size: 1.5em;
  text-align: center;
  color: #1d7a85;
  animation: 2s ${fadeIn} ease-out;
  border-left: 6px solid #1d7a85;
  background-color: #f9f9f9;
  margin: 1em 10px;
  padding: 1em;
  position: relative;
  &:before {
    content: open-quote;
    font-size: 4em;
    position: absolute;
    left: 10px;
    top: -10px;
  }
  &:hover::after {
    content: attr(data-translation);
    color: #FF8C3F;
  }
`;

export const LessonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around; 

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const TitleText = styled.h2`
  text-align: center;
  color: #852500;
  margin: 40px 0;
`;

export const Separator = styled.hr`
  border: none;
  height: 1px;
  background-color: #852500;
  margin: 40px auto;
  width: 70%;
`;

export const GrammarBox = styled.div`
  width: 80%;
  background-color: #65b7c3;
  padding: 40px;
  margin: auto; 
  box-sizing: border-box;
  color: #fff;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const GrammarTitle = styled.h2`
  font-size: 2em;
  color: #852500;
  margin-bottom: 10px;
  text-align: center;
`;

export const GrammarParagraph = styled.p`
  font-size: 1.2em;
  line-height: 1.0;
  margin-bottom: 10px;
  padding: 0 30px;
`;

export const Highlight = styled.span`
  color: #1d7a85;
  font-weight: bold;
`;
export const GrammarListItem = styled.li`
  font-size: 1.2em;
  line-height: 1.5;
  margin-bottom: 5px;
  padding-left: 30px;
  position: relative;
  list-style: none; 

  &:before {
    content: "•";
    position: absolute;
    left: 0;
    color: #ff8c3f;
  }
`;

export const StyledLink = styled.a`
  display: inline-block;
  background-color: #ff8c3f;
  color: #fff;
  text-decoration: none;
  padding: 15px 30px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin: 20px auto;
  font-size: 1.2em;
  width: 90%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1d7a85;
  }
   @media (max-width: 768px) {
        width: 85%;
    }
`;

export const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StyledStory = styled.div`
    background-color: #f5f5f5; /* Light grey */
    color: #333; /* Dark grey text color */
    padding: 20px;
    font-size: 1em;
    line-height: 1.6;
    border-radius: 10px;
    margin: 20px;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;

    h1 {
        color: #1d7a85; /* Formal blue */
        font-size: 2em;
        text-align: center;
        margin-bottom: 20px;
    }

    p {
        margin-bottom: 20px;
        text-align: justify;
        text-justify: inter-word;
    }

    img {
        width: 100%;
        max-width: 300px;
        max-height: 400px;
        border: 2px solid #1d7a85;
        height: auto;
        border-radius: 10px;
        margin-bottom: 20px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        object-fit: cover;
        object-position: 0 17%;
    }

    @media (max-width: 768px) {
        img {
            max-width: 100%;
            max-height: 200px;
        }
    }
    @media (width: 600px) and (height: 800px) {
        img {
            max-height: 600px;
        }
    }
`;


