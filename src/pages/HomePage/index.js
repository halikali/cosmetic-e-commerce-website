import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import "./HomePage.scss";

const HomePage = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faCoffee} />
      <Row className="mx-0">
        <Button as={Col} variant="primary">
          <Link to="/" className="text-white">
            Anasayfa
          </Link>
        </Button>
        <Button as={Col} variant="secondary" className="mx-2">
          <Link to={"/secondpage"} className="text-white">
            İkinci sayfa
          </Link>
        </Button>
        <Button as={Col} variant="success">
          Button #3
        </Button>
      </Row>
    </div>
  );
};

export default HomePage;
