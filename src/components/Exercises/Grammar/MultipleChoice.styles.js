
import styled from 'styled-components';

export const ExerciseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px auto;
  padding: 20px;
  background-color: #1d7a85;
  color: #fff;
  border-radius: 10px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  width: 80%;
  min-width: 300px;

  @media (max-width: 600px) {
    width: 80%;
  }
`;

export const Title = styled.h1`
  text-align: center;
  margin-left: auto;
  margin-right: auto; 
  color: #fff; // Change this to match your design
  font-size: 32px; // Change this to match your design
  margin-top: 30px; 
  margin-bottom: 30px; // Change this to match your design
`;

export const StickyDiv = styled.div`
  position: -webkit-sticky; // for Safari
  position: sticky;
  top: 60px;
  background-color: #1d7a85;
  z-index: 1000;
  @media (max-width: 600px) {
    position: relative;
    top: 0px; // Not sticky on small screens
  }
`;

export const Question = styled.h2`
  margin-bottom: 20px;
  margin-left: 20px; 
  text-align: center;
  color: #852500;
  font-size: 28px;
  font-weight: bold;
`;

export const Input = styled.input`
  margin-bottom: 20px;
  margin-right: 10px; 
  padding: 10px;
  font-size: 20px;
`;

export const Button = styled.button`
  margin: 10px auto;
  padding: 10px 20px;
  background-color: #65b7c3;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    background-color: #ff8c3f;
  }
`;

export const Feedback = styled.p`
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto; 
  font-size: 22px;
  font-weight: bold;
   display: flex;
  justify-content: center;
`;

export const OptionLabel = styled.label`
  display: block;
  margin: 10px 10px;
`;


