import styled from 'styled-components';

export const StyledAbout = styled.div`
    background-color: #f5f5f5; /* Light grey */
    color: #333; /* Dark grey text color */
    padding: 20px;
    font-size: 1em;
    line-height: 1.6;
    border-radius: 10px;
    margin: 20px;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;

    h1 {
        color: #1d7a85; /* Formal blue */
        font-size: 2em;
        text-align: center;
        margin-bottom: 20px;
    }

    p {
        margin-bottom: 20px;
        text-align: justify;
        text-justify: inter-word;
    }

    img {
        width: 100%;
        max-width: 300px;
        max-height: 400px;
        border: 2px solid #1d7a85;
        height: auto;
        border-radius: 10px;
        margin-bottom: 20px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        object-fit: cover;
        object-position: 0 17%;
    }

      hr {
        border: 0;
        height: 1px;
        background: #333; /* Dark grey color similar to the text color */
        width: 60%; /* Cover 60% of the page */
        margin: 20px auto; /* Center the divider and add some margin underneath */
    }
;

    @media (max-width: 768px) {
        img {
            max-width: 100%;
            max-height: 400px;
        }
    }
    @media (width: 600px) and (height: 800px) {
        img {
            max-height: 600px;
        }
    }
`;
