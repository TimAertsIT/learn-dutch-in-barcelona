import styled from 'styled-components';

export const VocabularyList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 80%;
  margin: auto;
  background-color: #F3F7F9;
  border-radius: 15px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const VocabularyItem = styled.li`
  border-bottom: 1px solid #DDE7E9;
  background-color: #FFFFFF;
  padding: 12px;
  text-align: center;
  font-size: 18px;
  color: #852500;
  width: 45%;
  margin-bottom: 10px;

  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background-color: #FF8C3F;
    color: #FFFFFF;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Title = styled.h2`
  text-align: center;
  color: #852500;
  margin: 40px 10px;
`;

export const Separator = styled.hr`
  border: none;
  height: 1px;
  background-color: #852500;
  margin: 40px auto;
  width: 70%;
`;
