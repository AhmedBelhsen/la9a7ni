import styled from 'styled-components';
import AppHeader from './appHeader';

const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: #96959585;
`;

const NavLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  padding: 15px;

  &:hover {
    color: #706e6e;
  }
`;

// Usage in component
const Nav = () => (
  <>
  <AppHeader/>
  <NavContainer>
    <NavLink href="#">Find a Pet</NavLink>
    <NavLink href="#">How It Works</NavLink>
    <NavLink href="#">Pet Care & Health</NavLink>
    <NavLink href="#">Store</NavLink>
    <NavLink href="#">Adopting info</NavLink>
    <NavLink href="#">Donate</NavLink>
  </NavContainer>
  </>
);

export default Nav;
