import React from 'react';
import { CollageContainer, ImageContainer, Image, Caption } from './ImageCollage.styles';

const ImageCollage = ({ images }) => (
    <CollageContainer>
        {images.map((image, index) => (
            <ImageContainer key={index}>
                <Image src={image.src} alt={image.caption} />
                <Caption>{image.caption}</Caption>
            </ImageContainer>
        ))}
    </CollageContainer>
);

export default ImageCollage;
