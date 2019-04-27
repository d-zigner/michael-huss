import React, { Component } from "react";

class Resume extends Component {
  render() {
    return (
      <iframe
        height="1000vw"
        width="100%"
        src={process.env.PUBLIC_URL + "/resume.pdf#toolbar=0"}
        title="resume"
      />
    );
  }
}

export default Resume;
