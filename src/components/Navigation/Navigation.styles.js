import styled from 'styled-components';

export const NavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  position: sticky;
  top: 0;
  z-index: 9999;
  background: #1d7a85; /* Formal blue */
  color: white; /* White text color */

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const StyledLink = styled.a`
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  margin-right: 20px;
  font-weight: 600; /* Bold text */

  &:hover {
    color: #191919; /* Dark gray on hover */
  }

  &.home-link {
    margin-right: auto;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 15px;

    &.home-link {
      margin-right: 0;
      margin-top: 15px;
    }
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;



