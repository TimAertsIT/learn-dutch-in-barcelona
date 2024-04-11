// Verbs.styles.js
import styled from 'styled-components';

export const Card = styled.div`
  background-color: #1d7a85;
  color: #fff;
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  width: calc(100% / 3 - 80px); // Adjust the width here
  min-width: 300px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  color: #852500;
  font-size: 24px;
  font-weight: bold;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  font-weight: bold;
  margin: 10px 0;
`;

export const Pronoun = styled.div`
  color: #65b7c3;
  margin-right: 10px;
`;

export const Conjugation = styled.div`
  color: #ff8c3f;
  margin-left: 10px;
`;



