import React from "react";
import styled from 'styled-components';

const Footer = props => <FooterContainer>Footer</FooterContainer>;

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

export default Footer;
