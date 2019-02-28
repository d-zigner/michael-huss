import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class Reflections extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardImg>
            <i class="fas fa-dna" />
          </CardImg>
          <CardBody>
            <CardTitle>Reflection 1</CardTitle>
            <CardText>
              DNA, RNA, and its derivatives are essential components in the
              biology of living things. All biological processes stem from a
              simple sequence contained in the DNA. The ability to utilize and
              manipulate the natural processes of DNA and RNA to advance modern
              medicine is a achievement of great significance. The topic of
              siRNA being used as a form of treatment called to me to be a great
              opportunity to further my knowledge of medicine starting from the
              smallest cellular process. Past courses that I have taken, that
              will no doubt provide useful insight into this topic, include
              Cellular Biology, Genetics, and Immunology. Dr. Steel is a
              lecturer of cell biology at Old Dominion university, a sponsor
              with a background covering the cellular components of biology
              would be beneficial to to write a paper concerning this topic. Dr.
              Steel is also an experienced researcher and has assisted in
              publishing several papers, therefore Dr. Steel would be a valuable
              contact in the future.
            </CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Reflections;
