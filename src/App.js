import React, { Component } from "react";
import "./App.css";
import Navigation from "./Navigation.js";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Navigation />
      </Router>
    );
  }
}

export default App;
