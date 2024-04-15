import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Roboto', sans-serif; // Use a font that fits an education website
    width: 100%;
    overflow-x: hidden; // Prevent horizontal scroll
  }
`;
