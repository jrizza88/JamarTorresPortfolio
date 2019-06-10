import React from "react";
import styled from 'styled-components';
import { Route, withRouter, NavLink } from "react-router-dom";
import Header from "./components/Reusables/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import Posts from "./components/Posts/Posts";
import Footer from "./components/Reusables/Footer";
import "./App.css";

const App = () => {
  return (
      <Container>
        <Header />
          <BodyContainer>
            <Headline>Jamar Torres <br />Web Developer</Headline>
            <Route exact path="/" component={Home} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Projects" component={Projects} />
            <Route exact path="/Resume" component={Resume} />
            <Route exact path="/Posts" component={Posts} />
            <Footer />
        </BodyContainer>
      </Container>
  );
};

const Container = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
max-width: 100%;
width: 100%;
`
const BodyContainer = styled.section`
display: flex;
flex-direction: column;
margin-left: 20%;
max-width: 100%;
width: 90%;
`

const Headline = styled.div`
display: flex;
position: relative;
font-size: 2.3rem;
justify-content: flex-start;
width: 100%;
border: solid green 1px;
`

export default withRouter(App);
