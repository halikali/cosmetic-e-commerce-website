import React, {Component} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
  faHeart
} from "@fortawesome/free-solid-svg-icons";

import './categoryCard.scss';

export class CategoryCard extends Component {
  render() {
    return (
      <div className='category-card'>
        <img className='category-card__image' src="https://cdn.shopify.com/s/files/1/0036/7306/3491/products/8_d74500ed-dd16-4711-b826-3c25f5651c8a_350x.jpg?v=1616747573" />
        <div className='category-card__icons'>
        <FontAwesomeIcon icon={faHeart} className={"card-icon"} />
        <FontAwesomeIcon icon={faCartShopping} className={"card-icon"} />
        <FontAwesomeIcon icon={faMagnifyingGlass} className={"card-icon"} />
        </div>
        <div className='category-card__figcaption'>
          <div className='category-card__title'>Button Up Top Black</div>
          <div className='category-card__price'>500 $</div>
        </div>
        <ul className='category-card__colors'>
          <li className='category-card__color green'></li>
          <li className='category-card__color pink'></li>  
          <li className='category-card__color gray'></li>  
        </ul>
      </div>
    );
  }
}