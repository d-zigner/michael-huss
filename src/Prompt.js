import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import {
  UncontrolledTooltip,
  Collapse,
  Card,
  CardBody,
  CardText
} from "reactstrap";

class Prompt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      status: (
        <FontAwesomeIcon
          className="ml-4"
          id={`prompt-${this.props.number}-collapse`}
          icon={faAngleRight}
        />
      )
    };
  }

  toggle = () => {
    this.setState({
      collapse: !this.state.collapse,
      status: (
        <FontAwesomeIcon
          className="ml-4"
          id={`prompt-${this.props.number}-collapse`}
          icon={this.state.collapse ? faAngleRight : faAngleDown}
        />
      )
    });
  };

  render() {
    return (
      <div>
        <div style={{ width: "100%" }} onClick={this.toggle}>
          <p className="lead">
            {this.props.title}
            {this.state.status}
          </p>
          <UncontrolledTooltip
            placement="right"
            target={`prompt-${this.props.number}-collapse`}
          >
            {this.state.collapse ? "Close" : "Open"} the prompt text
          </UncontrolledTooltip>
        </div>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              <CardText>
                <i style={{ fontSize: "smaller" }}>{this.props.children}</i>
              </CardText>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default Prompt;
