import styled from 'styled-components';

export const ExerciseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 10px;
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
  color: #852500;
`;

export const Input = styled.input`
  margin-top: 20px;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #DDE7E9;
`;

export const Button = styled.button`
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


