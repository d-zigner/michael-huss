import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import Licenses from "./Licenses";

class Footer extends Component {
  render() {
    return (
      <div className="mt-auto py-3">
        <Route path="/licenses/" component={Licenses} />

        <footer
          className="footer"
          style={{
            position: "fixed",
            bottom: 0,
            width: "100%",
            height: "60px",
            lineHeight: "60px",
            marginTop: "-50px",
            backgroundColor: "#f5f5f5"
          }}
        >
          <Container>
            <Row className="justify-content-center">
              <Col md="auto">
                <Link to="/licenses/">License</Link>
              </Col>
              <Col md="auto" className="text-muted">
                &copy; Michael Huss, 2019
              </Col>
            </Row>
          </Container>
        </footer>
      </div>
    );
  }
}

export default Footer;
