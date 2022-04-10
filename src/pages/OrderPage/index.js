import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./OrderPage.scss";
import { Link } from "react-router-dom";

const OrderPage = () => {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
            <Col xs={12}>
                <h3 className="page-title">Your Card</h3>
                <div className="card">
                    <ul className="card__header">
                        <li className="card__header-item">#</li>
                        <li className="card__header-item item--product">Product</li>
                        <li className="card__header-item">Price</li>
                        <li className="card__header-item">Quantity</li>
                        <li className="card__header-item">Total</li>
                    </ul>
                    <ul className="card__orders">
                        <li className="card__orders-item item--remove"><a href="#">X</a></li>
                        <li className="card__orders-item item--order"><div className="item--order__image"><a href="#">
                        <img src="//cdn.shopify.com/s/files/1/0036/7306/3491/products/1_ad3b5994-221c-4300-86d8-9d8cf96459ed_100x.jpg?v=1561438589"></img></a></div>
                        <div className="item--order__text"><a href="#">Women Shorts</a><span>Color: Aqua</span></div></li>
                        <li className="card__orders-item">$300</li>
                        <li className="card__orders-item">- 1 +</li>
                        <li className="card__orders-item">$300</li>
                    </ul>
                    <ul className="card__orders">
                        <li className="card__orders-item item--remove"><a href="#">X</a></li>
                        <li className="card__orders-item item--order"><div className="item--order__image"><a href="#">
                        <img src="//cdn.shopify.com/s/files/1/0036/7306/3491/products/1_ad3b5994-221c-4300-86d8-9d8cf96459ed_100x.jpg?v=1561438589"></img></a></div>
                        <div className="item--order__text"><a href="#">Women Shorts</a><span>Color: Aqua</span></div></li>
                        <li className="card__orders-item">$300</li>
                        <li className="card__orders-item">- 1 +</li>
                        <li className="card__orders-item">$300</li>
                    </ul>
                    <div className="card__edit">
                        <a href="#">Continue Shopping</a>
                        <a href="#">Update</a>
                    </div>
                </div>
            </Col>
        </Row>
        <Row>
            <Col xs={12} sm={4}>
                <div className="message">
                    <h6 className="message__title">SPECIAL INSTRUCTIONS FOR SELLER WITH YOUR ORDER</h6>
                    <textarea name="note" id="CardSpecialInstructions" class="message__note"></textarea>
                    <label className="message__gift" for="gift"><input class="message__gift-input" type="checkbox" name="attributes[gift-wrapping]" value="yes"></input><span class="checkbox"> </span>Add a Gift Wrap to your order, For <span class="money">$10.00</span></label>
                    <span className="message__title--gift">Gift Message Note:</span>
                    <textarea name="gift-note" id="GiftNote" class="message__note"></textarea>
                </div>
            </Col>
            <Col xs={12} sm={4}>
                <div className="address">
                    <h6 className="address__title">GET SHIPPING ESTIMATES</h6>
                    <span className="address__title--label">Country</span>
                    <select className="address__select" id="addressCountry" name="address[country]" data-default="United States"><option value="United States" data-provinces="[]">United States</option>
                    <option value="---" data-provinces="[]">---</option>
                    <option value="Turkey" data-provinces="[]">Turkey</option>
                    <option value="United States" data-provinces="[[&quot;Alabama&quot;,&quot;Alabama&quot;],[&quot;Alaska&quot;,&quot;Alaska&quot;],[&quot;American Samoa&quot;,&quot;American Samoa&quot;],[&quot;Arizona&quot;,&quot;Arizona&quot;],[&quot;Arkansas&quot;,&quot;Arkansas&quot;],[&quot;Armed Forces Americas&quot;,&quot;Armed Forces Americas&quot;],[&quot;Armed Forces Europe&quot;,&quot;Armed Forces Europe&quot;],[&quot;Armed Forces Pacific&quot;,&quot;Armed Forces Pacific&quot;],[&quot;California&quot;,&quot;California&quot;],[&quot;Colorado&quot;,&quot;Colorado&quot;],[&quot;Connecticut&quot;,&quot;Connecticut&quot;],[&quot;Delaware&quot;,&quot;Delaware&quot;],[&quot;District of Columbia&quot;,&quot;Washington DC&quot;],[&quot;Federated States of Micronesia&quot;,&quot;Micronesia&quot;],[&quot;Florida&quot;,&quot;Florida&quot;],[&quot;Georgia&quot;,&quot;Georgia&quot;],[&quot;Guam&quot;,&quot;Guam&quot;],[&quot;Hawaii&quot;,&quot;Hawaii&quot;],[&quot;Idaho&quot;,&quot;Idaho&quot;],[&quot;Illinois&quot;,&quot;Illinois&quot;],[&quot;Indiana&quot;,&quot;Indiana&quot;],[&quot;Iowa&quot;,&quot;Iowa&quot;],[&quot;Kansas&quot;,&quot;Kansas&quot;],[&quot;Kentucky&quot;,&quot;Kentucky&quot;],[&quot;Louisiana&quot;,&quot;Louisiana&quot;],[&quot;Maine&quot;,&quot;Maine&quot;],[&quot;Marshall Islands&quot;,&quot;Marshall Islands&quot;],[&quot;Maryland&quot;,&quot;Maryland&quot;],[&quot;Massachusetts&quot;,&quot;Massachusetts&quot;],[&quot;Michigan&quot;,&quot;Michigan&quot;],[&quot;Minnesota&quot;,&quot;Minnesota&quot;],[&quot;Mississippi&quot;,&quot;Mississippi&quot;],[&quot;Missouri&quot;,&quot;Missouri&quot;],[&quot;Montana&quot;,&quot;Montana&quot;],[&quot;Nebraska&quot;,&quot;Nebraska&quot;],[&quot;Nevada&quot;,&quot;Nevada&quot;],[&quot;New Hampshire&quot;,&quot;New Hampshire&quot;],[&quot;New Jersey&quot;,&quot;New Jersey&quot;],[&quot;New Mexico&quot;,&quot;New Mexico&quot;],[&quot;New York&quot;,&quot;New York&quot;],[&quot;North Carolina&quot;,&quot;North Carolina&quot;],[&quot;North Dakota&quot;,&quot;North Dakota&quot;],[&quot;Northern Mariana Islands&quot;,&quot;Northern Mariana Islands&quot;],[&quot;Ohio&quot;,&quot;Ohio&quot;],[&quot;Oklahoma&quot;,&quot;Oklahoma&quot;],[&quot;Oregon&quot;,&quot;Oregon&quot;],[&quot;Palau&quot;,&quot;Palau&quot;],[&quot;Pennsylvania&quot;,&quot;Pennsylvania&quot;],[&quot;Puerto Rico&quot;,&quot;Puerto Rico&quot;],[&quot;Rhode Island&quot;,&quot;Rhode Island&quot;],[&quot;South Carolina&quot;,&quot;South Carolina&quot;],[&quot;South Dakota&quot;,&quot;South Dakota&quot;],[&quot;Tennessee&quot;,&quot;Tennessee&quot;],[&quot;Texas&quot;,&quot;Texas&quot;],[&quot;Utah&quot;,&quot;Utah&quot;],[&quot;Vermont&quot;,&quot;Vermont&quot;],[&quot;Virgin Islands&quot;,&quot;U.S. Virgin Islands&quot;],[&quot;Virginia&quot;,&quot;Virginia&quot;],[&quot;Washington&quot;,&quot;Washington&quot;],[&quot;West Virginia&quot;,&quot;West Virginia&quot;],[&quot;Wisconsin&quot;,&quot;Wisconsin&quot;],[&quot;Wyoming&quot;,&quot;Wyoming&quot;]]">United States</option>
                    </select>
                    <span className="address__title--label">State</span>
                    <select className="address__select" id="addressProvince" name="address[province]" data-default=""><option value="Alabama">Alabama</option><option value="Alaska">Alaska</option><option value="American Samoa">American Samoa</option><option value="Arizona">Arizona</option><option value="Arkansas">Arkansas</option><option value="Armed Forces Americas">Armed Forces Americas</option><option value="Armed Forces Europe">Armed Forces Europe</option><option value="Armed Forces Pacific">Armed Forces Pacific</option><option value="California">California</option><option value="Colorado">Colorado</option><option value="Connecticut">Connecticut</option><option value="Delaware">Delaware</option><option value="District of Columbia">Washington DC</option><option value="Federated States of Micronesia">Micronesia</option><option value="Florida">Florida</option><option value="Georgia">Georgia</option><option value="Guam">Guam</option><option value="Hawaii">Hawaii</option><option value="Idaho">Idaho</option><option value="Illinois">Illinois</option><option value="Indiana">Indiana</option><option value="Iowa">Iowa</option><option value="Kansas">Kansas</option><option value="Kentucky">Kentucky</option><option value="Louisiana">Louisiana</option><option value="Maine">Maine</option><option value="Marshall Islands">Marshall Islands</option><option value="Maryland">Maryland</option><option value="Massachusetts">Massachusetts</option><option value="Michigan">Michigan</option><option value="Minnesota">Minnesota</option><option value="Mississippi">Mississippi</option><option value="Missouri">Missouri</option><option value="Montana">Montana</option><option value="Nebraska">Nebraska</option><option value="Nevada">Nevada</option><option value="New Hampshire">New Hampshire</option><option value="New Jersey">New Jersey</option><option value="New Mexico">New Mexico</option><option value="New York">New York</option><option value="North Carolina">North Carolina</option><option value="North Dakota">North Dakota</option><option value="Northern Mariana Islands">Northern Mariana Islands</option><option value="Ohio">Ohio</option><option value="Oklahoma">Oklahoma</option><option value="Oregon">Oregon</option><option value="Palau">Palau</option><option value="Pennsylvania">Pennsylvania</option><option value="Puerto Rico">Puerto Rico</option><option value="Rhode Island">Rhode Island</option><option value="South Carolina">South Carolina</option><option value="South Dakota">South Dakota</option><option value="Tennessee">Tennessee</option><option value="Texas">Texas</option><option value="Utah">Utah</option><option value="Vermont">Vermont</option><option value="Virgin Islands">U.S. Virgin Islands</option><option value="Virginia">Virginia</option><option value="Washington">Washington</option><option value="West Virginia">West Virginia</option><option value="Wisconsin">Wisconsin</option><option value="Wyoming">Wyoming</option></select>
                    <span className="address__title--label">Postal/Zip Code</span>
                    <textarea name="address-postalcode" id="PostalCode" class="address__postalcode"></textarea>
                    <a href="#" className="address__btn">Calculate Shipping</a>
                </div>
            </Col>
            <Col xs={12} sm={4}>
                <div className="total">
                    <div className="total__head">
                        <h6 className="total__title">Subtotal</h6>
                        <h6 className="total__price">$600.00</h6>
                    </div>
                    <div className="total__info">
                        <span className="total__info--text">You have got <strong className="total__info--shipping">FREE SHIPPING</strong></span>
                        <span className="total__info--text">Shipping & taxes calculated at checkout</span>
                        <label className="total__agreement" for="agreement"><input class="message__agreement-input" type="checkbox" name="attributes[gift-wrapping]" value="yes"></input><span class="checkbox"> </span>I agree with the terms and conditions</label>
                    </div>
                    <a href="#" className="total__btn">Proceed to Checkout</a>
                    <a href="#" className="total__btn btn--gpay">G Pay</a>
                </div>
            </Col>
        </Row>
      </Container>
    );
  };
  
  export default OrderPage;