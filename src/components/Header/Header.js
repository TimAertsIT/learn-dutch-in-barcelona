import { StyledHeader, StyledContent } from "./Header.styles";

const Header = () => {
    return (
        <div>
            <StyledHeader>
                <h1>Learn Dutch with Tim</h1>
            </StyledHeader>
            <StyledContent>
                <h2>Learn Dutch from a native Belgian Dutch-speaker</h2>
                <p>In Barcelona or online</p>
            </StyledContent>
        </div>
    );
};

export default Header;