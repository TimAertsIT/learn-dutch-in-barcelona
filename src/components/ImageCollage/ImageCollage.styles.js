import styled from 'styled-components';

export const CollageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 20px 0;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  margin: 10px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);

  &:hover img {
    transform: scale(1.1);
  }

  &:hover div {
    opacity: 1;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  max-height: 35vh; // Limit the height to 50% of the viewport height
  object-fit: cover; // Resize the image to fit the container without distorting the aspect ratio
  transition: transform 0.5s ease;
`;

export const Caption = styled.div`
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  color: #f1f1f1;
  width: 100%;
  padding: 10px;
  text-align: center;
  transition: opacity 0.5s ease;
  opacity: 0;
`;
