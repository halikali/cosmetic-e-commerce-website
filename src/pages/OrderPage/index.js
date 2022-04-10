import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

import "./OrderPage.scss";
import { Link } from "react-router-dom";

const OrderPage = () => {
    return (
      <Container style={{ marginTop: "20px" }}>
         <h3 className="page-title">Your Cart</h3>

         <div className="cart">
            <ul className="cart__header">
                <li className="cart__header-item">#</li>
                <li className="cart__header-item item--product">Product</li>
                <li className="cart__header-item">Price</li>
                <li className="cart__header-item">Quantity</li>
                <li className="cart__header-item">Total</li>
            </ul>
            <ul className="cart__orders">
                <li className="cart__orders-item item--remove"><a href="#">X</a></li>
                <li className="cart__orders-item item--order"><div className="item--order__image"><a href="#">
                <img src="//cdn.shopify.com/s/files/1/0036/7306/3491/products/1_ad3b5994-221c-4300-86d8-9d8cf96459ed_100x.jpg?v=1561438589"></img></a></div>
                <div className="item--order__text"><a href="#">Women Shorts</a><span>Color: Aqua</span></div></li>
                <li className="cart__orders-item">$300</li>
                <li className="cart__orders-item">- 1 +</li>
                <li className="cart__orders-item">$300</li>
            </ul>
            <ul className="cart__orders">
                <li className="cart__orders-item item--remove"><a href="#">X</a></li>
                <li className="cart__orders-item item--order"><div className="item--order__image"><a href="#">
                <img src="//cdn.shopify.com/s/files/1/0036/7306/3491/products/1_ad3b5994-221c-4300-86d8-9d8cf96459ed_100x.jpg?v=1561438589"></img></a></div>
                <div className="item--order__text"><a href="#">Women Shorts</a><span>Color: Aqua</span></div></li>
                <li className="cart__orders-item">$300</li>
                <li className="cart__orders-item">- 1 +</li>
                <li className="cart__orders-item">$300</li>
            </ul>
            <div className="cart__edit">
                <a href="#">Continue Shopping</a>
                <a href="#">Update</a>
            </div>
        </div>    
      </Container>
    );
  };
  
  export default OrderPage;