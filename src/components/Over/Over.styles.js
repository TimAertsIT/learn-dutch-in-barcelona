import React from 'react';
import styled from 'styled-components';


export const StyledOverContainer = styled.div`
   background-color: #f9f9f9;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-top: 40px;
    text-align: center; // Center the content

    @media (min-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const StyledTitle = styled.h2`
    color: #191919;
    font-size: 1.5em;
    margin-bottom: 20px;
`;

export const StyledParagraph = styled.p`
color: #191919;
font-size: 1.1em;
line-height: 1.6;
margin-bottom: 20px;
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

        &:hover {
            background-color: #0f4e58;
        }
    }
`;