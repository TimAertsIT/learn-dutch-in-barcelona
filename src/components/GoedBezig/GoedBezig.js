import React from 'react';
import { GoedBezigContainer, GifContainer, Gif, Card, CardInner, CardFront, CardBack, Image, Text } from './GoedBezig.styles';

const GoedBezig = ({ gif, text, image }) => (
    <GoedBezigContainer>
        <GifContainer>
            <Gif src={gif} alt="Goed Bezig Gif" />
        </GifContainer>
        <Card>
            <CardInner>
                <CardFront>
                    <Text primary>{text.dutch}</Text>
                    <Text>{text.english}</Text>
                </CardFront>
                <CardBack>
                    <Image src={image} alt="Goed Bezig Image" />
                </CardBack>
            </CardInner>
        </Card>
    </GoedBezigContainer>
);

export default GoedBezig;




