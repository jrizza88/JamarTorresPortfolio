import React from "react";
import styled from "styled-components";

class Home extends React.Component {
  // state = {

  // }
  render() {
    return (
      <HomeContainer>
        <img
          src="https://media.licdn.com/dms/image/C4D03AQHUsdqjuiSVNg/profile-displayphoto-shrink_200_200/0?e=1565827200&v=beta&t=lJaIJKdlE1RYhq3lTWTm_un-LXs09ff3mbg0176KeBw"
          alt="profilePhoto"
        />
        <AboutContainer>
          <p>
            My name is Jamar, and I like to create and contribute to the world
            of web development.
          </p>
          <div>Find out More!</div>
        </AboutContainer>
      </HomeContainer>
    );
  }
}

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
  background: lavender;
  margin: 3%;
  padding: 2%;
`;

export default Home;
