// VerbExercise.styles.js
import styled from 'styled-components';

export const ExerciseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
  padding: 20px;
  background-color: #1d7a85;
  color: #fff;
  border-radius: 10px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  width: 80%; // Adjust the width here
  min-width: 300px;

  @media (max-width: 600px) {
    width: 80%;
  }
`;

export const Question = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  color: #852500;
  font-size: 28px; // Make the font size a bit bigger
  font-weight: bold;
`;

export const Input = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  font-size: 20px; // Make the font size a bit bigger
`;

export const Button = styled.button`
  margin: 10px;
  padding: 10px 20px;
  background-color: #65b7c3;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 20px; // Make the font size a bit bigger
  cursor: pointer;

  &:hover {
    background-color: #ff8c3f;
  }
`;

export const Feedback = styled.p`
  margin-top: 20px;
  font-size: 22px; // Make the font size a bit bigger
  font-weight: bold;
`;



