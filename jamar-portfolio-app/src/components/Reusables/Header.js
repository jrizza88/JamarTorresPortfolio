import React from "react";
import styled from "styled-components";
import Home from "../Home/Home";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Resume from "../Resume/Resume";
import Posts from "../Posts/Posts";
import { NavLink } from "react-router-dom";

const HeaderContainer = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: flex-start;
  border-right: 1px solid black;
  width: 15%;
  height: 100vh;
  text-decoration: none;
`;

const NavContainer = styled.div`
  display: flex;
  margin-top: 20%;
  flex-direction: column;
  align-items: flex-start;
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const NavDivs = styled.div`
  display: flex;
  padding: 10% 0 10% 1%;
  font-size: 2rem;
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const Header = props => (
  <HeaderContainer>
    <NavContainer>
      <NavLink to="/" component={Home}>
        <NavDivs>Home</NavDivs>
      </NavLink>
      <NavLink to="/About" component={About}>
        <NavDivs>About</NavDivs>
      </NavLink>
      <NavLink to="/Projects" component={Projects}>
        <NavDivs>Projects</NavDivs>
      </NavLink>
      <NavLink to="/Resume" component={Resume}>
        <NavDivs>Resume</NavDivs>
      </NavLink>
      <NavLink to="/Posts" component={Posts}>
        <NavDivs>Posts</NavDivs>
      </NavLink>
    </NavContainer>
  </HeaderContainer>
);

export default Header;
