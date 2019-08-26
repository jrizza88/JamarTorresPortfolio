import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import HomeImage from "../../assets/JamarPortfolio.jpg";

const FeatureImg = styled.img`
  width: 100%;
  position: fixed;
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
          {/* <img
            src={require("../../assets/JamarPortfolio.jpg")}
            alt="profilePhoto"
            class
          /> */}
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
`;

const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 3%;
  max-width: 100%;
  width: 100%;
`;

const AboutContainer = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  background: lavender;
  border-radius: 10%;
  padding: 2%;
  width: 50%;
  max-width: 250px;
  margin-top: 20%;
  margin-left: -15%;
`;

export default Home;
