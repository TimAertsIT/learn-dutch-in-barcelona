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

