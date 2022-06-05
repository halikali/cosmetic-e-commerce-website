import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { scrollToTop } from "../../utils";
import OrderCard from "../../components/orderCard";
import "./OrderPage.scss";

const OrderPage = () => {
  const { products } = useSelector((state) => state.card);

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <Container style={{ marginTop: "20px" }}>
      <Row>
        <Col xs={12}>
          <h3 className="page-title">Your Card </h3>
          <div className="card">
            <ul className="card__header">
              <li className="card__header-item">#</li>
              <li className="card__header-item item--product">Product</li>
              <li className="card__header-item">Price</li>
              <li className="card__header-item">Quantity</li>
              <li className="card__header-item">Total</li>
            </ul>
            {products &&
              products.map((item) => <OrderCard item={item} key={item.id} />)}
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
            <h6 className="message__title">
              SPECIAL INSTRUCTIONS FOR SELLER WITH YOUR ORDER
            </h6>
            <textarea
              name="note"
              id="CardSpecialInstructions"
              class="message__note"
            ></textarea>
            <label className="message__gift" for="gift">
              <input
                class="message__gift-input"
                type="checkbox"
                name="attributes[gift-wrapping]"
                value="yes"
              ></input>
              <span class="checkbox"> </span>Add a Gift Wrap to your order, For{" "}
              <span class="money">$10.00</span>
            </label>
            <span className="message__title--gift">Gift Message Note:</span>
            <textarea
              name="gift-note"
              id="GiftNote"
              class="message__note"
            ></textarea>
          </div>
        </Col>
        <Col xs={12} sm={4}>
          <div className="address">
            <h6 className="address__title">GET SHIPPING ESTIMATES</h6>
            <span className="address__title--label">Country</span>
            <select
              className="address__select"
              id="addressCountry"
              name="address[country]"
              data-default="United States"
            >
              <option value="United States" data-provinces="[]">
                United States
              </option>
              <option value="---" data-provinces="[]">
                ---
              </option>
              <option value="Turkey" data-provinces="[]">
                Turkey
              </option>
              <option
                value="United States"
                data-provinces='[["Alabama","Alabama"],["Alaska","Alaska"],["American Samoa","American Samoa"],["Arizona","Arizona"],["Arkansas","Arkansas"],["Armed Forces Americas","Armed Forces Americas"],["Armed Forces Europe","Armed Forces Europe"],["Armed Forces Pacific","Armed Forces Pacific"],["California","California"],["Colorado","Colorado"],["Connecticut","Connecticut"],["Delaware","Delaware"],["District of Columbia","Washington DC"],["Federated States of Micronesia","Micronesia"],["Florida","Florida"],["Georgia","Georgia"],["Guam","Guam"],["Hawaii","Hawaii"],["Idaho","Idaho"],["Illinois","Illinois"],["Indiana","Indiana"],["Iowa","Iowa"],["Kansas","Kansas"],["Kentucky","Kentucky"],["Louisiana","Louisiana"],["Maine","Maine"],["Marshall Islands","Marshall Islands"],["Maryland","Maryland"],["Massachusetts","Massachusetts"],["Michigan","Michigan"],["Minnesota","Minnesota"],["Mississippi","Mississippi"],["Missouri","Missouri"],["Montana","Montana"],["Nebraska","Nebraska"],["Nevada","Nevada"],["New Hampshire","New Hampshire"],["New Jersey","New Jersey"],["New Mexico","New Mexico"],["New York","New York"],["North Carolina","North Carolina"],["North Dakota","North Dakota"],["Northern Mariana Islands","Northern Mariana Islands"],["Ohio","Ohio"],["Oklahoma","Oklahoma"],["Oregon","Oregon"],["Palau","Palau"],["Pennsylvania","Pennsylvania"],["Puerto Rico","Puerto Rico"],["Rhode Island","Rhode Island"],["South Carolina","South Carolina"],["South Dakota","South Dakota"],["Tennessee","Tennessee"],["Texas","Texas"],["Utah","Utah"],["Vermont","Vermont"],["Virgin Islands","U.S. Virgin Islands"],["Virginia","Virginia"],["Washington","Washington"],["West Virginia","West Virginia"],["Wisconsin","Wisconsin"],["Wyoming","Wyoming"]]'
              >
                United States
              </option>
            </select>
            <span className="address__title--label">State</span>
            <select
              className="address__select"
              id="addressProvince"
              name="address[province]"
              data-default=""
            >
              <option value="Alabama">Alabama</option>
              <option value="Alaska">Alaska</option>
              <option value="American Samoa">American Samoa</option>
              <option value="Arizona">Arizona</option>
              <option value="Arkansas">Arkansas</option>
              <option value="Armed Forces Americas">
                Armed Forces Americas
              </option>
              <option value="Armed Forces Europe">Armed Forces Europe</option>
              <option value="Armed Forces Pacific">Armed Forces Pacific</option>
              <option value="California">California</option>
              <option value="Colorado">Colorado</option>
              <option value="Connecticut">Connecticut</option>
              <option value="Delaware">Delaware</option>
              <option value="District of Columbia">Washington DC</option>
              <option value="Federated States of Micronesia">Micronesia</option>
              <option value="Florida">Florida</option>
              <option value="Georgia">Georgia</option>
              <option value="Guam">Guam</option>
              <option value="Hawaii">Hawaii</option>
              <option value="Idaho">Idaho</option>
              <option value="Illinois">Illinois</option>
              <option value="Indiana">Indiana</option>
              <option value="Iowa">Iowa</option>
              <option value="Kansas">Kansas</option>
              <option value="Kentucky">Kentucky</option>
              <option value="Louisiana">Louisiana</option>
              <option value="Maine">Maine</option>
              <option value="Marshall Islands">Marshall Islands</option>
              <option value="Maryland">Maryland</option>
              <option value="Massachusetts">Massachusetts</option>
              <option value="Michigan">Michigan</option>
              <option value="Minnesota">Minnesota</option>
              <option value="Mississippi">Mississippi</option>
              <option value="Missouri">Missouri</option>
              <option value="Montana">Montana</option>
              <option value="Nebraska">Nebraska</option>
              <option value="Nevada">Nevada</option>
              <option value="New Hampshire">New Hampshire</option>
              <option value="New Jersey">New Jersey</option>
              <option value="New Mexico">New Mexico</option>
              <option value="New York">New York</option>
              <option value="North Carolina">North Carolina</option>
              <option value="North Dakota">North Dakota</option>
              <option value="Northern Mariana Islands">
                Northern Mariana Islands
              </option>
              <option value="Ohio">Ohio</option>
              <option value="Oklahoma">Oklahoma</option>
              <option value="Oregon">Oregon</option>
              <option value="Palau">Palau</option>
              <option value="Pennsylvania">Pennsylvania</option>
              <option value="Puerto Rico">Puerto Rico</option>
              <option value="Rhode Island">Rhode Island</option>
              <option value="South Carolina">South Carolina</option>
              <option value="South Dakota">South Dakota</option>
              <option value="Tennessee">Tennessee</option>
              <option value="Texas">Texas</option>
              <option value="Utah">Utah</option>
              <option value="Vermont">Vermont</option>
              <option value="Virgin Islands">U.S. Virgin Islands</option>
              <option value="Virginia">Virginia</option>
              <option value="Washington">Washington</option>
              <option value="West Virginia">West Virginia</option>
              <option value="Wisconsin">Wisconsin</option>
              <option value="Wyoming">Wyoming</option>
            </select>
            <span className="address__title--label">Postal/Zip Code</span>
            <textarea
              name="address-postalcode"
              id="PostalCode"
              class="address__postalcode"
            ></textarea>
            <a href="#" className="address__btn">
              Calculate Shipping
            </a>
          </div>
        </Col>
        <Col xs={12} sm={4}>
          <div className="total">
            <div className="total__head">
              <h6 className="total__title">Subtotal</h6>
              <h6 className="total__price">$300 </h6>
            </div>
            <div className="total__info">
              <span className="total__info--text">
                You have got{" "}
                <strong className="total__info--shipping">FREE SHIPPING</strong>
              </span>
              <span className="total__info--text">
                Shipping &and; taxes calculated at checkout
              </span>
              <label className="total__agreement" for="agreement">
                <input
                  class="message__agreement-input"
                  type="checkbox"
                  name="attributes[gift-wrapping]"
                  value="yes"
                ></input>
                <span class="checkbox"> </span>I agree with the terms and
                conditions
              </label>
            </div>
            <a href="#" className="total__btn">
              Proceed to Checkout
            </a>
            <a href="#" className="total__btn btn--gpay">
              G Pay
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderPage;
