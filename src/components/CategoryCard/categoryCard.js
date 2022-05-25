import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

import "./categoryCard.scss";

export const CategoryCard = ({ productName, coverImage, price, colors }) => {
  return (
    <div className="category-card">
      <img className="category-card__image" src={coverImage && coverImage} />
      <div className="category-card__icons">
        <FontAwesomeIcon icon={faHeart} className={"card-icon"} />
        <FontAwesomeIcon icon={faCartShopping} className={"card-icon"} />
        <FontAwesomeIcon icon={faMagnifyingGlass} className={"card-icon"} />
      </div>
      <div className="category-card__figcaption">
        <div className="category-card__title">{productName && productName}</div>
        <div className="category-card__price">{price && price} $</div>
      </div>
      <ul className="category-card__colors">
        {colors &&
          colors
            .slice(0, 6)
            .map((item) => (
              <li
                className="category-card__color "
                key={Math.random()}
                style={{ backgroundColor: item.hex_value }}
              ></li>
            ))}
      </ul>
    </div>
  );
};
