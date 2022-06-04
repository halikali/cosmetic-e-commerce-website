import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

import { useDispatch } from "react-redux";
import { addToCard } from "../../store/actions/cardActions";
import { changeTextProtocol } from "../../utils";
import "./categoryCard.scss";

export const CategoryCard = ({ product }) => {
  const { name, image_link, price, product_colors } = product;
  const dispatch = useDispatch();

  const onClickHandler = (e) => {
    e.preventDefault();
    dispatch(addToCard({ ...product, productCount: 1 }));
  };

  return (
    <div className="category-card">
      <img
        className="category-card__image"
        src={image_link && changeTextProtocol(image_link)}
      />
      <div className="category-card__icons">
        <FontAwesomeIcon icon={faHeart} className={"card-icon"} />
        <FontAwesomeIcon
          icon={faCartShopping}
          className={"card-icon"}
          onClick={(e) => onClickHandler(e)}
        />
        <FontAwesomeIcon icon={faMagnifyingGlass} className={"card-icon"} />
      </div>
      <div className="category-card__figcaption">
        <div className="category-card__title">{name && name}</div>
        <div className="category-card__price">{price && price}$</div>
      </div>
      <ul className="category-card__colors">
        {product_colors &&
          product_colors
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
