// StyledCard.js
import styled from 'styled-components';

export const StyledCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

export const StyledCard = styled.div`
    width: 80%;
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    text-align: center;
    margin-right: 30px;
    margin-left: 30px; 

    img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 10px;
        margin-bottom: 20px; 
    }

    h2 {
        color: #191919;
        font-size: 1.5em;
        margin-bottom: 20px;
    }

    p {
        color: #191919;
        font-size: 1.1em;
        line-height: 1.6;
        margin-bottom: 20px;
    }

    @media (min-width: 768px) {
        width: calc(100% / 3 - 20px);
        margin-right: 30px;
        margin-left: 30px; 
    }
`;

export const StyledReadMoreButton = styled.div`
    margin-top: 20px;

    button {
        background-color: #1d7a85;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        font-size: 1em; 

        &:hover {
            background-color: #0f4e58;
        }
    }
`;

