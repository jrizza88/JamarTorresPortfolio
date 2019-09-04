import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FeatureImg = styled.img`
  width: 100%;
  height: 100%;
  position: fixed;
  object-fit: cover;
`;

class Home extends React.Component {
  // state = {

  // }
  render() {
    return (
      <MainHomeContainer>
          <FeatureImg
            src={require("../../assets/JamarPortfolio.jpg")}
            alt="profilePhoto"
          />
        <HomeContainer>
          <AboutContainer>
            <PWording>
              My name is Jamar, and I like to create and contribute to the world
              of web development.
            </PWording>
            <Link to="/About" style={{ textDecoration: 'none' }}>Find out More!</Link>
          </AboutContainer>
        </HomeContainer>
      </MainHomeContainer>
    );
  }
}

const MainHomeContainer = styled.div`
  width: 100%;
`;

// const MainHomeContainer = styled.div`
//   width: 100%;
//   background-image: url(${HomeImage});
// `;

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
  justify-content: space-between;
  border-radius: 10%;
  padding: 2%;
  width: 50%;
  max-width: 250px;
  margin-top: 15%;
  margin-left: -15%;
`;

const PWording = styled.div`
  margin-left: 5%;
`;

export default Home;
