import React from "react";
import styled from "styled-components";
import { Route, withRouter } from "react-router-dom";
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
        <Headline>
          <HeaderDiv>Jamar Torres</HeaderDiv>
          <HeaderDiv>Menu</HeaderDiv>
        </Headline>
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
`;
const BodyContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 20%;
  max-width: 100%;
  width: 90%;
`;

const Headline = styled.div`
  display: flex;
  position: relative;
  /* padding-left: 0.5%; */
  padding: 1% 0 1% 0.5%;
  font-size: 2.3rem;
  justify-content: space-between;
  width: 100%;
  border: solid green 1px;
`;

const HeaderDiv = styled.div`
  display: flex;
`;

export default withRouter(App);
