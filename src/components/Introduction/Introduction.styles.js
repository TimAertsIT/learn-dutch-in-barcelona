import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
`;

export const StyledIntroduction = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(45deg, #f9f9f9, #e8e8e8);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    text-align: center;
    animation: ${fadeIn} 2s ease-in-out;
`;

export const StyledTitle = styled.h2`
    color: #191919;
    font-size: 1.5em;
    margin-bottom: 20px; 
    margin-top: 20px;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const StyledDescription = styled.p`
    color: #191919;
    font-size: 1.1em;
    line-height: 1.6;
    margin-bottom: 20px;
    text-align: justify;
    border-left: 3px solid #191919;
    padding-left: 10px;
`;

export const StyledImage = styled.img`
    width: 30%;
    height: auto;
    border-radius: 20%;
    object-fit: cover;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
    &:hover {
        transform: scale(1.1);
    }
`;

