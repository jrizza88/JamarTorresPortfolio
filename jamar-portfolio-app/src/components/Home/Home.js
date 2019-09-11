import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Footer from "../Reusables/FooterHome";

const FeatureImg = styled.img`
  width: 100%;
  height: 100%;
  // z-index: 0;
  position: fixed;
  object-fit: cover;
`;

class Home extends React.Component {
  // state = {

  // }
  render() {
    return (
      <div>
          <FeatureImg
            src={require("../../assets/JamarPortfolio.jpg")}
            alt="profilePhoto"
          />
      <MainHomeContainer>
          {/* <FeatureImg
            src={require("../../assets/JamarPortfolio.jpg")}
            alt="profilePhoto"
          /> */}
        <HomeContainer>
          <AboutContainer>
            <PWording>
              My name is Jamar, and I like to create and contribute to the world
              of web development.
            </PWording>
            <Link to="/About" style={{ textDecoration: 'none', color: 'black', fontStyle: 'italic', fontWeight: 'bold', marginRight: "5%" }}>Check me out!</Link>
          </AboutContainer>
        </HomeContainer>
        <Footer />
      </MainHomeContainer>
      </div>
    );
  }
}

const MainHomeContainer = styled.div`
  width: 100%;
  // padding-bottom: 100vh;
  // marginTop: 10,
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
  z-index: 1;
  flex-direction: column;
  align-items: center;
  background: #FFCAD0;
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
  align-items: center;
`;


export default Home;
