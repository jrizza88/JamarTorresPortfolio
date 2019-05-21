import React from "react";
import { Route, withRouter, NavLink } from "react-router-dom";
import Header from "./components/Reusables/Header";
import Footer from "./components/Reusables/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      Jamar Torres Portfolio
      <Footer />
    </div>
  );
};

export default App;
