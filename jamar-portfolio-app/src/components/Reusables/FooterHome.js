import React from "react";
import styled from "styled-components";

const FooterHome = props => (
  <FooterContainer>
    <CopyRight>©2019 Jamar Esai Torres</CopyRight>
  </FooterContainer>
);

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  position: fixed;
  padding-top: 4.5%
  padding-left: 2.3%;
  padding-bottom: 4%;
  // top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #102542;
`;

const CopyRight = styled.p`
  float: left;
  font-size: 1rem;
  margin-top: 0;
  color: #fff;
`;

export default FooterHome;
