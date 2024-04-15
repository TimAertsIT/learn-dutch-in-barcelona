import styled from 'styled-components';
import backgroundImage from '../../images/learn-dutch-with-tim-in-barcelona.jpg'

export const StyledHeader = styled.header`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0px;
       background: url(${backgroundImage}) no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        filter: blur(2px);
        z-index: -1;
    }

    &::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0px;
        background: rgba(0, 0, 0, 0.5); // adjust the last value as needed
        z-index: -1;
    }

    h1 {
        color: white; 
        font-size: 3em; 
        font-weight: bold;
        text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
        text-transform: uppercase;
        letter-spacing: 2px;
        font-family: 'Arial', sans-serif; 
        text-align: center;
        padding: 0 10px;
        margin-left: 8px;
        margin-right: 8px; 

        @media (max-width: 600px) {
            font-size: 2em;
        }
    }
`;

export const StyledContent = styled.div`
    text-align: center; // Center the content
    margin-top: 40px; // Add some spacing

    h2 {
        color: #1d7a85; // Your chosen color
        font-size: 1.5em; // Adjust as needed
        margin-bottom: 10px; // Add some spacing
        margin-top: 20px; 
        margin-left: 10px;
        margin-right: 10px; 
    }

  p {
        color: #1d7a85;
        font-size: 1.2em;
        margin-bottom: 20px;
    }

    /* Add the bottom line */
    &::before {
        content: "";
        display: block;
        width: 20%; // Adjust as needed
        height: 2px;
        background-color: #aeae; // Your chosen color
        margin: 0 auto; // Center horizontally
    }
`;