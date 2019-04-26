import React, { Component } from "react";
import "./App.css";
import Navigation from "./Navigation.js";
import { HashRouter as Router } from "react-router-dom";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="d-flex flex-column h-100">
          <Navigation className="flex-shrink-1" />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
