import React from "react";
import styled from 'styled-components';
import { Route, withRouter, NavLink } from "react-router-dom";
import Header from "./components/Reusables/Header";
import Footer from "./components/Reusables/Footer";
import "./App.css";

const App = () => {
  return (
      <Container>
        <Header />
          <BodyContainer>
          <Headline>Jamar Torres <br />Web Developer</Headline>
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
font-size: 3.5rem;
justify-content: flex-start;
width: 100%;
border: solid green 1px;
`

export default withRouter(App);
