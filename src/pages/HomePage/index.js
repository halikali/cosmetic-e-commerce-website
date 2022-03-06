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
            <div class="div1">
              <HomeCard />
            </div>
            <div class="div2">
              <HomeCard />
            </div>
            <div class="div3">
              <HomeCard />
            </div>
            <div class="div4">
              <HomeCard />
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default HomePage;
