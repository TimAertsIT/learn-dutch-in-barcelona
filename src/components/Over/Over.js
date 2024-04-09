import { StyledOverContainer, StyledReadMoreButton, StyledTitle, StyledParagraph } from "./Over.styles";
import { Link } from 'react-router-dom'; // Import Link for routing

const Over = () => {
    return (

        <StyledOverContainer>
            <StyledTitle>About</StyledTitle>
            <StyledParagraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
            </StyledParagraph>
            <StyledParagraph>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </StyledParagraph>
            <StyledReadMoreButton>
                <Link to="/about"> {/* Link to your about.js page */}
                    <button>Read More</button>
                </Link>
            </StyledReadMoreButton>
        </StyledOverContainer>
    );
};

export default Over;