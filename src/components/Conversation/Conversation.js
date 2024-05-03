import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Message, BelgianAvatar, DutchAvatar, Button, ConversationContainer, Title } from './Conversation.styles';
import dutchavatar from "../../images/dutchavatar.png";
import belgianavatar from "../../images/belgianavatar.png";

const Conversation = ({ belgianMessages, dutchMessages }) => {
    const [index, setIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        let timer;
        if (isPlaying && index < belgianMessages.length + dutchMessages.length - 1) {
            timer = setTimeout(() => setIndex(index + 1), 3000); // Change timing here
        }
        return () => clearTimeout(timer);
    }, [isPlaying, index, belgianMessages.length, dutchMessages.length]);

    const messages = [];
    for (let i = 0; i < Math.max(belgianMessages.length, dutchMessages.length); i++) {
        if (belgianMessages[i]) messages.push({ text: belgianMessages[i], Avatar: BelgianAvatar, avatar: belgianavatar, alt: "Belgian avatar" });
        if (dutchMessages[i]) messages.push({ text: dutchMessages[i], Avatar: DutchAvatar, avatar: dutchavatar, alt: "Dutch avatar" });
    }

    const message = messages[index];

    const handleNext = () => {
        if (index < messages.length - 1) {
            setIndex(index + 1);
        }
    };

    const handlePrev = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };

    return (
        <ConversationContainer>
            <Title>Conversation time!</Title>
            {message && (
                <>
                    <message.Avatar src={message.avatar} alt={message.alt} />
                    <Message>{message.text}</Message>
                </>
            )}
            <Button onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? "Pause" : "Start"}</Button>
            <Button onClick={handlePrev}>Previous</Button>
            <Button onClick={handleNext}>Next</Button>
        </ConversationContainer>
    );
};

export default Conversation;




