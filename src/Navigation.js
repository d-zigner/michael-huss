import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavLink,
  Collapse
} from "reactstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Reflections from "./Reflections";
import Main from "./Main";
import ProfessionalExperience from "./Navigation/ProfessionalExperience";
import "./Navigation.css";

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar color="dark" className="navbar-dark navbar-expand-md">
            <NavbarBrand className="mr-4">
              <img
                className="brandLogo mr-3"
                alt="Portrait"
                src={process.env.PUBLIC_URL + "/brandLogo.webp"}
              />
              <span className="text-light">Michael Huss</span>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />

            <Collapse isOpen={this.state.isOpen} navbar>
              <Link to="/" className="nav-link text-light">
                Home
              </Link>
              <ProfessionalExperience />
              <NavLink className="nav-link text-light" href="#">
                Resume
              </NavLink>
              <NavLink className="nav-link text-light" href="#">
                Extracurriculars
              </NavLink>
              <NavLink className="nav-link text-light" href="#">
                Contact
              </NavLink>
            </Collapse>
          </Navbar>
          <Route exact path="/" component={Main} />
          <Route path="/reflections/" component={Reflections} />
        </div>
      </Router>
    );
  }
}

export default Navigation;
