import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <HomeBodyContainer>
        <FeatureImg
          src={require("../../assets/JamarPortfolio.jpg")}
          alt="profilePhoto"
        />
          <HomeContainer>
            <AboutContainer>
              <PWording>
                My name is Jamar, and I like to create and contribute to the
                world of web development.
              </PWording>
              <Link
                to="/About"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontStyle: "italic",
                  fontWeight: "bold",
                  marginRight: "5%"
                }}
              >
                Check me out!
              </Link>
            </AboutContainer>
          </HomeContainer>
      </HomeBodyContainer>
    );
  }
}



const FeatureImg = styled.img`
  width: 100%;
  height: 100vh;
  position: static;
  object-fit: cover;
`;

const HomeBodyContainer = styled.div`
  display: flex;
`;

const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 3%;
`;

const AboutContainer = styled.div`
  display: flex;
  position: absolute;
  opacity: 0.75;
  flex-direction: column;
  align-items: center;
  background: #ffcad0;
  justify-content: space-between;
  border-radius: 10%;
  padding: 2%;
  width: 50%;
  /* font-weight: 600; */
  max-width: 250px;
  margin-top: 15%;
  margin-right: 125%;

  @media (max-width:700px) {
    width: 100%;
    align-items: flex-start;
    max-width: 200px;
    margin-right: block;
    // margin-left: 20%;
  }
`;

const PWording = styled.div`
  margin-left: 5%;
  align-items: center;
`;

export default Home;
