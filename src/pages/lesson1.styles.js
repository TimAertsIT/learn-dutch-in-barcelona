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
  margin: 1em 0;
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
  justify-content: flex-start; // Adjust the justify-content here

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
  width: 85%;
  background-color: #65b7c3;
  padding: 20px;
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
  line-height: 1.5;
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
  margin-bottom: 10px;
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
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1d7a85;
  }
`;

export const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;


