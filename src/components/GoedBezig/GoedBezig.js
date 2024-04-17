import React from 'react';
import { GoedBezigContainer, Card, CardInner, CardFront, CardBack, Image, Text } from './GoedBezig.styles';

const GoedBezig = ({ text, image }) => (
    <GoedBezigContainer>
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





