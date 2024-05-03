import React from 'react';
import styled from 'styled-components';


export const ConversationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: #F3F7F9;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  margin: 50px;
  padding: 20px;
  border-radius: 10px;
`;

export const Avatar = styled.img`
  width: 100px;
  margin-top: 20px; 
  height: 100px;
  border-radius: 50%;
`;

export const Message = styled.p`
  color: #1d7a85;
  margin-top: 20px; 
  margin-bottom: 10px; 
  font-size: 20px; 
`;

export const BelgianAvatar = styled(Avatar)`
  background-color: #852500;
`;

export const DutchAvatar = styled(Avatar)`
  background-color: #65b7c3;
`;

export const Button = styled.button`
  margin: 10px 0;
  padding: 10px 20px;
  font-size: 16px;
  color: #FFFFFF;
  background-color: #FF8C3F;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #852500;
  }
`;

export const Title = styled.h1`
  color: #852500;
  margin-bottom: 5px; 
`;


