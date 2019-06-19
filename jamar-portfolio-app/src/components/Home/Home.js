import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import HomeImage from "../../assets/JamarPortfolio.jpg"

const FeatureImg = styled.img`
  width: 100%;
  position: relative;
`;

class Home extends React.Component {
  // state = {

  // }
  render() {
    return (
      <MainHomeContainer>
        <HomeContainer>
          <FeatureImg
            src={require("../../assets/JamarPortfolio.jpg")}
            alt="profilePhoto"
          />
          <AboutContainer>
            <p>
              My name is Jamar, and I like to create and contribute to the world
              of web development.
            </p>
            <Link to="/About">Find out More!</Link>
          </AboutContainer>
        </HomeContainer>
      </MainHomeContainer>
    );
  }
}

const MainHomeContainer = styled.div`
width: 100%;
background-image: url(${HomeImage});
`

const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 3%;
  max-width: 100%;
  width: 100%;
`;

// const PhotoDiv = styled.section`
// background: cream;
// `

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: lavender;
  margin: 3%;
  padding: 2%;
  margin-bottom: 25%;
`;

export default Home;
