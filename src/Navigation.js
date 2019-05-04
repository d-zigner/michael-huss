import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavLink,
  Collapse
} from "reactstrap";
import { Route, Link } from "react-router-dom";
import Reflections from "./Reflections";
import PowerPoint from "./PowerPoint";
import Resume from "./Resume";
import Paper from "./Paper";
import Main from "./Main";
import ProfessionalExperience from "./Navigation/ProfessionalExperience";
import WritingSeminar from "./Navigation/WritingSeminar";
import "./Navigation.css";
import FundBioMol from "./FundBioMol";

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
            <WritingSeminar />
            <Link
              to="/resume"
              className="text-light nav-link"
              style={{ textDecoration: "none" }}
            >
              Resume
            </Link>
            <NavLink className="text-light" href="#">
              Extracurriculars
            </NavLink>
            <NavLink className="text-light" href="#">
              Contact
            </NavLink>
          </Collapse>
        </Navbar>
        <Route exact path="/" component={Main} />
        <Route path="/biology-course-work/" component={FundBioMol} />
        <Route path="/senior-writing-seminar/" component={Reflections} />
        <Route path="/senior-presentation/" component={PowerPoint} />
        <Route path="/senior-paper/" component={Paper} />
        <Route path="/resume" component={Resume} />
      </div>
    );
  }
}

export default Navigation;
