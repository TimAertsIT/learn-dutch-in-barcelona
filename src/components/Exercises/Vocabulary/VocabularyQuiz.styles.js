import styled from 'styled-components';

export const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  padding: 20px;
  border-radius: 10px;
  background-color: #F3F7F9;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  @media (min-width: 768px) {
        margin-right: 50px; 
        margin-left: 50px; 
    }
`;

export const Word = styled.h2`
  color: #1D7A85;
  margin-top: 20px; 
  margin-bottom: 20px; 
`;

export const WordTitle = styled.h1`
  color: #852500;
  margin-bottom: 5px; 
`;

export const WordSubTitle = styled.p`
  color: #852500;
`;


export const Message = styled.p`
  margin-top: 20px;
  font-size: 18px;
  color: ${props => props.isCorrect ? '#008000' : '#FF0000'};
`;

export const Option = styled.button`
  margin: 5px 0;
  padding: 10px 20px;
  font-size: 16px;
  color: #FFFFFF;
  background-color: #65B7C3;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #1D7A85;
  }
`;

export const NextButton = styled.button`
  margin: 20px 0;
  padding: 10px 20px;
  font-size: 16px;
  color: #FFFFFF;
  background-color: #FF8C3F;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #852500;
  }
`;


