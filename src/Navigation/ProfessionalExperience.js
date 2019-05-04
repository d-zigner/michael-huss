import React, { Component } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom";

class ProfessionalExperience extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle className="btn-dark" caret>
          Professional Experience
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>
            <Link className="text-dark" to="/biology-course-work/">
              Biology Course Work
            </Link>
          </DropdownItem>
          <DropdownItem>Osteology Internship</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default ProfessionalExperience;
