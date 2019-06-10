import React from "react";
import styled from 'styled-components';

const Footer = props => (
<FooterContainer>
    <CopyRight>©2019 Jamar Esai Torres</CopyRight>
</FooterContainer>
)

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    position:absolute;
    padding-bottom: 5%;
    left:15%;
    bottom:0;
    right:0;
    border: 2px solid purple;
`

const CopyRight = styled.p`
    float: left;
    font-size: .7rem;
    margin-top: 0;
`

export default Footer;
