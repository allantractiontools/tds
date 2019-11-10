import React from "react";
import Col from "./Col";
import Container from "./Container";
import Row from "./Row";
import "./Grid.stories.css";

export default {
  title: "UI/Grid"
};

export function demo() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="sample">Col 1</div>
        </Col>
        <Col>
          <div className="sample">Col 2</div>
        </Col>
      </Row>
    </Container>
  );
}
