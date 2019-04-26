import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Col,
  Row,
  Container
} from "reactstrap";
import Prompt from "./Prompt";

var boxShadow = {
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
};

class Reflections extends Component {
  render() {
    return (
      <div>
        <Container className="mt-4">
          <Row className="pr-auto pl-auto justify-content-center">
            <Col xs="12">
              <Card className="mb-4" style={boxShadow}>
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
              <Card className="mb-4" style={boxShadow}>
                <CardImg
                  className="pt-2 pb-2"
                  src={process.env.PUBLIC_URL + "/dna-solid.svg"}
                  style={{ maxHeight: "64px", backgroundColor: "#3e4851" }}
                />
                <CardBody>
                  <CardTitle>
                    <Prompt title="Reflection 2">
                      With regards to your chosen seminar topic:
                      <ol>
                        <li>
                          What implications does it have for society in general,
                          not just for biologists like yourselves?
                        </li>
                        <li>
                          Do you also see similar concerns, or thinking about
                          broader impacts, in the articles you've been reading?
                        </li>
                        <li>
                          Do expert scientists in the various fields that you've
                          encountered seem to be thinking about the "big
                          picture"? Give an example of such a case.
                        </li>
                      </ol>
                    </Prompt>
                  </CardTitle>
                  <CardText>
                    &emsp;&emsp;Like most topics in human biology research,
                    there is heavy implications for the research to be utilized
                    in the field of medicine. The advancement of medicine
                    benefits society by developing new treatments for diseases
                    that affect everyone in our society. In the case of gene
                    therapy the benefits extend to a class of disorders that has
                    not seen a effective treatment until recently, and this
                    would be exciting for anyone, no only biologists.
                    <br />
                    <br />
                    &emsp;&emsp;In research dealing with biological sciences and
                    medicine there is always a concern for safety, and most
                    research has placed patient safety as their main concern.
                    This makes sense as any scientific findings in the field of
                    gene therapy would not provide any benefit to patients if it
                    placed unnecessary risk on their health or well being.
                    <br />
                    <br />
                    &emsp;&emsp;Scientists that are doing research in gene
                    therapy have a similar goal in mind, creating personalized
                    treatments for diseases that originate within our own genes.
                    Because genetic disorders and cancers are caused by
                    abnormalities in the genetics of our bodies’ cells there has
                    been a push to search for a treatment that would replace the
                    need for harsh chemotherapy and immunosuppression. An
                    example of this is the recent development of CAR T cells in
                    the treatment of B cell lymphomas and leukemias.
                  </CardText>
                </CardBody>
              </Card>
              <Card className="mb-4" style={boxShadow}>
                <CardImg
                  className="pt-2 pb-2"
                  src={process.env.PUBLIC_URL + "/dna-solid.svg"}
                  style={{ maxHeight: "64px", backgroundColor: "#3e4851" }}
                />
                <CardBody>
                  <CardTitle>
                    <Prompt title="Reflection 3">
                      As we near the end of the semester, reflect on your
                      project for this course and discuss how your thinking has
                      evolved over the semester on your:{" "}
                      <ol>
                        <li>
                          topic area - how has your understanding of the topic
                          evolved? what most surprised you as you dug into your
                          topic area - did your thinking about the topic area
                          change over the semester - give an example or two
                        </li>

                        <li>
                          your perception of your writing ability - what did you
                          discover about your talents as a writer in the
                          discipline of biology?
                        </li>
                        <li>
                          suppose you had 2 minutes to give someone an "elevator
                          talk" - a short, descriptive summary of what your
                          project was about and what important lessons you
                          learned from it - what would you say?
                        </li>
                      </ol>
                    </Prompt>
                  </CardTitle>
                  <CardText>
                    &emsp;&emsp;My understanding of gene therapy has increased
                    significantly, as I started with basically no knowledge of
                    the topic before writing this paper. What surprised me the
                    most about the topic of gene therapy is the use of viral
                    vectors that essentially lacked any pathological effects but
                    was engineered to induce gene expression in target tissues.
                    <br />
                    <br />
                    &emsp;&emsp;I have always found writing assignments to be a
                    daunting task especially assignments that require research,
                    there seems to be so much information that I must read
                    through before I can write a cohesive paper. But I have
                    discovered that setting time aside to read through the
                    source material is perhaps as important as writing the paper
                    itself.
                    <br />
                    <br />
                    &emsp;&emsp;To put gene therapy simply, it's all about
                    engineering viruses to carry genes into your cells to
                    replace or remove mutated genes. These viruses are safe and
                    low risk and have seen therapeutic effects in studies with
                    patients that suffer from Muscular Dystrophy and a form of
                    genetic blindness.
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
