import React from "react";
import styled from "styled-components";
import { Route, NavLink } from "react-router-dom";

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  margin-top: 2.5%;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: flex-start;
  border-right: 1px solid black;
  width: 15%;
  height: 100vh;
`;

const Header = props => (
  <HeaderContainer>
    <div>Home</div>
    <div>About me</div>
    <div>Projects</div>
    <div>Resume</div>
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
