import React from "react";
import Modal from "react-modal";
import styled from "styled-components";
import { Route, withRouter } from "react-router-dom";
import Header from "./components/Reusables/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Reusables/Footer";
import "./App.css";

Modal.setAppElement("#root");

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      modal: false
    };
  }

  openModal = () => {
    this.setState({
      modal: true
    });
  };

  closeModal = e => {
    if (e.target.id !== "modal") {
      this.setState({
        modal: false
      });
    }
  };

  handleCloseModal = e => {
    e.stopPropagation();
    this.setState({ showModal: false });
  };

  render() {
    return (
      <Container>
        <BodyContainer>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Projects" component={Projects} />
          <Route exact path="/Contact" component={Contact} />
          <Footer />
        </BodyContainer>
      </Container>
    );
  }
}


const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  // max-width: 1200px;
  width: 100%;
  overflow-x:hidden;
  background: #F8F9F9;
  // background: #f2e7d9  
`; 

const BodyContainer = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  width: 100%;
  overflow-x:hidden;
`;

export default withRouter(App);
