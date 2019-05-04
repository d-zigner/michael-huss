import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  CardTitle,
  CardBody,
  CardText,
  CardImg
} from "reactstrap";

class LicenseCard extends Component {
  render() {
    return (
      <Row className="justify-content-center m-3">
        <Col md="8">
          <Card href={this.props.href}>
            <CardImg src={this.props.img} />
            <CardBody>
              <CardTitle style={{ borderBottom: "1px solid grey" }}>
                <p className="lead">{this.props.title}</p>
              </CardTitle>
              <CardText>{this.props.children}</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

class Licenses extends Component {
  render() {
    return (
      <div className="mb-3">
        <LicenseCard title="Font Awesome" href="https://fontawesome.com/">
          Font glyphs use for various interactions and DNA SVG used for
          Reflection headers, and card images in Biology Course work. License
          can be viewed <a href="https://fontawesome.com">here</a>
        </LicenseCard>
        <LicenseCard
          title="React"
          href="https://github.com/facebook/react"
          img=""
        >
          React is covered under the MIT license. <br /> <br />
          <code>
            MIT License Copyright (c) Facebook, Inc. and its affiliates.
            <br />
            <br />
            Permission is hereby granted, free of charge, to any person
            obtaining a copy of this software and associated documentation files
            (the "Software"), to deal in the Software without restriction,
            including without limitation the rights to use, copy, modify, merge,
            publish, distribute, sublicense, and/or sell copies of the Software,
            and to permit persons to whom the Software is furnished to do so,
            subject to the following conditions: The above copyright notice and
            this permission notice shall be included in all copies or
            substantial portions of the Software. <br />
            <br />
            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
            EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
            NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
            BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
            ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
            CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
            SOFTWARE.
          </code>
        </LicenseCard>
      </div>
    );
  }
}

export default Licenses;
