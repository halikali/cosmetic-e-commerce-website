import React from "react";
import { Col, Row } from "react-bootstrap";
import HomeCard from "../../components/HomeCard";

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

      <Row>
        <Col>
          <div className="home-card__wrapper">
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default HomePage;
