import React from "react";
import { Button, Carousel } from "react-bootstrap";

import "./Slider.scss";

const Slider = () => {
  return (
    <Carousel fade className="carousel">
      <Carousel.Item className="carousel__item">
        <picture>
          <source
            media="(min-width:768px)"
            srcset="https://cdn.shopify.com/s/files/1/0036/7306/3491/files/dome1-bnr2.jpg?v=1609224938"
          />
          <img
            className="d-block w-100"
            src="https://cdn.shopify.com/s/files/1/0036/7306/3491/files/default-mb-bnr2.jpg?v=1609224882"
            alt="First slide"
          />
        </picture>

        <Carousel.Caption className="carousel__caption carousel__caption--right ">
          <b className="carousel__caption--title">
            Speed up your store to convert more Sales
          </b>
          <span className="carousel__caption--text">
            The Powerful Theme You can Trust
          </span>
          <Button variant="dark">Shop Now</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel__item">
        <picture>
          <source
            media="(min-width:768px)"
            srcset="https://cdn.shopify.com/s/files/1/0036/7306/3491/files/dome1-bnr1.jpg?v=1609224938"
          />
          <img
            className="d-block w-100"
            src="https://cdn.shopify.com/s/files/1/0036/7306/3491/files/default-mb-bnr1.jpg?v=1609224882"
            alt="Second slide"
          />
        </picture>
        <Carousel.Caption className="carousel__caption carousel__caption--left ">
          <b className="carousel__caption--title">
            Speed up your store to convert more Sales
          </b>
          <span className="carousel__caption--text">
            The Powerful Theme You can Trust
          </span>
          <Button variant="dark">Shop Now</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
