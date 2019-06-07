import React from "react";
import styled from "styled-components";
import { Route, NavLink } from "react-router-dom";

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: flex-start;
  border-right: 1px solid black;
  width: 15%;
  height: 100vh;
`;

const NavContainer = styled.div`
display: flex;
margin-top: 20%;
flex-direction: column;
align-items: flex-start;
`

const NavDivs = styled.div`
display: flex;
padding: 10% 0 10% 1%;
font-size: 2rem;
`

const Header = props => (
  <HeaderContainer>
   <NavContainer>
      <NavLink to="/">
        <NavDivs>Home</NavDivs>
      </NavLink>
        <NavDivs>About</NavDivs>
        <NavDivs>Projects</NavDivs>
        <NavDivs>Resume</NavDivs>
        <NavDivs>Posts</NavDivs>
    </NavContainer>
  </HeaderContainer>
);

// class Header extends React.Component {
//   constructor (props) {
//     super (props)
//   }
//   render () {
//     <div>
//       Header
//     </div>
//   }
// }

export default Header;
