import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import {
  decreaseProductCount,
  increaseProductCount,
  removeFromCard,
} from "../../store/actions/cardActions";
import { changeTextProtocol } from "../../utils";
import "./orderCard.scss";

const OrderCard = ({ item }) => {
  const dispatch = useDispatch();
  let [count, setCount] = useState(item.productCount ? item.productCount : 1);

  useEffect(() => {
    setCount(item.productCount);
  }, [item.productCount]);

  const removeCardItem = (id) => {
    dispatch(removeFromCard(id));
  };

  const increaseCount = (id) => {
    dispatch(increaseProductCount(id));
  };

  const decreaseCount = (id) => {
    count !== 1 && dispatch(decreaseProductCount(id));
  };

  return (
    <ul className="card__orders">
      <li
        className="card__orders-item item--remove"
        onClick={() => removeCardItem(item.id)}
      >
        <a href="#">X</a>
      </li>
      <li className="card__orders-item item--order">
        <div className="item--order__image">
          <a href="#">
            <img src={changeTextProtocol(item.image_link)}></img>
          </a>
        </div>
        <div className="item--order__text">
          <a href="#"> {item.name} </a>
          <span>Color: Aqua</span>
        </div>
      </li>
      <li className="card__orders-item">${item.price}</li>
      <li className="card__orders-item">
        <p className="card__orders-counter">
          <span onClick={() => decreaseCount(item.id)}>-</span>
          {count}
          <span onClick={() => increaseCount(item.id)}>+</span>
        </p>
      </li>
      <li className="card__orders-item">${item.price * item.productCount}</li>
    </ul>
  );
};

export default OrderCard;
