import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Col,
  Row,
  Container,
  Button,
  UncontrolledCollapse
} from "reactstrap";
import Prompt from "./Prompt";

class Reflections extends Component {
  render() {
    return (
      <div>
        <Container className="mt-4">
          <Row className="pr-auto pl-auto justify-content-center">
            <Col xs="12">
              <Card>
                <CardImg
                  className="pt-2 pb-2"
                  src={process.env.PUBLIC_URL + "/dna-solid.svg"}
                  style={{ maxHeight: "64px", backgroundColor: "#3e4851" }}
                />
                <CardBody>
                  <CardTitle>
                    <Prompt title="Reflection 1">
                      With regard to your chosen seminar topic, what drew you to
                      that particular topic? In choosing this topic, which of
                      your previously taken courses do you anticipate will be
                      most helpful to you in completing your seminar project.
                      How did you choose your faculty sponsor? Do you plan to
                      develop a lasting relationship with your sponsor that will
                      help you as you transition from ODU to your next stage?
                    </Prompt>
                  </CardTitle>
                  <CardText>
                    &emsp;&emsp;DNA, RNA, and its derivatives are essential
                    components in the biology of living things. All biological
                    processes stem from a simple sequence contained in the DNA.
                    The ability to utilize and manipulate the natural processes
                    of DNA and RNA to advance modern medicine is a achievement
                    of great significance. The topic of siRNA being used as a
                    form of treatment called to me to be a great opportunity to
                    further my knowledge of medicine starting from the smallest
                    cellular process. Past courses that I have taken, that will
                    no doubt provide useful insight into this topic, include
                    Cellular Biology, Genetics, and Immunology.
                    <br />
                    <br />
                    &emsp;&emsp;Dr. Steel is a lecturer of cell biology at Old
                    Dominion university, a sponsor with a background covering
                    the cellular components of biology would be beneficial to to
                    write a paper concerning this topic. Dr. Steel is also an
                    experienced researcher and has assisted in publishing
                    several papers, therefore Dr. Steel would be a valuable
                    contact in the future.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Reflections;
