import React from "react";
import "./HomeCard.scss";

const HomeCard = () => {
  return (
    <figure className="card__figure">
      <img
        src="https://cdn.shopify.com/s/files/1/0036/7306/3491/files/womens-top_750x.jpg?v=1609224699"
        alt="Card image"
        className="card__image"
      />
      <figcaption className="card__figcaption">
        <div className="card__content">
          <p className="card__title">women tops</p>
          <p className="card__description">from world's top designer</p>
          <button className="card__button">Shop Now</button>
        </div>
      </figcaption>
    </figure>
  );
};

export default HomeCard;
