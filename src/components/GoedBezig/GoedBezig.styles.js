import styled from 'styled-components';

export const GoedBezigContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  margin: 0;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  margin: 0;
  perspective: 1000px;
  height: 60vh;
  width: 60vw;
  position: relative;
`;

export const CardInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;

  &:hover {
    transform: rotateY(180deg);
  }
`;

export const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 10px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const CardFront = styled(CardFace)`
  background-color: #F3F7F9;
  background: linear-gradient(45deg, #F3F7F9, #FF8C3F);
`;

export const CardBack = styled(CardFace)`
  background-color: #FF8C3F;
  transform: rotateY(180deg);
`;

export const Image = styled.img`
  width: 100%;
  height: 80%;
  object-fit: contain;
`;

export const Text = styled.p`
  font-size: ${props => props.primary ? '2vw' : '1.5vw'};
  font-weight: bold;
  text-align: center;
  margin: 10px 0;
`;








