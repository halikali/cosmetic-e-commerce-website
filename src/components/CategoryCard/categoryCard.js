import React, {Component} from 'react';

import './categoryCard.scss';

export class CategoryCard extends Component {
  render() {
    return (
      <div className='category-card'>
        <img className='category-card__image' src="https://cdn.shopify.com/s/files/1/0036/7306/3491/products/8_d74500ed-dd16-4711-b826-3c25f5651c8a_350x.jpg?v=1616747573" />
        <div className='category-card__figcaption'>
          <div className='category-card__title'>Button Up Top Black</div>
          <div className='category-card__price'>500 $</div>
        </div>
      </div>
    );
  }
}