import React from 'react';
import styled from 'styled-components';
import blob from '../../images/blob.svg';
import overImage from '../../images/learn-dutch-with-tim-online-lessons.jpg';


export const StyledOverContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f9f9f9;
    margin-left: 50px;
    margin-right: 50px;
    margin-bottom: 50px; 
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-top: 40px;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        text-align: left;
    }
`;

export const StyledImage = styled.div`
    width: 100%;
    height: 500px;
    background-image: url(${overImage});
    background-position: center 25%; // This will position the image at the top
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px;
    margin-bottom: 20px; 

    @media (min-width: 768px) {
        width: 45%;
        margin-right: 5%;
        margin-bottom: 0px; 
    }

    @media (max-width: 768px) {
        width: 100%;
        height: 300px; 
    }

`;

export const StyledImageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 400px; // Set a specific height for the wrapper
    background: url(${blob}) no-repeat center center;
    background-size: cover;

    @media (min-width: 768px) {
        width: 45%;
        margin-right: 5%;
    }
`;

export const StyledContent = styled.div`
   display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    border: 5px solid #1d7a85; 
    border-radius: 10px; 
    background-color: #E5EDEE;
    font-size: 0.9em;

    @media (min-width: 768px) {
        width: 50%;
        font-size: 1em;
    }
`;

export const StyledTitle = styled.h2`
    color: #191919;
    font-size: 1.5em;
    margin-bottom: 20px;
    padding-top: 20px; 
`;

export const StyledList = styled.ul`
    color: #191919;
    font-size: 1.1em;
    line-height: 1.6;
    margin-bottom: 20px;
    list-style: none;
    padding-left: 20px; 
    padding-right: 20px; 
`;

export const StyledReadMoreButton = styled.div`
    margin-top: 20px;

    button {
        background-color: #1d7a85;
        color: white;
        border: none;
        font-size: 17px; 
        padding: 10px 20px;
        border-radius: 5px;
        margin-bottom: 20px; 
        cursor: pointer;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: #0f4e58;
        }
         @media (max-width: 768px) {
        margin-right: 5px; 
        margin-left: 5px; 
    }
    }
`;