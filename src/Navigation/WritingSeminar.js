import React, { Component } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom";

class WritingSeminar extends Component {
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
          Senior Writing Seminar
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>
            <Link to="/senior-writing-seminar/" className="text-dark">
              Reflections
            </Link>
          </DropdownItem>
          <DropdownItem>
            <Link className="text-dark" to="/senior-presentation/">
              Presentation
            </Link>
          </DropdownItem>
          <DropdownItem>
            <Link className="text-dark" to="/senior-paper/">
              Final Paper
            </Link>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default WritingSeminar;
