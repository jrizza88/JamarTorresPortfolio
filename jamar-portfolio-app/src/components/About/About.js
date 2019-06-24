import React from "react";
import styled from "styled-components";

const About = () => (
  <AboutContainer>
    <AboutHeadline>
      I create for the web and love tech. Get to know me!
    </AboutHeadline>
    <AboutMiniContainer>
      <AboutDivs>
      <AboutMiniHeadline>
      Jamar as a developer
    </AboutMiniHeadline>
        Jamar is a passionate web developer with a strong interest in product
        management. He enjoys creating interactive and intuitive experiences. He
        believes having a strong front-end is central to any and every idea and
        product. He's most excited about creating and seeing a project through
        and looks forward to putting his vision (or yours!) into meaningful web
        applications. Resilience is key to Jamar, and he never gives up until he
        solves a problem. Whether this is through web development or life in
        general, he is always willing to take on different approaches.
      </AboutDivs>
      <AboutDivs>
      <AboutMiniHeadline>
      More about Jamar!
    </AboutMiniHeadline>
        Jamar Torres was born in Boston, MA. He graduated at Northeastern
        University with a BA in International Affairs. Jamar has extensive
        experience in international issues, travel and cultural understanding.
        He has completed a social enterprise program in India, spent time in the
        education field in Turkey, completed a dialogue program geared toward
        diplomacy and has worked for a student exchange program. Jamar currently
        works at the United Nations and is currently attending a 30 week
        immersive web development and computer science program at Lambda School.
        Currently, Jamar is looking to transition into the world of web
        development to jumpstart his next career endeavor.
      </AboutDivs>
    </AboutMiniContainer>
  </AboutContainer>
);

const AboutContainer = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
`;

const AboutMiniContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: 5%;
`;

const AboutHeadline = styled.h1`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 10px;
  font-size: 2rem;
`;

const AboutMiniHeadline = styled.h1`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 10px;
  font-size: 1.5rem;
`;

const AboutDivs = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5%;
`;

export default About;
