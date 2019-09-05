import React from "react";
import Modal from "react-modal";
import styled from "styled-components";
import { Route, withRouter } from "react-router-dom";
import Header from "./components/Reusables/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
// import Resume from "./components/Resume/Resume";
// import Posts from "./components/Posts/Posts";
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
          {/* <Route exact path="/Resume" component={Resume} />
          <Route exact path="/Posts" component={Posts} /> */}
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
  max-width: 100%;
  width: 100%;
  background: #F8F9F9;
  // background: #f2e7d9  
`; // antiquewhite^

const BodyContainer = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  width: 100%;
`;

// const Headline = styled.div`
//   display: flex;
//   position: relative;
//   /* padding-left: 0.5%; */
//   padding: 1% 2% 1% 2%;
//   font-size: 2.3rem;
//   justify-content: space-between;
//   border: solid green 1px;
// `;

// const HeaderDiv = styled.div`
//   display: flex;
// `;

export default withRouter(App);
