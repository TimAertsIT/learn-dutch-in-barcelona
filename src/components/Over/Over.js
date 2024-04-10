import { StyledOverContainer, StyledReadMoreButton, StyledTitle, StyledImage, StyledContent, StyledList, StyledImageWrapper } from "./Over.styles";
import { Link } from 'react-router-dom'; // Import Link for routing
import overImage from '../../images/learn-dutch-with-tim-online-lessons.jpg'

const Over = () => {
    return (
        <StyledOverContainer>
            <StyledImage />
            <StyledContent>
                <StyledTitle>About</StyledTitle>
                <StyledList>
                    <li>🌐 Online via videoconference or presential in Barcelona</li>
                    <li>🎓 Interactive and with free access to online learning material</li>
                    <li>👨‍🏫 Experienced and patient native Dutch/Flemish teacher</li>
                    <li>👤 Personalized, 1-to-1 classes</li>
                </StyledList>
                <StyledReadMoreButton>
                    <Link to="/about">
                        <button>Get to know more</button>
                    </Link>
                </StyledReadMoreButton>
            </StyledContent>
        </StyledOverContainer>
    );
};

export default Over;