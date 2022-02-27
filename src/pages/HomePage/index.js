import React from "react";
import { Col, Row } from "react-bootstrap";

import Slider from "../../components/Slider";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <>
      <Row>
        <Col>
          <Slider />
        </Col>
      </Row>
    </>
  );
};

export default HomePage;
