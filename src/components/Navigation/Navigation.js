import { NavigationWrapper, StyledDiv, StyledLink } from './Navigation.styles';
import { Link } from 'react-router-dom';

const Navigation = () => {

    return (
        <NavigationWrapper>
            <StyledLink as={Link} to="/" className="home-link">Homepage</StyledLink>
            <StyledDiv>
                <StyledLink as={Link} to="/about">About</StyledLink>
            </StyledDiv>
        </NavigationWrapper>
    );
}

export default Navigation;