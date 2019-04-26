import React, { Component } from "react";
import { Jumbotron } from "reactstrap";
import "./Main.css";

class Main extends Component {
  render() {
    return (
      <div>
        <Jumbotron id="mainJumbotron">
          <div className="d-flex">
            <div className=" ml-4 flex-grow-1">
              <h1 className="display-2">Michael Huss</h1>
              <h1 className="display-4" style={{ fontSize: "2rem" }}>
                Biology Student
              </h1>
            </div>
            <img
              src={process.env.PUBLIC_URL + "/jumbotron.svg"}
              alt="Science Rules"
              className="mr-4 jumboLogo"
            />
          </div>
        </Jumbotron>
        <div
          className="mb-4 ml-auto mr-auto col-md-6 text-left"
          style={{ fontSize: "1.6rem" }}
        >
          I am a currently a student at <em>Old Dominion University</em>,
          graduating with a Bachelors in Biological Studies in 2019.
          <p />
          During my time at Old Dominion University I dedicated most of my time
          to the study of Human Anatomy and related biological sciences.
          <p />I plan to continue my studies by enrolling into medical school
        </div>
      </div>
    );
  }
}

export default Main;
